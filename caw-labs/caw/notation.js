

/**
 
  @param {number[]} scores 
  @returns {number} 
 */
function mean(scores) {
    if (!Array.isArray(scores) || scores.length === 0) {
        return 0; 
    }
    const sum = scores.reduce((acc, val) => acc + val, 0);
    return sum / scores.length;
}


module.exports = { mean };