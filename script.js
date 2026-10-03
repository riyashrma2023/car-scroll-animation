
// 1. Initial Load Animation (पेज लोड होने पर टेक्स्ट एनीमेशन)
window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

  tl.fromTo(
    ".headline",
    { y: -30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2 }
  );

  tl.fromTo(
    ".stat-card",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.2 },
    "-=0.6"
  );
});

// 2. Scroll-Driven Animation (स्क्रॉल करने पर कार का एनीमेशन)
gsap.to("#car", {
  scrollTrigger: {
    trigger: ".hero-container",
    start: "top top",
    end: "bottom top",
    scrub: 1.2,
    pin: true,
  },
  scale: 1.4,
  y: -50,
  ease: "none"
});