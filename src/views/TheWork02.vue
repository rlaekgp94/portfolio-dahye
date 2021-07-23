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
                <p>서브페이지 3P</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="works-about-wrap">
      <aside class="works-aside">
        <p>Contents</p>
        <ul>
          <li><a href="#mainpage">메인 페이지</a></li>
          <li><a href="#subpage">서브 페이지</a></li>
          <li><a href="#mainlayout">메인 레이아웃</a></li>
        </ul>
      </aside>

      <div class="works-about-inner">
        <div id="mainpage" class="work-box">
          <video muted autoplay loop class="web-border">
            <source
              src="@/assets/image/works/work02/work02-main-banner.mp4"
              type="video/mp4"
            />
          </video>

          <div class="work-info">
            <strong>Web</strong>
            <p>
              - Main 자동 슬라이드 배너<br />
              - 슬라이드 라이브러리를 커스텀하였습니다.
              <span>사용된 라이브러리 : swiper.js</span>
            </p>
          </div>
        </div>

        <div id="subpage" class="work-box">
          <video muted autoplay loop class="web-border">
            <source
              src="@/assets/image/works/work02/work02-subpage-scroll.mp4"
              type="video/mp4"
            />
          </video>
          <div class="work-info">
            <strong>Web</strong>
            <p>
              - HEADPHONES 페이지 <br />
              - Aside 메뉴 클릭시 해당 카테고리 상품리스트가 노출됩니다.
            </p>
          </div>
        </div>

        <div class="work-box">
          <video muted autoplay loop class="web-border">
            <source
              src="@/assets/image/works/work02/work02-subpage-slide.mp4"
              type="video/mp4"
            />
          </video>

          <div class="work-info">
            <strong>Web</strong>
            <p>
              - SPEAKERS 페이지<br />
              - 슬라이드로 해당 상품의 여러 이미지를 볼수 있습니다.<br />
              -
              <a
                href="https://github.com/rlaekgp94/renewal-marshall/blob/master/src/assets/data/storeHeadPhones.json"
                >Json파일</a
              >을 작성하여 V-for을 사용해 리스트 렌더링을 하였습니다.
              <br /><span>사용된 라이브러리 : Swiper.js</span>
            </p>
          </div>
        </div>

        <div id="mainlayout" class="work-box">
          <img
            src="@/assets/image/works/work02/work02-main-all.jpg"
            alt="마샬 메인전체"
            class="web-border"
          />
          <div class="work-info">
            <strong>Web</strong>
            <p>Home 전체 레이아웃</p>
          </div>
        </div>
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

    $("a").click(function () {
      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top
        },
        500
      );
      return false;
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
  width: 100%;
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
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 5rem;
}

.works-aside {
  width: auto;
  height: 10rem;
  position: sticky;
  top: 5rem;
  left: 0;
  padding-top: 8rem;
  p {
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Arial", sans-serif;
    &::before {
      content: "";
      width: 1.5rem;
      height: 0.15rem;
      background: #fff;
      display: inline-block;
      margin-right: 0.5rem;
    }
  }

  ul {
    font-family: "ELAND_Choice_M", sans-serif;
    text-indent: 2rem;
    margin-top: 2rem;
    li {
      line-height: 1.5rem;
      a {
        color: #fff;
        font-size: 0.8rem;
        &:hover {
          border-bottom: 1px solid #fff;
        }
      }
    }
  }
}

.works-about-inner {
  width: 70%;
  height: 100%;
}

.work-box {
  display: flex;
  flex-direction: column;
  padding-top: 8rem;
}

.work-info {
  font-family: "Arial", sans-serif;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  line-height: 1.25rem;
  strong {
    font-size: 1rem;
    font-family: "Arial", sans-serif;
    margin-right: 1rem;
  }
  p {
    font-size: 0.8rem;
    font-family: "ELAND_Choice_M", sans-serif;
    span {
      color: rgba(255, 255, 255, 0.603);
    }
    a {
      color: #fff;
      border-bottom: 1px solid #fff;
    }
  }
}

.web-border {
  width: 100%;
  border-radius: 0.5rem;
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
  // works-about
  .works-about-wrap {
    justify-content: center;
    flex-direction: column;
  }

  .works-aside {
    position: static;
    height: auto;

    p {
      font-size: 2rem;
      &::before {
        display: none;
      }
    }
    ul {
      display: none;
    }
  }

  .works-about-inner {
    width: 100%;
  }

  .work-box {
    align-items: center;
    padding-top: 7.5rem;
    &:first-child {
      padding-top: 5rem;
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
