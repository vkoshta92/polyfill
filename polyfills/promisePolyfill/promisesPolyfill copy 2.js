console.log("start");
function importantAction(username, cb) {
  setTimeout(() => {
    cb(`subsribe  to ${username}`);
  }, 3000);
}

function likeThisVideo(video, cb) {
  setTimeout(() => {
    cb(`like  this ${video}`);
  }, 2000);
}

function shareTheVideo(share, cb) {
  setTimeout(() => {
    cb(`share this ${share}`);
  }, 1000);
}

function myName(name, cb) {
  cb(`my Name is ${name}`);
}
// callback hell  //pyramid of doom
importantAction("vishnu", function (message) {
  console.log(message); // phle ye execute hoga
  likeThisVideo("javascript videos", (action) => {
    console.log(action); // ab ye execute hoga.
    shareTheVideo("my playlist", (playlist) => {
      console.log(playlist); // then ye
      myName("vishnu", (name) => {
        console.log(name); // then ye
      });
    });
  });
});

console.log("end");
