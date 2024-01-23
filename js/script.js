document.addEventListener("DOMContentLoaded", function () {
  let listBtn = document.querySelectorAll(".second__btn-comment");
  let listLoad = document.querySelectorAll(".load-page");
  let listShow = document.querySelectorAll(".show-img");
  let listSection = document.querySelectorAll(".section");

  listBtn.forEach(function (e) {
    e.addEventListener("click", function () {
      let next = e.parentNode;
      next = next.querySelector(".comment");
      next.classList.toggle("hide");
      if (e.textContent == "Показать комментарии") {
        e.textContent = "Скрыть комментарии";
      } else {
        e.textContent = "Показать комментарии";
      }
    });
  });
  listLoad.forEach(function (e) {
    var Visible = function (target) {
      // Все позиции элемента
      var targetPosition = {
          top: window.pageYOffset + target.getBoundingClientRect().top,
          left: window.pageXOffset + target.getBoundingClientRect().left,
          right: window.pageXOffset + target.getBoundingClientRect().right,
          bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
        },
        // Получаем позиции окна
        windowPosition = {
          top: window.pageYOffset,
          left: window.pageXOffset,
          right: window.pageXOffset + document.documentElement.clientWidth,
          bottom: window.pageYOffset + document.documentElement.clientHeight,
        };

      if (
        targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right
      ) {
        // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        let parent = $(e).parent().next();
        let loadItem = $(e).parent().children(".load");
        let btn = $(e).parent();
        $(loadItem).css("display", "flex");
        if ($(btn).is(".popup")) {
          console.log(parent);
          $(parent).removeClass("hide-section");
        } else {
          setTimeout(() => {
            $(parent).removeClass("hide-section");
            $(loadItem).remove();
          }, 5000);
        }
      }
    };

    // Запускаем функцию при прокрутке страницы
    window.addEventListener("scroll", function () {
      Visible(e);
    });
  });
  window.addEventListener("scroll", function () {
    let lastBtn = document.querySelector(".last-btn");
    var targetPosition = {
        top: window.pageYOffset + lastBtn.getBoundingClientRect().top,
        left: window.pageXOffset + lastBtn.getBoundingClientRect().left,
        right: window.pageXOffset + lastBtn.getBoundingClientRect().right,
        bottom: window.pageYOffset + lastBtn.getBoundingClientRect().bottom,
      },
      // Получаем позиции окна
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight,
      };

    if (
      targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
      targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
      targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
      targetPosition.left < windowPosition.right
    ) {
      // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      // Если элемент полностью видно, то запускаем следующий код
      $(lastBtn).parent().next().removeClass("hide-section");
      let сurrentTime = new Date();
      сurrentTime = сurrentTime.setMinutes(сurrentTime.getMinutes() + 10);
      function timer() {
        let now = new Date();
        let gap = сurrentTime - now;
        let min = Math.floor(gap / 1000 / 60) % 60;
        let sec = Math.floor(gap / 1000) % 60;
        let secSecond = sec % 10;
        let minSecond = min % 10;
        let secFirst = (sec - secSecond) / 10;
        let minFirst = (min - minSecond) / 10;

        if (gap < 0) {
          minFirst = "0";
          secFirst = "0";
          secSecond = "0";
          minSecond = "0";
          clearInterval(id);
        }
        $(".start__timer__minut-first").html(minFirst);
        $(".start__timer__sec-first").html(secFirst);
        $(".start__timer__minut-second").html(minSecond);
        $(".start__timer__sec-second").html(secSecond);
      }
      const id = setInterval(timer, 1000);
    }
  });
    timer()
  listShow.forEach(function (e) {
    e.addEventListener("click", function () {
      let show = e.parentNode;
      e.style.display = "none";
      show = show.querySelector(".blur");
      show.classList.remove("blur");
    });
  });

  $(".popup__btn").click(function () {
    $(".popup").css("display", "none");
  });
  
});
