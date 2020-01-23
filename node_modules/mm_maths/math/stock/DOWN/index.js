/**
 * 下降趋势
 * @param {Object} arr
 * @return {Number} 下降返回1, 否则返回0
 */
module.exports = function DOWN(arr) {
	if (arr.length > 3) {
		var len = arr.length;
		var v1 = arr[len - 4];
		var v2 = arr[len - 3];
		var v3 = arr[len - 2];
		if (v3 < v2 && v2 < v1) {
			return 1
		}
	}
	return 0;
};
