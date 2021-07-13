<template>
  <div id="app">
    <router-view />
    <Footer />
    <ScrollBar />
  </div>
</template>
<script>
export default {
  name: "app",
  components: {
    Footer: () => import("@/components/common/AppFooter.vue"),
    ScrollBar: () => import("@/components/common/AppScrollBar.vue")
  }
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

/* 최상위 root에 font-size부여 */
:root {
  font-size: 20px;
}

body {
  font-size: 1rem;
  --text-color: #fff;
  --bg-color: #1a181b;
  // --swiper-theme-color: #fff;
  color: var(--text-color);
  background: var(--bg-color);
  font-family: "Krona One", sans-serif;
}

@media screen and (max-width: 1024px) {
  :root {
    font-size: 16px;
  }
  body {
    font-size: 1rem;
  }
}
@media screen and (max-width: 768px) {
  :root {
    font-size: 16px;
  }
  body {
    font-size: 1rem;
  }
}

span.swiper-pagination-bullet.swiper-pagination-bullet-active {
  opacity: 1;
}

span.swiper-pagination-bullet {
  background: #fff;
  opacity: 0.5;
}
</style>
