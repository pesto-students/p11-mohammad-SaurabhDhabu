'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'rodOffcut' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY lengths as parameter.
 */

function rodOffcut(lengths) {
    var ret = [];
    ret.push(lengths.length);
    
    var remain =0;
    var retVal =0;
    while(remain < lengths.length){
        var min = Infinity;
        for(let i=0; i< lengths.length; i++){
            if(min > lengths[i] && lengths[i]!=0){
                min = lengths[i];
            }
        }
        
        for(let i=0; i< lengths.length; i++){
            if(lengths[i] > min){
                lengths[i] = lengths[i] - min;
                retVal-=1;
            }else{
                lengths[i] = 0;
                remain+=1;
            }
        }
        ret.push(retVal);
    }
    return ret;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const lengthsCount = parseInt(readLine().trim(), 10);

    let lengths = [];

    for (let i = 0; i < lengthsCount; i++) {
        const lengthsItem = parseInt(readLine().trim(), 10);
        lengths.push(lengthsItem);
    }

    const result = rodOffcut(lengths);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
