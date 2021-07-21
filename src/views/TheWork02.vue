<template>
  <div id="work-section">
    <header>
      <div class="nav-inner">
        <ul>
          <li class="mobile">
            <router-link to="/works-Printbakery"
              ><img src="@/assets/image/icons/left-arrow.svg" alt="이전페이지"
            /></router-link>
          </li>
          <li><router-link to="/">HOME</router-link></li>
          <li class="mobile">
            <router-link to="/works-Samhwa"
              ><img src="@/assets/image/icons/left-arrow.svg" alt="다음 페이지"
            /></router-link>
          </li>
        </ul>
      </div>
    </header>

    <div class="fixed-link-btn web">
      <router-link class="prev-link-btn" to="/works-Printbakery"
        >PREV</router-link
      >
      <router-link class="next-link-btn" to="/works-Samhwa">NEXT</router-link>
    </div>

    <section class="works-banner-wrap">
      <div class="works-banner-inner">
        <div class="project-title-wrap">
          <div class="project-title">
            <p>해외 앰프 설계/제작 브랜드 사이트</p>
            <img src="@/assets/image/works/marshall-logo.svg" alt="마쉘 로고" />
          </div>
          <div class="banner-link-btn">
            <a
              href="https://github.com/rlaekgp94/renewal-marshall"
              target="_blank"
              >Github</a
            >
            <a href="https://renewal-marshall.netlify.app" target="_blank"
              >Demo</a
            >
          </div>
        </div>

        <div class="project-info-wrap">
          <ul>
            <li class="info">
              <h2>프로젝트 타입</h2>
              <div>
                <p>리뉴얼 프로젝트</p>
                <p>웹 제작</p>
              </div>
            </li>
            <li class="info">
              <h2>프로젝트 기여도</h2>
              <div>
                <p>디자인 100%</p>
                <p>퍼블리싱 100%</p>
              </div>
            </li>
            <li class="info">
              <h2>키워드</h2>
              <div class="keyword-wrap">
                <VUE class="keyword" /><CSS3 class="keyword" /><JQUERY
                  class="keyword"
                /><JS class="keyword" />
              </div>
            </li>
            <li class="info">
              <h2>프로젝트 구성</h2>
              <div>
                <p>메인 1P</p>
                <p>서브페이지 4P</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="works-about-wrap">
      <div class="layout">
        <video muted autoplay loop class="video-border">
          <source
            src="@/assets/image/works/work02/work02-main-banner.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div class="layout">
        <video muted autoplay loop class="video-border">
          <source
            src="@/assets/image/works/work02/work02-subpage-scroll.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div class="layout">
        <video muted autoplay loop class="video-border">
          <source
            src="@/assets/image/works/work02/work02-subpage-slide.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div class="layout">
        <img
          src="@/assets/image/works/work02/work02-main-all.jpg"
          alt="마샬 메인전체"
          class="image-border-all"
        />
      </div>
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
        img {
          transform: rotate(0deg);
          transform: scaleX(-1);
        }
      }
    }
  }

  a {
    display: block;
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
  margin: 0 auto;
}

.works-banner-wrap {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(12, 12, 12, 0.65), #1a181b),
    url("https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw8b196dac/images/categories/speakers/speakers-main-category/Desktop_Hero_Speakers_1927x800.jpg?sw=2000&sh=2000&sm=fit")
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
    margin-bottom: 1.5rem;
  }

  img {
    width: 20rem;
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
      font-weight: 500;
    }

    padding: 2rem 0;
    border-bottom: 0.05rem solid rgba(255, 255, 255, 0.5);
    font-family: "ELAND_Choice_M";
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

// works-about
.works-about-wrap {
  width: 90vw;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 5rem 0;
}

.image-border-all {
  height: auto;
  border-radius: 0.5rem;
  width: 80%;
}

.video-border {
  width: 70%;
  border-radius: 0.5rem;
}

.layout-all {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 5rem;
}

.layout {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 0;
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
      url("https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw8b196dac/images/categories/speakers/speakers-main-category/Desktop_Hero_Speakers_1927x800.jpg?sw=2000&sh=2000&sm=fit")
        no-repeat center / cover;
  }

  .project-title {
    img {
      width: 15rem;
    }
  }

  .project-info-wrap {
    width: 85vw;

    ul li {
      h2 {
        font-size: 1rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 0.8rem;
      }

      padding: 1.5rem 0;
    }
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
