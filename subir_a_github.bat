@echo off
title GeoBIM - Subir a GitHub
color 0b
echo ================================================================
echo       GEOBIM SOLUCIONES ESPACIALES - SUBIR A GITHUB
echo ================================================================
echo.
echo Repositorio destino: https://github.com/GeoBIM0925/Web-GeoBIM.git
echo Rama: main
echo.
cd /d "%~dp0"
"C:\Program Files\Git\cmd\git.exe" push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo ================================================================
    echo  [OK] Codigo subido exitosamente a GitHub!
    echo ================================================================
) else (
    echo [ERROR] No se pudo completar el push. Verifica tus credenciales de GitHub.
)
echo.
pause
