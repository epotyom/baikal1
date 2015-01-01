#!/bin/bash
curdir=`pwd`
for d in */ 
do
    echo $curdir$d
    cd $curdir/$d
	for i in [0-9]*.jpg
	do
		djpeg $i | pnmscale -ysize 180 | cjpeg -optimize -progressive > TN_$i
		echo $i processed
	done
done
