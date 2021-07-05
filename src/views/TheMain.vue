<template>
  <div data-scroll-container>
    <header>
      <div class="section-anchor">
        <a href="#about" data-scroll-to>ABOUT</a>
        <a href="#works" data-scroll-to>WORKS</a>
        <a href="#contact" data-scroll-to>CONTACT</a>
      </div>
    </header>

    <section class="banner" data-scroll-section>
      <div data-scroll>
        <h1 data-scroll data-scroll-speed="3">I'M A</h1>
        <h1 data-scroll data-scroll-speed="2" data-scroll-delay="0.2">WEB</h1>
        <h1
          data-scroll
          data-scroll-speed="3"
          data-scroll-position="top"
          data-scroll-delay="0.05"
        >
          PUBLSHER
        </h1>
      </div>

      <div data-scroll class="banner-items">
        <div
          data-scroll
          class="banner-symbol"
          data-scroll-direction="horizontal"
          data-scroll-speed="7"
        ></div>

        <div
          class="deco-text01"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-10"
        >
          <svg viewBox="0 0 100 100">
            <defs>
              <path
                id="circle"
                d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text font-size="7">
              <textPath xlink:href="#circle">
                Copyright © da hye kim, All rights reserved ㅡ
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="15"
        class="deco-text02"
      >
        &#169; 2021
      </p>

      <p
        data-scroll
        class="deco-text03"
        data-scroll-speed="2"
        data-scroll-delay="0.05"
      >
        my portfolio to showcase my projects
      </p>
      <p
        data-scroll
        class="deco-text04"
        data-scroll-speed="2"
        data-scroll-delay="0.075"
      >
        이 사이트는 개인용 포트폴리오 목적으로 제작되었습니다.
      </p>
    </section>
    <!-- banner -->

    <section id="about" data-scroll-section>
      <div data-scroll class="about-link">
        <a href="https://github.com/rlaekgp94" target="blank" data-scroll
          ><span>Github</span></a
        >

        <input id="copyEmail" value="dany__k@naver.com" readonly />
        <button @click="emailCopy" data-scroll>
          <span>Email</span>
          <img src="@/assets/image/icons/copy-icon.svg" alt="복사 아이콘" />
        </button>
      </div>

      <h2
        data-scroll
        class="about-title"
        data-scroll-speed="2"
        data-scroll-delay="0.075"
      >
        ABOUT <span>.</span>
      </h2>

      <div
        class="header_line"
        data-scroll
        data-scroll-repeat
        data-scroll-delay="0.15"
      ></div>

      <div class="about-inner" data-scroll>
        <p class="about-info" data-scroll data-scroll-speed="2">
          안녕하세요, 웹 퍼블리셔 김다혜입니다.<br />
          <br />
          언제나 사용자의 관점에서 생각하며<br />
          열정적으로 소통하는 웹 퍼블리셔가 되고싶습니다.<br />
          <br />
          컴포넌트 단위의 유지보수에 최적화된 마크업에 관심이 많습니다.
        </p>

        <div class="about-skills" data-scroll data-scroll-speed="2">
          <ul class="about-skills-inner" data-scroll>
            <li data-scroll>
              <div class="about-skill-more-btn">
                <span>01</span> Ul Development
                <img
                  src="@/assets/image/icons/down-arrow-icon.svg"
                  alt="더보기 아이콘"
                />
              </div>

              <div class="about-skill-more" data-scroll>
                웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.<br />
                유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등 탄탄한
                업무 프로세스를 지향합니다.
              </div>
            </li>

            <li data-scroll>
              <div class="about-skill-more-btn">
                <span>02</span> Markup & design
                <img
                  src="@/assets/image/icons/down-arrow-icon.svg"
                  alt="더보기 아이콘"
                />
              </div>

              <div class="about-skill-more" data-scroll>
                웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.<br />
                유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등 탄탄한
                업무 프로세스를 지향합니다.
              </div>
            </li>

            <li data-scroll>
              <div class="about-skill-more-btn">
                <span>03</span> co-work
                <img
                  src="@/assets/image/icons/down-arrow-icon.svg"
                  alt="더보기 아이콘"
                />
              </div>

              <div class="about-skill-more" data-scroll>
                웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.<br />
                유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등 탄탄한
                업무 프로세스를 지향합니다.
              </div>
            </li>

            <li data-scroll>
              <div class="about-skill-more-btn">
                <span>04</span> Skills
                <img
                  src="@/assets/image/icons/down-arrow-icon.svg"
                  alt="더보기 아이콘"
                />
              </div>

              <div class="about-skill-more" data-scroll>
                웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.<br />
                유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등 탄탄한
                업무 프로세스를 지향합니다.
              </div>
            </li>

            <li data-scroll>
              <div class="about-skill-more-btn">
                <span>05</span> For Users
                <img
                  src="@/assets/image/icons/down-arrow-icon.svg"
                  alt="더보기 아이콘"
                />
              </div>

              <div class="about-skill-more" data-scroll>
                웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.<br />
                유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등 탄탄한
                업무 프로세스를 지향합니다.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- about -->

    <div class="works-title" data-scroll-section>
      <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="12">
        Do you want to see my project?
      </h2>
    </div>

    <section id="works" class="works" data-scroll-section>
      <img
        data-scroll
        src="https://i.pinimg.com/564x/54/c3/60/54c360b65f95352249f3ef5c14043314.jpg"
        alt=""
      />
      <h2 data-scroll data-scroll-speed="1">Made by Advantage</h2>
    </section>

    <section class="works" data-scroll-section>
      <h2 data-scroll data-scroll-speed="1">Made by Advantage</h2>
      <img
        data-scroll
        src="https://i.pinimg.com/564x/54/c3/60/54c360b65f95352249f3ef5c14043314.jpg"
        alt=""
      />
    </section>

    <section class="works" data-scroll-section>
      <img
        data-scroll
        src="https://i.pinimg.com/564x/54/c3/60/54c360b65f95352249f3ef5c14043314.jpg"
        alt=""
      />
      <h2 data-scroll data-scroll-speed="1">Made by Advantage</h2>
    </section>

    <section class="works" data-scroll-section>
      <h2 data-scroll data-scroll-speed="1">Made by Advantage</h2>
      <img
        data-scroll
        src="https://i.pinimg.com/564x/54/c3/60/54c360b65f95352249f3ef5c14043314.jpg"
        alt=""
      />
    </section>
    <!-- works -->

    <section id="contact" data-scroll-section>
      <h2 data-scroll data-scroll-speed="1" class="credit">
        Made by Advantage
      </h2>
    </section>
    <!-- contact -->
  </div>
