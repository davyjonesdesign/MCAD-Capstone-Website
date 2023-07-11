<template>
  <header>
    <div class="splash-img">
      <img src="@/assets/wis-laptop-mockup.png" alt="Written in Stone App Laptop Mockup">
    </div>
    <div class="splash-content">
      <WisLogo/>
      <p class="headline">A user-friendly tool with accessible biblical context to foster deeper understanding.</p>
    </div>
    <p class="name">Davy Jones</p>
  </header>
  <div class="home">
    <NavCard 
      title="Card Title"
      paragraph="This is a sample card description."
      image="mount-temptation.jpg"
      link="/about"
    />
    <NavCard 
      title="Resouces"
      paragraph="This is a sample card description."
      image="people.png"
      link="/resources"
    />
    <NavCard 
      title="Process"
      paragraph="This is a sample card description."
      image="assets.png"
      link="/process"
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
