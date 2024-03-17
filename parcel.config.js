module.exports = {
    // Add configuration options as needed
    // Example:
    // Copy _redirects to the dist directory
    async bundle({ bundler }) {
      await bundler.copyFile({
        from: '_redirects',
        to: './dist/_redirects'
      });
    }
  };
  