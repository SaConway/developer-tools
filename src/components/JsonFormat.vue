<template>
  <div class="container">
    <form class="json-form">
      <textarea
        v-model="jsonInput"
        :class="{ err: err }"
        class="json-input"
        placeholder="JSON input here.."
        ref="jsonInputEle"
        @keyup.ctrl.enter="formatJson"
      ></textarea>

      <button @click.prevent="formatJson" class="btn btn-primary">Format</button>
    </form>

    <div v-if="jsonOutput" class="json-output">
      <span class="json-copy-text" v-if="jsonCopied">JSON Copied!</span>
      <button @click="copyJson" class="btn btn-secondary btn-copy-json">Copy</button>
      <pre class="json-output-text" id="json-output">{{ jsonOutput }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsonInput: null,
      jsonOutput: null,
      jsonCopied: false,
      err: false
    };
  },
  mounted() {
    this.$refs.jsonInputEle.focus();
  },
  methods: {
    formatJson() {
      this.err = false;
      this.jsonOutput = null;

      this.$nextTick().then(() => {
        if (this.jsonInput) {
          try {
            const jsonObj = JSON.parse(this.jsonInput);
            const jsonStr = JSON.stringify(jsonObj, null, 4);
            this.jsonOutput = jsonStr;
          } catch (error) {
            this.err = true;
          }
        }
      });
    },
    copyJson() {
      navigator.clipboard.writeText(this.jsonOutput).then(() => {
        this.jsonCopied = true;

        setTimeout(() => (this.jsonCopied = false), 3000);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: block;
}

.json-form {
  margin-bottom: 3rem;
  width: 100%;
}

.json-input {
  display: block;
  width: 100%;
  min-height: 10rem;
  padding: 1rem;
  resize: vertical;
  border-radius: $border-radius;
  color: $clr-black;

  &.err {
    border: 1px solid $clr-red;
  }
}

.json-output-text {
  margin-top: 1rem;
  padding: 1rem;
  box-shadow: $box-shadow;
  overflow-y: auto;
  white-space: pre-wrap;
}

.json-output {
  width: 100%;
  position: relative;
  animation: fade 0.5s ease;
}

.btn-copy-json {
  display: block;
}

.json-copy-text {
  color: $clr-white;
  position: absolute;
  right: 0;
  opacity: 0;
  animation: fade-slide 3s ease;
}

@keyframes fade-slide {
  0%,
  100% {
    opacity: 0;
    bottom: calc(100% + 0.5rem);
  }

  10%,
  90% {
    opacity: 1;
    bottom: calc(100% + 1rem);
  }
}
</style>
