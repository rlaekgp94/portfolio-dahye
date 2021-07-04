<template>
  <div data-scroll-container>
    <header>
      <div class="header-inner">
        <div class="section-anchor">
          <a href="#about" data-scroll-to>ABOUT</a>
          <a href="#works" data-scroll-to>WORKS</a>
          <a href="#contact" data-scroll-to>CONTACT</a>
        </div>
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
        data-scroll-delay="0.05"
      >
        이 사이트는 개인용 포트폴리오 목적으로 제작되었습니다.
      </p>
    </section>

    <div id="about" data-scroll-section>
      <section>
        <img
          data-scroll-sticky
          src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <h2 data-scroll data-scroll-speed="1" class="credit">
          Made by Advantage
        </h2>
      </section>

      <section>
        <img
          data-scroll-sticky
          src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <h2 data-scroll data-scroll-speed="1" class="credit">
          Made by Advantage
        </h2>
      </section>
    </div>

    <section id="works" data-scroll-section>
      <h2 data-scroll data-scroll-speed="1" class="credit">
        Made by Advantage
      </h2>
      <img
        data-scroll
        src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
    </section>

    <section id="contact" data-scroll-section>
      <h2 data-scroll data-scroll-speed="1" class="credit">
        Made by Advantage
      </h2>
    </section>
  </div>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
export default {
  mounted() {
    new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });
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
  min-height: 100vh;
  width: 90vw;
  display: flex;
  align-items: center;
  margin: 0 auto;
}

header {
  width: 100vw;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  line-height: 10vh;
  animation: moveUp ease-in 0.5s;

  .header-inner {
    margin: 0 auto;
    width: 90vw;
    display: flex;
    justify-content: flex-end;
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
}

.banner {
  position: relative;

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
    opacity: 0.7;
  }

  .deco-text03 {
    position: absolute;
    right: 0;
    bottom: 10rem;
    line-height: 1.5rem;
    font-family: "Syncopate", sans-serif;
    opacity: 0.7;
  }

  .deco-text04 {
    position: absolute;
    right: 0;
    bottom: 8rem;
    line-height: 1.5rem;
    font-family: "Syncopate", sans-serif;
  }
}

// About section
#about {
  justify-content: center;
}

img {
  height: 80vh;
  width: auto;
  object-fit: cover;
}

h2 {
  font-size: 2rem;
  max-width: 400px;
}
</style>
