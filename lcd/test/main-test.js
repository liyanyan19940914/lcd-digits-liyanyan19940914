
describe('lcd-digits',function () {
    var allLcds;
    beforeEach(function () {
        allLcds=loadAllLcds();
    });
    
    describe('unit testing ',function () {
        describe('test buildArray function',function () {
            var input;
            input=910;
            
            it('return correct numArray',function () {
                var numberArray=[9,1,0];
                expect(buildArray(input)).toEqual(numberArray);
            });
        });
        
        describe('test buildLcdArray function',function () {
            var numberArray;
            beforeEach(function () {
                numberArray=[9,1,0];
            });
            
            it('return correct lcdArray',function () {
                var lcdArray=['._. ... ._. ','|_| ..| |.| ','..| ..| |_| '];
                expect(buildLcdArray(numberArray,allLcds)).toEqual(lcdArray);
            });
        });
    });
    
    describe('integration testing',function () {
        var allLcds;
        var input;
        input=910;
        beforeEach(function () {
            allLcds=loadAllLcds();
        });
        it('should print correct text',function () {
            spyOn(console, 'log');
            printLcd(input);
            var expectText='._. ... ._. \n'+'|_| ..| |.| \n'+'..| ..| |_| \n';
            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });
});