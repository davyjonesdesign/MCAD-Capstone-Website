<template>
  <header>
    <div class="splash-img">
      <img src="@/assets/wis-mac-mockup.png" alt="Written in Stone App Laptop Mockup">
    </div>
    <div class="splash-content">
      <WisLogo/>
      <p class="headline">A user-friendly tool with accessible biblical context to foster deeper understanding.</p>
    </div>
  </header>
  <div class="home">
    <NavCard 
      title="About"
      paragraph="The project background, including summary, problem, questions, and solution."
      image="jerusalem.jpg"
      link="/about"
    />
    <NavCard 
      title="Process"
      paragraph="The process of creating the app, from research to design to development."
      image="process_initial.png"
      link="/process"
    />
    <NavCard 
      title="Results"
      paragraph="The final product, including the design system, the Figma Prototype and a teaser video."
      image="jones_davy_writtenInStone.png"
      link="/results"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import NavCard from '@/components/NavCard.vue';
import WisLogo from '@/components/WisLogo.vue';

export default {
  name: 'HomeView',
  components: {
    NavCard,
    WisLogo
  }
}
</script>
