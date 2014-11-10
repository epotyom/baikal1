#!/bin/bash
for i in [0-9]*.jpg
do
djpeg $i | pnmscale -ysize 180 | cjpeg -optimize -progressive > TN_$i
echo $i processed
done
