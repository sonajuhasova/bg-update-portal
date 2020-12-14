<template>
  <div class="edit">
    <h1>New event</h1>
    <form>
      <input
        type="text"
        v-model="event.title"
        placeholder="Title and location"
        required
      />
      <input
        type="text"
        v-model="event.date"
        placeholder="Date"
        required
      />
      <button class="add-btn" type="button" v-on:click="addEvent">
        Add event
      </button>
    </form>
  </div>
</template>

<script>
import { eventRef } from "../firebase";
export default {
  name: "AddEvent",
  data() {
    return {
      event: {
        title: "",
        date: "", 
      }
    };
  },
  methods: { 
    addEvent() {
      eventRef.add(this.event);
      this.$router.push("/");
    }
  }
};
</script>

<style>
form {
  padding: 2em 1em 2.5em;
  display: flex;
  flex-direction: column;
}

.edit {
  justify-content: center;
  margin: 20px auto;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 7px 7px 14px #b0b0b0, -7px -7px 14px #ffffff;
  padding: 20px;
  width: 20vw;
}
h1 {
  margin: 5px auto;
}
input {
  margin: 10px auto;
  width: 15vw;
  padding: 5px;
}

input[type="file"] {
  display: none;
}

.choose-img {
  width: 10vw;
  margin: 20px auto;
}
.add-btn {
  width: 10vw;
  margin: 20px auto;
  background-color: lightgrey;
}
</style>
