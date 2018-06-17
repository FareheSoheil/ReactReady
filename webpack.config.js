// this file should be written in ES5
var path = require("path");

var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");

var config = {

    entry: SRC_DIR  + "/app/index.js", //main entry file 
    output: {
        path: DIST_DIR + "/app", 
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: { // for transpiling ES6 to ES5 , no need if you're writing ES5 or raw css , js and html
        rules: [ //each loader is like a js object
            // for translating ES6 to ES5
            {
                //which file should webpack look for , to translate it with traslators (like babel in this project) 
                //because we are using ES6 , it should test every js file => we use Reqular expression
                test: /\.js?/, 
                //which folders you should look to find these js files 
                include: SRC_DIR,
                exclude: /node_modules/,
                // the loader or transpiler itself
                loader: "babel-loader",
                query: {
                    // the presets babel needs to work properly
                    presets:["react","es2015","stage-2"]
                }
                
            },
            // for parsing css files
            {
                test: /\.css$/, 
                include: SRC_DIR, 
                exclude: /node_modules/,  
                loader: ['style-loader', 'css-loader'],
           }
        ] 
    },
    mode: "development" 
};

module.exports = config;
