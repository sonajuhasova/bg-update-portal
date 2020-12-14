<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Events</router-link> |
      <router-link to="/Gallery">Gallery</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: lightgray;
  margin-bottom: 50px;

  font-size: 20px;
}

#nav a { 
  color: #2c3e50;
  text-decoration: none;
}

#nav a:hover {
  transform: scale(1.5);
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
