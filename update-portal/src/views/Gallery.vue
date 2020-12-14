<template>
  <div class="home"> 
    <add-photo></add-photo>
    <gallery-list></gallery-list>
  </div>
</template>

<script>
// @ is an alias to /src
import GalleryList from "../components/GalleryList.vue"; 
import AddPhoto from "./AddPhoto.vue"; 

export default {
  name: "Gallery",
  components: {
    GalleryList,
    AddPhoto
  }
};
</script>
