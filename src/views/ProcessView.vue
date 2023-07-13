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
  name: 'ProcessView',
  data() {
    return {
      currentIndex: 0,
      content: [
        { 
          title: 'Initial Approach', 
          text: [
            { text: 'During the initial stages of my project, I conducted research in two key areas: conceptual and technical.' },
            { text: 'Conceptual', style: "subhead" },
            { text: 'Conceptually, I explored the problem space and identified the target audience. I also conducted a competitive analysis of existing products and services. Technically, I explored the feasibility of my project by researching the available tools and technologies. I also conducted a comparative analysis of similar products and services.' },
            { text: 'Technical', style: "subhead" },
            { text: 'On the technical side, I explored web mapping technology and API databases, determining that integrating Leaflet within the Vue framework was the most suitable option.' }
          ],
          imgA: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/progress-wk1/urban-archive.png',
          imgCaption: 'Urban Archive is an app uses an interactive ma to explore local history'
        },
        { 
          title: 'Recalibration', 
          text: [
            { text: 'After presenting my brand, design system, and prototype, I received feedback emphasizing the need for audience consideration, leading me to seek partnerships, conduct interviews, and gather user feedback to enhance my project. The weekly meetings with Capstone\'s instructor and fellow students have provided invaluable insights and spurred improvements in various aspects of my work. I am grateful for their contributions and remain dedicated to refining and taming the "monster" of my project.' }
          ],
          imgA: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/progress-wk2/people.png',
          imgCaption: 'Aqueduct ruins at Caesarea'
        },
        { 
          title: 'Target Audience Feedback', 
          text: [
            { text: 'To enrich the project\'s scope and ensure its relevance, partnerships with organizations and individuals are sought. Potential partners include the local church, academic institutions specializing in the study of the ancient Middle East, and knowledgeable professionals in Old Testament studies. The app caters to biblical professors, students, church leaders, tourists, and researchers, providing valuable resources for their studies and explorations.' },
            { text: 'Cleric Audience', style: 'subhead' },
            { text: 'Pastor Kevin, with his extensive 40 years of teaching experience, provided valuable insights into the project. He emphasized the significance of accurate information, citation, and resources within the app. Taking his suggestions into account, I am actively integrating these aspects into the app\'s design to enhance its credibility and reliability.' },
            { text: 'Collegiate Audience', style: 'subhead' },
            { text: 'Engaging with the collegiate audience will provide a fresh perspective and valuable input. I’m hoping their feedback will spark ideas for future iterations and improvements, shaping the projec\'s direction and aligning it with the needs and expectations of this target group.' }
          ],
          imgA: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/progress-wk2/people.png',
          imgCaption: 'Aqueduct ruins at Caesarea'
        },
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