export const categories = [
    {name: 'Пиццы'},
    {name: 'Завтрак'},
    {name: 'Закуски'},
    {name: 'КЧе'},
    {name: 'Кчау'},
    {name: 'Напитки'},
    {name: 'Солевые'},
]

export const ingredients = [
    {name: 'Сырный батончик 1см', price: 1000, imageUrl:''},
    {name: 'Лакомка', price: 11, imageUrl:''},
    {name: 'Чечивичка', price: 4434, imageUrl:''},
    {name: 'Да', price: 22, imageUrl:''},
].map((obj, index) => ({id: index + 1, ...obj}))

export const products = [
    {name: 'Лук', imageUrl: '#', categoryId: 1},
    {name: 'Чеснок', imageUrl: '#', categoryId: 2},
    {name: 'Человек', imageUrl: '#', categoryId: 3},
]
