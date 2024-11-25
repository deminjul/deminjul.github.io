var title=document.getElementById('myTitle');
var button = document.getElementById('myTitle');
var modal= document.getElementById('myModal');
var overlay = document.getElementById('overlay');
var close= document.getElementById('myClose');

button.onclick = function() {
    modal.style.display="block";
    overlay.style.display = "block";
}

close.onclick=function() {
    modal.style.display="none";
    overlay.style.display = "none";
}


let currentIndex1 = 0;  // Индекс текущего изображения для первого слайдера
let currentIndex2 = 0;  // Индекс текущего изображения для второго слайдера

function changeSlide(direction, sliderClass) {
    const slides = document.querySelectorAll(`.${sliderClass} .slide`);
    const currentIndex = sliderClass === 'slider-container' ? currentIndex1 : currentIndex2;

    slides[currentIndex].classList.remove('active');  // Убираем класс active у текущего слайда

    let newIndex = currentIndex + direction;

    // Проверка выхода за границы массива
    if (newIndex < 0) {
        newIndex = slides.length - 1;  // Переход к последнему изображению
    } else if (newIndex >= slides.length) {
        newIndex = 0;  // Переход к первому изображению
    }

    slides[newIndex].classList.add('active');  // Добавляем класс active к новому слайду

    // Обновляем индекс
    if (sliderClass === 'slider-container') {
        currentIndex1 = newIndex;
    } else {
        currentIndex2 = newIndex;
    }

    updateSlides(sliderClass);  // Обновляем отображение слайдов
}

function updateSlides(sliderClass) {
    const slides = document.querySelectorAll(`.${sliderClass} .slide`);
    const currentIndex = sliderClass === 'slider-container' ? currentIndex1 : currentIndex2;

    slides.forEach((slide) => {
        slide.style.transform = `translateX(${-currentIndex * 100}%)`;  // Перемещаем слайды
    });
}

        








/*alert('привет мир');
let age = prompt("cколько тебе лет?", 100)
let isBoss = confirm('есть ли тебе 18 лет');
if (age < 18 & isBoss | age > 18 & !isBoss)
{
    alert ('вань ну ты дурак совсем')
}



if (age > 18 & isBoss)
    {
        alert ('ура')
    }*/
   

