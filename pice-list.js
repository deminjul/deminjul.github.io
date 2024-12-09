const mainObject = document.querySelector(".main-object");
const flyingObjects = document.querySelectorAll(".flying-object");

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
    const position = predefinedPositions[index]; // Координаты и угол для каждого объекта
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