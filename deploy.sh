#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 将文档上传git
git add -A
git commit -m 'deploy'
git push -f git@github.com/JMjiayou8/vuepress-doc.git master

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 发布到 https://<USERNAME>.github.io
git push -f git@github.com:JMjiayou8/JMjiayou8.github.io.git master

cd -