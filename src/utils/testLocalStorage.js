export const testLocalStorage = () => {
  const test = new Date().valueOf();
  try {
    localStorage.setItem('test', test);
    localStorage.removeItem('test');
    return true;
  } catch(e) {
    return false;
  }
};
