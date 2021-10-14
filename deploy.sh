#！ /bin/bash
echo "start update"

# checkout branch
git checkout release

# pull develop
git reset --hard origin/develop

# build
echo "start build"
yarn build

# commit
echo "start commit"
git add .
git commit -m "feat: update-"$(date +%Y/%m/%d-%H:%M:%S)

# push
echo "start push"
git push -f origin release

# checkout branch
echo "end update"
git checkout develop