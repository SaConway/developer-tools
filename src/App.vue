<template>
  <div id="app" class="main">
    <SideBar v-if="showSideBar" />
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";

export default {
  components: {
    SideBar
  },
  computed: {
    showSideBar: function() {
      return this.$route.name !== "homepage";
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

::selection {
  background-color: $clr-accent;
  color: $clr-white;
}

:focus {
  outline-color: $clr-accent;
}

body {
  background-color: $clr-black;
  color: $clr-white;
  font-family: "Open Sans", sans-serif;
  overflow-x: hidden;
  letter-spacing: 1px;
}

span {
  font-size: 0.9rem;
  letter-spacing: 1px;
}

input,
textarea,
button {
  font-family: inherit;
}

input,
textarea {
  font-size: 0.9rem;
  padding: 1em;
  color: $clr-black;
  border: none;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}

ul {
  list-style: none;
}

.main {
  display: flex;
  min-height: 100vh;
}

.container {
  width: 80%;
  max-width: 1000px;
  margin: 5rem auto;
  padding: 0 2.5rem;
  animation: fade 1s ease-in;
}

.btn {
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-top: 1rem;
  border-radius: $border-radius;
  transition: color 0.2s ease-in, background-color 0.2s ease-in;

  &:focus {
    outline: none;
  }
}

.btn-primary {
  background-color: transparent;
  color: $clr-accent;
  box-shadow: 0 0 0.5rem rgba(black, 0.65);
  text-transform: uppercase;

  &:hover {
    color: $clr-accent-light;
  }
}

.btn-secondary {
  padding: 0.3rem;
  font-size: 0.75rem;
  background-color: transparent;
  color: $clr-white;
  border-bottom: 1px solid $clr-white;
  margin-left: auto;

  &:hover {
    color: $clr-gray;
    border-bottom-color: currentColor;
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  90% {
    opacity: 1;
  }
}
</style>
