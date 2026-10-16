/**
 * Garceaux — interactions de base
 * - Menu mobile (ouvrir / fermer / Escape)
 * - Header au scroll
 * - Apparition des blocs au scroll (Intersection Observer)
 */

(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function setMenuOpen(open) {
    if (!toggle || !navLinks) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Fermer le menu" : "Ouvrir le menu"
    );
    navLinks.classList.toggle("is-open", open);
    if (header) {
      header.classList.toggle("menu-open", open);
    }
    document.body.style.overflow = open ? "hidden" : "";
  }

  /* ----- Menu mobile ----- */
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      setMenuOpen(!open);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    });

    /* Si on repasse en desktop, fermer le menu */
    const mq = window.matchMedia("(min-width: 901px)");
    const onViewportChange = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    if (mq.addEventListener) {
      mq.addEventListener("change", onViewportChange);
    } else {
      mq.addListener(onViewportChange);
    }
  }

  /* ----- Header sticky / style scroll ----- */
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ----- Reveal au scroll ----- */
  const reveals = document.querySelectorAll(".reveal");

  if (!reveals.length) return;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
  );

  reveals.forEach((el) => observer.observe(el));
})();
