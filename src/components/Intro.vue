<template>
  <div class="container">
    <h1 class="title">Tools for Developers</h1>

    <nav class="nav">
      <ul>
        <li>
          <router-link to="/json-format" class="link">
            <strong class="link-title">Json Format</strong>
            <p class="link-body">Convert JSON Strings to a Friendly Readable Format</p>
          </router-link>
        </li>
        <li>
          <router-link to="/px-rem-converter" class="link">
            <strong class="link-title">Px-rem Converter</strong>
            <p class="link-body">Convert CSS px to rem and vice versa based on root font size</p>
          </router-link>
        </li>
        <li>
          <router-link to="/hex-rgb-converter" class="link">
            <strong class="link-title">Hex-rgb Converter</strong>
            <p class="link-body">Convert HEX values to RGB and vice versa</p>
          </router-link>
        </li>
        <li>
          <router-link to="/svg-path-length" class="link">
            <strong class="link-title">Svg Path Length</strong>
            <p class="link-body">Calculate total length for an SVG path</p>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Intro"
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.1rem;
  letter-spacing: 2px;
}

.nav {
  margin-top: 5rem;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

li + li {
  margin-top: 3rem;
}

.link {
  display: flex;
  flex-direction: column;
  color: inherit;
  text-decoration: none;
  padding: 0.65rem 3.5rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 10px;
    height: 10px;
    transform: translateY(-50%);
    border-radius: $border-radius;
    background-color: $clr-accent;
    transition: transform 200ms ease-in;
  }

  &:hover::before {
    transform: translateY(-50%) scale(1.75);
  }
}

.link-title {
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.link-body {
  font-size: 0.9rem;
  margin-top: 0.5rem;
}
</style>