<template>
  <aside class="side-bar">
    <nav class="side-nav">
      <ul>
        <li>
          <router-link to="/json-format" class="link">Json Format</router-link>
        </li>
        <li>
          <router-link to="/px-rem-converter" class="link">Px-rem Converter</router-link>
        </li>
        <li>
          <router-link to="/hex-rgb-converter" class="link">Hex-rgb Converter</router-link>
        </li>
        <li>
          <router-link to="/svg-path-length" class="link">Svg Path Length</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "SideBar"
};
</script>

<style lang="scss" scoped>
.side-bar {
  box-shadow: $box-shadow;
  padding: 5rem 1.5rem;
}

.side-nav {
  li + li {
    margin-top: 1.25rem;
  }
}

.link {
  color: $clr-white;
  text-decoration: none;
  padding: 0 1rem;
  position: relative;
  white-space: nowrap;
  text-transform: capitalize;

  &.router-link-active::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    $size: 0.5rem;
    width: $size;
    height: $size;
    transform: translateY(-50%);
    background-color: $clr-accent;
    border-radius: $border-radius;
    animation: slide-in 0.25s ease-in-out forwards;
  }

  &:hover {
    color: $clr-gray;
  }
}

@keyframes slide-in {
  from {
    transform: translate(-150%, -50%);
  }
  to {
    transform: translate(0, -50%);
  }
}
</style>