# /bin/bash

sass  --update --stop-on-error main.scss:main.css;
sass --update --stop-on-error --style=compressed  main.scss:main.min.css;
