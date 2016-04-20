/**
 * Created by liyan on 16-4-19.
 */
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
                var numArray=[9,1,0];
                expect(buildArray(input)).toEqual(numArray);
            });
        });
        describe('test buildlcdArray function',function () {
            var numArray;
            beforeEach(function () {
                numArray=[9,1,0];
            });
            it('return correct lcdArray',function () {
                var lcdArray=[['._.','|_|','..|'],['...','..|','..|'],['._.','|.|','|_|']];
                expect(buildlcdArray(numArray,allLcds)).toEqual(lcdArray);
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
            var expectText='._. ... ._.\n'+'|_| ..| |.|\n'+'..| ..| |_|';
            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });
});