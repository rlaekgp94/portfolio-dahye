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
      <div class="m-banner-title mobile" data-scroll>
        <h1 data-scroll><div>I'M</div></h1>
        <h1 data-scroll><div>A</div></h1>
        <h1 data-scrol><div>WEB</div></h1>
        <h1 data-scroll><div>PUBLSHER.</div></h1>
      </div>
      <!-- mobile -->

      <div class="banner-title web" data-scroll>
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
      <!-- web/tablet -->

      <div class="banner-items-wrap">
        <div data-scroll class="banner-items">
          <div data-scroll class="banner-symbol-wrap">
            <div
              data-scroll
              class="banner-symbol"
              data-scroll-direction="horizontal"
              data-scroll-speed="7"
              data-scroll-position="top"
            ></div>
          </div>

          <div
            class="m-deco-text01 mobile"
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
          <!-- mobile -->

          <div
            class="deco-text01 web"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-10"
            data-scroll-position="top"
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
          <!-- web / tablet -->
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

      <div class="about-title web" data-scroll>
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
      <!-- web / tablet -->

      <div
        class="header_line web"
        data-scroll
        data-scroll-repeat
        data-scroll-delay="0.15"
      ></div>
      <!-- web / tablet -->

      <div data-scroll class="m-about-inner mobile">
        <p class="m-about-info" data-scroll>
          안녕하세요, 웹 퍼블리셔 김다혜입니다.<br /><br />
          언제나 사용자의 관점에서 생각하며 열정적으로 소통하는 웹 퍼블리셔가
          되고싶습니다. 컴포넌트 단위의 유지보수에 최적화된 마크업에 관심이
          많습니다.
        </p>

        <div data-scroll>
          <div data-scroll class="swiper-container">
            <div data-scroll class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="slide-skill-box">
                  <strong>Ul Development</strong>
                  <p>
                    웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.
                    유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등
                    탄탄한 업무 프로세스를 지향합니다.
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-skill-box">
                  <strong>Markup&design</strong>
                  <p>
                    웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.
                    유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등
                    탄탄한 업무 프로세스를 지향합니다.
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-skill-box">
                  <strong>co-work</strong>
                  <p>
                    웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.
                    유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등
                    탄탄한 업무 프로세스를 지향합니다.
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-skill-box">
                  <strong>Skills</strong>
                  <p>
                    웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.
                    유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등
                    탄탄한 업무 프로세스를 지향합니다.
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-skill-box">
                  <strong>For Users</strong>
                  <p>
                    웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.
                    유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등
                    탄탄한 업무 프로세스를 지향합니다.
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <!-- mobile -->

      <div class="about-inner web" data-scroll>
        <p class="about-info" data-scroll>
          안녕하세요, 웹 퍼블리셔 김다혜입니다.<br />
          <br />
          언제나 사용자의 관점에서 생각하며<br />
          열정적으로 소통하는 웹 퍼블리셔가 되고싶습니다.
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
      <!-- web / tablet -->
    </section>
    <!-- about -->

    <div class="m-works-title" data-scroll-section>
      <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="12">
        Do you want to<br />see my project?
      </h2>
    </div>
    <!-- mobile -->

    <div class="works-title" data-scroll-section>
      <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="12">
        Do you want to see my project?
      </h2>
    </div>
    <!-- web / tablet -->

    <section id="works" class="works" data-scroll-section>
      <div class="m-works-inner mobile" data-scroll>
        <router-link
          to="/works-Printbakery"
          class="m-works-image m-works-section_image01"
          data-scroll
        >
          <div data-scroll class="m-works-section-title">
            <span data-scroll>01</span>
            <h2 data-scroll>Printbakery</h2>
          </div>

          <button>MORE</button>
        </router-link>

        <router-link
          to="/works-Marshall"
          class="m-works-image m-works-section_image02"
          data-scroll
        >
          <div data-scroll class="m-works-section-title">
            <span data-scroll>02</span>
            <h2 data-scroll>Marshall</h2>
          </div>

          <button>MORE</button>
        </router-link>

        <router-link
          to="/works-Samhwa"
          class="m-works-image m-works-section_image03"
          data-scroll
        >
          <div data-scroll class="m-works-section-title">
            <span data-scroll>03</span>
            <h2 data-scroll>Samhwa</h2>
          </div>

          <button>MORE</button>
        </router-link>

        <router-link
          to="/works-Laftel"
          class="m-works-image m-works-section_image04"
          data-scroll
        >
          <div data-scroll class="m-works-section-title">
            <span data-scroll>04</span>
            <h2 data-scroll>Laftel</h2>
          </div>

          <button>MORE</button>
        </router-link>
      </div>
      <!-- mobile -->

      <div class="works-inner web" data-scroll data-scroll-speed="2">
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
      <!-- web / tablet -->
    </section>

    <section class="works web" data-scroll-section>
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

    <section class="works web" data-scroll-section>
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

    <section class="works web" data-scroll-section>
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
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
export default {
  mounted() {
    new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true }
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

    // About Mobile Skills slide
    new Swiper(".swiper-container", {
      spaceBetween: 25,
      paginationType: "custom",
      loop: false,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1.25,
          slidesPerGroup: 1
        },
        480: {
          slidesPerView: 1.25,
          slidesPerGroup: 1
        },
        768: {
          slidesPerView: 1.5,
          slidesPerGroup: 1
        }
      }
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
    }
  }
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

  .mobile {
    display: none;
  }
}

