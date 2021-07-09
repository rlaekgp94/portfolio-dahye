<template>
  <div data-scroll-container>
    <header>
      <router-link to="/"
        ><img
          src="@/assets/image/icons/left-arrow.svg"
          alt="홈버튼"
        />HOME</router-link
      >
    </header>

    <div class="fixed-link-btn">
      <router-link class="next-link-btn" to="/works-Marshall">NEXT</router-link>
    </div>

    <section class="works-banner" data-scroll-section>
      <img
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="0.075"
        src="https://printbakery.cafe24.com/%40/img/background.png"
        alt="프린트베이커리 로고"
      />
    </section>

    <section data-scroll-section>
      <div>ㅎㅇ</div>
    </section>

    <section data-scroll-section>
      <div>ㅎㅇ</div>
    </section>

    <section data-scroll-section>
      <div>ㅎㅇ</div>
    </section>

    <section data-scroll-section>
      <div>ㅎㅇ</div>
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

header {
  position: fixed;
  top: 5vh;
  left: 5vw;
  z-index: 10;
  a {
    color: #fff;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    &:hover {
      color: $normal-color;
      img {
        filter: invert(21%) sepia(92%) saturate(3685%) hue-rotate(224deg)
          brightness(92%) contrast(108%);
      }
    }
    img {
      margin-right: 1rem;
      filter: invert(100%);
      width: 2rem;
      height: 2rem;
    }
  }
}

.fixed-link-btn {
  a {
    position: fixed;
    z-index: 10;
    width: 4rem;
    height: 3em;
    background: #fff;
    color: #000;
    text-align: center;
    line-height: 1.75rem;
    font-weight: bold;
    font-size: 0.75rem;
  }

  .next-link-btn {
    right: -1.5rem;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
  }
}

// 기본값
section {
  width: 90vw;
  min-height: 100vh;
  margin: 0 auto;
}

.works-banner {
  width: 100vw;
  background: linear-gradient(rgba(12, 12, 12, 0.2), #1a181b),
    url("../assets/image/works/works-image_01.jpg") no-repeat center / cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: invert(100%) sepia(0%) saturate(7432%) hue-rotate(4deg)
      brightness(106%) contrast(99%);
    width: 30rem;
    animation: moveUp ease-in 0.5s;
  }
}
</style>
