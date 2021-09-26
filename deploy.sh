#！ /bin/bash

echo "start update"

# 切换到release分支
git checkout release

# 拉取git上develop分支最新代码
git reset --hard origin/develop

# 打包
echo "start build"
yarn build

# 部署
echo "start commit"
git add .
git commit -m "feat: update-"$(date +%Y/%m/%d-%H:%M:%S)

echo "start push"
git push -f origin release

# 切换回develop分支
echo "end update"
git checkout develop