const http = require("http");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const querystring = require("querystring");

var port = 3000;
http.createServer((req,res) => {
    switch (req.url) {
        case ("/"):
        case ("/index"):
        case ("/index.html"):
            var realurl = path.join(__dirname,"index.html");
            var indexdata = fs.readFileSync(realurl,"utf-8")
            fs.readFile("blog.txt","utf-8",(err,blogdata) => {
                if (err){
                    var arr1 = [];
                }else{
                    var arr1 = JSON.parse(blogdata);
                }
                var html = ejs.render(indexdata,{data:arr1});
                 res.end(html);
            })          
        break;
        case ("/save"):
            var str = "";
            req.on("data",chunk => str += chunk);
            req.on("end",() => {
                var obj = querystring.parse(str);
                var post = {
                    title:obj.title,
                    author:obj.author,
                    content:obj.content,
                    time:new Date().toLocaleString()
                }
                if(fs.existsSync("blog.txt")){
                    var blogfile = fs.readFileSync("blog.txt","utf-8");
                    var arr = JSON.parse(blogfile);
                }else{
                    var arr = [];
                }
                arr.unshift(post);
                fs.writeFile("blog.txt",JSON.stringify(arr),(err) => {
                    if (err) return;
                    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
                    res.end("<h1>发表成功<a href = '/'>返回首页</a></h1>");
                })
            })
        break;
        default:
            var dirurl = path.join(__dirname,req.url);
            if (fs.existsSync(dirurl) && fs.statSync(dirurl).isFile()){
                res.end(fs.readFileSync(dirurl))
            }
    }
    
}).listen(port,()=>{
    console.log(`服务器已经成功在${port}端口运行了`);
    
})