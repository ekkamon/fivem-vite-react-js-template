export const isEnvBrowser = () => !window.invokeNative;

export const getImageUrl = (path) => {
  const modules = import.meta.globEager('../assets/images/**/*.png');

  return modules['../assets/images/' + path]?.default;
};
