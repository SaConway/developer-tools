<template>
  <div class="container">
    <form class="form" :class="{ 'hex-to-rgb': hexToRgb, 'rgb-to-hex': !hexToRgb }">
      <label for="hex" class="hex-label">
        <span>HEX</span>

        <div>
          <span
            class="hash"
            :style="{ 'background-color': `#${hexValue}`, 'color': `${invertColor(hexValue)}` }"
          >#</span>
          <input
            v-model="hexValue"
            class="input"
            type="text"
            ref="hexInputEle"
            id="hex"
            @keyup="convert"
            autocomplete="off"
            :disabled="!hexToRgb"
          />
        </div>
      </label>

      <button @click.prevent="swap" class="btn swap-btn">⇄</button>

      <label for="rgb" class="rgb-label">
        RGB
        <input
          v-model="rgbValue"
          class="input input-rgb"
          type="text"
          id="rgb"
          @keyup="convert"
          autocomplete="off"
          :disabled="hexToRgb"
        />
      </label>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hexValue: "0096a9",
      rgbValue: "0, 150, 169",
      hexToRgb: true
    };
  },
  mounted() {
    this.$refs.hexInputEle.focus();
  },
  methods: {
    convert() {
      // turn 3-HEX to 6-HEX
      if (this.hexValue.length === 3) {
        this.hexValue =
          this.hexValue[0] +
          this.hexValue[0] +
          this.hexValue[1] +
          this.hexValue[1] +
          this.hexValue[2] +
          this.hexValue[2];
      }

      const red = this.hexValue.substr(0, 2),
        green = this.hexValue.substr(2, 2),
        blue = this.hexValue.substr(4, 2);

      const red10 = parseInt(red, 16),
        green10 = parseInt(green, 16),
        blue10 = parseInt(blue, 16);

      this.rgbValue = red10 + ", " + green10 + ", " + blue10;

      //   if (this.hexToRgb) {
      //   } else {
      //   }
    },
    swap() {
      this.hexToRgb = !this.hexToRgb;
      this.convert();
    },
    invertColor(hex) {
      // convert 3-digit hex to 6-digits.
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
        throw new Error("Invalid HEX color.");
      }
      // invert color components
      var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
      // pad each with zeros and return
      return "#" + this.padZero(r) + this.padZero(g) + this.padZero(b);
    },
    padZero(str, len) {
      len = len || 2;
      var zeros = new Array(len).join("0");
      return (zeros + str).slice(-len);
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-template-columns: max-content auto max-content;
  grid-column-gap: 3rem;
  place-items: center;

  label {
    text-align: center;
    letter-spacing: 1px;
  }
}

.form.rgb-to-hex {
  grid-template-areas: "rgb-label swap-btn hex-label";
}

.form.hex-to-rgb {
  grid-template-areas: "hex-label swap-btn rgb-label";
}

.hex-label {
  grid-area: hex-label;

  & > span:first-of-type {
    display: block;
  }

  & > div {
    position: relative;
  }

  .hash {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.75rem;
    position: absolute;
    top: 0.5rem;
    bottom: 0;
    left: 0;
    width: 3rem;
  }
}

.rgb-label {
  grid-area: rgb-label;

  .input {
    display: block;
  }
}

.input {
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: $border-radius;
  border: none;
  text-align: center;
  font-size: 1.25rem;

  &:disabled {
    background-color: $clr-gray;
  }

  &:focus {
    outline: none;
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

.form.rgb-to-hex .swap-btn {
  transform: rotate(180deg);
}

@media (max-width: 1200px) {
  .form {
    grid-template-columns: 1fr;
    grid-row-gap: 1.5rem;
  }

  .form.rgb-to-hex {
    grid-template-areas:
      "rgb-label"
      "swap-btn"
      "hex-label";
  }

  .form.hex-to-rgb {
    grid-template-areas:
      "hex-label"
      "swap-btn"
      "rgb-label";
  }
}
</style>