<template>
  <div class="container">
    <form class="form" :class="{ 'px-to-rem': pxToRem, 'rem-to-px': !pxToRem }">
      <label for="px" class="px-label">
        Pixel
        <input
          v-model="pxValue"
          class="input"
          type="text"
          id="px"
          @keyup="convert"
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
          :disabled="pxToRem"
        />
      </label>

      <p>
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

<style scoped>
.form {
  --gap: 3rem;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: max-content auto max-content;
  grid-template-rows: repeat(2, auto);
  grid-column-gap: var(--gap);
  grid-row-gap: calc(var(--gap) * 2);
  place-items: center;
}

.form.px-to-rem .px-label {
  grid-column: 1 / 2;
}

.form.px-to-rem .rem-label {
  grid-column: 3 / 4;
}

.form.rem-to-px .px-label {
  grid-column: 3 / 4;
}

.form.rem-to-px .rem-label {
  grid-column: 1 / 2;
}

label {
  text-align: center;
  grid-row: 1 / 2;
}

.input {
  display: block;
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: var(--border-radius);
  border: none;
  text-align: center;
  font-size: 1.25rem;
}

.input:disabled {
  background-color: var(--clr-gray);
}

.swap-btn {
  padding: 1rem;
  align-self: flex-end;
  background-color: transparent;
  color: var(--clr-white);
  font-size: 1.5rem;
  grid-row: 1 / 2;
  transition: transform 0.4s ease-in-out;
}

.form.rem-to-px .swap-btn {
  transform: rotate(180deg);
}

.form.px-to-rem .swap-btn {
  transform: rotate(180deg);
}

p {
  font-size: 0.9rem;
  grid-column: 1 / -1;
}

.font-size-input {
  text-align: center;
  background: transparent;
  color: var(--clr-white);
  border: none;
  width: 1rem;
  text-decoration: underline;
}

.font-size-input:focus {
  outline: none;
}
</style>