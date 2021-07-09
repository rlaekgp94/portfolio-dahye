<template>
  <div id="Main" data-scroll-container>
    <header>
      <div class="section-anchor">
        <a href="#about" data-scroll-to>ABOUT</a>
        <a href="#works" data-scroll-to>WORKS</a>
        <a href="#contact" data-scroll-to>CONTACT</a>
      </div>
    </header>

    <section class="banner" data-scroll-section>
      <div class="banner-title" data-scroll>
        <h1 data-scroll data-scroll-speed="3">
          <div>I'M A</div>
        </h1>
        <h1 data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
          <div>WEB</div>
        </h1>
        <h1
          data-scroll
          data-scroll-speed="3"
          data-scroll-position="top"
          data-scroll-delay="0.05"
        >
          <div>PUBLSHER</div>
        </h1>
      </div>

      <div data-scroll class="banner-items">
        <div data-scroll class="banner-symbol-wrap">
          <div
            data-scroll
            class="banner-symbol"
            data-scroll-direction="horizontal"
            data-scroll-speed="7"
          ></div>
        </div>

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

      <div class="about-title" data-scroll>
        <h2 data-scroll data-scroll-speed="2" data-scroll-delay="0.075">
          ABOUT
        </h2>
        <span
          class="about-title-item"
          data-scroll
          data-scroll-speed="4"
          data-scroll-delay="0.075"
          >.</span
        >
      </div>

      <div
        class="header_line"
        data-scroll
        data-scroll-repeat
        data-scroll-delay="0.15"
      ></div>

      <div class="about-inner" data-scroll>
        <p class="about-info" data-scroll>
          안녕하세요, 웹 퍼블리셔 김다혜입니다.<br />
          <br />
          언제나 사용자의 관점에서 생각하며<br />
          열정적으로 소통하는 웹 퍼블리셔가 되고싶습니다.<br />
          <br />
          컴포넌트 단위의 유지보수에 최적화된 마크업에 관심이 많습니다.
        </p>

        <div class="about-skills" data-scroll>
          <ul class="about-skills-inner" data-scroll>
            <li data-scroll>
              <div class="about-skill-more-btn">
                <span data-scroll>01</span>
                <p class="delay01" data-scroll data-scroll-delay="0.15">
                  Ul Development
                </p>
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

              <div
                class="skill_line delay01"
                data-scroll
                data-scroll-delay="0.15"
              ></div>
            </li>

            <li data-scroll>
              <div class="about-skill-more-btn">
                <span>02</span>
                <p class="delay02" data-scroll data-scroll-delay="0.15">
                  Markup & design
                </p>
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

              <div
                class="skill_line delay02"
                data-scroll
                data-scroll-delay="0.15"
              ></div>
            </li>

            <li data-scroll>
              <div class="about-skill-more-btn">
                <span>03</span>
                <p class="delay03" data-scroll data-scroll-delay="0.15">
                  co-work
                </p>
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

              <div
                class="skill_line delay03"
                data-scroll
                data-scroll-delay="0.15"
              ></div>
            </li>

            <li data-scroll>
              <div class="about-skill-more-btn">
                <span>04</span>
                <p class="delay04" data-scroll data-scroll-delay="0.15">
                  Skills
                </p>
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

              <div
                class="skill_line delay04"
                data-scroll
                data-scroll-delay="0.15"
              ></div>
            </li>

            <li data-scroll>
              <div class="about-skill-more-btn">
                <span>05</span>
                <p class="delay05" data-scroll data-scroll-delay="0.15">
                  For Users
                </p>
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

              <div
                class="skill_line delay05"
                data-scroll
                data-scroll-delay="0.15"
              ></div>
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
      <div class="works-inner" data-scroll data-scroll-speed="2">
        <div class="works-image works-section_image01" data-scroll></div>

        <div class="works-section-title" data-scroll>
          <h2 data-scroll data-scroll-speed="2">
            <span data-scroll>01</span>Printbakery
          </h2>
          <h3 data-scroll data-scroll-speed="2">
            Renewal Project &#38; Responsive
          </h3>
        </div>

        <router-link
          to="/works-Printbakery"
          class="works-link-btn-wrap works-link-btn-right"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-4"
        >
          <div class="works-link-btn" data-scroll>
            <img src="@/assets/image/icons/left-arrow.svg" alt="클릭 버튼" />
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
              <text font-size="6">
                <textPath xlink:href="#circle">
                  view more view more view more view more view more
                </textPath>
              </text>
            </svg>
          </div>
        </router-link>
      </div>
    </section>

    <section class="works" data-scroll-section>
      <div class="works-inner" data-scroll data-scroll-speed="2">
        <div class="works-image works-section_image02" data-scroll></div>

        <div class="works-section-title" data-scroll>
          <h2 data-scroll data-scroll-speed="2">
            <span data-scroll>02</span>Marshall
          </h2>
          <h3 data-scroll data-scroll-speed="2">Renewal Project | Web</h3>
        </div>

        <router-link
          to="/works-Marshall"
          class="works-link-btn-wrap works-link-btn-left"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="4"
        >
          <div class="works-link-btn" data-scroll>
            <p>Click</p>
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
              <text font-size="6">
                <textPath xlink:href="#circle">
                  view more view more view more view more view more
                </textPath>
              </text>
            </svg>
          </div>
        </router-link>
      </div>
    </section>

    <section class="works" data-scroll-section>
      <div class="works-inner" data-scroll data-scroll-speed="2">
        <div class="works-image works-section_image03" data-scroll></div>

        <div class="works-section-title" data-scroll>
          <h2 data-scroll data-scroll-speed="2">
            <span data-scroll>03</span>Samhwa
          </h2>
          <h3 data-scroll data-scroll-speed="2">Clone Project | Web</h3>
        </div>

        <router-link
          to="/works-Samhwa"
          class="works-link-btn-wrap works-link-btn-right"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-4"
        >
          <div class="works-link-btn" data-scroll>
            <img src="@/assets/image/icons/left-arrow.svg" alt="클릭 버튼" />
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
              <text font-size="6">
                <textPath xlink:href="#circle">
                  view more view more view more view more view more
                </textPath>
              </text>
            </svg>
          </div>
        </router-link>
      </div>
    </section>

    <section class="works" data-scroll-section>
      <div class="works-inner" data-scroll data-scroll-speed="2">
        <div class="works-image works-section_image04" data-scroll></div>

        <div class="works-section-title" data-scroll>
          <h2 data-scroll data-scroll-speed="2">
            <span data-scroll>04</span>Laftel
          </h2>
          <h3 data-scroll data-scroll-speed="2">
            Clone Project &#38; Responsive
          </h3>
        </div>
        <router-link
          to="/works-Laftel"
          class="works-link-btn-wrap works-link-btn-left"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="4"
        >
          <div class="works-link-btn" data-scroll>
            <p>Click</p>
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
              <text font-size="6">
                <textPath xlink:href="#circle">
                  view more view more view more view more view more
                </textPath>
              </text>
            </svg>
          </div>
        </router-link>
      </div>
    </section>
    <!-- works -->

    <section id="contact" data-scroll-section>
      <div class="contact-title" data-scroll>
        <h2 data-scroll data-scroll-speed="2">Contact Us</h2>
        <h3 data-scroll data-scroll-speed="2" data-scroll-delay="0.075">
          Thanks for visiting my Website.<br />
          Copyright ⓒ 2021. Dahye Kim All rights reserved.
        </h3>
      </div>

      <form data-scroll class="contact-form" @submit.prevent="sendEmail">
        <div data-scroll class="user-info">
          <div data-scroll>
            <label data-scroll>NAME</label>
            <input
              data-scroll
              type="text"
              name="user_name"
              autocomplete="off"
            />
          </div>
          <div data-scroll>
            <label data-scroll>EMAIL</label>
            <input
              data-scroll
              type="email"
              name="user_email"
              autocomplete="off"
            />
          </div>
        </div>

        <div data-scroll class="message-wrap">
          <label data-scroll>MESSAGE</label>
          <textarea name="message" data-scroll></textarea>
          <input data-scroll class="submit-btn" type="submit" value="SEND" />
        </div>
      </form>
    </section>
    <!-- contact -->
  </div>
