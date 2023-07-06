<template>
  <router-link class="card" :to="link" >
    <div class="card-content">
      <img :src="require(`@/assets/${image}`)" alt="Card Image" />
      <div class="card-content-text">
        <h3>{{ title }}</h3>
        <p>{{ paragraph }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'NavCard',
  props: {
    title: {
      type: String,
      required: true
    },
    paragraph: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.card {
  /* Add your card styles here */
}

.card-content {
  /* Add your card content styles here */
}
</style>
