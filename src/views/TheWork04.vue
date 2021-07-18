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

    <section class="works-banner-wrap">
      <div class="works-banner-inner">
        <div class="project-title-wrap">
          <div class="project-title">
            <p>국내 애니메이션 스트리밍 사이트</p>
            <svg width="66" height="17">
              <path
                d="M 4.911 16.884 h 2.446 c 0.87 0 1.574 -0.707 1.574 -1.579 V 15 c 0 -0.871 -0.704 -1.578 -1.574 -1.578 H 4.911 a 1.465 1.465 0 0 1 -1.458 -1.463 V 2.185 c 0 -0.871 -0.705 -1.578 -1.575 -1.578 h -0.304 C 0.705 0.607 0 1.314 0 2.185 v 9.774 c 0 2.709 2.21 4.925 4.911 4.925 M 35.298 4.07 h 1.66 v 11.236 c 0 0.871 0.705 1.577 1.574 1.577 h 0.305 c 0.87 0 1.574 -0.706 1.574 -1.578 V 4.07 h 1.66 c 0.87 0 1.574 -0.707 1.574 -1.579 v -0.305 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -6.773 c -0.87 0 -1.574 0.707 -1.574 1.578 v 0.305 c 0 0.872 0.705 1.58 1.574 1.58 M 46.487 16.852 c 0.103 0.02 0.21 0.032 0.318 0.032 h 6.345 c 0.87 0 1.574 -0.707 1.574 -1.579 V 15 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 H 48.683 V 10.49 h 3.473 c 0.868 0 1.573 -0.706 1.573 -1.578 v -0.306 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -3.472 V 4.07 H 53.15 c 0.87 0 1.574 -0.707 1.574 -1.578 v -0.305 c 0 -0.872 -0.705 -1.579 -1.574 -1.579 H 46.805 c -0.87 0 -1.575 0.707 -1.575 1.579 v 13.119 c 0 0.763 0.54 1.4 1.257 1.547 M 14.397 5.576 c 0 -0.727 0.51 -1.377 1.228 -1.49 c 0.903 -0.14 1.69 0.566 1.69 1.446 v 3.606 h -2.918 V 5.576 Z m -1.88 11.308 h 0.305 c 0.87 0 1.575 -0.707 1.575 -1.579 V 12.6 h 2.918 v 2.705 c 0 0.872 0.704 1.579 1.573 1.579 h 0.305 c 0.87 0 1.574 -0.707 1.574 -1.579 V 5.532 c 0 -2.842 -2.433 -5.142 -5.313 -4.909 c -2.567 0.208 -4.51 2.427 -4.51 5.01 v 9.672 c 0 0.872 0.704 1.579 1.574 1.579 Z M 28.12 4.07 h 2.445 c 0.869 0 1.574 -0.708 1.574 -1.58 v -0.305 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -2.446 c -2.7 0 -4.91 2.216 -4.91 4.925 v 9.773 c 0 0.872 0.703 1.578 1.573 1.578 h 0.304 c 0.87 0 1.574 -0.706 1.574 -1.578 V 10.92 h 3.905 c 0.869 0 1.574 -0.707 1.574 -1.579 v -0.304 c 0 -0.872 -0.705 -1.579 -1.574 -1.579 H 26.66 V 5.532 c 0 -0.805 0.657 -1.463 1.46 -1.463 M 61.649 16.884 h 2.445 c 0.87 0 1.574 -0.707 1.574 -1.579 V 15 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -2.445 c -0.803 0 -1.46 -0.658 -1.46 -1.463 V 2.185 c 0 -0.871 -0.705 -1.578 -1.573 -1.578 h -0.305 c -0.87 0 -1.574 0.707 -1.574 1.578 v 9.774 c 0 2.709 2.21 4.925 4.912 4.925"
              ></path>
            </svg>
          </div>
          <div class="banner-link-btn">
            <a href="#">Github</a>
            <a href="#">Demo</a>
          </div>
        </div>

        <div class="project-info-wrap">
          <ul>
            <li class="info">
              <h2>Project type</h2>
              <div>
                <p>Clone Project</p>
                <p>Responsive Website</p>
              </div>
            </li>
            <li class="info">
              <h2>Team Project</h2>
              <div>
                <p>Design 100%</p>
                <p>publishing 100%</p>
              </div>
            </li>
            <li class="info">
              <h2>Keyword</h2>
              <div class="keyword-wrap">
                <VUE class="keyword" /><CSS3 class="keyword" /><JQUERY
                  class="keyword"
                /><JS class="keyword" />
              </div>
            </li>
            <li class="info">
              <h2>Open source used</h2>
              <div>
                <p>Swiper.js</p>
              </div>
            </li>
          </ul>
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
  },
  components: {
    VUE: () => import("@/components/keyword/vueKeyword.vue"),
    CSS3: () => import("@/components/keyword/cssKeyword.vue"),
    JQUERY: () => import("@/components/keyword/jqueryKeyword.vue"),
    JS: () => import("@/components/keyword/jsKeyword.vue")
  }
};
</script>

