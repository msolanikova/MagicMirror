#!/bin/bash
cd /home/pi/Development/MagicMirror
node serveronly & sleep 5
DISPLAY=:0 chromium-browser -kiosk "http://localhost:8080"
