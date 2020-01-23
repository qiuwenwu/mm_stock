/**
 * 上升趋势
 * @param {Object} arr
 * @param {Number} n 幅度 例如 0.02
 * @return {Number} 上升返回1, 否则返回0
 */
module.exports = function UP(arr, n) {
	var num = 1;
	if(n){
		num += n;
	}
	if (arr.length > 3) {
		var len = arr.length;
		var v1 = arr[len - 4];
		var v2 = arr[len - 3];
		var v3 = arr[len - 2];
		if (v3 > v2 * num && v2 > v1 * num) {
			return 1
		}
	}
	return 0;
};
