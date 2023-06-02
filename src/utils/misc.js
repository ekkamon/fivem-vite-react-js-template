export const isEnvBrowser = () => !window.invokeNative;

export const getImageUrl = (path) => {
  const modules = import.meta.globEager('../assets/images/**/*');

  return modules['../assets/images/' + path]?.default;
};
