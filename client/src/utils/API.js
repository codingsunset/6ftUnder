import axios from "axios";

export default {
  // Gets all books
  getRecords: function (user_id) {
    return axios.get("/api/records/" + user_id);
  },
  // Gets the book with the given id
  getRecord: function (id) {
    return axios.get("/api/records/" + id);
  },
  // Deletes the book with the given id
  deleteRecord: function (id) {
    return axios.delete("/api/records/" + id);
  },
  // Saves a book to the database
  saveRecord: function(recordData) {
    console.log("Record data ", recordData)
    return axios.post("/api/records", recordData);
  },
  // Handle user log in action
  userLogIn: function (userAuth) {
    // userAuth: {email:email,password:password}
    console.log("userLogIn() called", userAuth);
    return axios.post("/api/auth/login", userAuth)
  },
  userSignUp: function (userAuth) {
    console.log("userSignUp() called", userAuth);
    return axios.post("/api/auth/signup", userAuth)
  },
  userLogOut: function (userAuth) {
    // userAuth: {email:email,password:password}
    console.log("userLogOut() called", userAuth);
    sessionStorage.clear();
    window.location.href="/";
  }
};
