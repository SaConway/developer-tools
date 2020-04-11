<template>
  <nav class="side-nav">
    <ul>
      <li>
        <router-link to="/json-format" class="link">Json Format</router-link>
      </li>
      <li>
        <router-link to="/px-rem-converter" class="link">Px-Rem Converter</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.side-nav {
  box-shadow: $box-shadow;
  padding: 1.5rem;

  li {
    list-style: none;
  }

  li + li {
    margin-top: 1.25rem;
  }

  .link {
    color: $clr-white;
    text-decoration: none;
    padding: 0 1rem;
    position: relative;

    &.router-link-active::before {
      content: "";
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      width: 3px;
      height: 100%;
      background-color: $clr-accent;
    }
  }
}
</style>