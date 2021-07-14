<template>
  <div id="works">
    <div class="works-wrap">
      <aside class="works-title-wrap">
        <div class="works-title-inner">
          <div class="inner-text">
            <div>
              <div class="title-line"></div>
              <h1>
                A WORKS<br />
                2021
              </h1>
            </div>
            <p>Do you want to see my project?</p>
          </div>
          <span class="inner-scroll-fxied">SCROLL</span>
        </div>
      </aside>

      <ul class="works-list-wrap">
        <li class="works-list">
          <router-link to="/works-Printbakery" class="works-box">
            <div class="list-image image01"></div>

            <div class="list-info">
              <p>국내 미술품 경매 브랜드 사이트</p>
              <img
                class="logo01"
                src="https://printbakery.cafe24.com/%40/img/background.png"
                alt="프린트베이커리 로고"
              />
            </div>

            <div class="more-btn">
              <p>read more</p>
              <img src="@/assets/image/icons/right-arrow.svg" alt="next btn" />
            </div>
          </router-link>
        </li>
        <!-- works01 -->

        <li class="works-list">
          <router-link to="/works-Marshall" class="works-box">
            <div class="list-image image02"></div>

            <div class="list-info">
              <p>해외 앰프 설계/제작 브랜드 사이트</p>
              <img
                class="logo02"
                src="@/assets/image/works/marshall-logo.svg"
                alt="마쉘 로고"
              />
            </div>

            <div class="more-btn">
              <p>read more</p>
              <img src="@/assets/image/icons/right-arrow.svg" alt="next btn" />
            </div>
          </router-link>
        </li>
        <!-- works02 -->

        <li class="works-list">
          <router-link to="/works-Samhwa" class="works-box">
            <div class="list-image image03"></div>

            <div class="list-info">
              <p>국내 종합도료기업 사이트</p>
              <div class="logo03">
                <img
                  src="@/assets/image/works/samhwa-logo.svg"
                  alt="삼화페인트 로고"
                />
                <img
                  src="@/assets/image/works/samhwa-logo-befor.svg"
                  alt="삼화페인트 로고"
                />
              </div>
            </div>

            <div class="more-btn">
              <p>read more</p>
              <img src="@/assets/image/icons/right-arrow.svg" alt="next btn" />
            </div>
          </router-link>
        </li>
        <!-- works03 -->

        <li class="works-list">
          <router-link to="/works-Laftel" class="works-box">
            <div class="list-image image04"></div>

            <div class="list-info">
              <p>국내 애니메이션 스트리밍 사이트</p>
              <div class="logo04">
                <svg width="66" height="17">
                  <path
                    d="M 4.911 16.884 h 2.446 c 0.87 0 1.574 -0.707 1.574 -1.579 V 15 c 0 -0.871 -0.704 -1.578 -1.574 -1.578 H 4.911 a 1.465 1.465 0 0 1 -1.458 -1.463 V 2.185 c 0 -0.871 -0.705 -1.578 -1.575 -1.578 h -0.304 C 0.705 0.607 0 1.314 0 2.185 v 9.774 c 0 2.709 2.21 4.925 4.911 4.925 M 35.298 4.07 h 1.66 v 11.236 c 0 0.871 0.705 1.577 1.574 1.577 h 0.305 c 0.87 0 1.574 -0.706 1.574 -1.578 V 4.07 h 1.66 c 0.87 0 1.574 -0.707 1.574 -1.579 v -0.305 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -6.773 c -0.87 0 -1.574 0.707 -1.574 1.578 v 0.305 c 0 0.872 0.705 1.58 1.574 1.58 M 46.487 16.852 c 0.103 0.02 0.21 0.032 0.318 0.032 h 6.345 c 0.87 0 1.574 -0.707 1.574 -1.579 V 15 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 H 48.683 V 10.49 h 3.473 c 0.868 0 1.573 -0.706 1.573 -1.578 v -0.306 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -3.472 V 4.07 H 53.15 c 0.87 0 1.574 -0.707 1.574 -1.578 v -0.305 c 0 -0.872 -0.705 -1.579 -1.574 -1.579 H 46.805 c -0.87 0 -1.575 0.707 -1.575 1.579 v 13.119 c 0 0.763 0.54 1.4 1.257 1.547 M 14.397 5.576 c 0 -0.727 0.51 -1.377 1.228 -1.49 c 0.903 -0.14 1.69 0.566 1.69 1.446 v 3.606 h -2.918 V 5.576 Z m -1.88 11.308 h 0.305 c 0.87 0 1.575 -0.707 1.575 -1.579 V 12.6 h 2.918 v 2.705 c 0 0.872 0.704 1.579 1.573 1.579 h 0.305 c 0.87 0 1.574 -0.707 1.574 -1.579 V 5.532 c 0 -2.842 -2.433 -5.142 -5.313 -4.909 c -2.567 0.208 -4.51 2.427 -4.51 5.01 v 9.672 c 0 0.872 0.704 1.579 1.574 1.579 Z M 28.12 4.07 h 2.445 c 0.869 0 1.574 -0.708 1.574 -1.58 v -0.305 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -2.446 c -2.7 0 -4.91 2.216 -4.91 4.925 v 9.773 c 0 0.872 0.703 1.578 1.573 1.578 h 0.304 c 0.87 0 1.574 -0.706 1.574 -1.578 V 10.92 h 3.905 c 0.869 0 1.574 -0.707 1.574 -1.579 v -0.304 c 0 -0.872 -0.705 -1.579 -1.574 -1.579 H 26.66 V 5.532 c 0 -0.805 0.657 -1.463 1.46 -1.463 M 61.649 16.884 h 2.445 c 0.87 0 1.574 -0.707 1.574 -1.579 V 15 c 0 -0.871 -0.705 -1.578 -1.574 -1.578 h -2.445 c -0.803 0 -1.46 -0.658 -1.46 -1.463 V 2.185 c 0 -0.871 -0.705 -1.578 -1.573 -1.578 h -0.305 c -0.87 0 -1.574 0.707 -1.574 1.578 v 9.774 c 0 2.709 2.21 4.925 4.912 4.925"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="more-btn">
              <p>read more</p>
              <img src="@/assets/image/icons/right-arrow.svg" alt="next btn" />
            </div>
          </router-link>
        </li>
        <!-- works04 -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainWorks"
};
</script>

