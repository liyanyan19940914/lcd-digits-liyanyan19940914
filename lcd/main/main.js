function printLcd(input){
    
    var allLcds=loadAllLcds();
    
    var numberArray=buildArray(input);
    
    var lcdArray=buildLcdArray(numberArray,allLcds);
    
    toLcd(lcdArray);
}

function buildArray(input) {
    input += '';

    var numberArray=input.split('');
    
    for(var i=0;i<numberArray.length;i++){
        numberArray[i]=parseInt(numberArray[i]);
    }
    
    return numberArray;
}

function buildLcdArray(numberArray,allLcds) {
    
    var lcdArray=[];

    for (var j = 0; j < allLcds.length; j++) {
        lcdArray[j] = '';
        for (var i = 0; i < numberArray.length; i++) {
            lcdArray[j] += allLcds[j][numberArray[i]];
        }
    }

    return lcdArray;
}

function toLcd(lcdArray) {

    var print='';

    for(var i=0;i<lcdArray.length;i++){
        print+=(lcdArray[i]+'\n');
    }
    
    console.log(print);
}