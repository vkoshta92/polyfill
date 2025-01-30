window.dom = {
  // timeout: null,
  _timerInit: function( secs ) {
    window.common.timer( secs, function( currentTimer, timer ){
      clearTimeout( timer );
      document.getElementsByClassName('timer')[0].innerHTML = currentTimer; 
      
    }, function() {
      console.log('Timer finished...');
      window.common.stop = false;
    });
  },
  _stopInit: function() {
    document.getElementsByClassName('stop')[0].addEventListener('click', function( e ) {
      window.common.stop = true;
    });
  },
  _resetInit: function() {
    document.getElementsByClassName('reset')[0].addEventListener('click', function( e ) {
    window.common.stop = true;      
      window.dom._timerInit( 100);
    });
  }
}