</template>

<script>
import $ from "jquery";
import LocomotiveScroll from "locomotive-scroll";
export default {
  mounted() {
    new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    // About Skill Accordion Slide
    const skill_btn = $(".about-skill-more-btn");

    skill_btn.click(function () {
      $(".about-skill-more")
        .not($(this).next(".about-skill-more").slideToggle(500))
        .slideUp();
    });
  },
  methods: {
    // About Email Copy
    emailCopy() {
      let copyText = document.getElementById("copyEmail");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("Copy");
      alert("이메일주소가 복사되었습니다.");
    },
  },
};
</script>
<style lang="scss" scoped>
$normal-color: #0a4aee;
$accent-color: rgb(175, 0, 0);

// fade-up
@keyframes moveUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

// 360회전
@keyframes rotate360 {
  100% {
    transform: rotate(360deg);
  }
}

// 기본값
section {
  width: 90vw;
  min-height: 100vh;
  display: flex;
  margin: 0 auto;
}

header {
  position: fixed;
  top: 5vh;
  right: 5vw;
  z-index: 10;
  animation: moveUp ease-in 0.5s;
  display: flex;
  align-items: center;

  .section-anchor {
    a {
      padding: 0 0.5rem 0 0.25rem;
      color: $normal-color;
      font-size: 1.25rem;
      position: relative;
      transition: all 0.5s;

      &:not(:last-child) {
        margin-right: 2.5rem;
      }

      &:hover {
        color: #fff;
      }

      &:before,
      &:after {
        content: "";
        position: absolute;
        width: 0%;
        height: 0.2rem;
        top: 50%;
        transform: translateY(-50%);
        background: $accent-color;
      }

      &:before {
        left: -0.2rem;
      }

      &:after {
        right: 0.2rem;
        background: $accent-color;
        transition: width 0.25s cubic-bezier(0.22, 0.61, 0.36, 1);
      }

      &:hover:before {
        background: $accent-color;
        width: 100%;
        transition: width 0.25s cubic-bezier(0.22, 0.61, 0.36, 1);
      }

      &:hover:after {
        background: transparent;
        width: 100%;
        transition: 0s;
      }
    }
  }
}

