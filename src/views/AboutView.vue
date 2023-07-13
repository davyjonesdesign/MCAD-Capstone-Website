<template>
  <div class="about">
    <header class="header-internal">
      <h2>About</h2>
      <div class="splash-content">
        <WisLogo/>
      </div>
      <p class="name name-internal">Davy Jones</p>
    </header>
    <div class="page">
      <transition-group name="fade" mode="out-in">
        <div v-if="isContentVisible" class="content-wrapper">
          <div class="content">
            <div v-if="currentContent.imgA" class="img-wrap">
              <img :src="currentContent.imgA" alt="Process Image: {{ currentContent.title }}" />
              <p class="caption">{{ currentContent.imgCaption }}</p>
            </div>
            <div class="content-text">              
              <h3>{{ currentContent.title }}</h3>
              <p v-for="pp in currentContent.text" v-bind:key="pp.id" :class="pp.style">{{ pp.text }}</p>
            </div>
            <div class="arrowBtns pageBtns">

              <button class="previousBtn" @click="previousContent" :disabled="currentIndex === 0">
                <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points=".00006 12 1.42859 10.57141 1.42865 10.57141 10.00006 2 11.42865 3.42859 3.95776 10.89948 24 10.89948 24 12.89948 3.75671 12.89948 11.42865 20.57141 10.00006 22 1.42865 13.42859 1.42859 13.42865 0 12.00006 .00006 12"/></svg>
                Previous
              </button>
              <button class="forwardBtn" @click="nextContent" :disabled="currentIndex === content.length - 1">Next 
                <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="23.99994 12 22.57141 10.57141 22.57135 10.57141 13.99994 2 12.57135 3.42859 20.04224 10.89948 0 10.89948 0 12.89948 20.24329 12.89948 12.57135 20.57141 13.99994 22 22.57135 13.42859 22.57141 13.42865 24 12.00006 23.99994 12"/></svg>
              </button>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
    <div class="arrowBtns">
      <button class="previousBtn" @click="previousContent" :disabled="currentIndex === 0">
        <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points=".00006 12 1.42859 10.57141 1.42865 10.57141 10.00006 2 11.42865 3.42859 3.95776 10.89948 24 10.89948 24 12.89948 3.75671 12.89948 11.42865 20.57141 10.00006 22 1.42865 13.42859 1.42859 13.42865 0 12.00006 .00006 12"/></svg>
      </button>
      <button class="forwardBtn" @click="nextContent" :disabled="currentIndex === content.length - 1">
        <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="23.99994 12 22.57141 10.57141 22.57135 10.57141 13.99994 2 12.57135 3.42859 20.04224 10.89948 0 10.89948 0 12.89948 20.24329 12.89948 12.57135 20.57141 13.99994 22 22.57135 13.42859 22.57141 13.42865 24 12.00006 23.99994 12"/></svg>
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WisLogo from '@/components/WisLogo.vue';

export default {
  name: 'AboutView',
  data() {
    return {
      currentIndex: 0,
      content: [
        { 
          title: 'Overview', 
          text: [
            { text: 'My project aims to make biblical background information easily accessible to anyone interested in seeking it. To achieve this goal, I will develop a user-friendly research tool that provides unbiased and comprehensive biblical backgrounds, along with rich historical and cultural context. By presenting raw facts and a balanced perspective, users will have the opportunity to develop their own understanding and engage with scripture responsibly. This tool will be available to pastors, students, laypersons, and individuals from various backgrounds who have an interest in biblical study.' }, 
            { text: 'The ultimate objective of my project is to empower individuals within faith communities by equipping them with the necessary tools to independently uncover the truth. By promoting a more informed and discerning approach to scripture interpretation, we hope to contribute to a greater understanding and appreciation of biblical teachings.' }
          ], 
          imgA: require('@/assets/mount-temptation.jpg'),
          imgCaption: 'Monastery of the Temptation, Greek Orthodox monastery located in Jericho, Palestine'
        },
        { 
          title: 'The Problem', 
          text: [
            { text: 'Drawing upon my immersive experience studying the archaeology, history, and physical settings of Israel, I have recognized the immense value of contextual knowledge in scripture study. However, a significant problem arises as many Western readers often overlook critical contextual information that could greatly enrich their interpretations of the Bible, hindering their understanding of the true meaning and application of biblical passages.' },
            { text: 'For instance, consider Matthew 16:13-20, where Jesus asks his disciples about his identity. The  conversation takes place in Caesarea Philippi, a Gentile territory, which highlights the universal nature of Jesus\' mission. Understanding the significance of this location and the local belief in a nearby cave as an entrance to the underworld adds depth to the mention of "the gates of Hades."' },
            { text: "To address this problem, my project aims to develop a user-friendly research tool that provides comprehensive biblical background information, including the historical, geographical, and cultural contexts of relevant locations and events. By presenting raw facts, balanced perspectives, and engaging examples like Caesarea Philippi, the tool will empower readers, scholars, and interpreters to independently uncover the rich layers of meaning within scripture and engage with a more informed and nuanced interpretation." },
            {text: "Moreover, by promoting a greater understanding of the historical and cultural significance of biblical teachings, this research tool will have a broader impact. Ultimately, the objective is to deepen the appreciation and relevance of biblical teachings within faith communities and beyond, contributing to a more nuanced understanding of scripture among readers worldwide." }
          ],
          imgA: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Banias_-_Temple_of_Pan_001.jpg/800px-Banias_-_Temple_of_Pan_001.jpg',
          imgCaption: 'The ruins of the Temple of Pan at Caesarea Philippi, where Jesus asked his disciples about his identity.'
        }
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
