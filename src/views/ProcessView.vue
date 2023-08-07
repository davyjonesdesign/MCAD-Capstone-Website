<template>
  <div class="process">
    <header class="header-internal">
      <div class="splash-content">
        <WisLogo/>
      </div>
    </header>
    <div class="page">
      <div class="page-h">
        <h2>Process</h2>
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
                <p v-for="pp in currentContent.text" v-bind:key="pp.id" :class="pp.style">{{ pp.text }} <router-link class="citation-style" to="/endnotes">{{ pp.cite }}</router-link><router-link class="citation-style" to="/endnotes">{{ pp.cite2 }}</router-link></p>
              </div>
              
              <div class="content-img-wrap" v-if="currentContent.imgEnd">
                <img :src="currentContent.imgEnd" v-bind:key="currentContent.imgEnd" alt="Process Image: {{ currentContent.title }}"  />
                <p class="caption">{{ currentContent.imgCaptionEnd }}</p>
              </div>
              <div class="content-text-end" v-if="currentContent.textEnd">
                <p v-for="pp in currentContent.textEnd" v-bind:key="pp.id" :class="pp.style">{{ pp.text }} <router-link class="citation-style" to="/endnotes">{{ pp.cite }}</router-link><router-link class="citation-style" to="/endnotes">{{ pp.cite2 }}</router-link></p>
              </div>

              <div class="content-img-wrap" v-if="currentContent.imgEnd2">
                <img :src="currentContent.imgEnd2" v-bind:key="currentContent.imgEnd2" alt="Process Image: {{ currentContent.title }}"  />
                <p class="caption">{{ currentContent.imgCaptionEnd }}</p>
              </div>
              <div class="content-text-end" v-if="currentContent.textEnd2">
                <p v-for="pp in currentContent.textEnd2" v-bind:key="pp.id" :class="pp.style">{{ pp.text }} <router-link class="citation-style" to="/endnotes">{{ pp.cite }}</router-link><router-link class="citation-style" to="/endnotes">{{ pp.cite2 }}</router-link></p>
              </div>

              <div class="content-links-wrapper" v-if="currentContent.links">
                <h5>Links</h5>
                <ul class="content-links">
                  <li v-for="link in currentContent.links" v-bind:key="link.id" :class="link.style"><a :href="link.link" target="_blank">{{ link.text }}</a></li>
                </ul>
              </div>             
            </div>
            <div class="arrowBtns pageBtns">
              <router-link v-if="currentIndex === 0" class="previousBtn" to="/about" >
                <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points=".00006 12 1.42859 10.57141 1.42865 10.57141 10.00006 2 11.42865 3.42859 3.95776 10.89948 24 10.89948 24 12.89948 3.75671 12.89948 11.42865 20.57141 10.00006 22 1.42865 13.42859 1.42859 13.42865 0 12.00006 .00006 12"/></svg>
                About
              </router-link>
              <button class="previousBtn" @click="previousContent" v-if="currentIndex !== 0" :disabled="currentIndex === 0">
                <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points=".00006 12 1.42859 10.57141 1.42865 10.57141 10.00006 2 11.42865 3.42859 3.95776 10.89948 24 10.89948 24 12.89948 3.75671 12.89948 11.42865 20.57141 10.00006 22 1.42865 13.42859 1.42859 13.42865 0 12.00006 .00006 12"/></svg>
                Previous
              </button>
              <button class="forwardBtn" @click="nextContent" v-if="currentIndex !== content.length - 1" :disabled="currentIndex === content.length - 1">Next 
                <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="23.99994 12 22.57141 10.57141 22.57135 10.57141 13.99994 2 12.57135 3.42859 20.04224 10.89948 0 10.89948 0 12.89948 20.24329 12.89948 12.57135 20.57141 13.99994 22 22.57135 13.42859 22.57141 13.42865 24 12.00006 23.99994 12"/></svg>
              </button>
              <router-link v-if="currentIndex === content.length - 1" class="forwardBtn" to="/results" >Results 
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
  name: 'ProcessView',
  data() {
    return {
      currentIndex: 0,
      content: [
        { 
          title: 'Approach', 
          text: [
            { text: 'During the initial stages of design, I conducted focused research in two critial areas: conceptual and technical.' },
            { text: 'Conceptual Research', style: "subhead" },
            { text: 'Market research revealed the limitations of existing biblical map products.	I looked elsewhere and found inspiration from products like Urban Archive. I chose to incorporate similar interactive elements into my design like their use of an integrated side panel to handle searches and display selected details.', cite: 4 },
          ],
          textEnd: [
            { text: 'Technical', style: "subhead" },
            { text: 'I explored web mapping technology, ultimately landing on Leaflet Library & Vue framework as the most suitable option.', cite: 5, cite2: 6 }
          ],
          imgEnd: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/progress-wk1/urban-archive.png',
          imgCaptionEnd: 'Urban Archive is an app uses an interactive ma to explore local history',
          links: [
            { link: 'https://www.urbanarchive.nyc/', text: 'Urban Archive' },
            { link: 'https://leafletjs.com/', text: 'Leaflet' },
            { link: 'https://vuejs.org/', text: 'Vue' },
          ]
        },
        { 
          title: 'Tools', 
          tags: [
            { tag: 'Pen & Paper'},
            { tag: 'Adobe Illustrator'},
            { tag: 'Figma'},
            { tag: 'After Effects'},
            { tag: 'Adobe Audition'},
            { tag: 'VS Code'},
            { tag: 'Vue'},
            { tag: 'Leaflet'},
            { tag: 'GitHub'},
          ],
          text: [
            { text: 'To bring this vision to life, I used various tools' },
            { text: 'I started with pen and paper and sketched app screens. Then I moved into Illustrator and designed a brand including a logo and icons among other brand assets. I used Figma to create a moodboard, a basic user flow, wireframing to a full initial prototype, and documenting the design system along the way.' },
            { text: 'I used After Effect and Adobe Audition to make the teaser video.' },
          ],
          textEnd: [
            { text: 'Finally, I developed the live web app with VS Code using the Vue framework, Leaflet library, and GitHub for version control and hosting.' }
          ],
          imgA: require('@/assets/WIS_early-designs.png'),
          imgCaption: 'Initial sketches, moodboard, brand assets, user flow and prototype.',
          imgEnd: require('@/assets/WIS_dev-process.png'),
          imgCaptionEnd: 'Development process using VS Code, Vue, Leaflet, and GitHub.',
        },
        { 
          title: 'Feedback', 
          text: [
            { text: 'During the Mid Program Review last summer, I presented the brand, design system, and original Figma prototype. Feedback I received was to include more consideration for the specific target audience. So I returned to the project this semester and sought out a couple subject matter experts and some target audience users for feedback.' },
            { text: 'Subject Matter Experts', style: 'strong' },
            { text: 'Pastor Kevin Earhart', style: 'subhead' },
            { text: 'Pastor Kevin Earhart stressed the importance of accurate information, easy navigation, and specifically appreciated the concept of filtering by historical period.', cite: 7 },
            { text: 'Emma Austin, Old Testament Lecturer and PhD candidate', style: 'subhead' },
            { text: 'Ms. Emma Austin highlighted some key challenges and suggested to relegate all non-geographical info to an academic overview section/download to not overwhelm some users. She also stressed the importance of cross-references between sites and suggested I establish an	interactive related sites feature that would help guide users along different thematic paths through the app.', cite: 8 },
            { text: 'Implementation', style: 'strong' },
            { text: 'I included Pastor Earhart’s feedback directly into the Vue app by adding a historical period filter and expanding the global search.' },
          ],
          textEnd: [
           
            { text: 'For Ms. Austin’s suggestions, I decided to incorporate those into the Figma prototype to be shelved for later development considering their impact on the app structure. These include a new related sites section with clickable related site cards and a hover label for the markers.' },
            { text: 'Non-academic User Feedback', style: 'subhead' },
            { text: 'The original UI color palette was inspired by middle eastern landscapes but when I reached out to non-academic users, the aesthetics were something they struggled with. They directed me in altering the UI palette to allow for an easier user experience.' },
          ],
          textEnd2: [
            { text: 'By moving to a singular primary color for action elements and shifting all other UI elements to a nuetral color palette, the app became more accessible and easier to use.' }
          ],
          imgA: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/progress-wk2/people.png',
          imgCaption: 'Aqueduct ruins at Caesarea',
          imgEnd: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/progress-wk7/prototype-week-7.gif',
          imgCaptionEnd: 'Figma Prototype with incorporated feedback from subject matter experts - Week 7',
          imgEnd2: require('@/assets/WIS_feedback.png'),
          imgCaptionEnd2: 'Feedback from non-academic users lead to a UI color pallette shift.',
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