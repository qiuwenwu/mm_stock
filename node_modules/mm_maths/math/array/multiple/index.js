const sumproduct = require('../sumproduct');
const max = require('../max');
const min_multiple = require('../../base/min_multiple');

/**
 * 取最小公倍数
 * @param {Array} arr
 * @return {Number} 返回取最小公倍数
 */
module.exports = function multiple(arr) {
	var n = max(arr);
	for (var i = 0; i < arr.length; i++) {
		n = min_multiple(n, arr[i]);
	}
	return n;
};
