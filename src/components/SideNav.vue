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
    letter-spacing: 1px;
    position: relative;
    white-space: nowrap;

    &.router-link-active::before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: $clr-accent;
      border-radius: $border-radius;
      animation: slide-in 0.35s ease-in-out forwards;

      @keyframes slide-in {
        from {
          $size: 1rem;
          width: $size;
          height: $size;
          left: -3rem;
        }
        to {
          $size: 0.5rem;
          width: $size;
          height: $size;
          left: 0;
        }
      }
    }

    &:hover {
      color: $clr-gray;
    }
  }
}
</style>