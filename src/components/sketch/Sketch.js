import React, { useEffect, useRef } from "react";
import rough from "roughjs";
import "./Sketch.css";

// Wraps an inline SVG illustration and redraws it in a hand-drawn,
// pencil-sketch style using rough.js. The original SVG stays in the DOM
// (hidden) so React can keep managing it; the sketched copy is drawn
// next to it and rebuilt whenever `redrawKey` (e.g. the theme) changes.

const SHAPES = "path, rect, circle, ellipse, polygon, polyline, line";

function hasSkippedAncestor(el, root) {
  for (let n = el.parentElement; n && n !== root; n = n.parentElement) {
    const tag = n.tagName.toLowerCase();
    if (
      [
        "defs",
        "clippath",
        "mask",
        "pattern",
        "lineargradient",
        "radialgradient",
        "symbol",
      ].includes(tag)
    )
      return true;
  }
  return false;
}

function usableColor(value) {
  if (!value || value === "none") return null;
  if (value.startsWith("url(")) return "#8a8a8a";
  return value;
}

// Parse any CSS color the browser gives us ("rgb(...)", "#abc", names) into [r, g, b].
function toRgb(color) {
  const m = /rgba?\(([^)]+)\)/.exec(color);
  if (m)
    return m[1]
      .split(",")
      .slice(0, 3)
      .map((v) => parseFloat(v));
  const ctx = document.createElement("canvas").getContext("2d");
  ctx.fillStyle = color;
  const hex = ctx.fillStyle; // normalised to #rrggbb
  if (hex[0] !== "#") return toRgb(hex);
  return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
}

// Opaque base tone: the shape's color softened toward the page background,
// like colored pencil on paper. Opaque so front layers still hide back layers.
function softTone(fill, paper, amount) {
  const f = toRgb(fill);
  const p = toRgb(paper);
  const mix = f.map((c, i) => Math.round(c * (1 - amount) + p[i] * amount));
  return `rgb(${mix.join(",")})`;
}

function sketchSvg(source, target, options) {
  const paper =
    window.getComputedStyle(document.body).backgroundColor || "#ffffff";
  const clone = source.cloneNode(true);
  clone.removeAttribute("id");
  clone.style.visibility = "visible";
  clone.classList.add("sketch-svg");

  const vb = source.viewBox && source.viewBox.baseVal;
  const rendered = source.getBoundingClientRect().width || 1;
  const unit = vb && vb.width ? vb.width / rendered : 1; // user units per CSS px

  const rc = rough.svg(clone);
  const originals = source.querySelectorAll(SHAPES);
  const copies = clone.querySelectorAll(SHAPES);

  originals.forEach((orig, i) => {
    const copy = copies[i];
    if (!copy || hasSkippedAncestor(orig, source)) return;

    const cs = window.getComputedStyle(orig);
    if (cs.display === "none") return;
    const fill = usableColor(cs.fill);
    const stroke = usableColor(cs.stroke);
    if (!fill && !stroke) return;

    const opts = {
      seed: i + 1,
      roughness: options.roughness,
      bowing: 1,
      stroke: stroke || fill,
      strokeWidth: (stroke ? parseFloat(cs.strokeWidth) || 1 : 0.9) * unit,
      fill: fill || undefined,
      fillStyle: "hachure",
      hachureAngle: -41 + (i % 3) * 8,
      hachureGap: options.gap * unit,
      fillWeight: 0.7 * unit,
    };

    let drawn;
    try {
      const tag = orig.tagName.toLowerCase();
      if (tag === "path") drawn = rc.path(orig.getAttribute("d") || "", opts);
      else if (tag === "rect") {
        const w = orig.width.baseVal.value;
        const h = orig.height.baseVal.value;
        if (!w || !h) return;
        drawn = rc.rectangle(
          orig.x.baseVal.value,
          orig.y.baseVal.value,
          w,
          h,
          opts
        );
      } else if (tag === "circle")
        drawn = rc.circle(
          orig.cx.baseVal.value,
          orig.cy.baseVal.value,
          orig.r.baseVal.value * 2,
          opts
        );
      else if (tag === "ellipse")
        drawn = rc.ellipse(
          orig.cx.baseVal.value,
          orig.cy.baseVal.value,
          orig.rx.baseVal.value * 2,
          orig.ry.baseVal.value * 2,
          opts
        );
      else if (tag === "line")
        drawn = rc.line(
          orig.x1.baseVal.value,
          orig.y1.baseVal.value,
          orig.x2.baseVal.value,
          orig.y2.baseVal.value,
          opts
        );
      else {
        const pts = Array.from(orig.points || []).map((p) => [p.x, p.y]);
        if (pts.length < 2) return;
        drawn =
          tag === "polygon" ? rc.polygon(pts, opts) : rc.linearPath(pts, opts);
      }
    } catch (e) {
      return; // leave the original shape if rough.js can't parse it
    }

    ["transform", "opacity", "clip-path", "mask"].forEach((attr) => {
      const v = orig.getAttribute(attr);
      if (v) drawn.setAttribute(attr, v);
    });
    const op = parseFloat(cs.opacity) * parseFloat(cs.fillOpacity || 1);
    if (op < 1) drawn.setAttribute("opacity", String(op));
    if (fill) {
      // keep a soft wash of the original color under the pencil strokes
      copy.setAttribute("fill", softTone(fill, paper, options.wash));
      copy.setAttribute("stroke", "none");
      copy.removeAttribute("style");
      if (op < 1) copy.setAttribute("opacity", String(op));
      copy.after(drawn);
    } else {
      copy.replaceWith(drawn);
    }
  });

  target.innerHTML = "";
  target.appendChild(clone);
}

export default function Sketch({
  children,
  redrawKey,
  roughness = 1.3,
  gap = 4.5,
  wash = 0.35,
  className = "",
}) {
  const sourceRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    let frame;
    const draw = () => {
      const svg = sourceRef.current && sourceRef.current.querySelector("svg");
      if (svg && targetRef.current)
        sketchSvg(svg, targetRef.current, { roughness, gap, wash });
    };
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [redrawKey, roughness, gap, wash]);

  return (
    <div className={`sketch ${className}`}>
      <div className="sketch-source" ref={sourceRef} aria-hidden="true">
        {children}
      </div>
      <div className="sketch-target" ref={targetRef} />
    </div>
  );
}
