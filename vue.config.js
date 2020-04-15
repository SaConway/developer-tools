module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/developer-tools/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_variables.scss";`,
      },
    },
  },
};
