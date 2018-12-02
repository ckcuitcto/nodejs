var url = require('url');
var static = require('node-static');
var file = new static.Server(__dirname + "/module/");
var router =  function(req,response){
    console.log(req.url);
    switch (req.url){
        case "/":
            req.url = "index.html";
            break;
        case '/gioi-thieu' :
            req.url = "about-us.html";
            break;
        case '/san-pham' :
            req.url = "product.html";
            break;
        case '/dang-ky' :
            req.url = "singup.html";
            break;
        default:
            response.writeHead(404);
            response.write('Route not found please ');
            response.end();
    }

    if(req.method == "GET"){
        file.serve(req,response);
    }

    if(req.method == "POST")
    {
        var output = " du lieu cua form ";
        req.on("data",function (chunk) {
            output += chunk.toString();
        });

        req.on("end",function () {
            response.writeHead(200,{"Content-Type" : "text/html"});
            response.write(output);
            response.end();
        });
    }
};

module.exports.router = router;
