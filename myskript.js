var title = document.getElementById('myTitle');
var openButton = document.getElementById('myTitle'); // Переименуйте переменную для ясности
var modal = document.getElementById('myModal');
var overlay = document.getElementById('overlay');
var close = document.getElementById('myClose');

openButton.onclick = function() {
    modal.style.display = "block";
    overlay.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
    overlay.style.display = "none";
}

const heartButton = document.getElementById('MyHeart');

heartButton.addEventListener('click', function() {
    heartButton.classList.toggle('active'); // Добавляем/удаляем класс active для смены изображения
});



const swiper1 = new Swiper('.swiper-container1', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
});


const swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
});

const swiper3 = new Swiper('.swiper-container3', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
});

const swiper4 = new Swiper('.swiper-container4', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
});

const swiper5 = new Swiper('.swiper-container5', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
});

const swiper6 = new Swiper('.swiper-container6', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
});

const swiper7 = new Swiper('.swiper-container7', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
});



document.addEventListener("DOMContentLoaded", () => {
    const mainObject = document.querySelector(".main-object");
    const flyingObjects = document.querySelectorAll(".flying-object");
  
    if (!mainObject) {
      console.error("Элемент '.main-object' не найден!");
      return;
    }
    if (flyingObjects.length === 0) {
      console.error("Элементы '.flying-object' не найдены!");
      return;
    }
  
    let isLocked = false; // Флаг закрепления объектов
  
    // Предопределенные позиции для объектов
    const predefinedPositions = [
      { x: 600, y: -150, rotation: 15 }, // Позиция для 1-го объекта
      { x: 620, y: 50, rotation: -10 },  // Позиция для 2-го объекта
      { x: 300, y: -100, rotation: 30 }, // Позиция для 3-го объекта
      { x: 350, y: 100, rotation: -5 },  // Позиция для 4-го объекта
    ];
  
    // Анимация вылета объектов
    const animateFlyOut = () => {
      flyingObjects.forEach((obj, index) => {
        const position = predefinedPositions[index] || { x: 0, y: 0, rotation: 0 }; // Координаты и угол для каждого объекта
        obj.style.opacity = "1"; // Делаем объекты видимыми
        obj.style.transform = `translate(${position.x}px, ${position.y}px) rotate(${position.rotation}deg)`; // Применяем заданные координаты и поворот
      });
    };
  
    // Возврат объектов в исходное положение
    const animateFlyBack = () => {
      flyingObjects.forEach((obj) => {
        obj.style.transform = "translate(-50%, -50%) rotate(0deg)"; // Возвращаем к исходному положению без поворота
        obj.style.opacity = "0"; // Скрываем объекты
      });
    };
  
    // Обработка клика
    mainObject.addEventListener("click", () => {
      if (isLocked) {
        // Если объекты закреплены, возвращаем их обратно
        animateFlyBack();
        isLocked = false;
      } else {
        // Если объекты не закреплены, сохраняем их текущие позиции
        isLocked = true;
      }
    });
  
    // Обработка наведения
    mainObject.addEventListener("mouseenter", () => {
      console.log("Наведение на главный объект!");
      if (!isLocked) animateFlyOut();
    });
  
    // Уход мыши
    mainObject.addEventListener("mouseleave", () => {
      console.log("Уход мыши с главного объекта!");
      if (!isLocked) animateFlyBack();
    });
  });
  