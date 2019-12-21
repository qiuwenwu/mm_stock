/**
 * 连涨趋势
 * @param {Object} arr 数组
 * @param {Number} period 周期(单位:天)
 * @return {Number} 连涨返回1, 否则返回0
 */
module.exports = function UPNDAY(arr, period) {
	if (arr.length > period) {
		var day = 0;
		for (var i = arr.length - 1; i > 0; i--) {
			var bl = arr[i] > arr[i - 1];
			if (bl) {
				day++;
				if (day == period) {
					break;
				}
			} else {
				break;
			}
		}
		if (day >= period) {
			return 1
		}
	}
	return 0;
};
