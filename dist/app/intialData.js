/// <reference path="../../typings/initialData.d.ts" />
var buildings = [
    {
        id: 1,
        name: "Дом",
        cost: 1000,
        have: 0
    },
    {
        id: 2,
        name: "Ферма",
        cost: 1000,
        have: 0
    },
    {
        id: 3,
        name: "Таверна",
        cost: 1000,
        have: 0
    },
    {
        id: 4,
        name: "Космопорт",
        cost: 1000,
        have: 0
    },
    {
        id: 5,
        name: "Библиотека",
        cost: 1000,
        have: 0
    },
];
var messages = [
    {
        id: "hunger",
        text: "Жители города голодают, прирост населения остановлен и количество людей уменьшается на 10% каждый год. Постройте фермы.",
        mood: "bad"
    },
    {
        id: "placeless",
        text: "Новым жителям негде жить, прирост населения остановлен. Постройте больше новых домов.",
        mood: "bad"
    },
    {
        id: "letterfromfuture",
        text: "Ваш город посетили гости из будущего и увеличли прирост населения на 1%. Как им это удалось?",
        mood: "good"
    }
];
var tabs = [
    {
        id: "city",
        name: "Город",
        active: true
    },
    {
        id: "people",
        name: "Люди",
        active: false
    },
    {
        id: "science",
        name: "Исследования",
        active: false
    },
    {
        id: "quest",
        name: "Задания",
        active: false
    },
    {
        id: "profile",
        name: "Профиль игрока",
        active: false
    }
];
var peoples = [
    {
        id: 1,
        name: "Дарт Вейдер"
    },
    {
        id: 2,
        name: "Альберт Эйнштейн"
    },
    {
        id: 3,
        name: "Алёша Попович"
    },
    {
        id: 4,
        name: "Василиса Прекрасная"
    },
    {
        id: 5,
        name: "Форест Гамп"
    },
    {
        id: 6,
        name: "Лунтик"
    },
    {
        id: 7,
        name: "Сергей Викторович"
    }
];
