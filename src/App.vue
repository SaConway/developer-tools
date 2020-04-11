<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
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
}

span {
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.container {
  width: 80%;
  max-width: 1000px;
  margin: 3rem auto;
  display: grid;
  place-items: center;
  animation: fade 1s ease;
}

input,
textarea,
button {
  font-family: inherit;
}

.btn {
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-top: 1rem;
  border-radius: $border-radius;
  transition: all 0.35s ease-in-out;

  &.btn:focus {
    outline: none;
  }
}

.btn-primary {
  background-color: transparent;
  color: $clr-accent;
  border: 1px solid $clr-accent;
  box-shadow: $box-shadow;
  text-transform: uppercase;

  &:hover {
    background-color: $clr-accent;
    color: $clr-black-dark;
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
