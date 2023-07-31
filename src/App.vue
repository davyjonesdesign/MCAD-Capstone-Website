<template>
  <router-view/>
  <nav :class="{'slide-in': isMenuOpen}">
    <router-link to="/" @click="toggleMenu" >Home</router-link>
    <router-link to="/about" @click="toggleMenu">About</router-link>
    <router-link to="/process" @click="toggleMenu">Process</router-link>
    <router-link to="/results" @click="toggleMenu">Results</router-link>
    <router-link to="/endnotes" @click="toggleMenu">Endnotes</router-link>
    <div class="teaserBtn-wrap">
      <button class="teaserBtn" @click="toggleTeaser" :class="{'router-link-exact-active': isTeaserOpen}">
        <svg v-if="!isTeaserOpen" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m19.76445,10.26795L7.3315,3.08978c-1.33333-.7698-3,.19245-3,1.73205v14.35634c0,1.5396,1.66667,2.50185,3,1.73205l12.43296-7.17817c1.33333-.7698,1.33333-2.6943,0-3.4641Z"/></svg>
        <svg v-else id="b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" y="11" width="24" height="2" transform="translate(12 -4.97056) rotate(45)"/><rect x="0" y="11" width="24" height="2" transform="translate(-4.97056 12) rotate(-45)"/></svg>
        <span v-if="!isTeaserOpen"></span>
        <span v-else></span>
      </button>
    </div>
    <p class="name">Davy Jones</p>
  </nav>
  <div class="teaserVid-wrap" @click="toggleTeaser" :class="{'pop-up': isTeaserOpen}">
    <iframe frameborder="0" src="https://mega.nz/embed/61JHmZLB#p91KWNv8MHAswPhzH5-IDqAJS4x_IJZDCX37s8bvIc0" allowfullscreen ></iframe>
  </div>
  
  <div class="ham-menu">
    <button class="hamBtn" @click="toggleMenu">
      <svg v-if="!isMenuOpen" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect y="3" width="24" height="2"/><rect y="19" width="24" height="2"/><rect y="10.98955" width="24" height="2"/></svg>
      <svg v-else id="b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" y="11" width="24" height="2" transform="translate(12 -4.97056) rotate(45)"/><rect x="0" y="11" width="24" height="2" transform="translate(-4.97056 12) rotate(-45)"/></svg>
    </button>
    <!-- <div class="teaserBtn-wrap">
      <button class="teaserBtn" @click="toggleTeaser" :class="{'active': isTeaserOpen}">
        <svg v-if="!isTeaserOpen" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m19.76445,10.26795L7.3315,3.08978c-1.33333-.7698-3,.19245-3,1.73205v14.35634c0,1.5396,1.66667,2.50185,3,1.73205l12.43296-7.17817c1.33333-.7698,1.33333-2.6943,0-3.4641Z"/></svg>
        <svg v-else id="b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" y="11" width="24" height="2" transform="translate(12 -4.97056) rotate(45)"/><rect x="0" y="11" width="24" height="2" transform="translate(-4.97056 12) rotate(-45)"/></svg>
        <span v-if="!isTeaserOpen">Teaser</span>
        <span v-else>Teaser</span>
      </button>
    </div> -->
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isTeaserOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleTeaser() {
      this.isTeaserOpen = !this.isTeaserOpen;
    },
  },
  mounted() {
    document.title = 'Written in Stone | MCAD Capstone'; // Set the new title
  },
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
