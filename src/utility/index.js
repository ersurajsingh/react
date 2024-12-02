export default class Utils {
  /**
   * Get item from localStorage
   * @param {string} key - The key to identify the item in localStorage
   * @returns {any|null} Parsed JSON data from localStorage, or null if the key does not exist
   */
  static localStorageGetItem = (key) => {
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data);
    return null;
  };

  /**
   * Set item in localStorage
   * @param {string} key - The key to identify the item in localStorage
   * @param {any} data - Data to be stored in localStorage (will be JSON.stringify-ed)
   */
  static localStorageSetItem = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  /**
   * Remove item from localStorage
   * @param {string} key - The key to identify the item in localStorage
   */
  static localStorageRemoveItem = (key) => {
    localStorage.removeItem(key);
  };

  /**
   * This function is made to handle success and error callback!
   * @param {Promise} promise - The promise to be handled
   * @returns {Promise<Array>} A promise that resolves to an array with either [null, data] on success or [err] on failure
   */
  static async parseResponse(promise) {
    return promise.then((data) => [null, data]).catch((err) => [err]);
  }

  /**
   * Generate a GUID (Globally Unique Identifier)
   * @returns {string} A string representing a GUID
   */
  static guid() {
    const s4 = () =>
      Math.floor(Math.random() * 65536)
        .toString(16)
        .padStart(4, "0");

    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      "4" +
      s4().substring(1) +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4()
    );
  }
}
