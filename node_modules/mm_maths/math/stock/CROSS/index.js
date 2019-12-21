/**
 * 交叉
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Number} 上穿返回1, 否则返回0
 */
module.exports = function CROSS(arr1, arr2) {
	if (arr1.length < 3 || arr2.length < 3) {
		return 0;
	}

	var ret = 0;

	for (var i = arr1.length - 1; i > 2; i--) {
		var x1 = arr1[i];
		var x2 = arr1[i - 1];

		var y1 = arr2[i];
		var y2 = arr2[i - 1];
		if (x1 > y1 && x2 < y2) {
			ret = 1;
			break;
		} else if (x1 < y1 && x2 > y2) {
			break;
		}
	}
	return ret;
};
