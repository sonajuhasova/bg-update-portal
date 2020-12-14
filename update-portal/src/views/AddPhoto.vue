<template>
  <div class="edit">
    <h1>New photo</h1>
    <form>
      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <button class="choose-img" type="button" v-on:click="triggerChooseImg">
        Pick an image
      </button>
      <div>
        <img :src="photo.image" class="img-preview" />
      </div>

      <input
        type="text"
        v-model="photo.description"
        placeholder="Description"
        required
      />
      <button class="add-btn" type="button" v-on:click="addphoto">
        Add photo to the gallery
      </button>
    </form>
  </div>
</template>

<script>
import { photoRef } from "../firebase"; export default { name: "AddPhoto",
data() { return { photo: { image: null, description: "" } }; }, methods: {
triggerChooseImg() { this.$refs.fileInput.click(); }, previewImage() { const
imageFile = this.$refs.fileInput.files[0]; const fileReader = new FileReader();
fileReader.onload = event => { this.photo.image = event.target.result; };
fileReader.readAsDataURL(imageFile); }, addphoto() { photoRef.add(this.photo);
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
