"use client";

import { useState } from "react";
import { Code, Eye } from "lucide-react";
import { CodeBlock } from "./CodeBlock";

interface EffectCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code: string;
  filename?: string;
  demoBg?: string;
}

export function EffectCard({
  title,
  description,
  children,
  code,
  filename,
  demoBg = "bg-muted/30",
}: EffectCardProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Card Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border">
        <div>
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          {description && (
            <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
          )}
        </div>
        <div className="flex gap-1 bg-muted rounded-lg p-0.5">
          <button
            onClick={() => setShowCode(false)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              !showCode
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Eye className="h-3.5 w-3.5" />
            Preview
          </button>
          <button
            onClick={() => setShowCode(true)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              showCode
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Code className="h-3.5 w-3.5" />
            Code
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="min-h-[200px]">
        {showCode ? (
          <div className="p-4">
            <CodeBlock code={code} filename={filename || "styles.css"} />
          </div>
        ) : (
          <div
            className={`flex items-center justify-center p-8 min-h-[200px] ${demoBg}`}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
