# check_in_out_hanbiro
directory app : /var/www/html/check_in_out_hanbiro

git checkout linux
cd ./node_modules/puppeteer
npm run install

recommend bunyan for logging
pm2 saves logs to $HOME/.pm2/logs/XXX-err.log by default, where XXX is your pm2 app name
pm2 start npm --name "app name" -- start
pm2 start npm --name "check_in_out_hanbiro" -- start
pkill -f node


//Sequenlize
yarn sequelize-cli init
npx sequelize-cli model:generate --name UserModel --attributes userid:string,password:string,displayName:string,photoUrl:string
#update package.json and add in a db:migrate & -->db:g:migration--> script:
"db:migrate": "sequelize-cli db:migrate",
#run command line
yarn db:migrate