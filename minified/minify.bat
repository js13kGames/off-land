REM clear previous executions
del js13kgame.zip
del index.html
del main.min.js

REM minify js files
java -jar compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js ../*.js --js_output_file main.min.js

REM create HTML file
echo ^<script^> > index.html

REM copy minified js into HTML file
type main.min.js >> index.html

REM add HTML tags in file
echo ^</script^>^<div^>^<canvas^>^</canvas^>^</div^> >> index.html

REM zip HTML file
7z a -tzip js13kgame.zip index.html
pause