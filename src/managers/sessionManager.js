// /**
//  * Created by Ayush Kulshrestha on 18/09/2019.
//  */

// import UniversalCookies from "universal-cookie";

// export default class Cookies {
//   constructor(opts = {}) {
//     this.cookies = new UniversalCookies(opts);
//   }

//   /**
//    * Sets a cookie with the provided key, data, and options.
//    *
//    * @param {string} key - The key for the cookie.
//    * @param {any} data - The data to store in the cookie. This will be stringified.
//    * @param {Object} options - Options for setting the cookie. Default sets path to '/'.
//    */
//   set(key, data, options = { path: "/" }) {
//     this.cookies.set(key, JSON.stringify(data), options);
//   }

//   /**
//    * Gets the value of the cookie with the given key.
//    *
//    * @param {string} key - The key of the cookie to retrieve.
//    * @returns {any} The deserialized JSON value of the cookie, or null if unable to parse.
//    */
//   get(key) {
//     const value = this.cookies.get(key);
//     try {
//       return JSON.parse(value);
//     } catch (error) {
//       console.error("Error parsing cookie data:", error);
//       return null;
//     }
//   }

//   /**
//    * Removes the cookie with the given key.
//    *
//    * @param {string} key - The key of the cookie to remove.
//    * @param {Object} options - Options to pass to the cookie remove method.
//    */
//   remove(key, options = { path: "/" }) {
//     this.cookies.remove(key, options);
//   }
// }
