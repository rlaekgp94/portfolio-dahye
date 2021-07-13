<template>
  <div id="Main">
    <Header />
    <MainBanner />
    <MainAbout />
    <MainWorks />
    <MainContact />
  </div>
</template>

<script>
export default {
  name: "TheMain",
  components: {
    MainBanner: () => import("@/layout/main/MainBanner.vue"),
    MainAbout: () => import("@/layout/main/MainAbout.vue"),
    MainWorks: () => import("@/layout/main/MainWorks.vue"),
    MainContact: () => import("@/layout/main/MainContact.vue"),
    Header: () => import("@/components/common/AppHeader.vue")
  }
};
</script>

<style></style>
