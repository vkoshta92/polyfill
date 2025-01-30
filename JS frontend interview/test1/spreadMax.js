Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
  
  let p = [35,2,65,7,8,9,12,121,33,99];
  
  console.log(`Max value is: ${p.max()}` +
    `\nMin value is: ${p.min()}`);


// let arr=[35,2,65,7,8,9]
// var min = Math.min( ...arr );
// var  max = Math.max( ...arr );

// console.log(max);
// console.log(min);