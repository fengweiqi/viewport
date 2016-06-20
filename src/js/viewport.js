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
        hp();
        document.getElementsByTagName('head')[0].innerHTML += meta;
    }
    
   var timestamp = '_'+Date.now();
    function hp(){

      

   

      if(document.body!=null){
        if (window.orientation == 90 || window.orientation == -90 ) {
          var div = document.createElement('div');
            
          div.id = timestamp;

        

          div.style.position = 'fixed';
          div.style.left = 0;
          div.style.top = 0;
          div.style.right = 0;
          div.style.bottom = 0;
          div.style.zIndex = 1000000000;
          div.style.background = '#ffffff';
          div.style.color = '#000';
          div.style.textAlign = 'center';
          div.style.fontSize = '30px';
            
          div.innerHTML = "<span style='position:absolute;display:inline-block;left:50%;top:50%;margin-left:-150px;margin-top:-20px;'>竖屏查看体验更佳哦^0^";
          div.style.paddingTop ='100px';
          if(document.getElementById(timestamp)==null){ document.body.appendChild(div);}
         


        }else {

           document.body.removeChild(document.getElementById(timestamp));
          
        }
      }
      
      

    }
    
    viewPort();





    window.onorientationchange = function(){
      setTimeout(function(){
        viewPort();
      },50);
    }
  }

  window.ViewPort =  ViewPort;

})();