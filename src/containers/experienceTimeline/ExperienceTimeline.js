import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-reveal";
import "./ExperienceTimeline.css";

function ProjectItem({ project, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`xp-project ${open ? "is-open" : ""}`}>
      <span className="xp-project-dot" aria-hidden="true" />
      <button
        type="button"
        className="xp-project-head"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="xp-project-name">{project.name}</span>
        <span className="xp-project-period">{project.period}</span>
        <span className="xp-chevron" aria-hidden="true">
          ▾
        </span>
      </button>
      <div className="xp-stack">
        {project.stack.map((tech) => (
          <span className="xp-tag" key={tech}>
            {tech}
          </span>
        ))}
      </div>
      {open && (
        <ul className="xp-highlights">
          {project.highlights.map((h) => (
            <li key={h.title}>
              <strong>{h.title}:</strong> {h.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TimelineItem({ experience }) {
  const isCurrent = /present/i.test(experience.duration || "");
  return (
    <div className="xp-item">
      <div className={`xp-node ${isCurrent ? "is-current" : ""}`}>
        <img
          src={require(`../../assests/images/${experience.logo_path}`)}
          alt={experience.company}
        />
      </div>
      <Fade bottom duration={900} distance="30px">
        <article className="xp-card">
          <header className="xp-card-head">
            <div>
              <h3 className="xp-role">{experience.title}</h3>
              <a
                className="xp-company"
                href={experience.company_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.company}
              </a>
            </div>
            <div className="xp-meta">
              <span className={`xp-duration ${isCurrent ? "is-current" : ""}`}>
                {experience.duration}
              </span>
              <span className="xp-location">{experience.location}</span>
            </div>
          </header>

          <p className="xp-description">{experience.description}</p>

          {experience.awards && (
            <div className="xp-awards">
              {experience.awards.map((a) => (
                <span className="xp-award" key={a.name}>
                  <span aria-hidden="true">🏆</span> {a.name}{" "}
                  <span className="xp-award-year">{a.year}</span>
                </span>
              ))}
            </div>
          )}

          {experience.projects && (
            <div className="xp-projects">
              <h4 className="xp-projects-title">
                Projects ({experience.projects.length})
              </h4>
              {experience.projects.map((project, i) => (
                <ProjectItem
                  key={project.name}
                  project={project}
                  defaultOpen={i === 0}
                />
              ))}
            </div>
          )}
        </article>
      </Fade>
    </div>
  );
}

export default function ExperienceTimeline({ sections, theme }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const reached = window.innerHeight * 0.6 - rect.top;
      setProgress(Math.min(1, Math.max(0, reached / rect.height)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const vars = {
    "--xp-accent": theme.accentColor,
    "--xp-text": theme.text,
    "--xp-muted": theme.secondaryText,
    "--xp-card": theme.name === "dark" ? "#252527" : "#ffffff",
    "--xp-soft": theme.name === "dark" ? "#2f2f33" : "#eef2f9",
    "--xp-border": theme.name === "dark" ? "#38383d" : "#dce4f2",
    "--xp-body": theme.body,
  };

  return (
    <section className="xp-timeline" ref={ref} style={vars}>
      <div className="xp-line" aria-hidden="true">
        <div
          className="xp-line-fill"
          style={{ transform: `scaleY(${progress})` }}
        />
      </div>
      {sections.map((section) => (
        <div className="xp-section" key={section.title}>
          <div className="xp-section-label">
            <span>{section.title}</span>
          </div>
          {section.experiences.map((experience) => (
            <TimelineItem
              key={experience.company + experience.title}
              experience={experience}
            />
          ))}
        </div>
      ))}
    </section>
  );
}
