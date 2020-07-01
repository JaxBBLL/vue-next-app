<template>
  <div class="app-root">
    <div class="app-side">
      <router-link to="/" class="router-link">Home</router-link>
      <router-link to="/about" class="router-link">About</router-link>
    </div>
    <div class="app-container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.app-root {
  width: 100vw;
  height: 100vh;
  display: flex;
  .app-side {
    width: 14em;
    border-right: 1px solid #ddd;
  }
  .app-container {
    flex: 1;
    padding: 15px;
  }
}
.router-link {
  display: block;
  padding: 5px 12px;
  text-decoration: none;
  color: var(--bs-dark);
  border-bottom: 1px solid #ddd;
  &.router-link-exact-active {
    color: var(--bs-blue);
  }
}
</style>
