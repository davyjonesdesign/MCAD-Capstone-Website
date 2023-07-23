<template>
  <div class="results">
    <header class="header-internal">
      <h2>Results</h2>
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
              <div class="content-text-p" v-if="currentContent.text">
                <p v-for="pp in currentContent.text" v-bind:key="pp.id" :class="pp.style">{{ pp.text }}</p>
              </div>
              <div class="content-text-ul" v-if="currentContent.list">
                <ul v-for="item in currentContent.list" v-bind:key="item.id" :class="item.style">
                  <li>{{ item.item }}</li>
                </ul>
              </div>
              <div class="content-img-wrap" v-if="currentContent.imgEnd">
                <img :src="currentContent.imgEnd" v-bind:key="currentContent.imgEnd" alt="Process Image: {{ currentContent.title }}"  />
                <p class="caption">{{ currentContent.imgCaptionEnd }}</p>
              </div>
              <div class="content-fig-wrap" v-if="currentContent.FigPro">
                <iframe class="responsive-iframe" scrolling="no" width="100%" height= "390px" :src=currentContent.FigPro allowfullscreen></iframe>
                <p class="caption">{{ currentContent.FigCaption }}</p>
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
  name: 'ResultsView',
  data() {
    return {
      currentIndex: 0,
      content: [
        { 
          title: 'Components Rundown',
          tags: [
            { tag: 'Figma'},
            { tag: 'Illustrator'},
            { tag: 'Photoshop'},
            { tag: 'After Effects'},
            { tag: 'Audition'},
            { tag: 'VS Code'},
            { tag: 'Vue'},
            { tag: 'Leaflet'},
            { tag: 'GitHub'},
          ],
          text: [
            { text: 'The components that serve as the final deliverables for this project include the following:'}
          ], 
          list: [
            { item: 'Marketing Teaser Video', style: 'list-item' },
            { item: 'Brand and Design system', style: 'list-item' },
            { item: 'Figma Prototype', style: 'list-item' },
            { item: 'MVP Vue and Leaflet app', style: 'list-item' },
          ],
          textEnd: [
            { text: 'The next sections will delve into each deliverable for this project.'}
          ], 
          imgA: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/progress-wk6/wis-teaser-pass3.gif',
          imgCaption: 'Additional Component — Teaser Video',
        },
        { 
          title: 'Teaser Video', 
          tags: [
            { tag: 'After Effects'},
            { tag: 'Illustrator'},
            { tag: 'Audition'},
          ],
          text: [
            { text: 'The additional component I created is a teaser video as a potential marketing ad. The idea came from a fellow classmate, Alex Conover, who helped in the ideation process for the first version. After incorporating peer feedback through several iterations, the final version of this video effectively communicates the project\'s essence in a succinct manner.'}
          ],
          FigPro: 'https://mega.nz/embed/61JHmZLB#p91KWNv8MHAswPhzH5-IDqAJS4x_IJZDCX37s8bvIc0',
          FigCaption: 'Teaser Video — Final Version',
        },
        { 
          title: 'Brand and Design System',
          tags: [
            { tag: 'Figma'},
            { tag: 'Illustrator'}
          ],
          text: [
            { text: 'This brand was carefully crafted to combine a clean, modern aesthetic with historical roots. The chosen colors draw inspiration from the landscapes of the ancient near east, creating a sense of connection to the land. The typography, components, and patterns work harmoniously to create a sophisticated and user-friendly interface, resulting in a thoroughly tested and scalable design system centered around the user\'s needs.'}
          ],
          imgA: require('@/assets/wis-brand.png'),
          imgCaption: 'Figma Design System as of July 21, 2023',
          FigPro: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxLh7aq2HW1eUzrIFbNJlph%2FWIS_final%3Fpage-id%3D1%253A9%26type%3Ddesign%26node-id%3D121-782%26viewport%3D419%252C-141%252C0.15%26t%3D8wJbf7mbPMbK9qR3-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D121%253A782%26mode%3Ddesign&hide-ui=1',
          FigCaption: 'Figma Design System as of July 21, 2023',
          links: [
            { link: 'https://www.figma.com/proto/xLh7aq2HW1eUzrIFbNJlph/WIS_final?page-id=1%3A9&type=design&node-id=121-782&viewport=419%2C-141%2C0.15&t=8wJbf7mbPMbK9qR3-1&scaling=scale-down&starting-point-node-id=121%3A782&mode=design', text: 'Figma Design System', style: 'list-item'}
          ]
        },
        { 
          title: 'Figma Prototype',
          tags: [
            { tag: 'Figma'},
            { tag: 'Illustrator'},
          ],
          text: [
            { text: 'As I worked on the original prototype, it served as a strong basis for my development efforts. However, once I had the MVP Vue + Leaflet App up and running, it became clear that the discoveries I made during development needed to be incorporated back into the prototype. This was essential to ensure a seamless alignment between my design and the development process in the future.'},
            { text: 'Moreover, I took subject matter feedback into account, which provided valuable insights from a long-term perspective. As a result, I redesigned the Figma prototype to reflect these findings, leading to the establishment of two categories of patterns and components: one for the current state and another for future enhancements.' },
            { text: 'Now, the current prototype showcases both how the app ought to look and function while introducing newer patterns aimed at improving the user experience and addressing their feedback. Notably, I added hover labels with thumbnails and a \'related sites\' section featuring new tag and site-card components.' }
          ],
          textEnd: [
            { text: 'By continuously refining my design based on real-world insights and user needs, I strive to create a user-centered design system that stays ahead of future demands.'}
          ],
          FigPro: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxLh7aq2HW1eUzrIFbNJlph%2FWIS_final%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D95-981%26viewport%3D39%252C434%252C0.76%26t%3DPavinLIp9dYFSqKb-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D95%253A981%26mode%3Ddesign&hide-ui=1',
          FigCaption: 'Figma Prototype as of July 21, 2023',
          links: [
            { link: 'https://www.figma.com/proto/xLh7aq2HW1eUzrIFbNJlph/WIS_final?page-id=0%3A1&type=design&node-id=95-981&viewport=39%2C434%2C0.76&t=PavinLIp9dYFSqKb-1&scaling=scale-down&starting-point-node-id=95%3A981&mode=design', text: 'Figma Prototype', style: 'list-item' },
          ],
        },
        { 
          title: 'MVP Vue and Leaflet App',
          tags: [
            { tag: 'VS Code'},
            { tag: 'Vue'},
            { tag: 'Leaflet'},
            { tag: 'GitHub'},
          ],
          text: [
            { text: 'The final deliverable is a user-friendly Vue and Leaflet app, serving as a comprehensive research tool for exploring biblical backgrounds. It offers site images, geographical data, academic overviews, and scriptural cross-references.'},
            { text: 'Users can interact with an interactive map and clickable markers, visually exploring archaeological sites and accessing detailed information. Search and filtering functionalities make navigation seamless, allowing users to find specific locations and relevant data easily.' }
          ],
          textEnd: [
            { text: 'The app empowers individuals from diverse backgrounds to independently uncover the truth and responsibly engage with scripture, fostering a deeper understanding and appreciation of its teachings.' }
          ],
          FigPro: 'https://wis.davyjones.me/',
          links: [
            { link: 'https://wis.davyjones.me/', text: 'Live App', style: 'list-item' },
          ],
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

