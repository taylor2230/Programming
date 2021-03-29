/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let ans = 0;
    points.sort((a, b) => a[0] - b[0]);
    points.forEach((item, index) => {
        index >= 1 ? ans = Math.max(ans, item[0] - points[index - 1][0]) : null;
    });

    return ans;
};