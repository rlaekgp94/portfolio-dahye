<template>
  <div id="work-section">
    <header>
      <div class="nav-inner">
        <ul>
          <li class="mobile">
            <router-link to="/works-Marshall"
              ><img src="@/assets/image/icons/left-arrow.svg" alt="이전페이지"
            /></router-link>
          </li>
          <li><router-link to="/">HOME</router-link></li>
          <li class="mobile">
            <router-link to="/works-Laftel"
              ><img src="@/assets/image/icons/left-arrow.svg" alt="다음 페이지"
            /></router-link>
          </li>
        </ul>
      </div>
    </header>

    <div class="fixed-link-btn web">
      <router-link class="prev-link-btn" to="/works-Marshall">PREV</router-link>
      <router-link class="next-link-btn" to="/works-Laftel">NEXT</router-link>
    </div>

    <section class="works-banner" data-scroll-section>
      <img
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="0.075"
        src="../assets/image/works/samhwa-logo.svg"
        alt="삼화페인트 로고"
      />
      <img
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="0.075"
        src="../assets/image/works/samhwa-logo-befor.svg"
        alt="삼화페인트 로고"
      />
    </section>

    <section>
      <div>ㅎㅇ</div>
    </section>

    <section>
      <div>ㅎㅇ</div>
    </section>

    <section>
      <div>ㅎㅇ</div>
    </section>

    <section>
      <div>ㅎㅇ</div>
    </section>
  </div>
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
$point: rgb(175, 0, 0);

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

.mobile {
  display: none;
}

header {
  width: 100vw;
  height: 3rem;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-inner {
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

#work-section {
  width: 100%;
  height: auto;
  overflow: hidden;
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

  .prev-link-btn {
    left: -1.5rem;
    top: 50vh;
    transform: rotate(90deg);
  }

  .next-link-btn {
    right: -1.5rem;
    top: 50vh;
    transform: rotate(-90deg);
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
  background: linear-gradient(rgba(12, 12, 12, 0.5), #1a181b),
    url("http://www.samhwa.com/files/editor/upload/1622527929397_15.png")
      no-repeat center / cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 15rem;
    animation: moveUp ease-in 0.5s;
  }
}

// mobile
@media screen and (max-width: 768px) {
  .mobile {
    display: block;
  }

  .web {
    display: none;
  }
  .nav-inner {
    justify-content: center;
    a {
      font-size: 1rem;
    }
  }
}
</style>
