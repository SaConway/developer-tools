<template>
  <div class="container">
    <form class="form" :class="{ 'px-to-rem': pxToRem, 'rem-to-px': !pxToRem }">
      <label for="px" class="px-label">
        Pixel
        <input
          v-model="pxValue"
          class="input"
          type="text"
          ref="pxInputEle"
          id="px"
          @keyup="convert"
          autocomplete="off"
          :disabled="!pxToRem"
        />
      </label>

      <button @click.prevent="swap" class="btn swap-btn">⇄</button>

      <label for="rem" class="rem-label">
        Rem
        <input
          v-model="remValue"
          class="input input-rem"
          type="text"
          id="rem"
          @keyup="convert"
          autocomplete="off"
          :disabled="pxToRem"
        />
      </label>

      <p class="fineprint">
        Relative to root font-size of
        <input
          type="text"
          class="font-size-input"
          v-model="fontSize"
          @keyup="convert"
        />
        pixel
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pxValue: 16,
      remValue: 1,
      fontSize: 16,
      pxToRem: true
    };
  },
  mounted() {
    this.$refs.pxInputEle.focus();
  },
  methods: {
    convert() {
      if (this.pxToRem) {
        this.remValue = this.pxValue / this.fontSize;
      } else {
        this.pxValue = this.remValue * this.fontSize;
      }
    },
    swap() {
      this.pxToRem = !this.pxToRem;
      this.convert();
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  $gap: 3rem;
  display: grid;
  grid-template-columns: max-content auto max-content;
  grid-column-gap: $gap;
  grid-row-gap: calc(#{$gap} * 2);
  place-items: center;

  label {
    text-align: center;
    letter-spacing: 1px;
  }
}

.form.rem-to-px {
  grid-template-areas:
    "rem-label swap-btn px-label"
    "fineprint fineprint fineprint";
}

.form.px-to-rem {
  grid-template-areas:
    "px-label swap-btn rem-label"
    "fineprint fineprint fineprint";
}

.rem-label {
  grid-area: rem-label;
}

.px-label {
  grid-area: px-label;
}

.input {
  display: block;
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: $border-radius;
  border: none;
  text-align: center;
  font-size: 1.25rem;

  &:disabled {
    background-color: $clr-gray;
  }

  &:not(:disabled) {
    border-left: 5px solid $clr-accent;
  }
}

.swap-btn {
  padding: 1rem;
  align-self: flex-end;
  background-color: transparent;
  color: $clr-white;
  font-size: 1.5rem;
  grid-area: swap-btn;
  transition: transform 0.25s ease-in-out;
}

.form.rem-to-px .swap-btn {
  transform: rotate(180deg);
}

.fineprint {
  font-size: 0.9rem;
  grid-area: fineprint;
}

.font-size-input {
  text-align: center;
  background: transparent;
  color: $clr-white;
  border: none;
  width: 1rem;
  text-decoration: underline;

  &:focus {
    outline: none;
  }
}

@media (max-width: 1200px) {
  .form {
    grid-template-columns: 1fr;
    grid-row-gap: 1.5rem;
  }

  .form.rem-to-px {
    grid-template-areas:
      "rem-label"
      "swap-btn"
      "px-label"
      "."
      "."
      "."
      "fineprint";
  }

  .form.px-to-rem {
    grid-template-areas:
      "px-label"
      "swap-btn"
      "rem-label"
      "."
      "."
      "."
      "fineprint";
  }
}
</style>
