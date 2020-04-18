<template>
  <div class="container">
    <form class="form" :class="{ 'hex-to-rgb': hexToRgb, 'rgb-to-hex': !hexToRgb }">
      <label for="hex" class="hex-label">
        <span>HEX</span>

        <div>
          <span class="hash" :style="hashStyle">#</span>
          <input
            v-model="hexValue"
            class="input"
            type="text"
            ref="hexInputEle"
            id="hex"
            @keyup="convertToRgb"
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
          @keyup="convertToHex"
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
      invertClr: "#fff",
      hexToRgb: true
    };
  },
  computed: {
    hashStyle: function() {
      return {
        backgroundColor: this.hexToRgb
          ? `rgb(${this.rgbValue})`
          : `#${this.hexValue}`,
        color: this.invertClr
      };
    }
  },
  mounted() {
    this.$refs.hexInputEle.focus();
  },
  methods: {
    convertToRgb() {
      const hex = this.prettyHex();
      console.log("Log: convertToRgb -> hex", hex);

      if (hex === null) return;

      const red = hex.substr(0, 2),
        green = hex.substr(2, 2),
        blue = hex.substr(4, 2);

      const red10 = parseInt(red, 16),
        green10 = parseInt(green, 16),
        blue10 = parseInt(blue, 16);

      if (
        !Number.isInteger(red10) ||
        !Number.isInteger(green10) ||
        !Number.isInteger(blue10)
      ) {
        return;
      }

      this.rgbValue = red10 + ", " + green10 + ", " + blue10;

      this.setInvertClr(red10, green10, blue10);
    },
    prettyHex() {
      this.hexValue = this.hexValue.replace("#", "").replace(/ /g, "");
      let hex = this.hexValue;

      if (
        hex.length === 0 ||
        hex.length === 1 ||
        hex.length === 2 ||
        hex.length === 4 ||
        hex.length === 5
      ) {
        return null;
      }

      // turn 3-HEX to 6-HEX
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }

      if (hex.length > 6) {
        hex = hex.substring(0, 6);
      }

      return hex;
    },
    convertToHex() {
      const rgb = this.rgbValue.replace(/ /g, "").split(",");

      const red = +rgb[0],
        green = +rgb[1],
        blue = +rgb[2];

      console.log(red, green, blue);

      if (
        !Number.isInteger(red) ||
        !Number.isInteger(green) ||
        !Number.isInteger(blue)
      ) {
        return;
      }
      this.hexValue =
        this.componentToHex(red) +
        this.componentToHex(green) +
        this.componentToHex(blue);

      this.setInvertClr(red, green, blue);
    },
    componentToHex(c) {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    },
    setInvertClr(r, g, b) {
      console.log("setInvertClr");

      if (r * 0.299 + g * 0.587 + b * 0.114 > 186) {
        this.invertClr = "#000";
      } else {
        this.invertClr = "#fff";
      }
    },
    swap() {
      this.hexToRgb = !this.hexToRgb;

      if (this.hexToRgb) {
        this.convertToRgb();
      } else {
        this.convertToHex();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  width: fit-content;
  margin: auto;
  display: grid;
  grid-template-columns: max-content auto max-content;
  grid-column-gap: 3rem;
  place-items: center;

  &.rgb-to-hex {
    grid-template-areas: "rgb-label swap-btn hex-label";
  }

  &.hex-to-rgb {
    grid-template-areas: "hex-label swap-btn rgb-label";
  }

  label {
    text-align: center;
    letter-spacing: 1px;
  }
}

.hex-label {
  grid-area: hex-label;

  & > span:first-of-type {
    display: block;
    font-size: inherit;
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

    &.rgb-to-hex {
      grid-template-areas:
        "rgb-label"
        "swap-btn"
        "hex-label";
    }

    &.hex-to-rgb {
      grid-template-areas:
        "hex-label"
        "swap-btn"
        "rgb-label";
    }
  }
}
</style>