module.exports = function check(str, bracketsConfig) {
    let stack = [str[0]];
  
    for (let i = 1; i < str.length; i++){
      let a = stack[stack.length - 1];
      let b = str[i];
      let c = stack.length;
      for (let j = 0; j < bracketsConfig.length; j++){ 
        if (a == bracketsConfig[j][0] && b == bracketsConfig[j][1]){
          stack.pop();
        } 
      }
      if (c === stack.length){
          stack.push(b);
      }   
    }
  return stack.length == 0;
}

