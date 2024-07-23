$(document).ready(function () {
  //header
  //Липкая шапка
  var header = $(".header");
  var header_pos = header.height();

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= header_pos) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  });

  var menuBtn = $(".mobile-menu-btn");
  var mobileMenu = $(".mobile-menu");
  var closeMenu = $(".mobile-menu__close");

  menuBtn.on("click", showMenu);
  closeMenu.on("click", hideMenu);
  $(document).on("click", ".overlay", function () {
    hideMenu();
  });

  function showMenu() {
    mobileMenu.addClass("show");
    showOverlay();
  }

  function hideMenu() {
    mobileMenu.removeClass("show");
    hideOverlay();
  }

  function showOverlay() {
    $("body").prepend('<div class="overlay"></div>');
    $(".overlay").fadeIn();
    $("body").css("overflow", "hidden");
  }

  function hideOverlay() {
    $(".overlay").fadeOut(500, function () {
      $(".overlay").remove();
      $("body").css("overflow", "auto");
    });
  }

  let case_slider = new Swiper(".cases", {
    spaceBetween: 30,
    grabCursor: true,
    loop: false,
    navigation: {
      prevEl: ".s-cases .slider-btn--prev",
      nextEl: ".s-cases .slider-btn--next",
    },

    pagination: {
      el: ".s-cases .swiper-count",
      type: "fraction",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  //Табы
  $(".ecosystem-head__item").click(function () {
    $(".ecosystem-head__item").removeClass("active");
    $(this).addClass("active");
    var index = $(this).index();

    $(".ecosystem-body__item").removeClass("active");
    $(".ecosystem-body__item").eq(index).addClass("active");

    $(".ecosystem-toggle").removeClass("show");
    $(".ecosystem-toggle")
      .closest(".ecosystem-body__item")
      .find(".ecosystem-body__hidden")
      .slideUp();
    $(".ecosystem-toggle").find("span").text("Другие возможности");
  });

  $(".ecosystem-toggle").click(function () {
    if ($(this).hasClass("show")) {
      $(this).removeClass("show");
      $(this)
        .closest(".ecosystem-body__item")
        .find(".ecosystem-body__hidden")
        .slideUp();
      $(this).find("span").text("Другие возможности");
      var top = $("#s-eco").offset().top - 0;
      $("body,html").animate({ scrollTop: top }, 500);
    } else {
      $(this).addClass("show");
      $(this)
        .closest(".ecosystem-body__item")
        .find(".ecosystem-body__hidden")
        .slideDown();
      $(this).find("span").text("Свернуть возможности");
    }
  });

  $(".services-control .btn").click(function () {
    var index = $(this).index();

    $(".services-control .btn").removeClass("active");
    $(this).addClass("active");
    $(".service-card").removeClass("active");
    $(".service-card").eq(index).addClass("active");
  });

  let step_slider = new Swiper(".steps", {
    spaceBetween: 20,
    slidesPerView: 3,
    grabCursor: true,
    loop: false,
    navigation: {
      prevEl: ".steps-btns .slider-btn--prev",
      nextEl: ".steps-btns .slider-btn--next",
    },

    pagination: {
      el: ".steps-btns .swiper-count",
      type: "fraction",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      580: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      993: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  $(".faq__item").click(function () {
    $(this).toggleClass("active");
    $(this).find(".faq-body").slideToggle();
  });

  //формы

  // Маска телефона
  $(function ($) {
    $("input[type='tel']").mask("+7 (999) 999-99-99");
  });

  // sendForm();
  // function sendForm() {
  //    $.magnificPopup.open({
  //       items: {
  //          src: '#cookie-popup'
  //       },
  //       mainClass: 'my-mfp-zoom-in',
  //       removalDelay: 300,
  //    }, 0);
  // };

  //Popup
  $(".btn-popup").magnificPopup({
    type: "inline",
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: "auto",
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: "my-mfp-zoom-in",

    callbacks: {
      beforeOpen: function () {
        var pl = scrollbarWidth();
        $(".header").css("padding-right", pl);
      },
      close: function () {
        $(".header").css("padding-right", 0);
      },
    },
  });

  $("#accept-cookie").on("click", function () {
    $.magnificPopup.close();
  });

  $("#decline-cookie").on("click", function () {
    $('script[src="https://mc.yandex.ru/metrika/tag.js"]').remove();

    // Отключение Яндекс.Метрики, если она уже была инициализирована
    if (typeof ym !== "undefined") {
      ym(97608506, "disable");
    }

    $.magnificPopup.close();
  });

  function scrollbarWidth() {
    var documentWidth = parseInt(document.documentElement.clientWidth);
    var windowsWidth = parseInt(window.innerWidth);
    var scrollbarWidth = windowsWidth - documentWidth;
    return scrollbarWidth;
  }

  //Скролл по клику
  $(".scroll-link").click(function () {
    event.preventDefault();
    hideMenu();
    var minus = 60;
    var id = $(this).attr("href"),
      top = $(id).offset().top - minus;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var subcribeBtn = document.getElementsByClassName("subscribe-btn")[0];
  var span = document.getElementsByClassName("close")[0];

  function showModal() {
    modal.classList.add("show");
  }

  function hideModal() {
    modal.classList.remove("show");
    setTimeout(function () {
      modal.style.display = "none";
    }, 300);
  }

  subcribeBtn.onclick = function () {
    hideModal();
    localStorage.setItem("subscribed", "true");
  };

  btn.onclick = function () {
    modal.style.display = "block";
    setTimeout(showModal, 10);
  };

  span.onclick = function () {
    hideModal();
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      hideModal();
    }
  };
});
