"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [isExpanded, setIsExpanded] = useState(false);

  // Tampilkan hanya 3 project jika belum di-expand
  const visibleProjects = isExpanded ? projectsData : projectsData.slice(0, 3);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {visibleProjects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>

      {projectsData.length > 3 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 text-sm font-medium bg-gray-200 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20 rounded-md transition"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}
