<template>
  <section>
    <div class="div">
      <h1 data-scroll data-scroll-speed="1">
        <span>Horizontal</span> <span>scroll</span> <span>section</span>
      </h1>
      <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
        with GSAP ScrollTrigger & Locomotive Scroll
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  padding: 50px 10vw;
  margin: auto;
  place-items: center;
  border: 1px solid red;
}

img {
  height: 80vh;
  width: auto;
  object-fit: cover;
}

h1 {
  font-size: 5rem;
  line-height: 1;
  font-weight: 800;
  margin-bottom: 1rem;
  position: absolute;
  top: 10vw;
  left: 10vw;
  z-index: 4;
  overflow-wrap: break-word;
  hyphens: auto;
  span {
    display: block;
  }
}

h2 {
  font-size: 2rem;
  max-width: 400px;
}

.credit {
  font-family: Termina, sans-serif;
  a {
    color: var(--text-color);
  }
}

* {
  box-sizing: border-box;
}

p {
  position: absolute;
  bottom: 10vw;
  right: 10vw;
  width: 200px;
  line-height: 1.5;
}
</style>
