const url = require('url');
const fs = require('fs');

function renderHTML(path, response){
    fs.readFile(path, null, function (error, data){
        if(error){
            response.writeHead(404);
            response.write("Opps! Page not found");
        }else{
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
    handleRequest: function(request, response){
        response.writeHead(200, {'Content-Type':'text/html'});

        const path=url.parse(request.url).pathname;
        switch (path){
            case '/':
                renderHTML('./home.html', response);
                break;
            case '/about.html':
                renderHTML('./about.html', response);
                break;
            case '/projects.html':
                renderHTML('./projects.html', response);
                break;
            case '/contact.html':
                renderHTML('./contact.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not defined');
                response.end();
        }
    }
};