.mobile {
  display: none;
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

  .banner-items-wrap {
    position: absolute;
    bottom: 17.5%;
    right: 15%;
  }

  .banner-items {
    position: relative;
    width: 40rem;
    height: 40rem;

    .banner-symbol-wrap {
      width: 40rem;
      height: 40rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .banner-symbol {
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

.m-works-title {
  display: none;
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
  &:nth-child(even) {
    .works-image {
      left: 0;
    }
  }

  &:nth-child(odd) {
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
// tablet
@media all and (max-width: 1024px) {
  // Tablet banner
  .banner {
    .banner-title {
      h1 {
        &:first-child {
          margin-top: 1.5rem;
        }
        &:nth-child(3) {
          margin-top: 1.5rem;
        }
        font-size: 7rem;
        line-height: 6rem;
      }
    }

    .banner-items-wrap {
      bottom: 25%;
      right: 0;
    }

    .banner-items {
      width: 25rem;
      height: 25rem;

      .banner-symbol-wrap {
        width: 100%;
        height: 100%;
      }

      .banner-symbol {
        width: 15rem;
        height: 15rem;
        border-radius: 15rem;
      }

      .deco-text01 {
        width: 25rem;
        height: 25rem;
      }
    }

    .deco-text02 {
      top: 47.5%;
      right: 5%;
    }
  }
  // Tablet About section
  #about {
    padding-top: 0;
    margin-bottom: 5rem;
    display: flex;
    justify-content: center;

    .about-link {
      a {
        margin-right: 5rem;
      }
    }

    .about-title {
      font-size: 3.5rem;
    }

    .about-title-item {
      bottom: -1.6rem;
      left: 17.5rem;
    }

    .about-inner {
      .about-info {
        display: none;
      }

      .about-skills {
        width: 100%;
      }
    }
  }
  // Tablet Works section
  .works {
    .works-inner {
      .works-image {
        width: 90vw;
      }

      .works-link-btn-right {
        bottom: 15%;
      }

      .works-link-btn-left {
        bottom: 15%;
      }

      .works-link-btn-wrap {
        width: 12.5rem;
        height: 12.5rem;

        .works-link-btn {
          p {
            font-size: 1rem;
          }

          img {
            width: 2.5rem;
            height: 2.5rem;
          }
        }
      }
    }
    .works-section-title {
      h2 {
        text-shadow: 2px 2px 10px rgba(61, 61, 61, 0.651);
        padding-left: 2rem;
        font-size: 3.5rem;
        margin-bottom: 0;

        span {
          top: -0.5;
          font-size: 0.75rem;
        }
      }
    }
  }

  // Tablet Contact section
  #contact {
    justify-content: center;
    flex-direction: column;

    .contact-title {
      padding-top: 6.5rem;
      margin-bottom: 2rem;
      height: auto;
      display: block;

      h2 {
        font-size: 4rem;
      }

      h3 {
        display: none;
      }
    }

    .contact-form {
      width: 50vw;
    }
  }
}

// mobile
@media screen and (max-width: 768px) {
  section {
    // border: 1px solid yellow;
    .web {
      display: none;
    }

    .mobile {
      display: inline;
    }
  }

  .web {
    display: none;
  }
  .mobile {
    display: inline;
  }

  // Mobile header
  header {
    .section-anchor {
      a {
        font-size: 1rem;

        &:not(:last-child) {
          margin-right: 1.25rem;
        }
      }
    }
  }

  // // Mobile banner
  .banner {
    .m-banner-title.is-inview {
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

        &:nth-child(4) {
          div {
            transition-delay: 0.6s;
          }
        }
      }
    }

    .m-banner-title {
      display: flex;
      flex-direction: column;
      padding-bottom: 10rem;

      h1 {
        perspective: 600px;
        -webkit-perspective: 600px;
        font-size: 2.5rem;
        line-height: 3.25rem;

        div {
          opacity: 0;
          transform-origin: center top;
          transform-style: preserve-3d;
          transform: translateY(100%) rotateX(-80deg);
          transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      }
    }

    .banner-items-wrap {
      bottom: 30%;
      right: 10%;
    }

    .banner-items {
      width: 13.5rem;
      height: 13.5rem;

      .banner-symbol-wrap {
        display: block;
      }

      .banner-symbol {
        width: 13.5rem;
        height: 13.5rem;
        border-radius: 15rem;
      }

      .m-deco-text01 {
        position: absolute;
        bottom: -22.5%;
        right: -90%;
        width: 7.5rem;
        height: 7.5rem;

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
      display: none;
    }

    .deco-text03 {
      font-size: 0.7rem;
      bottom: 8.5rem;
      line-height: 1.25rem;
      left: 0;
    }
    .deco-text04 {
      font-size: 0.75rem;
      bottom: 7.5rem;
      line-height: 1.25rem;
      left: 0;
    }
  }

  // Mobile About
  #about {
    position: relative;

    .about-link {
      position: absolute;
      top: 15%;
      left: 0;

      a {
        margin-right: 3rem;
        font-size: 0.875rem;
      }

      button {
        font-size: 0.875rem;

        img {
          width: 0.75rem;
          height: 0.75rem;
        }
      }
    }

    .about-title {
      display: none;
    }

    .header_line {
      display: none;
    }

    .about-inner {
      display: none;
    }
  }

  .m-about-inner {
    width: 100%;
    height: 75vh;
    position: absolute;
    bottom: 0;
    left: 0;

    .m-about-info {
      margin-bottom: 5rem;
      line-height: 1.5rem;
    }

    .swiper-container {
      width: 90vw;
      height: 45vh;
      overflow: visible;
    }

    .swiper-wrapper {
      width: 100%;
      height: 100%;

      .swiper-slide {
        width: 100%;
        height: 100%;
        background: #fff;
        color: #000;
        border-radius: 1.25rem;
        display: flex;
        justify-content: center;
        align-items: center;

        .slide-skill-box {
          width: 80%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          flex-direction: column;

          strong {
            font-size: 1.25rem;
            font-family: "Krona One", sans-serif;
          }

          p {
            font-family: "ELAND_Choice_M", sans-serif;
            font-size: 1rem;
            line-height: 1.5rem;
          }
        }
      }
    }

    .swiper-pagination {
      text-align: right;
      top: -2rem;
    }
  }

  .works-title {
    display: none;
  }

  .m-works-title {
    text-align: center;
    display: block;
    height: 10rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      line-height: 3rem;
    }
  }

  // Mobile Works

  #works {
    padding-top: 0;
  }

  .works {
    min-height: 100vh;
    align-items: center;
  }

  .m-works-inner {
    width: 100%;
    height: 80vh;
    display: block;
  }

  .m-works-image {
    width: 100%;
    height: 17.5vh;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(60%);
    border-radius: 1.25rem;
    color: #fff;
    position: relative;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    button {
      position: absolute;
      bottom: 10%;
      right: 5%;
      border: none;
      outline: none;
      background: rgba(255, 255, 255, 0.25);
      color: #fff;
      width: 5rem;
      height: 1.5rem;
      border-radius: 2rem;
    }
  }

  .m-works-section-title {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    span {
      position: absolute;
      top: 10%;
      left: 5%;
      font-family: "ELAND_Choice_M", sans-serif;
    }

    h2 {
      font-size: 1.25rem;
    }
  }

  .m-works-section_image01 {
    background-position: center;
    background-image: linear-gradient(
        to right,
        rgba(29, 29, 29, 0.8),
        rgba(170, 170, 170, 0.4)
      ),
      url("../assets/image/works/works-image_01.jpg");
  }

  .m-works-section_image02 {
    background-position: 40%;
    background-image: linear-gradient(
        to right,
        rgba(29, 29, 29, 0.8),
        rgba(170, 170, 170, 0.4)
      ),
      url("../assets/image/works/works-image_02.jpg");
  }

  .m-works-section_image03 {
    background-position: right;
    background-image: linear-gradient(
        to right,
        rgba(29, 29, 29, 0.8),
        rgba(170, 170, 170, 0.4)
      ),
      url("https://www.samhwa.com/files/editor/upload/1621919214975_11.png");
  }

  .m-works-section_image04 {
    background-position: 85%;
    background-image: linear-gradient(
        to right,
        rgba(29, 29, 29, 0.8),
        rgba(170, 170, 170, 0.4)
      ),
      url("https://image.laftel.net/carousel/carousel_hero_bocchan_w.jpg?Expires=1625565328&Signature=m8kh71vaoOl9hS76QlisqzjwfkkNPZAmM~oShU8mwx7rRCGuwxofPhqLtrvZkcp4goZATFZUkgZxPXacMnBPWlCR~6DKyqXhpuMdubM2xf9bzD01sd-qvMobtVd5dCY9jrm0nq7zUdj7xr2euVSwhGMFu1MPJRPzDu2Yjj4cdSrjXWJu5RjvSeXKtdSFx1Jv~La3wyFqWcGeCmo7kVTiN3H5wVfAM72buqfALyBBJ2Fjx1B1nnb8tZw539JbG0zZ08YLujKYspM0SMtHV0noXimPQmwOl7pOY3nrBSWdQ311~uWmsg2qYqtHmRE2ZbRgb6Mm3sgR9SbyYbqr8HqU8A__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A");
  }
}
</style>
