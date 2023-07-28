<template>
  <div class="citations">
    <header class="header-internal">
      
      <div class="splash-content">
        <WisLogo/>
      </div>
    </header>
    <div class="page">
      <div class="page-h">
        <h2>Citations</h2>
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
              
              <div class="content-text-citations" v-if="currentContent.list">
                <div v-for="item in currentContent.list" v-bind:key="item.id" :class="item.style">
                  <p>{{ item.cite }}. <span class="citation-item">{{ item.item }}</span></p>
                </div>
              </div>

              <div class="content-links-wrapper" v-if="currentContent.links">
                <h5>Links</h5>
                <ul class="content-links">
                  <li v-for="link in currentContent.links" v-bind:key="link.id" :class="link.style"><a :href="link.link" target="_blank">{{ link.text }}</a></li>
                </ul>
              </div>             
            </div>
            <div class="arrowBtns pageBtns">
              <router-link v-if="currentIndex === 0" class="previousBtn" to="/process" >
                <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points=".00006 12 1.42859 10.57141 1.42865 10.57141 10.00006 2 11.42865 3.42859 3.95776 10.89948 24 10.89948 24 12.89948 3.75671 12.89948 11.42865 20.57141 10.00006 22 1.42865 13.42859 1.42859 13.42865 0 12.00006 .00006 12"/></svg>
                Process 
              </router-link>
              <button class="previousBtn" @click="previousContent"  v-if="currentIndex !== 0" :disabled="currentIndex === 0">
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
    
  </div>
</template>

<script>
// @ is an alias to /src
import WisLogo from '@/components/WisLogo.vue';

export default {
  name: 'CitationsView',
  data() {
    return {
      currentIndex: 0,
      content: [
        { 
          title: 'Citations',
          list: [
            { 
              item: 'Bibles, Church Bible-NIV, 2011.', 
              style: 'list-item-numbered',
              cite: 1
            },
            { 
              item: 'Wright, Holman Illustrated Guide To Biblical Geography: Reading the Land.', 
              style: 'list-item-numbered',
              cite: 2
            },
            { 
              item: 'Maguire et al., “Navigation-Related Structural Change in the Hippocampi of Taxi Drivers.”', 
              style: 'list-item-numbered',
              cite: 3
            },
            { 
              item: 'Urban Archive, Inc., “Urban Archive.”', 
              style: 'list-item-numbered',
              cite: 4
            },
            { 
              item: 'Abidi, “Building an Interactive Map with Vue and Leaflet.”', 
              style: 'list-item-numbered',
              cite: 5
            },
            { 
              item: 'Cluzel, “Create Your Interactive Maps with Vue.Js and Leaflet.”', 
              style: 'list-item-numbered',
              cite: 6
            },
            { 
              item: 'Kevin Earhart, intervew by author, June 22, 2023.', 
              style: 'list-item-numbered',
              cite: 7
            },
            { 
              item: 'Emma Austn, intervew by author, July 14, 2023.', 
              style: 'list-item-numbered',
              cite: 8
            },
          ],
          links: [
            { link: 'https://docs.google.com/document/d/1RfCwyeN3hs05BPPx6-4XxTa1fAfDtXdN5jTv0Kq6ApA/edit?usp=sharing', text: 'Full Bibliography' }
          ]
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

