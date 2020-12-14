<template>
  <section>
    <!--
    <input
      type="text"
      v-model="search"
      placeholder="Search title.."
      id="search-bar"
    /> 
    -->
    <div class="photos-container">
      <div v-for="photo in filteredList" :key="photo.id">
        <img :src="photo.image" alt="image" />

        <h3>{{ photo.description }}</h3>

        <button type="button" v-on:click="deletePhoto(photo.id)">Delete</button>
      </div>
    </div>
  </section>
</template>

<script>
import { photoRef } from "../firebase"; export default { data() { return {
search: "", photos: [] }; }, methods: { deletePhoto(id) {
photoRef.doc(id).delete(); } }, firestore: { photos: photoRef }, computed: {
filteredList() { return this.photos; } } };
</script>

<style>
.photos-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 5%;
  row-gap: 50px;
}

.photos-container div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.photos-container img {
  margin: auto;
}
img {
  max-width: 70%;
  margin: auto;
}

h1,
h2,
h3 {
  margin: 10px auto;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
img:hover {
  transform: scale(1.05);
}
button {
  margin: 5px auto;
  width: 30%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  background-color: #fff;
}

button:hover {
  transform: scale(1.1);
  cursor: pointer;
}
input {
  margin: 10px auto;
  width: 15vw;
  padding: 5px;
}
</style>
