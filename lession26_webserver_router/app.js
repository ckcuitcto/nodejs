var url = require('url');
var fs = require('fs');

function renderHTML(path,res){
    fs.readFile(path,'utf8',function (error,content) {
        if(error){
            console.log(error);
        } else {
            res.writeHead(200,{"Content-Type" : "text/html"});
            res.write(content);
            res.end();
        }
    })
}

var router =  function(req,response){
    // console.log(req.url);
    // console.log(url.parse("http://kenh14.vn/lap-trinh/asdasdas-asdasdsa").pathname);

    var path = url.parse(req.url).pathname;
    console.log(path);
    switch (path){
        case "/":
            renderHTML('./module/index.html',response);
            break;
        case '/gioi-thieu' :
            renderHTML('./module/about-us.html',response);
            break;
        case '/san-pham' :
            renderHTML('./module/product.html',response);
            break;
        default:
            response.writeHead(404);
            response.write('Route not found please ');
            response.end();
    }
};

module.exports.router = router;
