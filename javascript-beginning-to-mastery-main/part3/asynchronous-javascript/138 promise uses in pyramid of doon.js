const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(element){
              element.textContent = text;
              element.style.color = color;
              resolve();
            }else{
              reject("element not found");
            }
          },time)
    })  
  }


  // is trh bhi varible me store krke kr skte h
  // const returnedPromise=changeText(heading1, "one", "red", 1000);
  // returnedPromise.then(()=>{
  //   return changeText(heading2, "two", "purple", 1000)
  // })
  
  // 
  // changeText(heading1, "one", "red", 1000)
  //   .then(()=>{
  //     return changeText(heading2, "two", "purple", 1000)
  //   })

// arrow function me return   na likhe direct  likj skte h or ye return ak promise dega aur hr ak sec ke bd color change hoga
// jo km pyramid of doon se hua tha vo km promise se asani se ho gya.
//  agr mn lo 2nd me error aa je to sare thn nhi chega , reject ko catch vla chla dega.
changeText(heading1, "one", "red", 1000)
  .then(()=>changeText(heading2, "two", "purple", 1000))
  .then(()=>changeText(heading3, "three", "green", 1000))
  .then(()=>changeText(heading4, "four", "orange", 1000))
  .then(()=>changeText(heading5, "four", "orange", 1000))
  .then(()=>changeText(heading6, "four", "orange", 1000))
  .then(()=>changeText(heading7, "four", "orange", 1000))
  .then(()=>changeText(heading8, "four", "orange", 1000))
  .then(()=>changeText(heading9, "four", "orange", 1000))
  .then(()=>changeText(heading10, "four", "orange", 1000))
  .catch((error)=>{
      alert(error);
  })

