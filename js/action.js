
// ------------------------------------------------
// 01. 부드러운 스크롤 (Lenis)
// ------------------------------------------------
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// ------------------------------------------------
// 02. GSAP 플러그인 등록
// ------------------------------------------------
gsap.registerPlugin(ScrollTrigger, SplitText);


// ------------------------------------------------
// 03. Section 1 : 글씨조각 애니메이션 + 이미지 이동
// ------------------------------------------------

// 글씨 SplitText 애니메이션
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

// 메인 이미지 이동 + 그래프 교체
gsap.timeline({
  scrollTrigger: {
    trigger: ".section1",
    start: "top top",
    end: "+=1300",
    scrub: true,
    onLeave: () => {
      document.querySelector(".graph_box img").src = "images/section2/graph2.png";
    },
    onEnterBack: () => {
      document.querySelector(".graph_box img").src = "images/section2/graph.png";
    }
  }
}).to(".mainImgWrap", {
  marginLeft: -150,
  top: "145%",
  scale: 0.2,
  rotate: -50
});


// ------------------------------------------------
// 04. Section 2 : 이미지 추가 이동
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
// 05. Section 3 : Skill 영역 (pin + 리스트 등장)
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
// 06. Section 4 : Web Design (SplitText 각각 적용)
// ------------------------------------------------
gsap.timeline({
  scrollTrigger: {
    trigger: ".section4",
    start: "top 50%",
    end: "+=500",
    scrub: true,
    // pin: true,
    // markers: true,
    
    onEnter: () => monitorAnim.restart(),      // 아래로 스크롤 시 restart()
    onEnterBack: () => monitorAnim.restart(),  // 위로 스크롤 시 restart()
  }
})/* .to(".mainImgWrap", {
  marginLeft: 350,
  top: "425%",
  scale: 1,
  rotate: 0
}); */


// ------------------------------------------------
// 06. Section 4 : Web Design (SplitText 각각 적용)
// ------------------------------------------------
// 모든 .one 박스를 배열로 가져오기
gsap.utils.toArray(".one").forEach(one => {
  let circle = one.querySelector(".bg_circle");

  gsap.fromTo(circle,
    { opacity: 0 },   // 시작 상태
    {
      opacity: 0.3,     // 도착 시 상태
      duration: 1,
      scrollTrigger: {
        trigger: one,       // 각 .one 박스 기준으로
        start: "top 50%",   // 화면 아래쪽에서 80% 지점에 들어오면 시작
        toggleActions: "play none none reverse" 
        // 다시 위로 올릴 때 원래대로 사라지게
      }
    }
  );
});







// .section4 안의 텍스트 각각 SplitText 적용
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

//각 모니터
document.querySelectorAll(".section4 .one1, .section4 .one2, .section4 .one3, .section4 .one4, .section4 .one5, .section4 .one6")
  .forEach((oneBox) => {
    let computer = oneBox.querySelector(".computer");

    if (computer) {
      ScrollTrigger.create({
        trigger: oneBox,
        start: "top 70%",   // 화면 아래쪽에서 살짝 올라올 때 시작
        end: "bottom 30%", // 지나가면 해제
        toggleClass: { targets: computer, className: "on" },
        // markers: true   // 디버그용
      });
    }
  });



// ------------------------------------------------
// 07. Section 5 : Banner & Popup (가로 스크롤)
// ------------------------------------------------
let ul = document.querySelector(".section5 ul");

gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top top",
    end: () => "+=" + (ul.offsetWidth - window.innerWidth),
    scrub: true,
    pin: true
  }
}).fromTo(".section5 ul",
  { x: "50%" },  // 처음에 오른쪽으로 50% 밀려 있음
  { x: () => -(ul.offsetWidth - window.innerWidth), ease: "none" },'s5'
).to(".mainImgWrap", {
  marginLeft: -150,
  top: "1025%",
  scale: 20,
  rotate: 0
},'s5');


