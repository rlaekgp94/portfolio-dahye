<template>
  <div id="work-section">
    <header>
      <div class="nav-inner">
        <ul>
          <li class="mobile">
            <router-link to="/works-Samhwa"
              ><img src="@/assets/image/icons/left-arrow.svg" alt="다음 페이지"
            /></router-link>
          </li>
          <li><router-link to="/">HOME</router-link></li>
          <li class="mobile">non</li>
        </ul>
      </div>
    </header>

    <div class="fixed-link-btn web">
      <router-link class="prev-link-btn" to="/works-Samhwa">PREV</router-link>
    </div>

    <section class="works-banner" data-scroll-section>
      <div data-scroll data-scroll-speed="2" data-scroll-delay="0.075">
        <div class="works-title" data-scroll>
          <svg
            data-scroll
            data-scroll-speed="2"
            data-scroll-delay="0.075"
            width="66"
            height="17"
          >
            <path
              d="M 4.911 16.884 h 2.446 c 0.87 0 1.574 -0.707 1.574 -1.579 V 15 c 0 -0.871 -0.704 -1.578 -1.574 -1.578 H 4.911 a 1.465 1.465 0 0 1 -1.458 -1.463 V 2.185 c 0 -0.871 -0.705 -1.578 -1.575 -1.578 h -0.304 C 0.705 0.607 0 1.314 0 2.185 v 9.774 c 0 2.709 2.21 4.925 4.911 4.925 M 35.298 4.07 h 1.66 v 11.236 c 0 0.871 0.705 1.577 1.574 1.577 h 0.305 c 0.87 0 1.574 -0.706 1.574 -1.578 V 4.07 h 1.66 c 0.87 0 1.574 -0.707 1.574 -1.579 v -0.305 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -6.773 c -0.87 0 -1.574 0.707 -1.574 1.578 v 0.305 c 0 0.872 0.705 1.58 1.574 1.58 M 46.487 16.852 c 0.103 0.02 0.21 0.032 0.318 0.032 h 6.345 c 0.87 0 1.574 -0.707 1.574 -1.579 V 15 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 H 48.683 V 10.49 h 3.473 c 0.868 0 1.573 -0.706 1.573 -1.578 v -0.306 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -3.472 V 4.07 H 53.15 c 0.87 0 1.574 -0.707 1.574 -1.578 v -0.305 c 0 -0.872 -0.705 -1.579 -1.574 -1.579 H 46.805 c -0.87 0 -1.575 0.707 -1.575 1.579 v 13.119 c 0 0.763 0.54 1.4 1.257 1.547 M 14.397 5.576 c 0 -0.727 0.51 -1.377 1.228 -1.49 c 0.903 -0.14 1.69 0.566 1.69 1.446 v 3.606 h -2.918 V 5.576 Z m -1.88 11.308 h 0.305 c 0.87 0 1.575 -0.707 1.575 -1.579 V 12.6 h 2.918 v 2.705 c 0 0.872 0.704 1.579 1.573 1.579 h 0.305 c 0.87 0 1.574 -0.707 1.574 -1.579 V 5.532 c 0 -2.842 -2.433 -5.142 -5.313 -4.909 c -2.567 0.208 -4.51 2.427 -4.51 5.01 v 9.672 c 0 0.872 0.704 1.579 1.574 1.579 Z M 28.12 4.07 h 2.445 c 0.869 0 1.574 -0.708 1.574 -1.58 v -0.305 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -2.446 c -2.7 0 -4.91 2.216 -4.91 4.925 v 9.773 c 0 0.872 0.703 1.578 1.573 1.578 h 0.304 c 0.87 0 1.574 -0.706 1.574 -1.578 V 10.92 h 3.905 c 0.869 0 1.574 -0.707 1.574 -1.579 v -0.304 c 0 -0.872 -0.705 -1.579 -1.574 -1.579 H 26.66 V 5.532 c 0 -0.805 0.657 -1.463 1.46 -1.463 M 61.649 16.884 h 2.445 c 0.87 0 1.574 -0.707 1.574 -1.579 V 15 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -2.445 c -0.803 0 -1.46 -0.658 -1.46 -1.463 V 2.185 c 0 -0.871 -0.705 -1.578 -1.573 -1.578 h -0.305 c -0.87 0 -1.574 0.707 -1.574 1.578 v 9.774 c 0 2.709 2.21 4.925 4.912 4.925"
            ></path>
          </svg>
        </div>
      </div>
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
        opacity: 0;
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
    url("https://image.laftel.net/carousel/final_gear_W_210525.jpg?Expires=1622063357&Signature=hy6boV6H3GlQJf1xyG-nvBizC9Vr8aGsHcOiSkGL4-GZYezu62INcIYgmQfUoYzoN6wZww2vSC3MZFHrfubC2qEJF5G2PlZfiKbdphedtcA8GgU5g8RoxARPCJKWbnaQVGASkx7Lgj4Iy4FhjO-58FpVrXLswrlc6IEOVKC0m4dqFu7~DYejxqXIZq6tnbIs0FBFZSAagGJ360zrUpazU1PaZPWZD0oHca5Aua9zOwuLD5b~AQuZ5GnN-29uv2HyZrwovYYoIGXufj2jL02-5w8x4rOtDk-9F0cggpAZIYT3vGpIhC-G23wScJG6PJWiXKeSxa32JufqHItwwsgAUg__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A")
      no-repeat center / cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .works-title {
    animation: moveUp ease-in 0.5s;

    svg {
      fill: #fff;
      transform: scale(7);
    }
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
