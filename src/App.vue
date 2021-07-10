<template>
  <div id="app" data-scroll-container>
    <router-view />
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

    window.addEventListener("resize", function () {
      scroll.update();
    });
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Krona+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Syncopate&display=swap");

@font-face {
  font-family: "ELAND_Choice_M";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/ELAND_Choice_M.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

body {
  --text-color: #fff;
  --bg-color: #1a181b;
  // --swiper-theme-color: #fff;
  color: var(--text-color);
  background: var(--bg-color);
  font-family: "Krona One", sans-serif;
}

span.swiper-pagination-bullet.swiper-pagination-bullet-active {
  opacity: 1;
}

span.swiper-pagination-bullet {
  background: #fff;
  opacity: 0.5;
}

html.has-scroll-smooth {
  overflow: hidden;
}

html.has-scroll-dragging {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.has-scroll-smooth body {
  overflow: hidden;
}

.has-scroll-smooth [data-scroll-container] {
  min-height: 100vh;
}

[data-scroll-direction="horizontal"] [data-scroll-container] {
  height: 100vh;
  display: inline-block;
  white-space: nowrap;
}

[data-scroll-direction="horizontal"] [data-scroll-section] {
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  height: 100%;
}

.c-scrollbar {
  display: none;
  // position: absolute;
  // right: 0;
  // top: 0;
  // width: 11px;
  // height: 100%;
  // transform-origin: center right;
  // transition: transform 0.3s, opacity 0.3s;
  // opacity: 0;
}

.c-scrollbar:hover {
  transform: scaleX(1.45);
}

.c-scrollbar:hover,
.has-scroll-scrolling .c-scrollbar,
.has-scroll-dragging .c-scrollbar {
  opacity: 1;
}

[data-scroll-direction="horizontal"] .c-scrollbar {
  width: 100%;
  height: 10px;
  top: auto;
  bottom: 0;
  transform: scaleY(1);
}

[data-scroll-direction="horizontal"] .c-scrollbar:hover {
  transform: scaleY(1.3);
}

.c-scrollbar_thumb {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  opacity: 0.5;
  width: 7px;
  border-radius: 10px;
  margin: 2px;
  cursor: -webkit-grab;
  cursor: grab;
}

.has-scroll-dragging .c-scrollbar_thumb {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}

[data-scroll-direction="horizontal"] .c-scrollbar_thumb {
  right: auto;
  bottom: 0;
}
</style>
