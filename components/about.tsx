"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi! I'm Dimas Erlangga Putera, a <span className="font-medium">Software Engineer</span> with over 10 years of experience building digital solutions across various industries.
        My journey in tech started with <span className="italic">curiosity</span>, and it turned into a passion for solving real-world problems through <span className="italic">clean, scalable,</span> and <span className="italic">efficient code</span>. I’ve worked on everything from internal enterprise systems to public-facing web apps, collaborating with cross-functional teams, mentoring junior devs, and constantly learning along the way.
        I specialize in <span className="font-medium">Web & API development (Go, Node.js, Express, Next.js).</span>
      </p>

      <p>
        Outside of code, I love sharing useful knowledge through short-form content—sometimes tech tips, sometimes fun facts, and even bits about health and everyday life.
        Let’s connect whether it's for collaboration, building great products, or just a good conversation over coffee (virtual or not ☕).
        {/* <span className="italic">...</span>
        <span className="font-medium">...</span> */}
      </p>
    </motion.section>
  );
}
