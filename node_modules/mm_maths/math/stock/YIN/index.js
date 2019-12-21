/**
 * 判断是否阴线
 * @param {Number} open 开盘价
 * @param {Number} close 收盘价
 * @param {Number} chg 涨跌幅
 * @param {Number} n 幅度
 * @return {Number} 判断正确返回1,否则返回0
 */
module.exports = function YIN(open, close, chg, n) {
	if (chg < 0) {
		if (!n) {
			n = 0.02;
		}
		if (open * (1 - n) >= close) {
			return 1;
		}
	}
	return 0;
}
