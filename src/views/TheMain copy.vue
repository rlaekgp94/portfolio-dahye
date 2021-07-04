<template>
  <div data-scroll-container>
    <section data-scroll-section>
      <h1 data-scroll data-scroll-speed="1">
        <span>Horizontal</span> <span>scroll</span> <span>section</span>
      </h1>
      <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
        with GSAP ScrollTrigger & Locomotive Scroll
      </p>
    </section>
    <!--     
    <section id="about" data-scroll-section>
      <h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed="2">
        I'm a<br />Publisher<span>.</span>
      </h1>
    </section> -->

    <!-- <div class="c-header_line" data-scroll data-scroll-repeat></div> -->

    <section data-scroll-section>
      <img
        data-scroll
        src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <h2 data-scroll data-scroll-speed="1" class="credit">
        <a href="https://thisisadvantage.com" target="_blank"
          >Made by Advantage</a
        >
      </h2>
    </section>
    <section data-scroll-section>
      <h2 data-scroll data-scroll-speed="1" class="credit">
        <a href="https://thisisadvantage.com" target="_blank"
          >Made by Advantage</a
        >
      </h2>
      <img
        data-scroll
        src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
    </section>
    <section data-scroll-section>
      <img
        data-scroll
        src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <h2 data-scroll data-scroll-speed="1" class="credit">
        <a href="https://thisisadvantage.com" target="_blank"
          >Made by Advantage</a
        >
      </h2>
    </section>
    <section data-scroll-section>
      <h2 data-scroll data-scroll-speed="1" class="credit">
        <a href="https://thisisadvantage.com" target="_blank"
          >Made by Advantage</a
        >
      </h2>
    </section>
  </div>
</template>
//
<script>
import LocomotiveScroll from "locomotive-scroll";
export default {
  mounted() {
    new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  },
};
</script>
<style lang="scss" scoped>
// .c-header_line {
//   position: absolute;
//   bottom: 10.5rem;
//   width: 60vw;
//   background: #fff;
//   height: 0.025rem;
//   transform: scaleX(0);
//   transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
// }
// .c-header_line.is-inview {
//   transform: scaleX(1);
// }
section {
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  padding: 50px 10vw;
  margin: auto;
  place-items: center;
}

img {
  height: 80vh;
  width: auto;
  object-fit: cover;
}

h1 {
  font-size: 5rem;
  line-height: 1;
  font-weight: 800;
  margin-bottom: 1rem;
  position: absolute;
  top: 10vw;
  left: 10vw;
  z-index: 4;
  overflow-wrap: break-word;
  hyphens: auto;
  span {
    display: block;
  }
}

h2 {
  font-size: 2rem;
  max-width: 400px;
}

.credit {
  font-family: Termina, sans-serif;
  a {
    color: var(--text-color);
  }
}

* {
  box-sizing: border-box;
}

p {
  position: absolute;
  bottom: 10vw;
  right: 10vw;
  width: 200px;
  line-height: 1.5;
}
</style>
