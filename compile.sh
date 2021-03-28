lessc src/static/admin/css/base.less src/static/admin/css/base.css
lessc src/static/admin/css/index.less src/static/admin/css/index.css
lessc src/static/admin/css/main.less src/static/admin/css/main.css
lessc src/static/admin/css/login.less src/static/admin/css/login.css
lessc src/static/admin/css/html.less src/static/admin/css/html.css
lessc src/static/admin/css/theme-default.less src/static/admin/css/theme-default.css

./node_modules/.bin/eslint --ext .js,.html src/html/ src/iframe/ src/pages/ src/tools.js src/menu.js --fix

node app.js
