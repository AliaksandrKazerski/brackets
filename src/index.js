module.exports = function check(str, bracketsConfig) {
  var arr = [];
  arr.push(str[0]);
  for (var i = 1; i < str.length; i++) {
    arr.push(str[i]);
    for (var j = 0; j < bracketsConfig.length; j++) {
      if (JSON.stringify([arr[arr.length - 2], arr[arr.length - 1]]) === JSON.stringify(bracketsConfig[j])) {
        arr.pop();
        arr.pop();
      }
    }
  }
  if (arr.length === 0) {
    return true;
  }
  return false;    
}
