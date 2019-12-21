/**
 * 求数组之和
 * @param {Array} arr 数组
 * @return {Number} 返回数值
 */
module.exports = function sumproduct(arr) {
	var num = 1;
	for (var i = 0; i < arr.length; i++) {
		num *= arr[i];
	}
	return num;
};
