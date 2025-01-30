var isTrue=false
window.dom = {
  _timerInit: function( secs ) {
    window.common.timer( secs, function( currentTimer, timer ){
      clearTimeout( timer );
      document.getElementsByClassName('timer')[0].textContent = currentTimer;
      // console.log("current time",timerrr)
      
    }, function() {
      console.log('Timer finished...');
      window.common.stop=false;
    });
  },
  // isTrue:false,


     startBtn:function(){
      document.getElementsByClassName('stop')[0].style.backgroundColor = "red";
      document.getElementsByClassName('stop')[0].innerHTML = "stop";
      console.log("startBtn click....")

      let data=document.getElementsByClassName("timer")[0].textContent
      console.log(data);


      window.dom._timerInit(data,function(e){

        window.stop.true;
      });
      isTrue=false
      // window.common.stop = false;
     },
     stopBtn:function(){
      document.getElementsByClassName('stop')[0].style.backgroundColor = "blue";
      document.getElementsByClassName('stop')[0].innerHTML = "start";
      window.common.stop = true;
      console.log("stopBtn click....")
      isTrue=true
     },

  _stopInit: function() {
   
      document.getElementsByClassName('stop')[0].addEventListener('click', function( e ) {
        if(!isTrue){
          window.dom.stopBtn()

        }
        else{
          window.dom.startBtn()

          ;
        }
      });
    
  },
 
  _resetInit: function() {
    document.getElementsByClassName('reset')[0].addEventListener('click', function( e ) {
      window.common.stop = true;
      window.dom._timerInit( 100 );
  
     
    });
  }
}
















// var isTrue=false
// window.dom = {
//   _timerInit: function( secs ) {
//     window.common.timer( secs, function( currentTimer, timer ){
//       clearTimeout( timer );
//       let timerrr=document.getElementsByClassName('timer')[0].innerHTML = currentTimer;
//       // console.log("current time",timerrr)
//     }, function() {
//       console.log('Timer finished...');
//       window.common.stop=false;
//     });
//   },
//   // isTrue:false,
//      startBtn:function(){
//       document.getElementsByClassName('stop')[0].style.backgroundColor = "red";
//       document.getElementsByClassName('stop')[0].innerHTML = "stop";
//       console.log("startBtn click....")
      
//       // document.getElementsByClassName('timer')[0].innerHTML = currentTimer;
//       window.dom._timerInit();
//       isTrue=false
//       window.common.stop = false;
//      },
//      stopBtn:function(){
//       document.getElementsByClassName('stop')[0].style.backgroundColor = "blue";
//       document.getElementsByClassName('stop')[0].innerHTML = "start";
//       window.common.stop = true;
//       console.log("stopBtn click....")
//       isTrue=true
//      },

//   _stopInit: function() {
   
//       document.getElementsByClassName('stop')[0].addEventListener('click', function( e ) {
//         if(!isTrue){
//           window.dom.stopBtn()

//         }
//         else{
//           window.dom.startBtn()

//           ;
//         }
//       });
    
//   },
 
//   _resetInit: function() {
//     document.getElementsByClassName('reset')[0].addEventListener('click', function( e ) {
//       window.common.stop = true;
//       window.dom._timerInit( 100 );
  
     
//     });
//   }
// }

