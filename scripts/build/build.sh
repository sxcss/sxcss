# /bin/bash

sass --stop-on-error   scripts/dev/dev.scss:scripts/dev/dev.css;

gulp functions;
gulp variables;
gulp mixins;
gulp index;

perl -i -pe"s/\@import .*;//g" index.scss;
sed '/^$/d' index.scss > index.min.scss;

rm index.scss;
cp index.min.scss index.scss;
rm index.min.scss;

sass --stop-on-error index.scss:index.css;
rm index.css;
rm index.css.map;
