<template>
  <div id="works">
    <div class="works-wrap">
      <aside class="works-title">
        <span>PROJECT</span><br />Do you want to see my project?
      </aside>
      <ul>
        <li class="works-list">
          <aside>01</aside>
          <router-link
            to="/works-Printbakery"
            class="list-image image01"
          ></router-link>
        </li>

        <li class="works-list">
          <aside>02</aside>
          <router-link
            to="/works-Marshall"
            class="list-image image02"
          ></router-link>
        </li>

        <li class="works-list">
          <aside>03</aside>
          <router-link
            to="/works-Samhwa"
            class="list-image image03"
          ></router-link>
        </li>

        <li class="works-list">
          <aside>04</aside>
          <router-link
            to="/works-Laftel"
            class="list-image image04"
          ></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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

  ul {
    width: 42.5vw;
  }
}

.works-title {
  span {
    font-size: 3rem;
  }
  font-size: 1.5rem;
  width: auto;
  height: 15rem;
  position: sticky;
  top: 10rem;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.works-list {
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;

  aside {
    margin-right: 2rem;
    font-size: 1.25rem;
  }
}

.list-image {
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(60%);
}

.image01 {
  background-position: center;
  background-image: url("../../assets/image/works/works-image_01.jpg");
}

.image02 {
  background-position: 40%;
  background-image: url("../../assets/image/works/works-image_02.jpg");
}

.image03 {
  background-position: right;
  background-image: url("https://www.samhwa.com/files/editor/upload/1621919214975_11.png");
}

.image04 {
  background-position: 75%;
  background-image: url("https://image.laftel.net/carousel/carousel_hero_bocchan_w.jpg?Expires=1625565328&Signature=m8kh71vaoOl9hS76QlisqzjwfkkNPZAmM~oShU8mwx7rRCGuwxofPhqLtrvZkcp4goZATFZUkgZxPXacMnBPWlCR~6DKyqXhpuMdubM2xf9bzD01sd-qvMobtVd5dCY9jrm0nq7zUdj7xr2euVSwhGMFu1MPJRPzDu2Yjj4cdSrjXWJu5RjvSeXKtdSFx1Jv~La3wyFqWcGeCmo7kVTiN3H5wVfAM72buqfALyBBJ2Fjx1B1nnb8tZw539JbG0zZ08YLujKYspM0SMtHV0noXimPQmwOl7pOY3nrBSWdQ311~uWmsg2qYqtHmRE2ZbRgb6Mm3sgR9SbyYbqr8HqU8A__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A");
}
</style>
