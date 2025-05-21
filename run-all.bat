@echo off

REM Start backend in new window
start cmd /k "cd backend && npm install && npm start"

REM Start frontend in new window
start cmd /k "cd frontend && npm install && npm run dev"

echo All servers.
pause
