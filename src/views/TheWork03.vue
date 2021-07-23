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

    <section class="works-banner-wrap">
      <div class="works-banner-inner">
        <div class="project-title-wrap">
          <div class="project-title">
            <p>국내 종합도료기업 사이트</p>
            <div>
              <img
                src="../assets/image/works/samhwa-logo.svg"
                alt="삼화페인트 로고"
              />
              <img
                src="../assets/image/works/samhwa-logo-befor.svg"
                alt="삼화페인트 로고"
              />
            </div>
          </div>
          <div class="banner-link-btn">
            <a href="https://github.com/rlaekgp94/clone-samhwa" target="_blank"
              >Github</a
            >
            <a href="https://clone-samhwa.netlify.app" target="_blank">Demo</a>
          </div>
        </div>

        <div class="project-info-wrap">
          <ul>
            <li class="info">
              <h2>프로젝트 타입</h2>
              <div>
                <p>클론 팀프로젝트</p>
                <p>웹 제작</p>
              </div>
            </li>
            <li class="info">
              <h2>프로젝트 기여도</h2>
              <div>
                <p>Header, Footer, 3 Section</p>
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
          <li><a href="#header">Header</a></li>
          <li><a href="#section01">Section01</a></li>
          <li><a href="#section02">Section02</a></li>
          <li><a href="#section03">Section03</a></li>
          <li><a href="#footer">Footer</a></li>
        </ul>
      </aside>

      <div class="works-about-inner">
        <div id="header" class="work-box">
          <video muted autoplay loop class="web-border">
            <source
              src="@/assets/image/works/work03/work03-header.mp4"
              type="video/mp4"
            />
          </video>

          <div class="work-info">
            <strong>Web</strong>
            <p>- Header 스크롤이나 마우스오버시 이벤트 발생</p>
          </div>
        </div>

        <div id="section01" class="work-box">
          <video muted autoplay loop class="web-border">
            <source
              src="@/assets/image/works/work03/work03-color.mp4"
              type="video/mp4"
            />
          </video>

          <div class="work-info">
            <strong>Web</strong>
            <p>
              - Section01 컬러칩 버튼 클릭시 모달팝업<br />
              <span
                >Json파일을 작성하여 리스트렌더링을 하였고 클릭한 index 컬러의
                해당하는 컬러모달창이 노출됩니다.</span
              >
            </p>
          </div>
        </div>

        <div id="section02" class="work-box">
          <video muted autoplay loop class="web-border">
            <source
              src="@/assets/image/works/work03/work03-slide.mp4"
              type="video/mp4"
            />
          </video>
          <div class="work-info">
            <strong>Web</strong>
            <p>- Section02 Jquery를 이용하여 슬라이드 구현</p>
          </div>
        </div>

        <div id="section03" class="work-box">
          <img
            src="@/assets/image/works/work03/work03-section03.jpg"
            alt="삼화페인트 section03"
            class="web-border"
          />

          <div class="work-info">
            <strong>Web</strong>
            <p>- Section03</p>
          </div>
        </div>

        <div id="footer" class="work-box">
          <img
            src="@/assets/image/works/work03/work03-footer.jpg"
            alt="삼화페인트 footer"
            class="web-border"
          />

          <div class="work-info">
            <strong>Web</strong>
            <p>- Footer</p>
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
  background: linear-gradient(rgba(12, 12, 12, 0.75), #1a181b),
    url("http://www.samhwa.com/files/editor/upload/1622527929397_15.png")
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
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 10rem;
    }
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
  &:first-child {
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
  margin-top: 0.5rem;
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
    }
  }

  .banner-link-btn {
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
      url("http://www.samhwa.com/files/editor/upload/1622527929397_15.png")
        no-repeat center / cover;
  }

  .project-title {
    div {
      img {
        width: 7rem;
      }
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
