# 这是一个很牛的一项目

package.json文件的作用：
    1，记录我们项目所需要的依赖
    2，别人拿到你的项目后，会根据package.json，去安装所有的依赖，只需要通过 npm install 

npm:  网站   下载器

问：下载的时候，都是从哪里下载的？
答：在npm网站的，这个网站是在国外，在国外有问题，下载时，可能有问题，如下载慢，可能被qiang掉。国内有些有公司，就把国外的所有的第三方模块，同步到国内。

默认的下载源是国外。如何切换呢？
答：需要用到另一个工具，叫nrm，这个工具是用来切换下载源地址。

要使用nrm这个工具，需要先安装这个工具。
答：npm i nrm -g

下载完后，nrm后，就可以查看，都有哪些下载源？
答：nrm ls   *表示当前使用的下载源  以后我们会使用到的下载源有：npm  taobao

如何把下载源从国外切换到国内？
答：urm use taobao

到底是使用国外的还是使用国内？
答：如果使用国外的下载不下来，就使用国内的，当然都使用国内的也是可以的，需要注意，有些第三主模块，使用国内的是不行的，必须要使用国外的。

还有一个，叫cnpm，cnpm也是代码两个东西：
答：cnpm下载源，cnpm也是一个下载器  我们也可以使用cnpm来下载东西

如何去安装cnpm呢？
答：npm i cnpm -g

也可以使用cnpm 来下载第三方模块 ？
答：cnpm i xxx

到底是使用npm，还是cnpm呢？
答:你要是使用npm，就一直使用npm，你是是使用cnpm，就一直使用cnpm


静态页面中的数据都是假数据，最后需要把假数据替换成真实的数据：
    前端渲染数据：ajax去请求node后端，后端把数据给ajax，ajax数据数据就带到了前端，前端把数据显示出来。这种模式叫前后端分离开发。也就是后端只需要提供api接口

    服务端渲染数据：前端只需要把页面交给后端，后端会通过模板引擎，把真实的数据浸染出来，最后再交给浏览器。

学习ejs，就是node的一个模板引擎。模板引擎的作用是什么？
答：作用就是在服务器，就假数据替换成真实数据。

执行语句：<%  %>
显示语句：<%= mes %>

JSON数据只有两种格式：
对象的格式：{"name":"zhangsan"}
数组的格式：[{},{},{},{}]


















