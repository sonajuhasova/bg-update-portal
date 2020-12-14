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
    <div class="events-container">
      <div v-for="event in filteredList" :key="event.id"> 
        <h2>{{ event.title }}</h2>
        <h3>{{ event.date}}</h3>
        <router-link :to="{ name: 'Edit', params: { event: event } }">
          <button>Edit</button>
        </router-link>
        <button type="button" v-on:click="deleteEvent(event.id)">Delete</button>
      </div>
    </div>
  </section>
</template>

<script>
import { eventRef } from "../firebase";
export default {
  data() {
    return {
        search: '', 
        events: []
    };
  },
  methods: {
    deleteEvent(id) {
      eventRef.doc(id).delete();
    },  
    
    
  },
  firestore: {  
    events: eventRef
      
  },
  computed: {
    filteredList() {
      return this.events
    },
  },
};
</script>

<style>
.events-container {
  display: flex;
  margin: 50px auto;
  flex-direction: column;
}

.events-container div {
  display: flex;
  flex-direction: column;  
  margin: 30px auto;
}
.events-container img {
  margin: auto;
} 

h1,
h2,
h3 {
  margin: 10px auto;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
} 
button {
  margin: 5px auto;
  width: 100px;
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
