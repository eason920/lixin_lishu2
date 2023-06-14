#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf dist 
echo "清除舊的 dist"

echo "開始 build"
yarn build
echo "build 結束"

echo "將 html 改成 php 開始"
sed -i '' -e "s/<head>/<head><?php include('head.php'); ?>/" dist/index.html
mv dist/index.html dist/index.php
echo "將 html 改成 php 結束"
rm dist/service-worker.js
echo "刪除 service-wroker.js(禁止緩存)"

echo "將 php 檔案移動到 dist"
cp -R contact-form.php php-mailer head.php  dist
echo "將 php 檔案移動到 dist 結束"