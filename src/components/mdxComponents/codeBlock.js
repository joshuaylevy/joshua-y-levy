import React from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiR,
  SiRust,
  SiGo,
  SiSwift,
  SiKotlin,
  SiCplusplus,
  SiC,
  SiRuby,
  SiPhp,
  SiCsharp,
  SiHtml5,
  SiCss3,
  SiJson,
  SiMarkdown,
  SiShell,
  SiYaml,
  SiDocker,
  SiSqlite,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";

/** Maps language identifier (from className) to display label and icon */
const LANGUAGE_CONFIG = {
  python: { label: "Python", Icon: SiPython },
  py: { label: "Python", Icon: SiPython },
  javascript: { label: "JavaScript", Icon: SiJavascript },
  js: { label: "JavaScript", Icon: SiJavascript },
  typescript: { label: "TypeScript", Icon: SiTypescript },
  ts: { label: "TypeScript", Icon: SiTypescript },
  r: { label: "R", Icon: SiR },
  rust: { label: "Rust", Icon: SiRust },
  go: { label: "Go", Icon: SiGo },
  golang: { label: "Go", Icon: SiGo },
  swift: { label: "Swift", Icon: SiSwift },
  kotlin: { label: "Kotlin", Icon: SiKotlin },
  cpp: { label: "C++", Icon: SiCplusplus },
  "c++": { label: "C++", Icon: SiCplusplus },
  c: { label: "C", Icon: SiC },
  ruby: { label: "Ruby", Icon: SiRuby },
  rb: { label: "Ruby", Icon: SiRuby },
  php: { label: "PHP", Icon: SiPhp },
  java: { label: "Java", Icon: FaJava },
  csharp: { label: "C#", Icon: SiCsharp },
  "c#": { label: "C#", Icon: SiCsharp },
  html: { label: "HTML", Icon: SiHtml5 },
  css: { label: "CSS", Icon: SiCss3 },
  json: { label: "JSON", Icon: SiJson },
  markdown: { label: "Markdown", Icon: SiMarkdown },
  md: { label: "Markdown", Icon: SiMarkdown },
  bash: { label: "Bash", Icon: SiShell },
  sh: { label: "Shell", Icon: SiShell },
  shell: { label: "Shell", Icon: SiShell },
  zsh: { label: "Shell", Icon: SiShell },
  yaml: { label: "YAML", Icon: SiYaml },
  yml: { label: "YAML", Icon: SiYaml },
  dockerfile: { label: "Dockerfile", Icon: SiDocker },
  docker: { label: "Dockerfile", Icon: SiDocker },
  sql: { label: "SQL", Icon: SiSqlite },
  mysql: { label: "MySQL", Icon: SiMysql },
  sqlite: { label: "SQLite", Icon: SiSqlite },
  plaintext: { label: "Plain Text", Icon: HiOutlineCode },
  text: { label: "Plain Text", Icon: HiOutlineCode },
  math: { label: "Math", Icon: HiOutlineCode },
};

const DEFAULT_CONFIG = { label: "Code", Icon: HiOutlineCode };

function getLanguageConfig(language) {
  const normalized = (language || "plaintext").toLowerCase().trim();
  return LANGUAGE_CONFIG[normalized] || { ...DEFAULT_CONFIG, label: normalized };
}

/**
 * Extracts language from code element's className (e.g. "language-python hljs" -> "python").
 * Also checks for optional title in data attributes if a remark plugin provides them.
 */
function extractCodeBlockInfo(children) {
  let language = "plaintext";
  let customTitle = null;

  const arr = React.Children.toArray(children);
  const codeEl = arr.find(
    (child) =>
      React.isValidElement(child) &&
      (child.type === "code" || /language-|hljs/.test(child.props?.className || ""))
  );

  if (codeEl?.props?.className) {
    const match = String(codeEl.props.className).match(/language-(\w+)/);
    if (match) language = match[1];
    customTitle = codeEl.props["data-title"] ?? codeEl.props["data-filename"] ?? null;
  }

  return { language, customTitle };
}

export function CodeBlock({ children, ...props }) {
  const { language, customTitle } = extractCodeBlockInfo(children);
  const { label, Icon } = getLanguageConfig(language);

  const headerLabel = customTitle || label;

  return (
    <div className="my-4 rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-200 text-sm text-gray-600">
        <Icon className="flex-shrink-0 w-4 h-4 text-gray-500" aria-hidden />
        <span className="font-medium">{headerLabel}</span>
      </div>
      <pre className="my-0 py-3 px-4 w-full text-sm overflow-auto rounded-b-lg bg-[#282c34]" {...props}>
        {children}
      </pre>
    </div>
  );
}
