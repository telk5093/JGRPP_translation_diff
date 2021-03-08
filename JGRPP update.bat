@ECHO OFF
cd ..\JGRPP\
git pull origin jgrpp
cd ..\JGRPP_translation
:_START
node index.js
PAUSE
CLS
GOTO _START