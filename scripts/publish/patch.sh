bash scripts/build/build.sh;
npm version patch;
git add --all;
git commit -m"Patch";
git push;
npm publish;