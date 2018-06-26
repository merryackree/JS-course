
function sum(a, b) {
	return a + b > 10;
}
sum(2,2)

// РџРµСЂРµРјРµРЅРЅР°СЏ num РґРѕР»Р¶РЅР° Р±С‹С‚СЊ СЂР°РІРЅР° 5. РџСЂРѕРІРµСЂРёС‚СЊ РЅР° СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРµ.

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

// РЈР·РЅР°С‚СЊ, С‡С‚Рѕ РЅР°Рј РІРµСЂРЅРµС‚ С„СѓРЅРєС†РёСЏ each РІ РґР°РЅРЅС‹С… СѓСЃР»РѕРІРёСЏС…. РџСЂРѕРІРµСЂРёС‚СЊ РµС‘ РЅР° С‚РёРї РґР°РЅРЅС‹С…, РєРѕС‚РѕСЂС‹Р№ РѕРЅР° РІРѕР·РІСЂР°С‰Р°РµС‚,
// РЅР° СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРµ РѕР¶РёРґР°РµРјРѕРјСѓ СЂРµР·СѓР»СЊС‚Р°С‚Сѓ (РєРѕС‚РѕСЂС‹Р№ РІС‹ РїРѕР»СѓС‡РёР»Рё) Рё РЅР° СЃРІРѕР№СЃС‚РІРѕ length.

var each = function(startArr, f){return f(startArr)};
arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));


assert = require('chai').assert;


describe('Chai tests', function(){
	it('Равна 5', function(){
		assert.equal(num, 5);
	});

	describe('Тип данных', function() {
		it('Проверяем тип данных', function(){
				assert.typeOf(sum(), 'boolean');
				assert.equal(sum(5,6), true);
		});
	});

	describe('Функция each', function() {
		it('Проверяем тип данных', function(){
				assert.typeOf(each(arr, myFunc), 'array');
		});

		it('Проверяем длину', function() {
				assert.equal(each(arr, myFunc).length, 5);
		});
	});
});