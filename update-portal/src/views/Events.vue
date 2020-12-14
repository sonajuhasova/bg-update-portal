<template>
  <div class="home"> 
    <add-event></add-event>
    <event-list></event-list>
  </div>
</template>

<script>
// @ is an alias to /src
import EventList from "../components/EventList.vue"; 
import AddEvent from "./AddEvent.vue"; 

export default {
  name: "Events",
  components: {
    EventList,
    AddEvent, 
  }
};
</script>
