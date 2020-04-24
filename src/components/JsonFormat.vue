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
  name: "JsonFormat",
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
.json-form {
  margin-bottom: 3rem;
}

.json-input {
  width: 100%;
  min-height: 10rem;
  resize: vertical;

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
  animation: fade 0.5s ease-in;
}

.btn-copy-json {
  display: block;
}

.json-copy-text {
  color: $clr-white;
  position: absolute;
  right: 0;
  bottom: calc(100% + 1rem);
  opacity: 0;
  animation: fade-slide 3s ease;
}

@keyframes fade-slide {
  0%,
  100% {
    opacity: 0;
    transform: translateY(100%);
  }

  10%,
  90% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
