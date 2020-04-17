<template>
  <div class="container">
    <input
      class="input"
      :class="{ err: err }"
      type="text"
      placeholder="Copy svg path here.."
      autocomplete="off"
      v-model="pathValue"
    />
    <button class="btn btn-primary" @click="calculate()">Calculate Length</button>

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
  data() {
    return {
      pathValue: null,
      length: null,
      err: null
    };
  },
  methods: {
    calculate() {
      this.length = this.$refs.path.getTotalLength().toFixed(3);

      this.err = this.length <= 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  grid-template-rows: repeat(3, min-content);
  align-items: flex-start;
}

.input {
  width: 100%;
  padding: 1rem;
  color: $clr-black;
  margin-bottom: 1rem;

  &.err {
    outline: 1px solid $clr-red;
  }
}

.btn {
  justify-self: flex-start;
}

.length-txt {
  margin-top: 5rem;
  letter-spacing: 2px;
  animation: fade 0.3s;

  span {
    font-size: 1.5em;
    font-weight: bold;
  }
}

svg {
  display: none;
}
</style>