ng build --prod &&
cp dist/index.html dist/404.html &&
git add dist &&
git commit -m "New deployment." &&
git subtree push --prefix dist origin master
