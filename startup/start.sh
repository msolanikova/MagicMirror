#!/bin/bash
cd /home/pi/Development/MagicMirror
node serveronly
DISPLAY=:0 chromium-browser -kiosk "http://localhost:8080"
