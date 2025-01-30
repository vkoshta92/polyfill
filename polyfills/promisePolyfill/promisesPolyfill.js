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

// promise combinater
// is one promise fail promise will be fail but ye ak array return krt h sare resolve promises ko ye ak array me  dal deta hai. and g hm   vha se jake data ko  print kara sakte hai.
let all=Promise.all([importantAction("vishnu"),likeThisVideo("javascript videos"),shareTheVideo("my playlist"),myName("vishnu")]);
// console.log(all);
all.then((res)=>{
console.log(res);
})
.catch(err=>{
  console.log(err);
})







console.log("end");







