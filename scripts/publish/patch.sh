bash scripts/build/build.sh;
git add --all;
git commit -m"Patch";
git push;
npm version patch;
npm publish;