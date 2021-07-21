<template>
  <section id="about">
    <div class="about-wrap">
      <div class="about-link">
        <a href="https://github.com/rlaekgp94" target="blank"
          ><span>Github</span></a
        >

        <input id="copyEmail" value="dany__k@naver.com" readonly />
        <button @click="emailCopy">
          <span>Email</span>
          <img src="@/assets/image/icons/copy-icon.svg" alt="복사 아이콘" />
        </button>
      </div>
      <!-- about-link -->

      <div class="about-title web">
        <h2>ABOUT .</h2>
      </div>
      <!-- web / tablet -->

      <div class="header_line web"></div>
      <!-- web / tablet -->

      <div class="m-about-inner mobile">
        <p class="m-about-info">
          안녕하세요, 웹 퍼블리셔 김다혜입니다.<br /><br />
          기획의 의도를 파악하는 것과 소통을 중요시 하는 웹 퍼블리셔가
          되고싶습니다. 공부하는 자세로 많은 사이트를 접하고 코드를 분석하면
          즐거운 자극이 되며 꾸준히 발전하고자 하는 마인드를 우선으로
          생각합니다.
        </p>

        <div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="slide-skill-box">
                  <strong>Markup &amp; CSS</strong>
                  <p>
                    퍼블리싱의 기본인 HTML, CSS를 이해하며 웹표준을 준수한
                    코드로 접근성을 높입니다. 사용성과 유지보수를 고려한 코드
                    작성을 목표로 합니다.
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-skill-box">
                  <strong>UI Design</strong>
                  <p>
                    기획서와 디자인을 보고 문서의 구성 요소들을 해석, 판단하여
                    문서를 구조화시키는 과정을 중시합니다.
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-skill-box">
                  <strong>Work as one</strong>
                  <p>
                    원활한 협업을 위해 팀원들과 소통을 기본시하며 다같이 이상의
                    성과를 창출하는것을 지향합니다.
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-skill-box">
                  <strong>Development</strong>
                  <p>
                    새로운 배움이라는 중요성, 스스로를 객관화하며 부족함을 찾아
                    자기계발에 노력하는 자세를 가지고 있습니다.
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-skill-box">
                  <strong>Interaction</strong>
                  <p>
                    반응형 웹과 동적 UI 구현에 관심이 많습니다. 인터랙티브 웹
                    구현을 위해 라이브러리의 동작원리를 이해하고 창의적인 기술을
                    구사하기 위해 공부합니다.
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <!-- mobile -->

      <div class="about-inner web">
        <p class="about-info">
          안녕하세요, 웹 퍼블리셔 김다혜입니다.<br /><br />
          기획의 의도를 파악하는 것과 소통을 중요시 하는 웹 퍼블리셔가 되고
          싶습니다. 공부하는 자세로 많은 사이트를 접하고 코드를 분석하면 즐거운
          자극이 되며 꾸준히 발전하고자 하는 마인드를 우선으로 생각합니다.
        </p>

        <div class="about-skills">
          <ul class="about-skills-inner">
            <li>
              <div class="about-skill-more-btn">
                <span>01</span>
                <p class="delay01">Markup &amp; CSS</p>
                <img
                  src="@/assets/image/icons/down-arrow-icon.svg"
                  alt="더보기 아이콘"
                />
              </div>

              <div class="about-skill-more">
                퍼블리싱의 기본인 HTML, CSS를 이해하며 웹표준을 준수한 코드로
                접근성을 높입니다.<br />사용성과 유지보수를 고려한 코드 작성을
                목표로 합니다.
              </div>
            </li>

            <li>
              <div class="about-skill-more-btn">
                <span>02</span>
                <p class="delay02">UI Design</p>
                <img
                  src="@/assets/image/icons/down-arrow-icon.svg"
                  alt="더보기 아이콘"
                />
              </div>

              <div class="about-skill-more">
                기획서와 디자인을 보고 문서의 구성 요소들을 해석, 판단하여<br />
                문서를 구조화시키는 과정을 중시합니다.
              </div>
            </li>

            <li>
              <div class="about-skill-more-btn">
                <span>03</span>
                <p class="delay03">Work as one</p>
                <img
                  src="@/assets/image/icons/down-arrow-icon.svg"
                  alt="더보기 아이콘"
                />
              </div>

              <div class="about-skill-more">
                원활한 협업을 위해 팀원들과 소통을 기본시하며<br />다같이 이상의
                성과를 창출하는것을 지향합니다.
              </div>
            </li>

            <li>
              <div class="about-skill-more-btn">
                <span>04</span>
                <p class="delay04">Development</p>
                <img
                  src="@/assets/image/icons/down-arrow-icon.svg"
                  alt="더보기 아이콘"
                />
              </div>

              <div class="about-skill-more">
                새로운 배움이라는 중요성, 스스로를 객관화하며 부족함을 찾아<br />
                자기계발에 노력하는 자세를 가지고 있습니다.
              </div>
            </li>

            <li>
              <div class="about-skill-more-btn">
                <span>05</span>
                <p class="delay05">Interaction</p>
                <img
                  src="@/assets/image/icons/down-arrow-icon.svg"
                  alt="더보기 아이콘"
                />
              </div>

              <div class="about-skill-more">
                반응형 웹과 동적 UI 구현에 관심이 많습니다.<br />인터랙티브 웹
                구현을 위해 라이브러리의 동작원리를 이해하고 창의적인 기술을
                구사하기 위해 공부합니다.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- web / tablet -->
    </div>
  </section>
