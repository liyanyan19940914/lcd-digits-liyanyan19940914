function printLcd(input){
    
    var allLcds=loadAllLcds();
    
    var numArray=buildArray(input);
    
    var lcdArray=buildLcdArray(numArray,allLcds);
    
    var Lcd=toLcd(lcdArray);
    console.log(Lcd);
}

function buildArray(input) {
    
    var numArray=[];

    input += '';
    
    var newArray=input.split('');
    
    for(var i=0;i<newArray.length;i++){
        numArray.push(parseInt(newArray[i]));
    }
    
    return numArray;
}

function buildLcdArray(numArray,allLcds) {
    
    var lcdArray=[];
    
    for(var i=0;i<numArray.length;i++){
        lcdArray.push(allLcds[numArray[i]]);
    }
    
    return lcdArray;
}

function toLcd(lcdArray) {
    
    var print='';
    for(var i=0;i<lcdArray.length;i++) {
        for (var j = 0; j < lcdArray.length; j++) {
            print += lcdArray[j][i];
            if (j === 2 && i!=2) {
                print += '\n';
            }
            else {
                print += ' ';
            }
        }
    }
    
    return print;
}