import gsap from "gsap";

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0.1,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    .to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".texts-container span", {
      duration: 1,
      delay: 0.5,
      y: 50,
      skewY: 10,
      stagger: 0.3,
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 1,
      y: -50,
      skewY: -10,
      stagger: 0.2,
      ease: "Power3.easeIn",
    })
    .to(
      ".loding",
      {
        duration: 0.5,
        opacity: 0,
        ease: "Power3.easeOut",
      },
      "-=1"
    )
    .to("body", {
      duration: 0.1,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .to(
      ".preloader",
      {
        duration: 1,
        opacity: 0,
        height: "0vh",
        ease: "Power3.easeOut",
      },
      "-=1"
    )
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    });
};