</template>

<script>
import $ from "jquery";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
export default {
  name: "MainAbout",
  mounted() {
    // About Skill Accordion Slide
    const skill_btn = $(".about-skill-more-btn");

    skill_btn.click(function () {
      $(".about-skill-more")
        .not($(this).next(".about-skill-more").slideToggle(400))
        .slideUp();
    });

    // About Mobile Skills slide
    new Swiper(".swiper-container", {
      spaceBetween: 20,
      paginationType: "custom",
      loop: false,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1.5,
          slidesPerGroup: 1
        },
        480: {
          slidesPerView: 1.5,
          slidesPerGroup: 1
        },
        768: {
          slidesPerView: 2.25,
          slidesPerGroup: 1
        }
      }
    });
  },
  methods: {
    // About Email Copy
    emailCopy() {
      let copyText = document.getElementById("copyEmail");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("Copy");
      alert("이메일주소가 복사되었습니다.");
    }
  }
};
</script>

<style lang="scss" scoped>
$point: rgb(175, 0, 0);

.mobile {
  display: none;
}

#about {
  width: 100%;
  height: auto;
  padding: 8rem 0 6rem;
  overflow: hidden;
}

.about-wrap {
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.about-link {
  a {
    font-size: 0.8rem;
    color: #fff;
    font-weight: bold;
    margin-right: 5rem;

    span {
      border-bottom: 0.125rem solid #fff;
      padding-bottom: 0.2rem;
    }
  }

  button {
    color: #fff;
    font-family: "Krona One", sans-serif;
    font-size: 0.8rem;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: bold;

    span {
      border-bottom: 0.125rem solid #fff;
      padding-bottom: 0.2rem;
      margin-right: 0.5rem;
    }

    img {
      filter: invert(100%);
      width: 1rem;
      height: 1rem;
    }
  }
}

#copyEmail {
  position: absolute;
  top: 0;
  left: -9999rem;
}

.about-title {
  font-size: 3rem;
  margin-top: 6rem;
}

.header_line {
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  height: 0.025rem;
}

.about-inner {
  display: flex;
  justify-content: space-between;
}

.about-info {
  line-height: 1.5rem;
  font-size: 0.85rem;
  width: 25vw;
  font-family: "ELAND_Choice_M", sans-serif;
}

.about-skills {
  width: 45vw;
}

.about-skills-inner {
  font-size: 1.25rem;
  margin-top: -1.5rem;

  li {
    height: auto;
    line-height: 4rem;
    transition: all 0.5s;
    position: relative;
    padding: 0 2rem 0 3rem;
    display: flex;
    flex-direction: column;
    border-bottom: 0.025rem solid rgba(255, 255, 255, 0.5);

    .about-skill-more-btn {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    span {
      position: absolute;
      top: -0.25rem;
      left: 0.25rem;
      font-size: 0.65rem;
    }

    img {
      filter: invert(100%);
      width: 1rem;
      height: 1rem;
    }
  }
}

.about-skill-more {
  display: none;
  font-size: 0.85rem;
  width: 100%;
  height: auto;
  line-height: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  font-family: "ELAND_Choice_M", sans-serif;
}

// mobile
@media screen and (max-width: 768px) {
  #about {
    height: 85vh;
    padding: 5rem 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about-wrap {
    width: 85vw;
  }

  .web {
    display: none;
  }
  .mobile {
    display: block;
  }

  .about-wrap {
    margin: 0;
  }

  .about-link {
    margin-bottom: 3rem;
    a {
      font-size: 0.75rem;
    }
    button {
      font-size: 0.75rem;
      img {
        width: 0.7rem;
        height: 0.7rem;
      }
    }
  }

  .m-about-inner {
    width: 100%;
    height: auto;
  }

  .m-about-info {
    font-size: 0.875rem;
    line-height: 1.5rem;
    margin-bottom: 5rem;
    font-family: "ELAND_Choice_M", sans-serif;
  }

  .swiper-container {
    width: 90vw;
    height: 40vh;
    overflow: visible;
  }

  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    background: #fff;
    color: #000;
    border-radius: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slide-skill-box {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    strong {
      margin-top: 2rem;
      font-size: 1rem;
      font-family: "Krona One", sans-serif;
    }

    p {
      margin-bottom: 2rem;
      font-family: "ELAND_Choice_M", sans-serif;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }
  }
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    top: -3rem;
    right: 1rem;
    width: auto;
    text-align: right;
  }
}
</style>
