
export default {
  test() {
    return fetch('/api')
      .then(response => response.json());
  }
};