!(function() {

  function ViewPort(mobileWidth,padWidth) {
    var deviceWidth;
 

    var phoneScale;

    var device = new Device();

    // System Info
    var sys = device.getSystem();
  

    function viewPort(){


        // 手机的适配
        if (window.screen.width <= 768 || sys == 'mobile_Android') {

          deviceWidth = mobileWidth;

          phoneScale = parseInt(window.screen.width) / deviceWidth;

          if (window.orientation == 90 || window.orientation == -90) {

            var deviceWidth = padWidth;//使用pad横屏设计
            //横屏
            phoneScale = parseInt(window.screen.width) / deviceWidth;
           

          }
        } else {// iPad的适配

          var deviceWidth = padWidth;

          var phoneScale = parseInt(window.screen.width) / deviceWidth;

          if (window.orientation == 90 || window.orientation == -90) {

            //横屏
            var phoneScale = parseInt(window.screen.height) / deviceWidth;
          }
        }

     

        var meta = '<meta name="viewport" content="width=' + deviceWidth + ',minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi" >';


        var metaEl = document.getElementsByTagName('meta');

        for (var i = 0; i < metaEl.length; i++) {

          if (metaEl[i].getAttribute('name') == 'viewport') {

            metaEl[i].parentNode.removeChild(metaEl[i]);

          }
        }

        document.getElementsByTagName('head')[0].innerHTML += meta;
    }
    

    

    viewPort();


   


    window.onorientationchange = function(){
      setTimeout(function(){
        viewPort();
      },1);
    }
  }

  window.ViewPort =  ViewPort;

})();