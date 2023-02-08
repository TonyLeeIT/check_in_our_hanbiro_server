#!/bin/sh

cd /var/www/html/check_in_out_hanbiro
pm2 start npm --name "check_in_out_hanbiro" -- start
pm2 save --force