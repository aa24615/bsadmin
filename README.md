# BsAdmin后台html模板

基于[Bootstrap4](https://v4.bootcss.com/)构建

轻量不复杂 简洁不简单

### git仓库
- github: [https://github.com/aa24615/bsadmin](https://github.com/aa24615/bsadmin)
- gitee: [https://gitee.com/flash127/bsadmin](https://gitee.com/flash127/bsadmin)

### zip下载
- 官方下载: [http://www.qadmin.net/](http://www.qadmin.net/)


### 目录结构



```
 ├─dist                           构建后的代码
    ├─bsadmin-html                经典版
        ├─data                    模拟数据目录
        │  ├─menu.json            左侧菜单
        │  └─ ...    
        ├─static                  静态资源            
        │  ├─admin                后台资源目录
        │  │  ├─js                js目录
        │  │  ├─css               样式目录
        │  │  ├─img               图片目录
        │  │  └─ ...      
        │  ├─bootstrap            bootstrap4
        │  ├─ueditor              百度编辑器
        │  ├─iconfont             图标库
        │  ├─webuploader          百度上传插件
        │  ├─js                   公共js库
        │  └─ ...      
    ├─bsadmin-iframe              iframe版(文件与经典版一致)
  ├─src                           原代码(使用者不必理会)
  ├─run.js                        nodejs脚本
```


### 经典版

- 每个页面都需要引入左侧菜单与顶栏
- 建议MVC下使用 如:thinkphp laravel
- 不建议做前后端分离模式(暂时没有前端构建的标准模式)
- 演示: [http://www.qadmin.net/bsadmin/demo/](http://www.qadmin.net/bsadmin/demo/)


### iframe版

- 只需要一个页面引入左侧菜单与顶栏
- 主体内容以iframe标签方式展示 MVC与前后端分离通用
- 演示: [http://www.qadmin.net/bsadmin/iframe/](http://www.qadmin.net/bsadmin/iframe/)



### 在架构中使用

> php

- thinkphp6示例

    github: [https://github.com/aa24615/qadmin-thinkphp6](https://github.com/aa24615/qadmin-thinkphp6)  
    gitosc: [https://gitee.com/flash127/qadmin-thinkphp6](https://gitee.com/flash127/qadmin-thinkphp6)

- laravel8示例

    github: [https://github.com/aa24615/qadmin-laravel8](https://github.com/aa24615/qadmin-laravel8)    
    gitosc: [https://gitee.com/flash127/qadmin-laravel8](https://gitee.com/flash127/qadmin-laravel8)

> java

- spring示例

    github: [https://github.com/aa24615/qadmin-spring-web-mvc](https://github.com/aa24615/qadmin-spring-web-mvc)    
    gitosc: [https://gitee.com/flash127/qadmin-spring-web-mvc](https://gitee.com/flash127/qadmin-spring-web-mvc) 

> go

- beego示例

    ...待完善



### 联系我们

- QQ群: [943685402](https://qm.qq.com/cgi-bin/qm/qr?k=Fg-zh0M3VrrxNfMs9RxsEyfGa6OqCGCF&jump_from=webapi)

- 博客: [http://blog.php127.com](http://blog.php127.com)

- 更多开源项目: [https://github.com/aa24615](https://github.com/aa24615)


### License

bsadmin is licensed under the license of MIT. See the [LICENSE](LICENSE) for more details.


