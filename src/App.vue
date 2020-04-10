<template>
  <div id="app">
    <JsonFormat />
  </div>
</template>

<script>
import JsonFormat from "./components/JsonFormat";

export default {
  components: {
    JsonFormat
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

:root {
  --clr-white: #f5eaea;
  --clr-black: #212121;
  --clr-black-dark: #1d1d1d;
  --clr-accent: #00bcd4;
  --clr-accent-light: #0096a9;
  --clr-red: #dd2c00;
  --clr-gray: #ccc;
  --border-radius: 0.1rem;
  --box-shadow: 0 0 2.5px rgba(0, 0, 0, 0.25);
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

::selection {
  background-color: var(--clr-accent);
  color: var(--clr-white);
}

body {
  background-color: var(--clr-black);
  color: var(--clr-white);
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
  animation: fade 1s ease;
}

input,
textarea,
button {
  font-family: inherit;
}

.btn {
  display: block;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-top: 1rem;
  border-radius: var(--border-radius);
  transition: all 0.35s ease-in-out;
}

.btn:focus {
  outline: none;
}

.btn-primary {
  background-color: transparent;
  color: var(--clr-accent);
  border: 1px solid var(--clr-accent);
  box-shadow: var(--box-shadow);
  text-transform: uppercase;
}

.btn-primary:hover {
  background-color: var(--clr-accent);
  color: var(--clr-black-dark);
}

.btn-secondary {
  padding: 0.3rem;
  font-size: 0.75rem;
  background-color: transparent;
  color: var(--clr-white);
  border-bottom: 1px solid var(--clr-white);
  margin-left: auto;
}

.btn-secondary:hover {
  color: var(--clr-gray);
  border-bottom-color: currentColor;
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
