bash scripts/build/build.sh;
grunt bump:patch;
git add --all;
git commit -m"publish";