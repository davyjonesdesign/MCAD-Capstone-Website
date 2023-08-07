<template>
  <div class="about">
    <header class="header-internal">
      <div class="splash-content">
        <WisLogo/>
      </div>
    </header>
    <div class="page">
      <div class="page-h">
        <h2>About</h2>
        <div class="arrowBtns arrowBtnsTop">
          <button class="previousBtn" @click="previousContent" :disabled="currentIndex === 0">
            <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points=".00006 12 1.42859 10.57141 1.42865 10.57141 10.00006 2 11.42865 3.42859 3.95776 10.89948 24 10.89948 24 12.89948 3.75671 12.89948 11.42865 20.57141 10.00006 22 1.42865 13.42859 1.42859 13.42865 0 12.00006 .00006 12"/></svg>
          </button>
          <button class="forwardBtn" @click="nextContent" :disabled="currentIndex === content.length - 1"> 
            <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="23.99994 12 22.57141 10.57141 22.57135 10.57141 13.99994 2 12.57135 3.42859 20.04224 10.89948 0 10.89948 0 12.89948 20.24329 12.89948 12.57135 20.57141 13.99994 22 22.57135 13.42859 22.57141 13.42865 24 12.00006 23.99994 12"/></svg>
          </button>
        </div>
      </div>
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
                <p v-for="pp in currentContent.text" v-bind:key="pp.id" :class="pp.style">{{ pp.text }} <router-link class="citation-style" to="/endnotes">{{ pp.cite }}</router-link></p>
              </div>
              
              <div class="content-img-wrap" v-if="currentContent.imgEnd">
                <img :src="currentContent.imgEnd" v-bind:key="currentContent.imgEnd" alt="Process Image: {{ currentContent.title }}"  />
                <p class="caption">{{ currentContent.imgCaptionEnd }}</p>
              </div>
              <div class="content-text-end" v-if="currentContent.textEnd">
                <p v-for="pp in currentContent.textEnd" v-bind:key="pp.id" :class="pp.style">{{ pp.text }} <router-link class="citation-style" to="/endnotes">{{ pp.cite }}</router-link><router-link class="citation-style" to="/endnotes">{{ pp.cite2 }}</router-link></p>
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
          title: 'Background', 
          text: [
            { text: 'My project aims to develop a user-friendly research tool that provides comprehensive context on the Bible, enabling individuals from diverse backgrounds to independently uncover the truth and responsibly engage with scripture, ultimately fostering a deeper understanding and appreciation of its teachings.' },
          ], 
          imgEnd: require('@/assets/me-jordan.png'),
          imgCaptionEnd: 'Me in Jordan, 2017',
        },
        { 
          title: 'Hook', 
          text: [
            { text: 'This inspired me to create \'Written in Stone,\' an interactive map that helps people explore the biblical contexts on their own. By understanding these realities, readers can gain a deeper and more nuanced interpretation of the text.' }
          ], 
          imgEnd: require('@/assets/wis-mac-mockup.png'),
          imgCaptionEnd: 'Written in Stone Current Prototype',
        },
        { 
          title: 'The Problem', 
          text: [
            { text: 'Many Bible readers miss out on these important aspects, limiting their ability to fully engage with the scriptures. The goal of \'Written in Stone\' is to bridge that gap and enable a more meaningful connection with the Bible for everyone."' },
            { text: 'Example', style: "subhead" },
            { text: 'Take Psalm 23, written by King David sometime during the second Iron Age as an example.' },
            { text: 'When we read, "He makes me lie down in green pastures, he leads me beside quiet waters," we envision serene scenes like this image of a lake in France.', cite: 1 },
          ],
          imgEnd: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Gentau_Pic_du_Midi_Ossau.jpg/640px-Gentau_Pic_du_Midi_Ossau.jpg',
          imgCaptionEnd: 'Lake Gentau reflecting the Pic du Midi d\'Ossau - Pyrénées-Atlantiques, France (Wikimedia Commons)',
          textEnd: [
            { text: 'However, this wasn’t David’s context...'}
          ]
        },
        { 
          title: 'The Problem (continued)',
          text: [
            { text: 'Example (continued)', style: "subhead" },
            { text: 'This was David\'s context, the Judean hills, a desert. As a shepherd in this area, food was scarce. Water was scarcer and dangerous where it was found in the wadis that had frequent flashfloods.', cite: 2 },
          ], 
          imgEnd: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Judea_2_by_David_Shankbone.jpg/640px-Judea_2_by_David_Shankbone.jpg',
          imgCaptionEnd: 'The Wilderness of Judea (Wikimedia Commons)',
          textEnd: [
            { text: 'Understanding his geographical context unveils a different meaning behind his words. David is saying much more than “the Lord is his comfort”, but rather “the Lord is his survival”. It’s examples like this one that really begin to show what bible-readers miss out on when they don’t have background info.' },
          ], 
        },
        { 
          title: 'A Solution',
          text: [
            { text: 'As I looked for a solution, I couldn’t really find an easy way to see these biblical realities without extensive research. But that seems too hard for most bible readers' },
            { text: 'So I started by asking the question:' },
            { text: 'Is there an easier way to glimpse the realities of the authors of the bible?', style: "strong" },
          ], 
          textEnd: [
          { text: 'I was inspired by fantasy writers like Tolkien who use maps to enrich readers\' experiences, I thought an interactive map could be a valuable tool. ' },
          { text: 'I stumbled on a study conducted by University College London focusing on how London taxi drivers actually demonstrated brain growth through navigating and using maps in association with their routes.', cite2: 3 },
          { text: 'This further encouraged my decision to focus on maps as a learning tool. With these things in mind, I decided to create a user-friendly, interactive map to enhance our understanding of biblical texts.'}
          ],
          imgA: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/progress-wk2/mt-olives-graves.jpg',
          imgCaption: 'Mount of Olives gravesite in Jerusalem.',
          imgEnd: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Tierra_Media_Rhun.jpg/640px-Tierra_Media_Rhun.jpg',
          imgCaptionEnd: 'Map of Rhûn, from Lord of the Rings (Wikimedia Commons)',
          links: [
          { link: 'https://doi.org/10.1073/pnas.070039597', text: 'Related Structural Change in the Hippocampi of Taxi Drivers (PNAS)' },
          ]
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
