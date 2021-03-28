const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const tools = require('../tools.js');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const setIndex = function() {
    const pathName = 'bsadmin-iframe';

    fse.copySync('src/iframe/index.html', 'dist/'+pathName+'/index.html');

    const menu = tools.getMenu('iframe'); // 注入菜单

    let index = fs.readFileSync(path.join('dist/'+pathName+'/index.html'), 'utf8');

    index = index.replace(/\{\{menu\}\}/g, menu);

    tools.writeFile('dist/'+pathName+'/index.html', index);
};

const start = function() {
    const pathName = 'bsadmin-iframe';

    tools.copyFolder('src/pages', 'dist/'+pathName);

    setIndex();

    tools.copyFolder('src/static', 'dist/'+pathName+'/static');

    const dir = path.join(process.cwd(), 'dist/'+pathName+'/');
    const files = fs.readdirSync(dir);

    files.forEach(function(item, index) {
        const fPath = path.join(dir, item);

        const stat = fs.statSync(fPath);

        if (stat.isFile() === true) {
            const ext = fPath.slice(-4);
            if (ext=='html') {
                console.log(fPath);

                if (item!='index.html' && item!='login.html') {
                    let layout = fs.readFileSync(path.join(__dirname, 'layout.html'), 'utf8');

                    const html = fs.readFileSync(fPath, 'utf8');

                    const dom = new JSDOM(html);
                    const document = dom.window.document;
                    const title = document.querySelector('title').textContent || '';
                    const body = document.querySelector('body').innerHTML || '';

                    layout = layout.replace(/\{\{version\}\}/g, tools.newVersion());
                    layout = layout.replace(/\{\{title\}\}/g, title);
                    layout = layout.replace(/\{\{body\}\}/g, body);

                    tools.writeFile(fPath, layout);
                }
            }
        }
    });
};

module.exports.start = start;

