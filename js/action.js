// ------------------------------------------------
// Lenis 전역 변수
// ------------------------------------------------
let lenis;
let lenisRAF;

// ------------------------------------------------
// GSAP 플러그인 등록 (전역)
// ------------------------------------------------
gsap.registerPlugin(ScrollTrigger, SplitText);

// ------------------------------------------------
// ScrollTrigger.matchMedia로 반응형 처리
// ------------------------------------------------
ScrollTrigger.matchMedia({

  // ===== PC 버전 (641px 이상) =====
  "(min-width: 641px)": function () {

    // Lenis 초기화
    lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)),
      smooth: true
    });

    lenis.on('scroll', ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      lenisRAF = requestAnimationFrame(raf);
    }
    lenisRAF = requestAnimationFrame(raf);

    window.addEventListener("load", () => {
      setTimeout(() => ScrollTrigger.refresh(), 500);
    });

    window.addEventListener("beforeunload", () => {
      cancelAnimationFrame(lenisRAF);
    });

    // ------------------------------------------------
    // Section 1 : 글씨조각 애니메이션 + 이미지 이동
    // ------------------------------------------------
    let split1 = SplitText.create(".section1 .text_box", { type: "chars" });
    gsap.from(split1.chars, {
      x: 500,
      y: -50,
      rotateY: 190,
      autoAlpha: 0,
      rotate: 10,
      letterSpacing: "-0.2em",
      stagger: 0.05,
      duration: 1
    });

    // ------------------------------------------------
    // Section 2-1 : graph_box img
    // ------------------------------------------------
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section1",
        start: "top top",
        end: "+=1300",
        scrub: true,
        onLeave: () => {
          const graphImg = document.querySelector(".graph_box img");
          if (graphImg) graphImg.src = "images/section2/graph2.png";
        },
        onEnterBack: () => {
          const graphImg = document.querySelector(".graph_box img");
          if (graphImg) graphImg.src = "images/section2/graph.png";
        }
      }
    }).to(".mainImgWrap", {
      marginLeft: -150,
      top: "146%",
      scale: 0.2,
      rotate: -50
    });

    // ------------------------------------------------
    // Section 2-2 :  이미지 추가 이동
    // ------------------------------------------------
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    }).to(".mainImgWrap", {
      marginLeft: -150,
      top: "225%",
      scale: 0.05,
      rotate: 0
    });

    // ------------------------------------------------
    // Section 3 : Skill 영역
    // ------------------------------------------------
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section3",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true
      }
    })
      .to(".mainImgWrap", {
        marginLeft: -150,
        top: "225%",
        scale: 0.05,
        rotate: 0
      })
      .from(".skill-box li", {
        autoAlpha: 0,
        y: 100,
        backgroundColor: "purple",
        stagger: 0.2
      });

    // ------------------------------------------------
    // Section 4-1 : Web Design 타이핑 애니메이션
    // ------------------------------------------------

    const content0 = " Title: Dashboard & Loading Page ";
    const text0 = document.querySelector(".content_box0 .title.mainfont");
    let index0 = 0;
    function typing0() {
      if (index0 < content0.length) {
        text0.textContent += content0[index0];
        index0++;
        setTimeout(typing0, 120);
      }
    }
    ScrollTrigger.create({ trigger: ".content_box0", start: "top 80%", once: true, onEnter: () => typing0() });

    const content1 = " Title: ELAVIE Perfume ";
    const text1 = document.querySelector(".content_box1 .title.mainfont");
    let index1 = 0;
    function typing1() {
      if (index1 < content1.length) {
        text1.textContent += content1[index1];
        index1++;
        setTimeout(typing1, 120);
      }
    }
    ScrollTrigger.create({ trigger: ".content_box1", start: "top 80%", once: true, onEnter: () => typing1() });

    const content2 = " Title: Honest Lab ";
    const text2 = document.querySelector(".content_box2 .title.mainfont");
    let index2 = 0;
    function typing2() {
      if (index2 < content2.length) {
        text2.textContent += content2[index2];
        index2++;
        setTimeout(typing2, 120);
      }
    }
    ScrollTrigger.create({ trigger: ".content_box2", start: "top 50%", once: true, onEnter: () => typing2() });

    const content3 = "Title: Hi-Medi Digital Care";
    const text3 = document.querySelector(".content_box3 .title.mainfont");
    let index3 = 0;
    function typing3() {
      if (index3 < content3.length) {
        text3.textContent += content3[index3];
        index3++;
        setTimeout(typing3, 120);
      }
    }
    ScrollTrigger.create({ trigger: ".content_box3", start: "top 50%", once: true, onEnter: () => typing3() });

    const content4 = " Title: Theme Park ";
    const text4 = document.querySelector(".content_box4 .title.mainfont");
    let index4 = 0;
    function typing4() {
      if (index4 < content4.length) {
        text4.textContent += content4[index4];
        index4++;
        setTimeout(typing4, 120);
      }
    }
    ScrollTrigger.create({ trigger: ".content_box4", start: "top 80%", once: true, onEnter: () => typing4() });

    const content5 = " Title: Luminote ";
    const text5 = document.querySelector(".content_box5 .title.mainfont");
    let index5 = 0;
    function typing5() {
      if (index5 < content5.length) {
        text5.textContent += content5[index5];
        index5++;
        setTimeout(typing5, 120);
      }
    }
    ScrollTrigger.create({ trigger: ".content_box5", start: "top 80%", once: true, onEnter: () => typing5() });

    const content6 = " Second Portfolio: The Squirrel's Journey ";
    const text6 = document.querySelector(".content_box6 .title.mainfont");
    let index6 = 0;
    function typing6() {
      if (index6 < content6.length) {
        text6.innerHTML += content6[index6];
        index6++;
        setTimeout(typing6, 120);
      }
    }
    ScrollTrigger.create({ trigger: ".content_box6", start: "top 80%", once: true, onEnter: () => typing6() });

    // ------------------------------------------------
    // Section 4-2 : .bg_circle 애니메이션
    // ------------------------------------------------
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section4",
        start: "top 50%",
        end: "+=500",
        scrub: true,
      }
    });

    gsap.utils.toArray(".one").forEach(one => {
      let circle = one.querySelector(".bg_circle");
      if (circle) {
        gsap.fromTo(circle,
          { opacity: 0 },
          {
            opacity: 0.3,
            duration: 1,
            scrollTrigger: {
              trigger: one,
              start: "top 50%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // ------------------------------------------------
    // Section 4-3 : SplitText
    // ------------------------------------------------
    document.querySelectorAll(".section4 .text").forEach((box) => {
      let split = SplitText.create(box, { type: "chars" });
      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: box,
          start: "30% 80%",
          toggleActions: "play none none reverse"
        },
        x: 500,
        y: -50,
        rotateY: 190,
        autoAlpha: 0,
        rotate: 10,
        letterSpacing: "-0.2em",
        stagger: 0.05,
        duration: 1
      });
    });

    // ------------------------------------------------
    // Section 4-4 : class on 애니메이션
    // ------------------------------------------------
    document.querySelectorAll(".section4 .one0, .section4 .one1, .section4 .one2, .section4 .one3, .section4 .one4, .section4 .one5, .section4 .one6")
      .forEach((oneBox) => {
        let computer = oneBox.querySelector(".computer");
        if (computer) {
          ScrollTrigger.create({
            trigger: oneBox,
            start: "top 70%",
            end: "bottom 30%",
            toggleClass: { targets: computer, className: "on" },
          });
        }
      });

    // ------------------------------------------------
    // Section 5 : Banner (가로 스크롤)
    // ------------------------------------------------
    let ul = document.querySelector(".section5 ul");
    if (ul) {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".section5",
          start: "top top",
          end: () => "+=" + (ul.offsetWidth - window.innerWidth),
          scrub: true,
          pin: true
        }
      }).fromTo(".section5 ul",
        { x: "50%" },
        { x: () => -(ul.offsetWidth - window.innerWidth), ease: "none" }, 's5'
      ).to(".mainImgWrap", {
        marginLeft: -150,
        top: "1025%",
        scale: 20,
        rotate: 0
      }, 's5');
    }

    // ------------------------------------------------
    // Section 6 : App Design
    // ------------------------------------------------
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section6",
        start: "top top",
        end: 'bottom top',
        scrub: true,
        pin: true
      }
    }).from(".section6 .app_img", {
      y: 100,
      autoAlpha: 0,
    }).from(".section6 .left_img .big_textbox", {
      x: -100,
      y: 50,
      autoAlpha: 0,
    }, 'bigtextbox')
      .from(".section6 .rigth_img .big_textbox", {
        x: 100,
        y: -50,
        autoAlpha: 0,
      }, 'bigtextbox')
      .to(".mainImgWrap", {
        marginLeft: -1050,
        top: "1500%",
        scale: 1,
        rotate: 0
      });

    // ------------------------------------------------
    // Section 7 : Collaborative Work
    // ------------------------------------------------
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section7",
        start: "top 50%",
        end: 'bottom top',
        scrub: true,
      }
    }).from(".section7 .imgbox .top_img .big_textbox", {
      left: '50%',
    }).from(".section7 .imgbox .bottom_img .big_textbox", {
      right: '50%',
    })
      .to(".mainImgWrap", {
        marginLeft: -1050,
        top: "1600%",
        x: 1900,
        scale: 1,
        rotate: 0
      });

    // ------------------------------------------------
    // ✨ Section 6~7 추가 타이핑 효과
    // ------------------------------------------------
    const content7 = " Title: 김급식 App Upgrade ";
    const text7 = document.querySelector(".section6 .left_img .title.mainfont");
    let index7 = 0;
    function typing7() {
      if (index7 < content7.length) {
        text7.textContent += content7[index7];
        index7++;
        setTimeout(typing7, 120);
      }
    }
    ScrollTrigger.create({ trigger: ".section6 .left_img", start: "top 80%", once: true, onEnter: () => typing7() });

    const content8 = " Title: Note Design ";
    const text8 = document.querySelector(".section6 .rigth_img .title.mainfont");
    let index8 = 0;
    function typing8() {
      if (index8 < content8.length) {
        text8.textContent += content8[index8];
        index8++;
        setTimeout(typing8, 120);
      }
    }
    ScrollTrigger.create({ trigger: ".section6 .rigth_img", start: "top 80%", once: true, onEnter: () => typing8() });

    const content9 = " Title: Class Care ";
    const text9 = document.querySelector(".section7 .top_img .big_textbox .title.mainfont");
    let index9 = 0;
    function typing9() {
      if (index9 < content9.length) {
        text9.textContent += content9[index9];
        index9++;
        setTimeout(typing9, 120);
      }
    }
    ScrollTrigger.create({ trigger: ".section7 .top_img", start: "top 80%", once: true, onEnter: () => typing9() });

    const content10 = " Title: GEMORA ";
    const text10 = document.querySelector(".section7 .bottom_img .big_textbox .title.mainfont");
    let index10 = 0;
    function typing10() {
      if (index10 < content10.length) {
        text10.textContent += content10[index10];
        index10++;
        setTimeout(typing10, 120);
      }
    }
    ScrollTrigger.create({ trigger: ".section7 .bottom_img", start: "top 80%", once: true, onEnter: () => typing10() });

    // ------------------------------------------------
    // Section 8 : Video
    // ------------------------------------------------
    const video8 = document.querySelector(".section8 video");
    if (video8) {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".section8",
          start: "top top",
          end: 'bottom top',
          scrub: true,
          pin: true
        }
      }).to(video8, { scale: 1.8 });
    }

    // ------------------------------------------------
    // Section 9 : photo
    // ------------------------------------------------
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section9",
        start: "top top",
        end: 'bottom top',
        scrub: true,
        pin: true
      }
    })
      .from(".photo1 img", { left: -100, top: -100, autoAlpha: 0 }, 'photoImg')
      .from(".photo2 img", { left: -150, top: -230, autoAlpha: 0 }, 'photoImg')
      .from(".photo3 img", { left: 0, top: -210, autoAlpha: 0 }, 'photoImg')
      .from(".photo4 img", { left: 30, top: -150, autoAlpha: 0 }, 'photoImg')
      .from(".photo5 img", { left: 100, top: -200, autoAlpha: 0 }, 'photoImg')
      .from(".photo6 img", { left: 50, top: 70, autoAlpha: 0 }, 'photoImg')
      .from(".photo7 img", { left: -100, top: -200, autoAlpha: 0 }, 'photoImg')
      .from(".photo8 img", { left: -100, top: 300, autoAlpha: 0 }, 'photoImg')
      .from(".photo9 img", { left: 350, top: -100, autoAlpha: 0 }, 'photoImg')
      .from(".photo10 img", { left: -150, top: 0, autoAlpha: 0 }, 'photoImg')
      .from(".photo11 img", { left: -150, top: 150, autoAlpha: 0 }, 'photoImg')
      .from(".photo12 img", { left: -150, top: 50, autoAlpha: 0 }, 'photoImg')
      .from(".photo13 img", { left: 200, top: 100, autoAlpha: 0 }, 'photoImg')
      .from(".photo14 img", { left: 300, top: 200, autoAlpha: 0 }, 'photoImg')
      .from(".photo15 img", { left: 300, top: 250, autoAlpha: 0 }, 'photoImg');

    return () => {
      console.log("PC 모드 종료 - 정리 중...");
      if (lenisRAF) { cancelAnimationFrame(lenisRAF); lenisRAF = null; }
      if (lenis) { lenis.destroy(); lenis = null; }
      gsap.ticker.remove(() => { });
      document.querySelectorAll('[class*="split"]').forEach(el => {
        if (el._splitText) el._splitText.revert();
      });
    };
  },



  // ------------------------------------------------
  // ===== 모바일 버전 (640px 이하) =====
  // ------------------------------------------------

  "(max-width: 640px)": function () {

    // Lenis 초기화
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true
    });

    lenis.on('scroll', ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      lenisRAF = requestAnimationFrame(raf);
    }
    lenisRAF = requestAnimationFrame(raf);

    let split1 = SplitText.create(".section1 .text_box", { type: "chars" });
    gsap.from(split1.chars, {
      x: 500,
      y: -50,
      rotateY: 190,
      autoAlpha: 0,
      rotate: 10,
      letterSpacing: "-0.2em",
      stagger: 0.05,
      duration: 1
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".section1",
        start: "top top",
        end: "+=1300",
        scrub: true,
        onLeave: () => {
          const graphImg = document.querySelector(".graph_box img");
          if (graphImg) graphImg.src = "images/section2/graph2.png";
        },
        onEnterBack: () => {
          const graphImg = document.querySelector(".graph_box img");
          if (graphImg) graphImg.src = "images/section2/graph.png";
        }
      }
    }).to(".mainImgWrap", {
      marginLeft: 0,
      top: "205%",
      scale: 0.2,
      rotate: -50
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".section2 .tbox2",
        start: "top top",
        end: "center top",
        scrub: true,
        onLeave: () => {
          const graphImg = document.querySelector(".graph_box img");
          if (graphImg) graphImg.src = "images/section2/graph2.png";
        },
        onEnterBack: () => {
          const graphImg = document.querySelector(".graph_box img");
          if (graphImg) graphImg.src = "images/section2/graph.png";
        }
      }
    }).from(".graph_box img", {
      scale: 0.2,
      rotate: -50
    });

    // ------------------------------------------------
    // ✨ 모바일에서도 타이핑 효과 적용
    // ------------------------------------------------
    const content0 = " Title: Dashboard & Loading Page ";
    const text0 = document.querySelector(".content_box0 .title.mainfont");
    let index0 = 0;
    function typing0() {
      if (index0 < content0.length) { text0.textContent += content0[index0]; index0++; setTimeout(typing0, 120); }
    }
    ScrollTrigger.create({ trigger: ".content_box0", start: "top 80%", once: true, onEnter: () => typing0() });

    const content1 = " Title: ELAVIE Perfume ";
    const text1 = document.querySelector(".content_box1 .title.mainfont");
    let index1 = 0;
    function typing1() {
      if (index1 < content1.length) { text1.textContent += content1[index1]; index1++; setTimeout(typing1, 120); }
    }
    ScrollTrigger.create({ trigger: ".content_box1", start: "top 80%", once: true, onEnter: () => typing1() });

    const content2 = " Title: Honest Lab ";
    const text2 = document.querySelector(".content_box2 .title.mainfont");
    let index2 = 0;
    function typing2() {
      if (index2 < content2.length) { text2.textContent += content2[index2]; index2++; setTimeout(typing2, 120); }
    }
    ScrollTrigger.create({ trigger: ".content_box2", start: "top 80%", once: true, onEnter: () => typing2() });

    const content3 = " Title: Hi-Medi Digital Care ";
    const text3 = document.querySelector(".content_box3 .title.mainfont");
    let index3 = 0;
    function typing3() {
      if (index3 < content3.length) { text3.textContent += content3[index3]; index3++; setTimeout(typing3, 120); }
    }
    ScrollTrigger.create({ trigger: ".content_box3", start: "top 80%", once: true, onEnter: () => typing3() });

    const content4 = " Title: Theme Park ";
    const text4 = document.querySelector(".content_box4 .title.mainfont");
    let index4 = 0;
    function typing4() {
      if (index4 < content4.length) { text4.textContent += content4[index4]; index4++; setTimeout(typing4, 120); }
    }
    ScrollTrigger.create({ trigger: ".content_box4", start: "top 80%", once: true, onEnter: () => typing4() });

    const content5 = " Title: Luminote ";
    const text5 = document.querySelector(".content_box5 .title.mainfont");
    let index5 = 0;
    function typing5() {
      if (index5 < content5.length) { text5.textContent += content5[index5]; index5++; setTimeout(typing5, 120); }
    }
    ScrollTrigger.create({ trigger: ".content_box5", start: "top 80%", once: true, onEnter: () => typing5() });

    const content6 = " Second Portfolio: The Squirrel's Journey ";
    const text6 = document.querySelector(".content_box6 .title.mainfont");
    let index6 = 0;
    function typing6() {
      if (index6 < content6.length) { text6.innerHTML += content6[index6]; index6++; setTimeout(typing6, 120); }
    }
    ScrollTrigger.create({ trigger: ".content_box6", start: "top 80%", once: true, onEnter: () => typing6() });

    const content7 = " Title: 김급식 App Upgrade ";
    const text7 = document.querySelector(".section6 .left_img .title.mainfont");
    let index7 = 0;
    function typing7() {
      if (index7 < content7.length) { text7.textContent += content7[index7]; index7++; setTimeout(typing7, 120); }
    }
    ScrollTrigger.create({ trigger: ".section6 .left_img", start: "top 80%", once: true, onEnter: () => typing7() });

    const content8 = " Title: Note Design ";
    const text8 = document.querySelector(".section6 .rigth_img .title.mainfont");
    let index8 = 0;
    function typing8() {
      if (index8 < content8.length) { text8.textContent += content8[index8]; index8++; setTimeout(typing8, 120); }
    }
    ScrollTrigger.create({ trigger: ".section6 .rigth_img", start: "top 80%", once: true, onEnter: () => typing8() });

    const content9 = " Title: Class Care ";
    const text9 = document.querySelector(".section7 .top_img .big_textbox .title.mainfont");
    let index9 = 0;
    function typing9() {
      if (index9 < content9.length) { text9.textContent += content9[index9]; index9++; setTimeout(typing9, 120); }
    }
    ScrollTrigger.create({ trigger: ".section7 .top_img", start: "top 80%", once: true, onEnter: () => typing9() });

    const content10 = " Title: GEMORA ";
    const text10 = document.querySelector(".section7 .bottom_img .big_textbox .title.mainfont");
    let index10 = 0;
    function typing10() {
      if (index10 < content10.length) { text10.textContent += content10[index10]; index10++; setTimeout(typing10, 120); }
    }
    ScrollTrigger.create({ trigger: ".section7 .bottom_img", start: "top 80%", once: true, onEnter: () => typing10() });

    // ------------------------------------------------
    // Section 3 : Skill 영역
    // ------------------------------------------------
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section3",
        start: "20% top",
        end: "bottom top",
        scrub: true,
        pin: true
      }
    })
      .to(".mainImgWrap", {
        marginLeft: -150,
        top: "225%",
        scale: 0.05,
        rotate: 0
      })
      .from(".skill-box li", {
        autoAlpha: 0,
        y: 100,
        backgroundColor: "purple",
        stagger: 0.2
      });

    // ------------------------------------------------
    // Section 4 : Web Design
    // ------------------------------------------------
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section4",
        start: "top 50%",
        end: "+=500",
        scrub: true,
      }
    });

    gsap.utils.toArray(".section4 .content_box").forEach((box) => {
      gsap.from(box, {
        x: -100,
        autoAlpha: 0,
        duration: 1,
        clearProps: "all",
        scrollTrigger: {
          trigger: box,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });

    document.querySelectorAll(".section4 .text, .section4 .rowFont").forEach((box) => {
      let split = SplitText.create(box, { type: "chars" });
      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: box,
          start: "30% 80%",
          toggleActions: "play none none reverse"
        },
        x: -50,
        y: -50,
        rotateY: 190,
        autoAlpha: 0,
        rotate: 10,
        letterSpacing: "-0.2em",
        stagger: 0.05,
        duration: 1
      });
    });

    document.querySelectorAll(".section4 .one0, .section4 .one1, .section4 .one2, .section4 .one3, .section4 .one4, .section4 .one5, .section4 .one6")
      .forEach((oneBox) => {
        let computer = oneBox.querySelector(".computer");
        if (computer) {
          ScrollTrigger.create({
            trigger: oneBox,
            start: "top 70%",
            end: "bottom 30%",
            toggleClass: { targets: computer, className: "on" },
          });
        }
      });

    // ------------------------------------------------
    // Section 5 : Banner
    // ------------------------------------------------
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section5",
        start: "top top",
        end: "center top",
        scrub: true,
      }
    }).from(".section5 li", {
      marginTop: 100,
      stagger: 0.05,
      duration: 1
    });

    // ------------------------------------------------
    // Section 7 : Collaborative Work
    // ------------------------------------------------
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section7",
        start: "top 80%",
        end: 'bottom top',
        scrub: true,
      }
    }).from(".section7 .imgbox .top_img .big_textbox", {
      left: '-15%',
      y: 80
    }).from(".section7 .imgbox .bottom_img .big_textbox", {
      left: '-15%',
      y: 80
    });

    // ------------------------------------------------
    // Section 9 : photo 순차 등장 애니메이션
    // ------------------------------------------------

    // photo1 단독 먼저
    gsap.from(".photo1", {
      autoAlpha: 0,
      y: 30,
      duration: 0.4,
      scrollTrigger: {
        trigger: ".photo-wall",
        start: "top 90%",
        toggleActions: "play none none none"
      }
    });

    // photo2~3
    gsap.from(".photo2, .photo3", {
      autoAlpha: 0,
      y: 30,
      duration: 0.4,
      delay: 0.3,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".photo-wall",
        start: "top 90%",
        toggleActions: "play none none none"
      }
    });

    // photo4 이후 2개씩
    const photoPairs = [
      ".photo4, .photo5",
      ".photo6, .photo7",
      ".photo8, .photo9",
      ".photo10, .photo11",
      ".photo12, .photo13",
      ".photo14, .photo15"
    ];

    photoPairs.forEach((pair, i) => {
      gsap.from(pair, {
        autoAlpha: 0,
        y: 30,
        duration: 0.4,
        delay: 0.5 + (i * 0.3),
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".photo-wall",
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    });

    // ⭐ cleanup 함수
    return () => {
      console.log("모바일 모드 종료");
      const msg = document.querySelector("#mobileNotice");
      if (msg) msg.remove();
    };
  }

});