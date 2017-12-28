#!/bin/bash
node /Development/MagicMirror/serveronly
DISPLAY=:0 chromium-browser -kiosk "http://localhost:8080"
