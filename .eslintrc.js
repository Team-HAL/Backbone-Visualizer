module.exports = {
    "parser": "babel-eslint",

    // Config Files
    "extends": [
        "airbnb"
    ],
    
    "plugins": [
        "react"
    ],
    // "parserOptions": {
    //   "ecmaVersion": 6,
    //     "ecmaFeatures": {
    //         "jsx": true,
    //         "modules": true
    //     }
    // },

    // Define globals for libraries
    "globals": {
        "angular": true, //Angular
        "$": true, //jQuery
        "Backbone": true, //Backbone
        "_": true  //Underscore
    }

};