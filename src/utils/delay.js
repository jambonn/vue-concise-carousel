/**
 * Delay time
 * @param ms
 * @returns {Promise<unknown>}
 */
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

export default delay;
