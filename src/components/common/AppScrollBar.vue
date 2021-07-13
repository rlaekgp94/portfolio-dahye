<template>
  <div></div>
</template>
<script>
export default {
  name: "ScrollBar"
};
</script>
<style>
/* scrollbar kustom */
body::-webkit-scrollbar {
  width: 8px;
}
body::-webkit-scrollbar-track {
  background-color: transparent;
}
body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
}
body::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}
</style>
