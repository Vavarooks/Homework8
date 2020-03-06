var inquirer = require("inquirer");

var axios = require("axios");

var fs = require("fs");

var pdf = require("html-pdf");

var generatehtml = require("./assets/js/generateHtml")

var usercolor = "";

var numStars = 0;

var reponame = "";

const questions = [
    {
        type: "input",
        name: "github",
        message: "Enter Gihub Username?"
    },
    {
        type: "list",
        choices: ["red", "blue", "yellow", "green", "purple", "orange", "magenta"],
        name: "favColor",
        message: "Enter favorite color?"
    }

];

function writeToFile(data) {
    fs.writeFileSync("index.html", data)
}



function init() {
    inquirer.prompt(questions)
        .then(function (response) {
            usercolor = response.favColor
            reponame = response.github
            // console.log(response)
        })
        .then(function (response) {
            return axios.get(`https://api.github.com/users/${reponame}/starred`)
        })
        .then(function (response) {
            numStars = response.data.length;
            console.log(response.data.length, "Stared Lenght")

            return axios.get(`https://api.github.com/users/${reponame}`)
        })
        .then(function (apiresult) {
            console.log(apiresult.data)
            if (apiresult.data.blog === "" ){
                var noBlog = "disabled"
            }
            else {
                var noBlog = ""
            }
            var userdata = {
                color: usercolor,
                username: apiresult.data.login,
                name: apiresult.data.name,
                followers: apiresult.data.followers,
                following: apiresult.data.following,
                publicRepo: apiresult.data.public_repos,
                bio: apiresult.data.bio,
                image: apiresult.data.avatar_url,
                url: apiresult.data.html_url,
                blog: apiresult.data.blog,
                location: apiresult.data.location,
                stars: numStars,
                noblog: noBlog

            }
            console.log(userdata)
            return generatehtml(userdata);
        })



        .then(function (html) {
            console.log(html);
            var options = { format: 'Letter' };

            writeToFile(html);
            var htmlfile = fs.readFileSync("./index.html", "utf8")
            pdf.create(htmlfile, options).toFile("./profile.pdf", function (error, response) {
                if (error) {
                    throw error
                }
                console.log("pdf file created")
            })
        })
}

init();