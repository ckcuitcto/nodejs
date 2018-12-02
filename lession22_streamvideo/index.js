var http = require('http'),
    fs = require('fs');


    http.createServer(function(req,res){
        var path = 'vy1.mp4';
        var stat = fs.statSync(path);

        var total = stat.size;
        
        console.log(req.headers);
        if(req.headers.range){
            var range = req.headers.range;
            var parts = range.replace(/bytes=/,"").split('-');
            var partialStart = parts[0];

            var partialEnd = parts[1];

            var start = parseInt(partialStart,10);
            var end = partialEnd ? parseInt(partialEnd, 10 ) : total - 1;
            var chunk = (end - start) + 1;

            res.writeHead(206, {
                'Content-Range' : 'bytes ' + start + ' - ' + end + '/' +  total ,
                'Accept-Ranges' : 'bytes',
                'Content-Length' :chunk ,
                'Content-Type' : 'video/mp4',
            });
            var file = fs.createReadStream(path, {start: start, end: end});
            file.pipe(res);
        }else{
            res.writeHead(200,{'Content-Length' :total ,'Content-Type' : 'video/mp4'});
            fs.ReadStream(path).pipe(res);
        }

     
    }).listen(6969);

    