<template>
  <div class="container">
    <input
      class="input"
      :class="{ err: err }"
      type="text"
      placeholder="Copy svg path here.."
      autocomplete="off"
      ref="pathInputEle"
      v-model="pathValue"
      @keyup.ctrl.enter="calculate"
    />
    <button class="btn btn-primary" @click="calculate">Calculate Length</button>

    <p class="length-txt" v-if="length && !err">
      Path Length:
      <span>{{ length }}</span>
    </p>

    <svg>
      <path :d="pathValue" ref="path" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "SvgPathLength",
  data() {
    return {
      pathValue: null,
      length: null,
      err: null
    };
  },
  mounted() {
    this.$refs.pathInputEle.focus();
  },
  methods: {
    calculate() {
      const length = this.$refs.path.getTotalLength().toFixed(3);
      this.length = Number(Math.round(length + "e" + 3) + "e-" + 3);

      this.err = this.length <= 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  margin-bottom: 1rem;

  &.err {
    outline: 1px solid $clr-red;
  }
}

.length-txt {
  margin: 5rem auto 0;
  letter-spacing: 2px;
  animation: fade 300ms ease-in;

  span {
    font-size: 1.5em;
    font-weight: bold;
  }
}

svg {
  display: none;
}
</style>