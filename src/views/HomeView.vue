<template>
  <header>
    <div class="splash-img">
      <img src="@/assets/wis-laptop-mockup.png" alt="Written in Stone App Laptop Mockup">
    </div>
    <div class="splash-content">
      <WisLogo/>
      <p class="headline">A user-friendly research tool that provides accessible context on the Bible to foster deeper understandings of its teachings.</p>
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
      link="/about"
    />
    <NavCard 
      title="Process"
      paragraph="This is a sample card description."
      image="assets.png"
      link="/about"
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
