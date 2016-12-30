#!/bin/bash    

#
# clean build project and push to remote server:
# rm -r public/
# hugo --theme=hugo-creative-theme
#

HOST="grundschule-anzefahr-niederwald.de:21"
USER="f00c7593"
PASS=$(cat ftp.pw)
FTPURL="ftp://$USER:$PASS@$HOST"
LCD="./public"
RCD="/"
#DELETE="--delete"

lftp -c "set ftp:list-options -a; set ssl:verify-certificate false;
open '$FTPURL';
lcd $LCD;
cd $RCD;
mirror --reverse \
       $DELETE \
       --verbose"

#mirror --reverse \
#       $DELETE \
#       --verbose \
#       --exclude-glob a-dir-to-exclude/ \
#       --exclude-glob a-file-to-exclude \
#       --exclude-glob a-file-group-to-exclude* \
#       --exclude-glob other-files-to-exclude"

# see http://serverfault.com/questions/24622/