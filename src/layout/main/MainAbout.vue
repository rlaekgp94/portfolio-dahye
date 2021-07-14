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
          언제나 사용자의 관점에서 생각하며 열정적으로 소통하는 웹 퍼블리셔가
          되고싶습니다. 컴포넌트 단위의 유지보수에 최적화된 마크업에 관심이
          많습니다.
        </p>

        <div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="slide-skill-box">
                  <strong>Ul Development</strong>
                  <p>
                    웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.
                    유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등
                    탄탄한 업무 프로세스를 지향합니다.
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-skill-box">
                  <strong>Markup&design</strong>
                  <p>
                    웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.
                    유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등
                    탄탄한 업무 프로세스를 지향합니다.
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-skill-box">
                  <strong>co-work</strong>
                  <p>
                    웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.
                    유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등
                    탄탄한 업무 프로세스를 지향합니다.
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-skill-box">
                  <strong>Skills</strong>
                  <p>
                    웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.
                    유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등
                    탄탄한 업무 프로세스를 지향합니다.
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-skill-box">
                  <strong>For Users</strong>
                  <p>
                    웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.
                    유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등
                    탄탄한 업무 프로세스를 지향합니다.
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
          언제나 사용자의 관점에서 생각하며 열정적으로 소통하는 웹 퍼블리셔가
          되고싶습니다. 컴포넌트 단위의 유지보수에 최적화된 마크업에 관심이
          많습니다.
        </p>

        <div class="about-skills">
          <ul class="about-skills-inner">
            <li>
              <div class="about-skill-more-btn">
                <span>01</span>
                <p class="delay01">Ul Development</p>
                <img
                  src="@/assets/image/icons/down-arrow-icon.svg"
                  alt="더보기 아이콘"
                />
              </div>

              <div class="about-skill-more">
                웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.<br />
                유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등 탄탄한
                업무 프로세스를 지향합니다.
              </div>
            </li>

            <li>
              <div class="about-skill-more-btn">
                <span>02</span>
                <p class="delay02">Markup & design</p>
                <img
                  src="@/assets/image/icons/down-arrow-icon.svg"
                  alt="더보기 아이콘"
                />
              </div>

              <div class="about-skill-more">
                웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.<br />
                유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등 탄탄한
                업무 프로세스를 지향합니다.
              </div>
            </li>

            <li>
              <div class="about-skill-more-btn">
                <span>03</span>
                <p class="delay03">co-work</p>
                <img
                  src="@/assets/image/icons/down-arrow-icon.svg"
                  alt="더보기 아이콘"
                />
              </div>

              <div class="about-skill-more">
                웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.<br />
                유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등 탄탄한
                업무 프로세스를 지향합니다.
              </div>
            </li>

            <li>
              <div class="about-skill-more-btn">
                <span>04</span>
                <p class="delay04">Skills</p>
                <img
                  src="@/assets/image/icons/down-arrow-icon.svg"
                  alt="더보기 아이콘"
                />
              </div>

              <div class="about-skill-more">
                웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.<br />
                유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등 탄탄한
                업무 프로세스를 지향합니다.
              </div>
            </li>

            <li>
              <div class="about-skill-more-btn">
                <span>05</span>
                <p class="delay05">For Users</p>
                <img
                  src="@/assets/image/icons/down-arrow-icon.svg"
                  alt="더보기 아이콘"
                />
              </div>

              <div class="about-skill-more">
                웹 퍼블리싱HTML, CSS, JS을 빠삭하게 이해하며 잘 다룹니다.<br />
                유지보수를 고려한 코드 작성, 협업을 위한 가이드 제작 등 탄탄한
                업무 프로세스를 지향합니다.
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
      spaceBetween: 25,
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
          slidesPerView: 1.25,
          slidesPerGroup: 1
        },
        480: {
          slidesPerView: 1.25,
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
}

// mobile
@media screen and (max-width: 768px) {
  #about {
    height: 90vh;
    padding: 5rem 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
      font-size: 1rem;
    }
    button {
      font-size: 1rem;
    }
  }

  .m-about-inner {
    width: 100%;
    height: auto;
  }

  .m-about-info {
    line-height: 1.5rem;
    margin-bottom: 5rem;
  }

  .swiper-container {
    width: 90vw;
    height: 45vh;
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
    justify-content: space-around;
    flex-direction: column;

    strong {
      font-size: 1.25rem;
      font-family: "Krona One", sans-serif;
    }

    p {
      font-family: "ELAND_Choice_M", sans-serif;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  .swiper-pagination {
    text-align: right;
    top: -3rem;
  }
}
</style>
