!#/bin/bash

clear
echo "This information is provided by mysystem.sh"

echo "Hello, $USER"
echo 

echo "Today's date is `date`,this is week `date +"%V"`."
echo 

echo "This users are currently connected:"
w | cut -d " " -f 1 - | grep -v USER | sort -u
echo 

echo "This is `uname -s` running on `uname -m` processor."
echo 

echo "Uptime: "
uptime
echo 

echo "-----End of Report-----"
