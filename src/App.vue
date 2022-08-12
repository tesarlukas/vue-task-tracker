<template>
  <div id="app">
    <nav>
      <div class="logo">TrackerApp</div>
      <div class="separator">|</div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/focus">Focus</router-link>
    </nav>
    <router-view />
    <footer>This is footer</footer>
  </div>
</template>
<style>
@import '../public/global.css';
</style>
