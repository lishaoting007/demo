const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");
const mime = require("mime");
const ejs = require("ejs");
var port = 3000;

http.createServer((req,res)=>{
    var realurl = path.join(__dirname,"index.html");
    switch(req.url){
        case ("/"):
        case ("/index"):
        case ("/index.html"):
        var datas = fs.readFileSync(realurl,"utf-8");
        var blogData = fs.readFileSync("blog.txt","utf-8");
        var posts = JSON.parse(blogData)
        var html = ejs.render(datas, {data:posts})
        res.end(html);

        break;
    case "/save":
        var str = "";
        req.on("data",chunk=>str += chunk);
        req.on("end",() => {
            var obj = querystring.parse(str);
            var post = {
                title:obj.title,
                author:obj.author,
                content:obj.content,
                time:new Date().toLocaleString()

            }
        if(fs.existsSync("blog.txt")){
            var str1 = fs.readFileSync("blog.txt","utf-8");
            var arr = JSON.parse(str1);
        }else{
            var arr= [];
        }
        arr.unshift(post);
        fs.writeFile("blog.txt",JSON.stringify(arr),(err) => {
            if(err) return;
            res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
            res.write("<h1>发表成功<a href='/'>返回首页</a></h1>");
            res.end()
        })
    })
        break;
    default:
          var file = path.join(__dirname,req.url)
          if(fs.existsSync(file) && fs.statSync(file).isFile()){
            res.end(fs.readFileSync(file));
          }
          break;
    }
}).listen(port,()=>{
    console.log(`服务器已经在${port}端口运行起来了`);
})