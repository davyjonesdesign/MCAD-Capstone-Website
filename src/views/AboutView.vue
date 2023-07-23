<template>
  <div class="about">
    <header class="header-internal">
      <h2>About</h2>
      <div class="splash-content">
        <WisLogo/>
      </div>
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
              <div class="tag-wrap" v-if="currentContent.tags">
                <p v-for="tag in currentContent.tags" class="tag" v-bind:key="tag.id">{{ tag.tag }}</p>
              </div>
              <div class="content-text-end" v-if="currentContent.text">
                <p v-for="pp in currentContent.text" v-bind:key="pp.id" :class="pp.style">{{ pp.text }}</p>
              </div>
              
              <div class="content-img-wrap" v-if="currentContent.imgEnd">
                <img :src="currentContent.imgEnd" v-bind:key="currentContent.imgEnd" alt="Process Image: {{ currentContent.title }}"  />
                <p class="caption">{{ currentContent.imgCaptionEnd }}</p>
              </div>
              <div class="content-text-end" v-if="currentContent.textEnd">
                <p v-for="pp in currentContent.textEnd" v-bind:key="pp.id" :class="pp.style">{{ pp.text }}</p>
              </div>
              <div class="content-links-wrapper" v-if="currentContent.links">
                <h5>Links</h5>
                <ul class="content-links">
                  <li v-for="link in currentContent.links" v-bind:key="link.id" :class="link.style"><a :href="link.link" target="_blank">{{ link.text }}</a></li>
                </ul>
              </div>             
            </div>
            <div class="arrowBtns pageBtns">

              <button class="previousBtn" @click="previousContent" :disabled="currentIndex === 0">
                <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points=".00006 12 1.42859 10.57141 1.42865 10.57141 10.00006 2 11.42865 3.42859 3.95776 10.89948 24 10.89948 24 12.89948 3.75671 12.89948 11.42865 20.57141 10.00006 22 1.42865 13.42859 1.42859 13.42865 0 12.00006 .00006 12"/></svg>
                Previous
              </button>
              <button class="forwardBtn" @click="nextContent" v-if="currentIndex !== content.length - 1" :disabled="currentIndex === content.length - 1">Next 
                <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="23.99994 12 22.57141 10.57141 22.57135 10.57141 13.99994 2 12.57135 3.42859 20.04224 10.89948 0 10.89948 0 12.89948 20.24329 12.89948 12.57135 20.57141 13.99994 22 22.57135 13.42859 22.57141 13.42865 24 12.00006 23.99994 12"/></svg>
              </button>
              <router-link v-if="currentIndex === content.length - 1" class="forwardBtn" to="/process" >Process 
                <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="23.99994 12 22.57141 10.57141 22.57135 10.57141 13.99994 2 12.57135 3.42859 20.04224 10.89948 0 10.89948 0 12.89948 20.24329 12.89948 12.57135 20.57141 13.99994 22 22.57135 13.42859 22.57141 13.42865 24 12.00006 23.99994 12"/></svg>
              </router-link>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
    <div class="arrowBtns arrowBtnsTop">
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
          title: 'Summary', 
          text: [
            { text: 'My project aims to develop a user-friendly research tool that provides comprehensive context on the Bible, enabling individuals from diverse backgrounds to independently uncover the truth and responsibly engage with scripture, ultimately fostering a deeper understanding and appreciation of its teachings.' },
          ], 
          imgA: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/progress-wk1/jerusalem.jpg',
          imgCaption: 'The Al-Aqsa Mosque / Temple Mount in Jerusalem taken from the Mount of Olives.',
        },
        { 
          title: 'The Problem', 
          text: [
            { text: 'Due to a lack of awareness, many individuals miss out on comprehensive biblical background information, leading to a limited understanding of scripture\'s true meaning and significance. As a result, they are unable to engage with the text responsibly and fully appreciate its teachings.' },
            { text: 'Specific Example', style: "subhead" },
            { text: 'When David pens the words of Psalm 23, "He makes me lie down in green pastures, he leads me beside quiet waters," many Western readers envision lush, picturesque grasslands next to a serene, crystal-clear lake (see image below).' },
          ],
          imgEnd: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Gentau_Pic_du_Midi_Ossau.jpg/640px-Gentau_Pic_du_Midi_Ossau.jpg',
          imgCaptionEnd: 'Lake Gentau reflecting the Pic du Midi d\'Ossau - Pyrénées-Atlantiques, France (Wikimedia Commons)',
          textEnd: [
            { text: ' However, David\'s intended meaning goes beyond these idyllic scenes.'}
          ]
        },
        { 
          title: 'Problem (continued)',
          text: [
            { text: 'Specific Example (continued)', style: "subhead" },
            { text: 'David\'s experiences as a shepherd in the wilderness of the Judean hills, depicted in the image (see image below), were far from luxurious. Food was scarce, and water could only be found in the wadis that cut through the hills and flowed towards the dead sea. These wadis turned into dangerous rushing rivers during rains in Jerusalem, posing a deadly threat to anyone caught in them. (Wright, 116-117)' },
          ], 
          imgEnd: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Judea_2_by_David_Shankbone.jpg/640px-Judea_2_by_David_Shankbone.jpg',
          imgCaptionEnd: 'The Wilderness of Judea (Wikimedia Commons)',
          textEnd: [
            { text: 'David\'s words about God leading him to green pastures and still waters should not be interpreted as moments of comfort and ease. Instead, they reflect how God guided him to survival, showing him where to find food and safe water sources. Understanding David\'s geographical context is crucial for a meaningful interpretation of his words. Without this context, the true essence of his message is lost.' },
          ], 
        },
        { 
          title: 'Questions Toward a Solution',
          text: [
            { text: 'As I ventured into this project, a fundamental question arose:' },
            { text: 'Can an interactive map enhance our understanding of the Bible? By visually connecting biblical places with real-world geography, could we gain clearer insights into their relationships and contexts, deepening our grasp of the biblical stories and messages?' },
            { text: 'In support of this idea, an intriguing study caught my attention:' },
            { text: 'Researchers conducted a study in London that focused on the structural changes in the hippocampi of taxi drivers, revealing that their brains underwent spatial navigation-related alterations as a result of their experience (Maguire et al., 2000). Could using an interactive map for Bible study offer similar cognitive benefits?' },
          ], 
          imgA: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/progress-wk2/mt-olives-graves.jpg',
          imgCaption: 'Mount of Olives gravesite in Jerusalem.',
          links: [
          { link: 'https://doi.org/10.1073/pnas.070039597', text: 'Related Structural Change in the Hippocampi of Taxi Drivers (PNAS)' },
          ]
        },
        { 
          title: 'Questions Toward a Solution (continued)',
          text: [
            { text: 'Paul H. Wright\'s puts it well in his summary of why geographical information is so important in interpreting scripture. He says the following:' },
            { text: '"The biblical writers were profoundly aware of their own physical environment, infusing the narrative with geographical information. A regional approach to biblical geography could reveal the impact of geographical realities on settlement, communication, economy, and defense during the biblical period, providing deeper insights into the authors\' perspectives." (Wright, 19)' },
          ], 
          imgEnd: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Tierra_Media_Rhun.jpg/640px-Tierra_Media_Rhun.jpg',
          imgCaptionEnd: 'Map of Rhûn, from Lord of the Rings (Wikimedia Commons)',
          textEnd: [
            { text: 'Inspired by Tolkien\'s use of maps to enrich readers\' experiences, I became captivated by the potential of interactive maps to deepen our understanding of literature, particularly narratives like the Bible. With this newfound insight, I eagerly focused on designing a user-friendly map to enhance our comprehension of biblical texts.' },
          ], 
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