</template>

<script>
import $ from "jquery";
import emailjs from "emailjs-com";
import LocomotiveScroll from "locomotive-scroll";
export default {
  mounted() {
    new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    window.addEventListener("resize", function () {
      scroll.update();
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

    // Contact
    sendEmail: e => {
      emailjs
        .sendForm(
          "service_j74oskd",
          "template_0p8u0re",
          e.target,
          "user_dorbJpVbU55goBZYnr3rQ"
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
            alert("메세지가 발송되었습니다.");
          },
          error => {
            console.log("FAILED...", error);
            alert("메세지 발송에 실패했습니다.");
          }
        );
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

  .banner-title.is-inview {
    h1 {
      div {
        transform: none;
        opacity: 1;
      }
      &:first-child {
        div {
          transition-delay: 0.3s;
        }
      }

      &:nth-child(2) {
        div {
          transition-delay: 0.4s;
        }
      }

      &:nth-child(3) {
        div {
          transition-delay: 0.5s;
        }
      }
    }
  }

  .banner-title {
    h1 {
      perspective: 600px;
      -webkit-perspective: 600px;
      div {
        opacity: 0;
        transform-origin: center top;
        transform-style: preserve-3d;
        transform: translateY(100%) rotateX(-80deg);
        transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
      }

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
  }
  .banner-items {
    position: relative;
    bottom: 0;
    right: 20%;
    width: 40rem;
    height: 40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .banner-symbol-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40rem;
      height: 40rem;
      position: absolute;
      top: 0;
      left: 0;
    }
    .banner-symbol {
      background: linear-gradient(-45deg, $normal-color, $accent-color);
      width: 25rem;
      height: 25rem;
      border-radius: 25rem;
      mix-blend-mode: difference;
    }
    .deco-text01 {
      width: 40rem;
      height: 40rem;
      svg {
        fill: #fff;
        width: 100%;
        height: 100%;
        font-family: "Syncopate", sans-serif;
        font-weight: bold;
        animation: rotate360 15s linear infinite;
      }
    }
  }
  .deco-text02 {
    position: absolute;
    top: 40%;
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
  flex-direction: column;
  padding-top: 5rem;
  margin-bottom: 10rem;

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
    width: auto;
    font-size: 5rem;
    margin-top: 10rem;
    position: relative;
  }

  .about-title-item {
    color: $accent-color;
    position: absolute;
    bottom: -1.5rem;
    left: 25rem;
  }

  .header_line {
    margin-top: 1rem;
    margin-bottom: 3rem;
    width: 90vw;
    background: rgba(255, 255, 255, 0.5);
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
        font-size: 2rem;
        margin-top: -2rem;
        li {
          height: auto;
          line-height: 6rem;
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
            top: -0.4rem;
            left: 0;
            font-size: 1rem;
          }

          img {
            filter: invert(100%);
            width: 1rem;
            height: 1rem;
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

          p {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          p.is-inview {
            opacity: 1;
            transform: translateY(0px);
          }

          p.is-inview.delay01 {
            transition-delay: 0.25s;
          }

          p.is-inview.delay02 {
            transition-delay: 0.3s;
          }

          p.is-inview.delay03 {
            transition-delay: 0.35s;
          }

          p.is-inview.delay04 {
            transition-delay: 0.4s;
          }

          p.is-inview.delay05 {
            transition-delay: 0.45s;
          }

          .skill_line {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            background: rgba(255, 255, 255, 0.5);
            height: 0.025rem;
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          .skill_line.is-inview {
            width: 100%;
            opacity: 1;
          }

          .skill_line.is-inview.delay01 {
            transition-delay: 0.5s;
          }
          .skill_line.is-inview.delay02 {
            transition-delay: 0.55s;
          }
          .skill_line.is-inview.delay03 {
            transition-delay: 0.6s;
          }
          .skill_line.is-inview.delay04 {
            transition-delay: 0.65s;
          }
          .skill_line.is-inview.delay05 {
            transition-delay: 0.7s;
          }
        }
      }
    }
  }
}

.works-title {
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2.5rem;
    font-weight: bold;
  }
}

// Works section
#works {
  padding-top: 7.5rem;
}
.works {
  min-height: 80vh;
  position: relative;

  &:nth-child(odd) {
    .works-image {
      left: 0;
    }
  }

  &:nth-child(even) {
    .works-image {
      right: 0;
    }
  }

  .works-inner {
    width: 100%;
    height: auto;
    position: relative;

    .works-image {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      width: 40vw;
      height: 60vh;
      background-repeat: no-repeat;
      background-size: cover;
      filter: grayscale(60%);
    }

    .works-link-btn-right {
      bottom: 10%;
      right: 0;
    }

    .works-link-btn-left {
      bottom: 10%;
      left: 0;
    }

    .works-link-btn-wrap {
      position: absolute;
      width: 20rem;
      height: 20rem;
      color: #fff;

      .works-link-btn {
        position: relative;
        width: 100%;
        height: 100%;

        p {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.5rem;
        }
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scaleX(-1);
          width: 4rem;
          height: 4rem;
          filter: invert(100%);
        }
        svg {
          fill: #fff;
          width: 100%;
          height: 100%;
          font-family: "Syncopate", sans-serif;
          font-weight: bold;
          animation: rotate360 15s linear infinite;
        }
      }
    }
  }

  .works-section-title {
    position: absolute;
    // z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      padding-left: 3rem;
      font-size: 5rem;
      position: relative;
      margin-bottom: 0.75rem;
      span {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 1rem;
      }
    }

    h3 {
      font-weight: 100;
    }
  }

  .works-section_image01 {
    background-position: center;
    background-image: url("../assets/image/works/works-image_01.jpg");
  }
  .works-section_image02 {
    background-position: 40%;
    background-image: url("../assets/image/works/works-image_02.jpg");
  }
  .works-section_image03 {
    background-position: right;
    background-image: url("https://www.samhwa.com/files/editor/upload/1621919214975_11.png");
  }
  .works-section_image04 {
    background-position: 85%;
    background-image: url("https://image.laftel.net/carousel/carousel_hero_bocchan_w.jpg?Expires=1625565328&Signature=m8kh71vaoOl9hS76QlisqzjwfkkNPZAmM~oShU8mwx7rRCGuwxofPhqLtrvZkcp4goZATFZUkgZxPXacMnBPWlCR~6DKyqXhpuMdubM2xf9bzD01sd-qvMobtVd5dCY9jrm0nq7zUdj7xr2euVSwhGMFu1MPJRPzDu2Yjj4cdSrjXWJu5RjvSeXKtdSFx1Jv~La3wyFqWcGeCmo7kVTiN3H5wVfAM72buqfALyBBJ2Fjx1B1nnb8tZw539JbG0zZ08YLujKYspM0SMtHV0noXimPQmwOl7pOY3nrBSWdQ311~uWmsg2qYqtHmRE2ZbRgb6Mm3sgR9SbyYbqr8HqU8A__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A");
  }
}

