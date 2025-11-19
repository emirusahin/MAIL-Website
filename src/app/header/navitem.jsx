'use client';

import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navitem({ label, id, color = "black", link }) {
  const router = useRouter();
  const pathname = usePathname();

  // Identify special tabs
  const isProjects = id === "projects";
  const isTeam = id === "team";
  const isPartners = id === "partners";

  /**
   * Determine if this nav item should appear "active".
   * The highlight state depends on the current URL path.
   */
  const isActive =
    (isProjects && pathname.startsWith("/projects")) ||
    (isTeam && pathname.startsWith("/team")) ||
    (!isProjects && !isTeam && !isPartners && pathname === "/");

  /**
   * Handles click behavior for each nav item.
   */
  const handleClick = () => {
    // If this nav item has a link (Contact tab), open the provided link directly.
    if (link) {
      window.location.href = link;
      return;
    }

    // === PROJECTS TAB ===
    if (isProjects) {
      router.push("/projects");
      return;
    }

    // === TEAM TAB ===
    if (isTeam) {
      router.push("/team");
      return;
    }

    // === PARTNERS TAB (IMPORTANT FIX) ===
    // - On homepage: scroll to the section with id="partners"
    // - On any other page: navigate to "/#partners"
    if (isPartners) {
      if (pathname === "/") {
        const el = document.getElementById("partners");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          router.push("/#partners");
        }
      } else {
        router.push("/#partners");
      }
      return;
    }

    // === ABOUT TAB ===
    // id="#" → About section on homepage
    if (id === "#" || id === "about") {
      if (pathname === "/") {
        // Already on homepage → just scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Not on homepage → navigate back to homepage
        router.push("/");
      }
      return;
    }

    // Default fallback — go to homepage
    router.push("/");
  };

  return (
    <li className="relative">
      {/* The clickable button for each nav item */}
      <motion.button
        onClick={handleClick}
        className={`text-xl text-${color} px-4 lg:px-6 cursor-pointer relative z-10`}
        whileHover={{ scale: 1.05, color: "#ed1b2f" }} // McGill red hover color
        transition={{ duration: 0.2 }}
      >
        {/* The label text */}
        <span className="relative z-10">{label}</span>

        {/* Green underline (active or on hover) */}
        <motion.span
          className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 origin-left"
          initial={{ scaleX: isActive ? 1 : 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Green rounded background behind active/hovered item */}
        <motion.span
          className="absolute inset-0 -z-10 bg-emerald-500/20 rounded-full"
          initial={{
            scale: isActive ? 1.5 : 0,
            opacity: isActive ? 0.3 : 0,
          }}
          animate={{
            scale: isActive ? 1.5 : 0,
            opacity: isActive ? 0.3 : 0,
          }}
          whileHover={{ scale: 2.5, opacity: 0.5 }}
          transition={{ duration: 0.4 }}
        />
      </motion.button>
    </li>
  );
}
