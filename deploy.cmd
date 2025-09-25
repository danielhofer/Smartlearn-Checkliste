rem deploy Smartlearn-Checkliste
rem ACHTUNG, löscht auf smartlearn.daho.ch zuerst alles
rem und lädt danach alles wieder hoch
rem weil der synchronize-Befehl mit WinSCP irgendwie buggy ist...

set SRC=C:\repos\Smartlearn-Checkliste
set DST=/
set HOST=smartlearn.daho.ch
set USER=smlcheck

"C:\Program Files (x86)\WinSCP\WinSCP.com" ^
  /command ^
    "open smlchecklist" ^
	"rm %DST%/*" ^
    "put -resume -nopermissions -nopreservetime %SRC%\* %DST%" ^
    "exit"
