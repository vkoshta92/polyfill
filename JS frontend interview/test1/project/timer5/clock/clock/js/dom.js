window.dom = {
  _timerInit: function( secs, fn ) {
  
    window.common.timer( secs, function( currentTimer, timer ){
      clearTimeout( timer );
      document.getElementsByClassName('timer')[0].innerHTML = currentTimer; 
     if(fn) fn();
    }, function() {
      console.log('Timer finished...');
    }, fn);
  },
  _stopInit: function() {
    document.getElementsByClassName('stop')[0].addEventListener('click', function( e ) {
      window.common.stop = true;
    });
  },
  _resetInit: function() {
    document.getElementsByClassName('reset')[0].addEventListener('click', function( e ) {
      window.common.stop = false;
      window.dom._timerInit( 100 , function(){
        window.common.stop = true;
      }); 
    });
  }
}
