const axios = require("axios");
// npm module that loads environment variables
require("dotenv").config();

const API = {
    getUser(username) {
        return axios
        .get(`https://api.github.com/users/${username}?client_id=${
            process.env.CLIENT_ID
            }&client_secret=${process.env.CLIENT_SECRET}`)
        .catch(error => {
            console.log("User not found");
            // Uncaught exception status code
            process.exit(1);
        })
    }
}

module.exports = API;