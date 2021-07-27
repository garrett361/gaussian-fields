// Modified from https://stackoverflow.com/questions/30976477/generate-static-html-files-from-ejs-templates

var fs = require('fs'),
    ejs = require("ejs");

function ejs2html(path, information) {
    fs.readFile(path+"/src/index.ejs", 'utf8', function (err, data) {
        if (err) { console.log(err); return false; }
        var ejs_string = data,
            template = ejs.compile(ejs_string),
            html = template(information);
        fs.writeFile(path+"/index.html", html, function(err) {
            if(err) { console.log(err); return false }
            return true;
        });  
    });
}

ejs2html(__dirname)