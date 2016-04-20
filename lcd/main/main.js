/**
 * Created by liyan on 16-4-19.
 */
function printLcd(input){
    var allLcds=loadAllLcds();
    var numArray=buildArray(input);
    var lcdArray=buildlcdArray(numArray,allLcds);
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
function buildlcdArray(numArray,allLcds) {
    var lcdArray=[];
    for(var i=0;i<numArray.length;i++){
        lcdArray.push(allLcds[numArray[i]]);
    }
    return lcdArray;
}
function toLcd(lcdArray) {
    var str;
    str=lcdArray[0][0]+ ' '+lcdArray[1][0]+' '+lcdArray[2][0]+'\n'+lcdArray[0][1]+ ' ' +lcdArray[1][1]+' '+lcdArray[2][1]+'\n'+
                    lcdArray[0][2]+' '+lcdArray[1][2]+' '+lcdArray[2][2];
    return str;
}