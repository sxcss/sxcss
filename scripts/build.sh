# /bin/bash
sass --stop-on-error   dist/test.scss:dist/test.css;
gulp reset;
gulp functions;
gulp variables;
gulp mixins;
gulp index;
perl -i -pe"s/\@import .*;//g" index.scss
