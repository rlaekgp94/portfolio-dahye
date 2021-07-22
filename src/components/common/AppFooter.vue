<template>
  <footer id="appFooter">
    <div class="footer-inner">
      <p>&copy; 2021 Dahye-kim Portfolio</p>
      <div class="fixed-top-btn">
        <img src="@/assets/image/icons/top-arrow.svg" alt="위로 버튼" />
      </div>
    </div>
  </footer>
</template>

<script>
import $ from "jquery";
export default {
  name: "AppFooter",
  mounted() {
    $(".fixed-top-btn").click(function () {
      $("html,body").stop().animate(
        {
          scrollTop: 0
        },
        1000
      );
    });
  }
};
</script>

<style lang="scss" scoped>
footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 0.7rem;
  width: 100%;
  height: 7rem;
}

.footer-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90vw;
  height: 100%;
  margin: 0 auto;
}

.fixed-top-btn {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  img {
    filter: invert(100%);
  }
}

// mobile
@media screen and (max-width: 768px) {
  .footer-inner {
    width: 85vw;
  }
}
</style>
