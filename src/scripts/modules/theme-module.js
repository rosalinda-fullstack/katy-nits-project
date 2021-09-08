AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    const swiperBanner = new Swiper('.swiper-arrow-holder', '.swiper-container', {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  };

  const _feedbackPagination = () => {
    // private stuff

    const swiperFeedback = new Swiper('swiper-feedback', '.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
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

  const _pawbarScroll = () => {
    $(document).ready(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 1){  
        $('paw-list').addClass("sticky");
        }
        else{
        $('paw-list').removeClass("sticky");
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
    _pawbarScroll();
    _feedbackPagination();
  };

  return {
    init: init,
  };
})();
