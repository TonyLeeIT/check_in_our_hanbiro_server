#!/bin/sh

cd /var/www/html/check_in_out_hanbiro
pm2 stop check_in_out_hanbiro
pm2 delete check_in_out_hanbiro
pm2 save --force