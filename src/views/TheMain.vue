<template>
  <div data-scroll-container>
    <header>
      <div class="header-inner">
        <div class="section-anchor">
          <a href="#test1" data-scroll-to>ABOUT</a>
          <a href="#test2" data-scroll-to>WORKS</a>
          <a href="#test3" data-scroll-to>CONTACT</a>
        </div>
      </div>
    </header>
    <div class="main" data-scroll-section>
      <div data-scroll>
        <h1 data-scroll data-scroll-speed="2">I'M A</h1>
        <h1 data-scroll data-scroll-speed="2" data-scroll-delay="0.2">WEB</h1>
        <h1
          class="test1"
          data-scroll
          data-scroll-speed="2"
          data-scroll-delay="0.2"
        >
          <span class="white">PUBLSHER</span>
        </h1>
        <span
          class="red"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="7"
        ></span>
      </div>
      <p data-scroll data-scroll-delay="0.2" class="white">&#169; 2021</p>
      <!-- <div class="c-header_line" data-scroll data-scroll-repeat></div> -->
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-3"
        class="test2"
      >
        my portfolio to showcase my projects<br />.dahye
      </p>
    </div>

    <section id="test1" data-scroll-section>
      <img
        data-scroll-sticky
        src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <h2 data-scroll data-scroll-speed="1" class="credit">
        Made by Advantage
      </h2>
    </section>

    <section id="test2" data-scroll-section>
      <h2 data-scroll data-scroll-speed="1" class="credit">
        Made by Advantage
      </h2>
      <img
        data-scroll
        src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
    </section>

    <section id="test3" data-scroll-section>
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

header {
  width: 100vw;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  line-height: 10vh;
  mix-blend-mode: screen;
  animation: moveUp ease-in 0.5s;

  .header-inner {
    margin: 0 auto;
    width: 90vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .section-anchor {
      a {
        padding: 0 0.45rem 0 0.25rem;
        color: var(--text-color);
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
          background: rgb(255, 0, 0);
        }

        &:before {
          left: -0.2rem;
        }

        &:after {
          right: 0.2rem;
          background: rgba(255, 0, 0, 0.651);
          transition: width 0.25s cubic-bezier(0.22, 0.61, 0.36, 1);
        }

        &:hover:before {
          background: rgba(255, 0, 0, 0.651);
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
.main {
  min-height: 100vh;
  width: 90%;
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 auto;
  h1 {
    font-size: 7rem;
    line-height: 6.5rem;
  }
  .red {
    background: linear-gradient(-45deg, #0a4aee, rgba(255, 0, 0, 0.651));
    width: 25rem;
    height: 25rem;
    border-radius: 25rem;
    position: absolute;
    bottom: 17rem;
    left: 40rem;
    mix-blend-mode: difference;
  }
  .test2 {
    color: #fff;
    position: absolute;
    right: -7rem;
    bottom: 10rem;
    text-align: right;
    line-height: 1.5rem;
  }
}
section {
  min-height: 100vh;
  width: 90%;
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  // grid-gap: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.c-header_line {
  position: absolute;
  bottom: 10.5rem;
  width: 60vw;
  background: #fff;
  height: 0.025rem;
  transform: scaleX(0);
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.c-header_line.is-inview {
  transform: scaleX(1);
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

* {
  box-sizing: border-box;
}

.white {
  color: #fff;
}
</style>
