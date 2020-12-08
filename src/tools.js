

const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const config = require('./static/admin/js/config.js');


var getMenu = function (type='html') {


    let menu = config.menu;


    let html = '';

    for (topVal of menu){

        html  += ' <li>';


        if(topVal.url.length>1){
            if(type=='html'){
                html  += '<a href="'+ topVal.url +'">'
            }else{
                html  += '<a href="'+ topVal.url +'" target="main">'
            }

        }else{
            html  += '<a class="top-menu" href="javascript:;">'
        }

        html  += '<i class="iconfont mr-1">'+topVal.icon+'</i>'
        html  += topVal.name
        if(topVal.list.length>0){
            html  += '<i class="iconfont arrow float-right">&#xe66c;</i>'
        }

        html  += '</a>'
        if(topVal.list.length>0){
            html  += '<ul class="sub-menu">'
            for( subVal of topVal.list){

                html  += '<li>'
                if(type=='html'){
                    html  += '<a href="'+subVal.url+'" >'+subVal.name+'</a>'
                }else{
                    html  += '<a href="'+subVal.url+'" target="main">'+subVal.name+'</a>'
                }

                html  += '</li>'

            }
            html  += '</ul>'
        }

        html  += ' </li>';
    }


    return html;
}



const copyFolder = function(copiedPath, resultPath) {


    resultPath = path.join(process.cwd(), resultPath);
    copiedPath = path.join(process.cwd(), copiedPath);

    if(fs.existsSync(resultPath)){
        fse.removeSync(resultPath)
    }

    fs.mkdirSync(resultPath);

    if (fs.existsSync(copiedPath)) {
        fse.copySync(copiedPath,resultPath);
    } else {
        console.log('这个目录不存在:', copiedPath);
    }
}


const writeFile = async function(f,body) {
    try {
        await fse.outputFile(f, body)
    } catch (err) {
        console.error("遇到错误:",err)
    }
}

const newVersion = function(){
    let date = new Date();
    var version = date.getFullYear()+''+
        (date.getMonth()+1)+''+
        date.getDate()+'_'+
        date.getHours()+''+
        date.getMinutes()+''+
        date.getSeconds();//新版本号

    return version;
}




module.exports.copyFolder = copyFolder;
module.exports.writeFile = writeFile;
module.exports.newVersion = newVersion;
module.exports.getMenu = getMenu;
