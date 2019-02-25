@echo off
title DreamSDK Website Distribution

echo Making distribution directory...

set DIST_DIR=dist
set IMG_DIR=%DIST_DIR%\img
set JS_DIR=%DIST_DIR%\js
set CSS_DIR=%DIST_DIR%\css
set DL_DIR=%DIST_DIR%\download

if not exist %DIST_DIR% mkdir %DIST_DIR%
if not exist %IMG_DIR% mkdir %IMG_DIR%
if not exist %JS_DIR% mkdir %JS_DIR%
if not exist %CSS_DIR% mkdir %CSS_DIR%

copy *.png %DIST_DIR%
copy *.ico %DIST_DIR%
copy *.svg %DIST_DIR%
copy browserconfig.xml %DIST_DIR%
copy *.html %DIST_DIR%
copy site.webmanifest %DIST_DIR%
copy .htaccess %DIST_DIR%

copy img\* %IMG_DIR%
copy js\*.min.js %JS_DIR%
copy css\*.min.css %CSS_DIR%
xcopy download %DL_DIR%\ /S /E /Y

set VENDOR_BOOTSTRAP_CSS=%DIST_DIR%\vendor\bootstrap\css\
if not exist %VENDOR_BOOTSTRAP_CSS% mkdir %VENDOR_BOOTSTRAP_CSS%
copy vendor\bootstrap\css\bootstrap.min.css %VENDOR_BOOTSTRAP_CSS%

set VENDOR_FONTAWESOME_FREE=%DIST_DIR%\vendor\fontawesome-free\css\
if not exist %VENDOR_FONTAWESOME_FREE% mkdir %VENDOR_FONTAWESOME_FREE%
copy vendor\fontawesome-free\css\all.min.css %VENDOR_FONTAWESOME_FREE%

set VENDOR_MAGNIFIC_POPUP=%DIST_DIR%\vendor\magnific-popup\
if not exist %VENDOR_MAGNIFIC_POPUP% mkdir %VENDOR_MAGNIFIC_POPUP%
copy vendor\magnific-popup\magnific-popup.css %VENDOR_MAGNIFIC_POPUP%
copy vendor\magnific-popup\jquery.magnific-popup.min.js %VENDOR_MAGNIFIC_POPUP%

set VENDOR_JQUERY=%DIST_DIR%\vendor\jquery\
if not exist %VENDOR_JQUERY% mkdir %VENDOR_JQUERY%
copy vendor\jquery\jquery.min.js %VENDOR_JQUERY%

set VENDOR_BOOTSTRAP_JS=%DIST_DIR%\vendor\bootstrap\js\
if not exist %VENDOR_BOOTSTRAP_JS% mkdir %VENDOR_BOOTSTRAP_JS%
copy vendor\bootstrap\js\bootstrap.bundle.min.js %VENDOR_BOOTSTRAP_JS%

set VENDOR_JQUERY_EASING=%DIST_DIR%\vendor\jquery-easing\
if not exist %VENDOR_JQUERY_EASING% mkdir %VENDOR_JQUERY_EASING%
copy vendor\jquery-easing\jquery.easing.min.js %VENDOR_JQUERY_EASING%

echo Done!
pause
