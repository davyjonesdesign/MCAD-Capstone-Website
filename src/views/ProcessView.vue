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
                <p v-for="pp in currentContent.text" v-bind:key="pp.id" :class="pp.style">{{ pp.text }} <router-link class="citation-style" to="/citations">{{ pp.cite }}</router-link><router-link class="citation-style" to="/citations">{{ pp.cite2 }}</router-link></p>
              </div>
              
              <div class="content-img-wrap" v-if="currentContent.imgEnd">
                <img :src="currentContent.imgEnd" v-bind:key="currentContent.imgEnd" alt="Process Image: {{ currentContent.title }}"  />
                <p class="caption">{{ currentContent.imgCaptionEnd }}</p>
              </div>
              <div class="content-text-end" v-if="currentContent.textEnd">
                <p v-for="pp in currentContent.textEnd" v-bind:key="pp.id" :class="pp.style">{{ pp.text }} <router-link class="citation-style" to="/citations">{{ pp.cite }}</router-link><router-link class="citation-style" to="/citations">{{ pp.cite2 }}</router-link></p>
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
          title: 'Initial Approach', 
          text: [
            { text: 'During the initial stages of design, I conducted focused research in two key areas: conceptual and technical.' },
            { text: 'Conceptual', style: "subhead" },
            { text: 'After conducting market research, I found that existing biblical map products lacked engaging interactions and user-friendly designs. Inspired by products like Urban Archive, which presents digital local stories on interactive maps, I chose to incorporate interactive site markers in my project. These markers will provide users with essential contextual information, conveniently categorized and searchable, enhancing their biblical exploration experience.', cite: 4 },
          ],
          textEnd: [
            { text: 'Technical', style: "subhead" },
            { text: 'Simultaneously, I explored web mapping technology and API databases, determining that integrating Leaflet within the Vue framework was the most suitable option.', cite: 5, cite2: 6 }
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
          title: 'Tools & Resources', 
          tags: [
            { tag: 'Pen & Paper'},
            { tag: 'Adobe Illustrator'},
            { tag: 'Figma'},
          ],
          text: [
            { text: 'After conducting initial research, I utilized Figma to sketch screens and create a mood board, leading to the design of the logo and brand in Illustrator. With Figma, I crafted a user flow and designed wireframes while documenting the emerging design system.' },
          ],
          imgA: require('@/assets/process_initial.png'),
          imgCaption: 'Urban Archive is an app uses an interactive ma to explore local history',
          imgEnd: require('@/assets/assets.png'),
          imgCaptionEnd: 'Lake Gentau reflecting the Pic du Midi d\'Ossau - Pyrénées-Atlantiques, France (Wikimedia Commons)',
          textEnd: [
            { text: 'Valuable feedback from the design studio course, instructor, and fellow students prompted the addition of features like bookmarking and personal notes.' },
          ]
        },
        { 
          title: 'Recalibration',
          tags: [
            { tag: 'VS Code'},
            { tag: 'Vue'},
            { tag: 'Leaflet'},
            { tag: 'GitHub'},
          ],
          text: [
            { text: 'After presenting the brand, design system, and prototype to the Mid Program Review board, I received feedback emphasizing the importance of considering the specific target audience.' },
          ],
          imgA: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/progress-wk2/mount-temptation.jpg',
          imgCaption: 'Mount Temptation, Jericho',
          imgEnd: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/progress-wk1/poc.png',
          imgCaptionEnd: 'Initial proof of concept for the web app - Week 1',
          textEnd: [
            { text: 'After taking a 9-month break from the project, I returned with a a few focuses in mind. First, I wanted to dig deeper and reestablish the project\'s purpose. Secondly, I planned to incorporate extensive target audience feedback into any futur iterative work. And lastly, I decided to develop a small minimal viable web app as a proof of concept for a larger future product as a final deliverable.'}
          ]
        },
        { 
          title: 'Evolution of the App: From Functionality to User-Centric Design', 
          tags: [
            { tag: 'VS Code'},
            { tag: 'Vue'},
            { tag: 'Leaflet'},
            { tag: 'GitHub'},
          ],
          text: [
            { text: 'Throughout the semester, I progressively improved the app\'s appearance and functionality using VS Code and GitHub for publishing. Initially, my focus was on enhancing functionality, and later, I dedicated my efforts to refining the app\'s style based on the Figma prototype.' },
          ],
          imgA: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/progress-wk2/poc.jpg',
          imgCaption: 'Developed Web App - Week 2',
          imgEnd: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/progress-wk3/wis-prototype_wk3.gif',
          imgCaptionEnd: 'Developed Web App - Week 3',
          textEnd: [
            { text: 'During the development process, I encountered limitations in the original designs, which prompted me to reevaluate the design system and prototype. Simultaneously, valuable user research insights became available, enabling me to incorporate changes driven by both development necessities and feedback from subject matter experts.'}
          ],
        },
        { 
          title: 'App Improvement Through Expert Feedback and User Insights', 
          text: [
            { text: 'Subject matter expert feedback significantly improved the app.' },
            { text: 'Pastor Kevin Earhart', style: 'subhead' },
            { text: 'Pastor Kevin Earhart stressed accurate info, easy navigation, and historical period filtering.', cite: 7 },
            { text: 'Emma Austin, Old Testament Lecturer and PhD candidate', style: 'subhead' },
            { text: 'Ms. Emma Austin highlighted some key challenges and suggested to relegate all non-geographical info to an academic overview section/download. She also stressed the importance of cross-references between sites and creating a way for users to ‘find their path’ to walk through the app.', cite: 8 },
            { text: 'Implementation', style: 'subhead' },
          ],
          textEnd: [
            { text: 'I included Pastor Earhart’s feedback directly into the Vue app by adding a historical period filter and expanding the global search.' },
            { text: 'For Ms. Austin’s suggestions, I decided to incorporate those into the Figma prototype to be shelved for later development considering their impact on the app structure. These include a new related sites section with clickable related site cards and a hover label for the markers.' },
            { text: 'Inclusive User Insights', style: 'subhead' },
            { text: 'In order to create a truly comprehensive app that meets the diverse needs of a wide range of users, it is essential to gather valuable insights from both subject matter experts and non-academic users. In the future, I plan to reach out to individuals beyond the classroom who may be less informed about the subject matter to gain a deeper understanding of how they might interact with this web app. These insights will serve as valuable guidance for future iterations, ensuring that the app becomes more user-friendly and inclusive, ultimately catering to a broader audience.' },
          ],
          imgA: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/progress-wk2/people.png',
          imgCaption: 'Aqueduct ruins at Caesarea',
          imgEnd: 'https://davyjonesdesign.github.io/data-for-axios/assets/capstone/progress-wk7/prototype-week-7.gif',
          imgCaptionEnd: 'Figma Prototype with incorporated feedback from subject matter experts - Week 7',
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