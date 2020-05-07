ng build --prod &&
git add dist &&
git commit -m "New deployment." &&
git subtree push --prefix dist origin master
