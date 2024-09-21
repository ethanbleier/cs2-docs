#!/bin/bash
git pull origin main
npm install
npm run build
sudo cp deploy/nginx.conf /etc/nginx/sites-available/cs2-docs.org
sudo nginx -t && sudo systemctl reload nginx
sudo chown -R www-data:www-data build
