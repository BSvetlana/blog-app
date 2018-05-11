<template>
  <div>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link :to="{name: 'home'}" class="navbar-brand">Posts</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link :to="{name: 'posts'}" class="nav-link">All Posts</router-link>
      </li>
      <li class="nav-item active">
        <router-link :to="{name: 'add-post'}" class="nav-link">Add Posts</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link"></a>
      </li>
    </ul>
    <span class="navbar-text">
      Blog Posts
    </span>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