// Contact section
#contact {
  align-items: center;
  display: flex;
  justify-content: space-between;
  .contact-title {
    height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      font-size: 5rem;
    }
    h3 {
      line-height: 2rem;
      font-weight: 300;
    }
  }
  .contact-form {
    font-family: "Syncopate", sans-serif;
    color: #fff;
    width: 40vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    input,
    textarea {
      color: #fff;
      font-size: 1.25rem;
      letter-spacing: 0.25rem;
      background: none;
      outline: none;
      border: none;
    }

    label {
      font-size: 1.5rem;
    }

    .user-info {
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 3rem;

      input {
        height: 5rem;
        border-bottom: 1px solid #fff;
      }

      div {
        width: 45%;
        display: flex;
        flex-direction: column;
      }
    }

    .message-wrap {
      width: 100%;
      height: 60%;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      label {
        margin-bottom: 1.5rem;
      }

      textarea {
        font-family: "Arial", sans-serif;
        width: 100%;
        height: 10rem;
        resize: none;
        border-bottom: 1px solid #fff;
        margin-bottom: 3rem;
      }

      .submit-btn {
        cursor: pointer;
        width: 45%;
        height: 4rem;
        color: #fff;
        font-size: 1.25rem;
        font-weight: bold;
        letter-spacing: 0;
        align-self: flex-end;
        background-color: transparent;
        border: 1px solid #fff;

        transition: all 0.5s;

        &:hover {
          background: #fff;
          color: #000;
        }
      }
    }
  }
}
</style>
