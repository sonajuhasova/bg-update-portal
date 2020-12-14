<template>
  <div class="edit">
    <h1>Edit this event</h1>
    <form>
      <input
        type="text"
        v-model="event.title"
        placeholder="Title and location"
        required
      />
      <input type="text" v-model="event.date" placeholder="Date" required />
      <button class="add-btn" type="button" v-on:click="editEvent">
        Edit event
      </button>
    </form>
  </div>
</template>

<script>
import { eventRef } from "../firebase"; export default { name: "Edit", props: {
event: Object }, methods: { editEvent() { console.log(this.event); eventRef
.doc(this.event.id) .set({ title: this.event.title, date: this.event.date });
this.$router.push("/"); } } };
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

.edit-btn {
  width: 10vw;
  margin: 20px auto;
  background-color: lightgrey;
}
</style>