const time = gsap.timeline({default: { ease: "power1.out" }});

time.fromTo(".v-banner", {opacity:"0"}, {opacity:"1", duration: 1});