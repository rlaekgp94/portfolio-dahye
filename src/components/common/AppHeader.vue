<template>
  <header>
    <div class="nav-inner">
      <ul>
        <li><a href="#about" class="anchor">ABOUT</a></li>
        <li><a href="#works" class="anchor">WORKS</a></li>
        <li><a href="#contact" class="anchor">CONTACT</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
import $ from "jquery";
export default {
  name: "Header",
  mounted() {
    let nav = $("header"),
      navText = $(".anchor");

    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      if (scroll === 0) {
        nav.css("background", "transparent");
        navText.click(function () {
          $(this).css("color", "#0a4aee");
        });
        navText.hover(
          function () {
            $(this).css("color", "#fff");
          },
          function () {
            $(this).css("color", "#0a4aee");
          }
        );
      } else {
        nav.css("background", "#fff");
        navText.hover(function () {
          $(this).css("color", "#0a4aee");
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
  }
};
</script>

<style lang="scss" scoped>
$blue: #0a4aee;
$red: rgb(175, 0, 0);

// fade-up
@keyframes moveUp {
  from {
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

header {
  width: 100vw;
  height: 3rem;
  position: fixed;
  z-index: 10;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  .nav-inner {
    opacity: 0;
    animation: moveUp 0.5s forwards;
    width: 90vw;
    background: transparent;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    ul {
      width: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        &:not(:last-child) {
          margin-right: 2.5rem;
        }
      }
    }

    a {
      color: $blue;
      font-size: 0.8rem;
      position: relative;
      transition: all 0.5s;

      &:not(:last-child) {
        margin-right: 2.5rem;
      }

      &:before,
      &:after {
        content: "";
        position: absolute;
        width: 0%;
        height: 0.2rem;
        top: 50%;
        transform: translateY(-50%);
        background: $red;
      }
      &:before {
        left: -0.2rem;
      }
      &:after {
        right: 0.2rem;
        background: $red;
        transition: width 0.25s cubic-bezier(0.22, 0.61, 0.36, 1);
      }
      &:hover:before {
        background: $red;
        width: 100%;
        transition: width 0.25s cubic-bezier(0.22, 0.61, 0.36, 1);
      }
      &:hover:after {
        background: transparent;
        width: 100%;
        transition: 0s;
      }

      &:hover {
        color: #fff;
      }

      &:focus {
        color: $blue;
      }
    }
  }
}

// mobile
@media screen and (max-width: 768px) {
  header {
    .nav-inner {
      justify-content: center;
      a {
        font-size: 1rem;
      }
    }
  }
}
</style>
