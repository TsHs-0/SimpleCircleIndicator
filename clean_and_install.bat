@echo off

echo Removing directories and files...
rd /s /q "node_modules"
del /q "package-lock.json"

echo Installing npm dependencies...
npm install --save --legacy-peer-deps

echo Cleanup and installation completed.

run __ .\clean_and_install.bat