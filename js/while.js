"use strict";

var i = 1;

while(i < 65536){
    if(i * 2){
        console.log(i*=2);
    }
}