.banner {
  position: relative;
  align-items: center;

  h1 {
    &:not(:nth-child(3)) {
      color: $normal-color;
    }

    &:first-child {
      margin-top: 2.5rem;
    }

    &:nth-child(3) {
      margin-top: 2.5rem;
    }

    font-size: 10rem;
    line-height: 8rem;
  }

  .banner-items {
    position: relative;
    bottom: 0;
    right: 25%;
    width: 50rem;
    height: 50rem;
    margin-top: 5rem;

    .banner-symbol {
      position: absolute;
      top: 7.5rem;
      left: 11.75rem;
      background: linear-gradient(-45deg, $normal-color, $accent-color);
      width: 25rem;
      height: 25rem;
      border-radius: 25rem;
      mix-blend-mode: difference;
    }

    .deco-text01 {
      position: absolute;
      top: 0;
      left: 0;
      svg {
        fill: #fff;
        width: 40rem;
        height: 40rem;
        font-family: "Syncopate", sans-serif;
        font-weight: bold;
        animation: rotate360 15s linear infinite;
      }
    }
  }

  .deco-text02 {
    position: absolute;
    top: 37.5%;
    right: 18.5%;
  }

  .deco-text03 {
    position: absolute;
    right: 0;
    bottom: 10rem;
    line-height: 1.5rem;
    font-family: "Syncopate", sans-serif;
    opacity: 0.8;
  }

  .deco-text04 {
    position: absolute;
    right: 0;
    bottom: 8.5rem;
    line-height: 1.5rem;
    font-family: "Syncopate", sans-serif;
    opacity: 0.7;
  }
}

// About section
#about {
  // justify-content: space-between;
  flex-direction: column;
  min-height: auto;
  padding-top: 5rem;
  padding-bottom: 10rem;

  .about-link {
    a {
      color: #fff;
      font-weight: bold;
      transition: all 0.5s;
      margin-right: 10rem;
      span {
        border-bottom: 0.125rem solid #fff;
        padding-bottom: 0.2rem;
      }
    }

    button {
      color: #fff;
      font-family: "Krona One", sans-serif;
      font-size: 1rem;
      background: none;
      border: none;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.5s;
      span {
        border-bottom: 0.125rem solid #fff;
        padding-bottom: 0.2rem;
        margin-right: 0.5rem;
      }
      img {
        filter: invert(100%);
        width: 1.15rem;
        height: 1.15rem;
      }
    }

    #copyEmail {
      position: absolute;
      top: 0;
      left: -999rem;
    }
  }

  .about-title {
    font-size: 6rem;
    margin-top: 12.5rem;

    span {
      color: $accent-color;
    }
  }

  .header_line {
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: 90vw;
    background: rgba(255, 255, 255, 0.788);
    height: 0.025rem;
    transform: scaleX(0);
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .header_line.is-inview {
    transform: scaleX(1);
  }

  .about-inner {
    display: flex;
    justify-content: space-between;

    .about-info {
      line-height: 1.75rem;
    }

    .about-skills {
      width: 45vw;

      .about-skills-inner {
        font-size: 3rem;
        margin-top: -2rem;

        li {
          border-bottom: 1px solid #fff;
          height: auto;
          line-height: 7rem;
          transition: all 0.5s;
          position: relative;
          padding: 0 3rem;
          display: flex;
          flex-direction: column;

          .about-skill-more-btn {
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          span {
            position: absolute;
            top: -0.75rem;
            left: 0;
            font-size: 1rem;
          }

          img {
            filter: invert(100%);
            width: 1.5rem;
            height: 1.5rem;
          }

          .about-skill-more {
            display: none;
            font-size: 1rem;
            width: 100%;
            height: auto;
            line-height: 1.75rem;
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      }
    }
  }
}

.works-title {
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
  }
}

// Works section
.works {
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid red;

  img {
    height: 70vh;
    width: auto;
    object-fit: cover;
    filter: grayscale(100%);
    transition: all 0.5s;
    cursor: pointer;
  }
}

// h2 {
//   font-size: 2rem;
//   max-width: 400px;
// }
</style>
