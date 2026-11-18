import React from "react";
// Illustrations from unDraw (https://undraw.co), free to use.
// Their accent parts use `currentColor`, so they follow the theme's accent color.
import { ReactComponent as TypingCode } from "../../assests/illustrations/typing-code.svg";
import { ReactComponent as ProudCoder } from "../../assests/illustrations/proud-coder.svg";
import { ReactComponent as OrganizingProjects } from "../../assests/illustrations/organizing-projects.svg";
import { ReactComponent as MyResume } from "../../assests/illustrations/my-resume.svg";
import { ReactComponent as PersonalWebsite } from "../../assests/illustrations/personal-website.svg";
import { ReactComponent as SecureServer } from "../../assests/illustrations/secure-server.svg";

const illustrations = {
  "typing-code": TypingCode,
  "proud-coder": ProudCoder,
  "organizing-projects": OrganizingProjects,
  "my-resume": MyResume,
  "personal-website": PersonalWebsite,
  "secure-server": SecureServer,
};

export default function Illustration({ name, theme, maxHeight }) {
  const Svg = illustrations[name];
  if (!Svg) return null;
  return (
    <Svg
      aria-hidden="true"
      style={{
        color: theme.accentColor,
        width: "100%",
        height: "auto",
        maxHeight: maxHeight || 420,
      }}
    />
  );
}
