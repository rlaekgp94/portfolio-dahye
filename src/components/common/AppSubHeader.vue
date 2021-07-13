<template>
  <header>
    <div class="nav-inner">
      <ul>
        <li>
          <router-link to="/works-Marshall"
            ><img src="@/assets/image/icons/left-arrow.svg" alt="이전페이지"
          /></router-link>
        </li>
        <li><router-link to="/">HOME</router-link></li>
        <li>
          <router-link to="/"
            ><img src="@/assets/image/icons/left-arrow.svg" alt="다음 페이지"
          /></router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import $ from "jquery";
export default {
  name: "Header",
  mounted() {
    let nav = $("header"),
      navText = $("header a"),
      navBtn = $("header img");

    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      if (scroll === 0) {
        nav.css("background", "transparent");
        navText.css("color", "#fff");
        navBtn.css("filter", "invert(100%)");
      } else {
        nav.css("background", "#fff");
        navText.css("color", "#0a4aee");
        navBtn.css({
          filter:
            "invert(21%) sepia(92%) saturate(3685%) hue-rotate(224deg) brightness(92%) contrast(108%)"
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
$blue: #0a4aee;
$red: rgb(175, 0, 0);

// fade-up
@keyframes moveUp {
  from {
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

header {
  width: 100vw;
  height: 3rem;
  position: fixed;
  z-index: 10;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-inner {
  opacity: 0;
  animation: moveUp 0.5s forwards;
  width: 90vw;
  background: transparent;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      &:not(:last-child) {
        margin-right: 2.5rem;
      }

      &:last-child {
        img {
          transform: rotate(0deg);
          transform: scaleX(-1);
        }
      }
    }
  }

  a {
    color: #fff;
    font-size: 0.8rem;
    position: relative;
    transition: all 0.5s;
    img {
      margin-right: 1rem;
      filter: invert(100%);
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}

// mobile
@media screen and (max-width: 768px) {
  .nav-inner {
    justify-content: center;
    a {
      font-size: 1rem;
    }
  }
}
</style>
