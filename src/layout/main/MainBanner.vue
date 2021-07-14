<template>
  <section id="banner">
    <div class="banner-title">
      <div>
        <p>I'M <span>A</span></p>
      </div>
      <div>
        <p>WEB</p>
      </div>
      <div>
        <p>PUBLSHER</p>
      </div>
    </div>

    <div class="banner-items-wrap">
      <div class="banner-items">
        <div class="banner-symbol-wrap">
          <div class="banner-symbol"></div>
        </div>

        <div class="deco-text01 web">
          <svg viewBox="0 0 100 100">
            <defs>
              <path
                id="circle"
                d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text font-size="7">
              <textPath xlink:href="#circle">
                Copyright &copy; da hye kim, All rights reserved &mdash;
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <p class="deco-text02">&copy; 2021</p>
    </div>

    <div class="banner-info-wrap">
      <p class="deco-text03">my portfolio to showcase my projects</p>
      <p class="deco-text04">
        이 사이트는 개인용 포트폴리오 목적으로 제작되었습니다.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {}
};
</script>

<style lang="scss" scoped>
$blue: #0a4aee;
$point: rgb(175, 0, 0);

// 360회전
@keyframes rotate360 {
  100% {
    transform: rotate(360deg);
  }
}

// fade-up
@keyframes moveUp {
  from {
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

#banner {
  width: 90%;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}

.banner-title {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  div {
    font-size: 7vw;
    line-height: 7vw;
    &:not(:last-child) p {
      color: $blue;
    }
  }
}

.banner-items-wrap {
  position: absolute;
  top: 12.5%;
  right: 10%;
  z-index: 1;
}

.banner-items {
  position: relative;
  width: 32rem;
  height: 32rem;

  .banner-symbol-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner-symbol {
    background: linear-gradient(-45deg, $blue, $point);
    width: 20rem;
    height: 20rem;
    border-radius: 20rem;
  }
}

.deco-text01 {
  position: absolute;
  top: 0;
  left: 0;
  width: 32rem;
  height: 32rem;

  svg {
    fill: #fff;
    width: 100%;
    height: 100%;
    font-family: "Syncopate", sans-serif;
    font-weight: bold;
    animation: rotate360 15s linear infinite;
  }
}

.banner-info-wrap {
  position: absolute;
  bottom: 2rem;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.deco-text02 {
  position: absolute;
  top: 30%;
  right: 22%;
}

.deco-text03 {
  font-size: 0.8rem;
  line-height: 1.6rem;
  font-family: "Syncopate", sans-serif;
  opacity: 0.8;
}

.deco-text04 {
  font-size: 0.8rem;
  line-height: 1.6rem;
  font-family: "Syncopate", sans-serif;
  opacity: 0.7;
}

// tablet
@media screen and (max-width: 1024px) {
  .banner-title {
    div {
      font-size: 10.5vw;
      line-height: 10.5vw;
      p {
        span {
          display: block;
        }
      }
    }
  }

  .banner-items-wrap {
    position: absolute;
    top: 30%;
    right: 2.5%;
  }
}

// mobile
@media screen and (max-width: 768px) {
  .banner-title {
    top: 35%;
    transform: translateY(-35%);
    div {
      font-size: 11vw;
      line-height: 12vw;
      &:not(:last-child) p {
        color: #fff;
      }
    }
  }

  .banner-items-wrap {
    position: absolute;
    top: 45%;
    right: 15%;
    z-index: 1;
  }

  .banner-items {
    width: 15rem;
    height: 15rem;

    .banner-symbol {
      width: 100%;
      height: 100%;
    }
  }

  .deco-text01 {
    top: 65%;
    left: 55%;
    width: 7.5rem;
    height: 7.5rem;
  }

  .deco-text02 {
    position: absolute;
    top: 60%;
    right: 70%;
    font-size: 0.875rem;
  }

  .deco-text03 {
    line-height: 1.25rem;
    font-size: 0.7rem;
  }

  .deco-text04 {
    line-height: 1.25rem;
    font-size: 0.75rem;
  }
}
</style>
