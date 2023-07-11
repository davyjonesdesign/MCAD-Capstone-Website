<template>
  <div class="process">
    <header class="header-internal">
      <h2>Process</h2>
      <div class="splash-content">
        <WisLogo/>
      </div>
      <p class="name name-internal">Davy Jones</p>
    </header>
    <div class="page">
      <transition-group name="fade" mode="out-in">
        <div v-if="isContentVisible" :class="['content-wrapper', { 'img-right': currentContent.imgRight }]" :key="currentIndex">
          <img v-if="currentContent.imgLeft" :src="currentContent.imgLeft" alt="Process Image: {{ currentContent.title }}" />
          <div :class="['content-text', { 'text-right': currentContent.imgRight }]">
            <h3>{{ currentContent.title }}</h3>
            <p v-for="pp in currentContent.text" v-bind:key="pp.id">{{ pp }}</p>
          </div>
          <img v-if="currentContent.imgRight" :src="currentContent.imgRight" alt="Process Image: {{ currentContent.title }}" />
        </div>
      </transition-group>
    </div>
    <div class="arrowBtns">
      <button class="previousBtn" @click="previousContent">
        <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points=".00006 12 1.42859 10.57141 1.42865 10.57141 10.00006 2 11.42865 3.42859 3.95776 10.89948 24 10.89948 24 12.89948 3.75671 12.89948 11.42865 20.57141 10.00006 22 1.42865 13.42859 1.42859 13.42865 0 12.00006 .00006 12"/></svg>
      </button>
      <button class="forwardBtn" @click="nextContent">
        <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="23.99994 12 22.57141 10.57141 22.57135 10.57141 13.99994 2 12.57135 3.42859 20.04224 10.89948 0 10.89948 0 12.89948 20.24329 12.89948 12.57135 20.57141 13.99994 22 22.57135 13.42859 22.57141 13.42865 24 12.00006 23.99994 12"/></svg>
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WisLogo from '@/components/WisLogo.vue';

export default {
  name: 'ProcessView',
  data() {
    return {
      currentIndex: 0,
      content: [
        { 
          title: 'Content 1', 
          text: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Netus et malesuada fames ac turpis. Imperdiet sed euismod nisi porta lorem mollis. Auctor urna nunc id cursus metus. Volutpat blandit aliquam etiam erat velit scelerisque in. Eu nisl nunc mi ipsum faucibus. A iaculis at erat pellentesque adipiscing. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Netus et malesuada fames ac turpis. Imperdiet sed euismod nisi porta lorem mollis. Auctor urna nunc id cursus metus. Volutpat blandit aliquam etiam erat velit scelerisque in. Eu nisl nunc mi ipsum faucibus. A iaculis at erat pellentesque adipiscing. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo.'
          ],
          imgLeft: require('@/assets/mount-temptation.jpg')
        },
        { title: 'Content 2', text: ['This is the second content.'], imgRight: require('@/assets/mount-temptation.jpg')},
        { title: 'Content 3', text: ['This is the third content.'] }
      ],
      isContentVisible: true
    };
  },
  components: {
    WisLogo
  },
  computed: {
    currentContent() {
      // Ensure currentIndex is within bounds
      const index = Math.min(
        Math.max(0, this.currentIndex),
        this.content.length - 1
      );

      // Return the content object at the current index
      return this.content[index];
    }
  },
  methods: {
    nextContent() {
      this.isContentVisible = false;
      setTimeout(() => {
        this.currentIndex = Math.min(
          this.currentIndex + 1,
          this.content.length - 1
        );
        this.isContentVisible = true;
      }, 350);
    },
    previousContent() {
      this.isContentVisible = false;
      setTimeout(() => {
        this.currentIndex = Math.max(this.currentIndex - 1, 0);
        this.isContentVisible = true;
      }, 350);
    },
    handleKeydown(event) {
      if (event.key === 'ArrowLeft') {
        this.previousContent();
      } else if (event.key === 'ArrowRight') {
        this.nextContent();
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }
};
</script>