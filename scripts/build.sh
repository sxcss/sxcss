# /bin/bash

sass  --update --stop-on-error index.scss:dist/main.css;
sass --update --stop-on-error --style=compressed  index.scss:dist/main.min.css;
