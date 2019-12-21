
/**
 * 求平均值
 * @param {Array} arr 数组
 * @return {Number} 返回平均值
 */
module.exports = function AVERAGE(arr) {
	var num = 0;
	for (var i = 0; i < arr.length; i++) {
		num += arr[i];
	}
	return num / arr.length;
};
