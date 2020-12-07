const menu = [{
    "name": "首页",
    "icon": "&#xe6a2;",
    "url": "index.html",
    "hidden": false,
    "list": []
    },
    {
        "name": "用户管理",
        "icon": "&#xe6e0;",
        "url": "#",
        "hidden": false,
        "list": [{
            "name": "用户列表",
            "url": "user_index.html"
        }, {
            "name": "添加用户",
            "url": "user_create.html"
        }]
    }, {
        "name": "用户管理",
        "icon": "&#xe6e0;",
        "url": "#",
        "hidden": false,
        "list": [{
            "name": "用户列表",
            "url": "user_index.html"
        }, {
            "name": "添加用户",
            "url": "user_create.html"
        }]
    }, {
        "name": "用户管理",
        "icon": "&#xe6e0;",
        "url": "#",
        "hidden": false,
        "list": [{
            "name": "用户列表",
            "url": "user_index.html"
        }, {
            "name": "添加用户",
            "url": "user_create.html"
        }]
    },
    {
        "name": "文章管理",
        "icon": "&#xe69d;",
        "url": "#",
        "hidden": false,
        "list": [{
            "name": "栏目管理",
            "url": "type_index.html"
        }, {
            "name": "文章管理",
            "url": "article_index.html"
        }]
    }, {
        "name": "系统设置",
        "icon": "&#xe6d4;",
        "url": "#",
        "hidden": false,
        "list": [{
            "name": "网站设置",
            "url": "web_index.html"
        }, {
            "name": "友情连接",
            "url": "flink_index.html"
        }, {
            "name": "导航管理",
            "url": "nav_index.html"
        }, {
            "name": "修改密码",
            "url": "web_pwd.html"
        }, {
            "name": "清除缓存",
            "url": "web_cache.html"
        }, {
            "name": "登录页",
            "url": "login.html"
        }]
    }, {
        "name": "数据库",
        "icon": "&#xe6ad;",
        "url": "#",
        "hidden": false,
        "list": [{
            "name": "备份数据库",
            "url": "db_backup.html"
        }, {
            "name": "还原数据库",
            "url": "db_reduction.html"
        }]
    }, {
        "name": "退出登录",
        "icon": "&#xe68c;",
        "url": "out.html",
        "list": []
    }, {
        "name": "开发者官网",
        "icon": "&#xe690;",
        "url": "http://www.qadmin.net/",
        "target": "_blank",
        "list": []
    }, {
        "name": "开发文档",
        "icon": "&#xe699;",
        "url": "http://docs.qadmin.net/",
        "target": "_blank",
        "list": []
    }];

const config = {
    name: "BsAdmin",
    menu: menu,
};

module.exports.name = "BsAdmin";
module.exports.menu = menu;