// ------------------------------------------------
// 08. Section 6 : App Design
// ------------------------------------------------
gsap.timeline({
  scrollTrigger: {
    trigger: ".section6",
    start: "top top",
    end: 'bottom top',
    scrub: true,
    pin:true
  }
}).from(".section6 .app_img", {
  y: 100,
  autoAlpha:0,
}).from(".section6 .left_img .big_textbox", {
  x: -100,
  y:50,
  autoAlpha:0,
},'bigtextbox')
.from(".section6 .rigth_img .big_textbox", {
  x: 100,
  y:-50,
  autoAlpha:0,
},'bigtextbox')
.to(".mainImgWrap", {
  marginLeft: -1050,
  top: "1500%",
  scale: 1,
  rotate: 0
});


// ------------------------------------------------
// 09. Section 7 : Collaborative Work
// ------------------------------------------------
gsap.timeline({
  scrollTrigger: {
    trigger: ".section7",
    start: "top 50%",
    end:'bottom top',
    scrub: true,
  }
}).from(".section7 .imgbox .top_img .big_textbox", {
  left:'50%',
}).from(".section7 .imgbox .bottom_img .big_textbox", {
  right:'50%',
})
.to(".mainImgWrap", {
  marginLeft: -1050,
  top: "1600%",
  x:1900,
  scale: 1,
  rotate: 0
});



// ------------------------------------------------
// 10. Section 8 : Video
// ------------------------------------------------
gsap.timeline({
  scrollTrigger: {
    trigger: ".section8",
    start: "top top",
    end:'bottom top',
    scrub: true,
    pin:true
  }
})
.to("#video8", {
  scale: 1.8,
});




// ------------------------------------------------
// 11. Section 9 : photo
// ------------------------------------------------
gsap.timeline({
  scrollTrigger: {
    trigger: ".section9",
    start: "top top",
    end:'bottom top',
    scrub: true,
    pin:true
  }
})
.from(".photo1 img", {
  left:-100,
  top:-100,
  autoAlpha:0,
},'photoImg')
.from(".photo2 img", {
  left:-150,
  top:-230,
  autoAlpha:0,
},'photoImg')
.from(".photo3 img", {
  left:0,
  top:-210,
  autoAlpha:0,
},'photoImg')
.from(".photo4 img", {
  left:30,
  top:-150,
  autoAlpha:0,
},'photoImg')
.from(".photo5 img", {
  left:100,
  top:-200,
  autoAlpha:0,
},'photoImg')
.from(".photo6 img", {
  left:50,
  top:70,
  autoAlpha:0,
},'photoImg')
.from(".photo7 img", {
  left:-100,
  top:-200,
  autoAlpha:0,
},'photoImg')
.from(".photo8 img", {
  left:-100,
  top:300,
  autoAlpha:0,
},'photoImg')
.from(".photo9 img", {
  left:350,
  top:-100,
  autoAlpha:0,
},'photoImg')
.from(".photo10 img", {
  left:-150,
  top:0,
  autoAlpha:0,
},'photoImg')
.from(".photo11 img", {
  left:-150,
  top:150,
  autoAlpha:0,
},'photoImg')
.from(".photo12 img", {
  left:-150,
  top:50,
  autoAlpha:0,
},'photoImg')
.from(".photo13 img", {
  left:200,
  top:100,
  autoAlpha:0,
},'photoImg')
.from(".photo14 img", {
  left:300,
  top:200,
  autoAlpha:0,
},'photoImg')
.from(".photo15 img", {
  left:300,
  top:250,
  autoAlpha:0,
},'photoImg')





// $('.section4 .screen').mouseover(function(){
//   let img6Screen = $(this).height();
//   let img6Height = $(this).find('img').height();
//   $(this).find('img').css({top:(img6Screen-img6Height)})
// }).mouseout(function(){
//   $(this).find('img').css({top:0})
// });

