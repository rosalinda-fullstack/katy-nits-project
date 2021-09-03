AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    const swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  };

  const _headerScroll = () => {
    $(document).ready(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
        }
        else{
        $('header').removeClass("sticky");
        }
      });
    });
  }
  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _headerScroll();
  };

  return {
    init: init,
  };
})();
