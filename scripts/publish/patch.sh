bash scripts/build/build.sh;
gulp npm-version;
git add --all;
git commit -m"publish";
git push;