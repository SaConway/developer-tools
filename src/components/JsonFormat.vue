<template>
  <div class="container">
    <form class="json-form">
      <textarea v-model="jsonInput" class="json-input" placeholder="JSON input here.."></textarea>

      <button @click.prevent="formatJson" class="btn btn-primary">Format</button>
    </form>

    <div v-if="jsonOutput" class="json-output">
      <span class="json-copy-text" v-if="jsonCopied">JSON Copied!</span>
      <button @click="copyJson" class="btn btn-secondary btn-copy-json">Copy</button>
      <pre class="json-output-text" id="json-output">{{ jsonOutput }}</pre>
    </div>

    <span class="json-invalid-text" v-if="jsonInvalid">Invalid JSON!</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsonInput: null,
      jsonOutput: null,
      jsonCopied: false,
      jsonInvalid: false
    };
  },
  methods: {
    formatJson() {
      this.jsonInvalid = false;
      this.jsonOutput = null;

      this.$nextTick().then(() => {
        if (this.jsonInput) {
          try {
            const jsonObj = JSON.parse(this.jsonInput);
            const jsonStr = JSON.stringify(jsonObj, null, 4);
            this.jsonOutput = jsonStr;
          } catch (error) {
            this.jsonInvalid = true;
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

<style scoped>
.json-form {
  margin-bottom: 3rem;
}

.json-input {
  display: block;
  width: 100%;
  min-height: 10rem;
  padding: 1rem;
  resize: vertical;
  border-radius: var(--border-radius);
  color: var(--clr-black);
}

.json-input:focus {
  outline: 0.1rem solid var(--clr-accent);
}

.json-output-text {
  margin-top: 1rem;
  padding: 1rem;
  box-shadow: var(--box-shadow);
  overflow-y: auto;
}

.json-output {
  position: relative;
  animation: fade 0.5s ease;
}

.json-copy-text {
  color: var(--clr-white);
  position: absolute;
  right: 0;
  opacity: 0;
  animation: fade-slide 3s ease;
}

.json-invalid-text {
  color: var(--clr-red);
  background-color: var(--clr-white);
  border: 2px solid var(--clr-red);
  box-shadow: var(--box-shadow);
  font-weight: bold;
  padding: 1rem;
  display: block;
  text-align: center;
  animation: shake 0.62s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
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

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-2px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(2px, 0, 0);
  }
}
</style>