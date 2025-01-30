



// promis in js
//promises

// promises chaning
console.log("start");
function importantAction(username) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`subscribe to   ${username}`);
    }, 2000);
  });
}

function likeThisVideo(video) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`like  this ${video}`);
    }, 2000);
  });
}

function shareTheVideo(share) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`share this ${share}`);
    }, 2000);
  });
}

function myName(name) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`my Name is ${name}`);
    }, 2000);
  });
}


importantAction("vishnu")
.then((res)=>{
    console.log(res);
    return likeThisVideo("javascript videos")
}).then((res)=>{
    console.log(res);
    return shareTheVideo("my playlist");
}).then((res)=>{
    console.log(res);
    return myName("vishnu");
})
.then((res)=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})


console.log("end");
