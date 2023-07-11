<template>
  <router-view/>
  <nav :class="{'slide-in': isMenuOpen}">
    <router-link to="/" @click="toggleMenu" >Home</router-link>
    <router-link to="/about" @click="toggleMenu">About</router-link>
    <router-link to="/resources" @click="toggleMenu">Resources</router-link>
    <router-link to="/process" @click="toggleMenu">Process</router-link>
  </nav>
  <div class="ham-menu">
    <button class="hamBtn" @click="toggleMenu">
      <svg v-if="!isMenuOpen" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect y="3" width="24" height="2"/><rect y="19" width="24" height="2"/><rect y="10.98955" width="24" height="2"/></svg>
      <svg v-else id="b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" y="11" width="24" height="2" transform="translate(12 -4.97056) rotate(45)"/><rect x="0" y="11" width="24" height="2" transform="translate(-4.97056 12) rotate(-45)"/></svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  }
}
</script>

<style lang="scss">
@import '@/styles/colors.scss';
@import '@/styles/main.scss';
@import '@/styles/header.scss';
@import '@/styles/nav.scss';
@import '@/styles/cards.scss';
@import '@/styles/logo.scss';
@import '@/styles/pages.scss';
@import '@/styles/mediaQueries.scss';
</style>
