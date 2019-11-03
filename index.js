console.log('hello js test');

const fruits = ['りんご', 'バナナ'];

console.log(fruits.length);

/**
 * prototypeによる拡張
 * @type {string}
 */
Array.prototype.hoge = 'foooooooo';

/**
 * 継承
 */
class SpecialArray extends Array {
    constructor(arg) {
        super();
        this.arg = arg;
    }
    get testGetter() {
        return this.arg;
    }
}
const specialArray = new SpecialArray(2);

console.log('??????????');
console.log(specialArray.testGetter);
console.log(specialArray.hoge);

console.log('defineProperty前・・・');
console.log(specialArray.testDefineProperty);

/**
 * オブジェクトのプロパティを変更する・・・
 */
Object.defineProperty(specialArray, 'testDefineProperty', {
    value: 1,
    enumerable: true,
});

console.log('defineProperty後・・・');
console.log(specialArray.testDefineProperty);
/**
 * 更に拡張
 */
SpecialArray.prototype.hoge2 = 'foo22222222222222';
class SubSpecialArray extends SpecialArray {
    constructor(arg) {
        super();
        this.arg = arg;
    }
    get testGetter() {
        return this.arg;
    }
}

const subSpecialArray = new SubSpecialArray(2);

console.log('更に拡張後・・・・');
console.log(fruits.hoge2);
console.log(subSpecialArray.hoge2);
