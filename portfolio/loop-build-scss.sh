#!/bin/bash
while :
do
    sass index.scss > index.css.tmp
    cp index.css.tmp index.css
    rm index.css.tmp
    sleep 0.1
done