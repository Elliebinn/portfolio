"use client";

import React from "react";
import { Plus } from "lucide-react";

export function TextColor() {
  return (
    <div className="mb-10 mt-4 md:mt-6">
      <div className="px-2">
        <div className="relative p-8 w-full h-full border border-[var(--ed-outline-variant)] [mask-image:radial-gradient(200rem_24rem_at_center,white,transparent)]">
          <Plus className="absolute -left-4 -top-4 h-8 w-8" style={{ color: 'var(--ed-primary)' }} />
          <Plus className="absolute -bottom-4 -left-4 h-8 w-8" style={{ color: 'var(--ed-primary)' }} />
          <Plus className="absolute -right-4 -top-4 h-8 w-8" style={{ color: 'var(--ed-primary)' }} />
          <Plus className="absolute -bottom-4 -right-4 h-8 w-8" style={{ color: 'var(--ed-primary)' }} />

          <h1
            className="tracking-tighter flex select-none px-3 py-2 flex-col text-center text-7xl font-extrabold leading-none sm:text-8xl md:flex-col lg:flex-row justify-center"
            style={{ fontFamily: 'var(--ed-font-display)' }}
          >
            <span
              data-content="plan."
              className="tc-bg-1 relative before:absolute before:bottom-4 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
            >
              <span className="tc-fg-1 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
                plan.
              </span>
            </span>
            <span
              data-content="build."
              className="tc-bg-2 relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
            >
              <span className="tc-fg-2 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
                build.
              </span>
            </span>
            <span
              data-content="prove."
              className="tc-bg-3 relative before:absolute before:bottom-1 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
            >
              <span className="tc-fg-3 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
                prove.
              </span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
