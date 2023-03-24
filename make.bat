@echo off

REM Set up environment variables
set SPHINXOPTS=
set BUILDDIR=_build/
set SOURCEDIR=source/sphinx
set ASSETSDIR=source/html


REM Build the documentation
sphinx-build -b html %SPHINXOPTS% %SOURCEDIR% %BUILDDIR%

REM Copy assets to destination directory
robocopy %ASSETSDIR% %BUILDDIR%