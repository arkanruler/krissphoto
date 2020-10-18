<template>
  <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-link active" to="/">Home </router-link>
      <router-link class="nav-link" to="/gallery">Gallery</router-link>
      <router-link class="nav-link" to="/contact">Contacts</router-link>
    </div>
  </div>
</nav>
</template>



<style>
.navbar
{
position: fixed;
top: 0;
left: 0;
right: 0; 
}
</style>
