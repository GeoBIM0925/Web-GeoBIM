@echo off
title Servidor Local - GeoBIM Soluciones Espaciales
color 0B
echo ===================================================
echo     Iniciando Servidor Web GeoBIM Soluciones
echo ===================================================
echo.
echo Directorio: %~dp0
echo Abriendo en: http://localhost:8000
echo Para detener el servidor presiona Ctrl + C
echo.
cd /d "%~dp0"
python -m http.server 8000 || py -m http.server 8000
pause