<style lang="scss" scoped>
$blue: #0a4aee;
$point: rgb(175, 0, 0);

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
  transition: all 0.5s;
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
  margin: 0 auto;
}

.works-banner-wrap {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(12, 12, 12, 0.75), #1a181b),
    url("https://image.laftel.net/carousel/final_gear_W_210525.jpg?Expires=1622063357&Signature=hy6boV6H3GlQJf1xyG-nvBizC9Vr8aGsHcOiSkGL4-GZYezu62INcIYgmQfUoYzoN6wZww2vSC3MZFHrfubC2qEJF5G2PlZfiKbdphedtcA8GgU5g8RoxARPCJKWbnaQVGASkx7Lgj4Iy4FhjO-58FpVrXLswrlc6IEOVKC0m4dqFu7~DYejxqXIZq6tnbIs0FBFZSAagGJ360zrUpazU1PaZPWZD0oHca5Aua9zOwuLD5b~AQuZ5GnN-29uv2HyZrwovYYoIGXufj2jL02-5w8x4rOtDk-9F0cggpAZIYT3vGpIhC-G23wScJG6PJWiXKeSxa32JufqHItwwsgAUg__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A")
      no-repeat center / cover;
}

.works-banner-inner {
  width: 90vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.project-title-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 55%;
}

.project-info-wrap {
  width: 45%;
  font-weight: bold;
  font-family: "Arial", sans-serif;
}

.project-title {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    font-family: "ELAND_Choice_M";
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }
  svg {
    fill: #fff;
    transform: scale(6);
    margin: 2.5rem 0;
  }
}

.project-info-wrap {
  ul li {
    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      border-bottom: none;
    }

    h2 {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 0.8rem;
    }

    padding: 2rem 0;
    border-bottom: 0.05rem solid rgba(255, 255, 255, 0.5);
  }
}

.info {
  &:not(:nth-child(3)) {
    div {
      p {
        width: 50%;
      }
      display: flex;
      flex-direction: row;
    }
  }
}

.keyword-wrap {
  .keyword {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
}

.banner-link-btn {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 16rem;
  height: 100%;
  a {
    background: #fff;
    color: #000;
    font-family: "Arial", sans-serif;
    font-weight: bold;
    width: 7rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    display: block;
    border-radius: 2rem;
  }
}

// tablet
@media screen and (max-width: 1024px) {
  .nav-inner {
    a {
      font-size: 1rem;
    }
  }

  .works-banner-inner {
    flex-direction: column;
  }

  .project-title-wrap {
    width: 100%;
    margin-bottom: 3rem;
  }

  .project-info-wrap {
    width: 60%;
    ul li {
      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  .project-title {
    p {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }

  .banner-link-btn {
    margin-top: 1.5rem;
    width: 20rem;
    a {
      width: 8.5rem;
      height: 2.25rem;
      line-height: 2.25rem;
      border-radius: 2.25rem;
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
  }

  .works-banner-wrap {
    height: auto;
    background: none;
  }

  .works-banner-inner {
    width: 100%;
  }

  .banner-link-btn {
    justify-content: space-around;
    height: auto;
  }

  .project-title-wrap {
    height: 50vh;
    margin-bottom: 0;
    background: linear-gradient(rgba(12, 12, 12, 0.5), #1a181b),
      url("https://image.laftel.net/carousel/final_gear_W_210525.jpg?Expires=1622063357&Signature=hy6boV6H3GlQJf1xyG-nvBizC9Vr8aGsHcOiSkGL4-GZYezu62INcIYgmQfUoYzoN6wZww2vSC3MZFHrfubC2qEJF5G2PlZfiKbdphedtcA8GgU5g8RoxARPCJKWbnaQVGASkx7Lgj4Iy4FhjO-58FpVrXLswrlc6IEOVKC0m4dqFu7~DYejxqXIZq6tnbIs0FBFZSAagGJ360zrUpazU1PaZPWZD0oHca5Aua9zOwuLD5b~AQuZ5GnN-29uv2HyZrwovYYoIGXufj2jL02-5w8x4rOtDk-9F0cggpAZIYT3vGpIhC-G23wScJG6PJWiXKeSxa32JufqHItwwsgAUg__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A")
        no-repeat 60% / cover;
  }

  .project-title {
    svg {
      fill: #fff;
      transform: scale(3.5);
      margin: 2rem 0;
    }
  }

  .project-info-wrap {
    width: 85vw;
  }

  .keyword-wrap {
    display: flex;
    justify-content: space-between;
    .keyword {
      &:not(:last-child) {
        margin-right: 0;
      }
    }
  }
}
</style>
