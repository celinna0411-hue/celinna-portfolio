@echo off
cd /d "%~dp0"
set "PORTFOLIO_PYTHON=C:\Users\admin\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
"%PORTFOLIO_PYTHON%" preview.py
