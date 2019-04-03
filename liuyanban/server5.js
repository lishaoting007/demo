const http = require("http");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const querystring = require("querystring");

let port = 3000;
http.createServer((req,res) => {
    switch(req.url) {
        case ("/"):
        case ("/index"):
        case ("/index.html"):
            let realurl = path.join(__dirname,"index.html");
            let indexHtml = fs.readFileSync(realurl,"utf-8");
            fs.readFile("blog.txt","utf-8",(err,blogdata) => {
                if (err) {
                    var arr = [];
                } else {
                    var arr = JSON.parse(blogdata);
                }
                let html = ejs.render(indexHtml,{data:arr})
                res.end(html);
            })
            
        
        break;
        case ("/save"):
            let str = "";
            req.on("data",chunk => str += chunk);
            req.on("end",() => {
                let obj = querystring.parse(str);
                let post = {
                    title:obj.title,
                    author:obj.author,
                    content:obj.content,
                    time:new Date().toLocaleString()
                }
                if (fs.existsSync("blog.txt")){
                    var arr = JSON.parse(fs.readFileSync("blog.txt"));
                }else{
                    var arr = [];
                }
                arr.unshift(post);
                fs.writeFile("blog.txt",JSON.stringify(arr),(err) => {
                    if (err) return;
                    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
                    res.end("<h1>发表成功<a href = '/'>返回首页</a></h1>")
                })

            })
        break;
        default:
            let dirurl = path.join(__dirname,req.url);
            if (fs.existsSync(dirurl) && fs.statSync(dirurl).isFile()){
                res.end(fs.readFileSync(dirurl));
            }
        break;
    };
}).listen(port,() => {
    console.log(`服务器已经在${port}端口运行起来了`);
    
})