<style lang="scss" scoped>
$blue: #0a4aee;
$point: rgb(175, 0, 0);

#works {
  width: 100%;
  height: auto;
  padding: 6.5rem 0 6rem;
}

.works-wrap {
  margin: 0 auto;
  width: 90vw;
  height: auto;
  display: flex;
  justify-content: space-between;
}

// aside
.works-title-wrap {
  width: auto;
  height: 70vh;
  position: sticky;
  top: 9rem;
  left: 0;
}

.works-title-inner {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  p {
    font-size: 0.85rem;
    color: $blue;
  }
}

.inner-scroll-fxied {
  &::before {
    display: inline-block;
    content: "";
    width: 5rem;
    height: 0.05rem;
    background: #fff;
    margin-right: 1rem;
    opacity: 0.7;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.65rem;
  transform: rotate(-90deg);
  transform-origin: top left;
}

.inner-text {
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: space-between;
  flex-direction: column;
  .title-line {
    background: $blue;
    width: 2.75rem;
    height: 0.5rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3rem;
    line-height: 4rem;
  }
}

// list
.works-list-wrap {
  width: 42.5vw;
}

.works-list {
  &:not(:last-child) {
    margin-bottom: 6rem;
  }
  width: 100%;
  height: 80vh;
  position: relative;
}

.works-box {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  &:hover .list-image {
    transform: scale(1.1);
  }
}

.list-info {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);
  width: auto;
  height: auto;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 0.8rem;
    font-family: "ELAND_Choice_M";
  }
  .logo01 {
    margin-top: 1.5rem;
    filter: invert(100%) sepia(0%) saturate(7432%) hue-rotate(4deg)
      brightness(106%) contrast(99%);
    width: 20rem;
  }

  .logo02 {
    margin-top: 1.5rem;
    width: 20rem;
  }

  .logo03 {
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
    img {
      width: 8rem;
    }
  }

  .logo04 {
    margin-top: 2.5rem;
    svg {
      fill: #fff;
      transform: scale(4);
    }
  }
}

.more-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  background: $blue;
  width: 100%;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  p {
    color: #fff;
    font-size: 0.8rem;
    margin-right: 1rem;
    text-transform: uppercase;
  }
  img {
    width: 0.65rem;
    height: 0.65rem;
    filter: invert(100%);
    margin-right: 1rem;
  }
}

.list-image {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(60%);
  transition: all 1s ease-out;
}

.image01 {
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 121, 0.4), rgba(0, 71, 171, 0.3)),
    url("../../assets/image/works/works-image_01.jpg");
}

.image02 {
  background-position: top;
  background-image: linear-gradient(rgba(0, 0, 121, 0.6), rgba(0, 71, 171, 0.4)),
    url("https://img2.quasarzone.com/editor/2020/12/19/31ff7d23c0eb533297665a07dc6d9c78.jpg");
}

.image03 {
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 121, 0.5), rgba(0, 71, 171, 0.4)),
    url("//www.samhwa.com/files/banner/1610935038284_banner_2-min.jpg");
}

.image04 {
  background-position: 75%;
  background-image: linear-gradient(rgba(0, 0, 121, 0.4), rgba(0, 71, 171, 0.2)),
    url("https://image.laftel.net/carousel/carousel_hero_bocchan_w.jpg?Expires=1625565328&Signature=m8kh71vaoOl9hS76QlisqzjwfkkNPZAmM~oShU8mwx7rRCGuwxofPhqLtrvZkcp4goZATFZUkgZxPXacMnBPWlCR~6DKyqXhpuMdubM2xf9bzD01sd-qvMobtVd5dCY9jrm0nq7zUdj7xr2euVSwhGMFu1MPJRPzDu2Yjj4cdSrjXWJu5RjvSeXKtdSFx1Jv~La3wyFqWcGeCmo7kVTiN3H5wVfAM72buqfALyBBJ2Fjx1B1nnb8tZw539JbG0zZ08YLujKYspM0SMtHV0noXimPQmwOl7pOY3nrBSWdQ311~uWmsg2qYqtHmRE2ZbRgb6Mm3sgR9SbyYbqr8HqU8A__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A");
}
</style>
