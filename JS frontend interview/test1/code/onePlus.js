function recursive( arr, cb ) {
    const arrSlice = arr.slice();
    let found = false;
    arr.forEach(function( single, index ) {
      if( single == 10 ) {
        found = true;
        arrSlice[index] = 0;
        if( index > 0 ) {
          arrSlice[index-1] = arrSlice[index-1] + 1; 
        } else {
          arrSlice.unshift(1);
        }
      }
    });
    
    if( found ) {
        recursive( arrSlice, cb );
    } else {
        cb( arrSlice );
    }
  }
  
  function add( arr ) {
    const arrSlice = arr.slice();
    let finalArr = [];
    arrSlice[ arrSlice.length - 1 ] = arrSlice[ arrSlice.length - 1 ] + 1;
    
    //[8,10]
    recursive( arrSlice, function( arr ){
      //[9,0]
      finalArr = arr;
    });
    
    return finalArr;
  }
  
  console.log( add( [9,9] )  );