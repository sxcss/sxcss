# /bin/bash

sass --stop-on-error   scripts/dev/dev.scss:scripts/dev/dev.css;
gulp reset;
gulp functions;
gulp variables;
gulp mixins;
gulp index;
perl -i -pe"s/\@import .*;//g" index.scss;
sass --stop-on-error index.scss:index.css;
rm index.css;
rm index.css.map;
