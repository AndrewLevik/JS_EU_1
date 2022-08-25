
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     return this.pizzas.includes(pizzaName) ? onSuccess(pizzaName) : onError(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(pizzaName) {
//   return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function (item, index) {
//     totalPrice += orderedItems[i];
//   })
//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   // Change code above this line
//   return totalPrice;
// }

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newNumbers = [];

// numbers.forEach(items => {
//   if ((items % 2) !== 0) {
//     newNumbers.push(items);
//   } else {
//       newNumbers.push(items + value);
//     }
//   });
//   return newNumbers;
//   // newNumbers.push(items);
// }
  

// const myUsers = [
//     { name: 'shark', likes: 'ocean' },
//     { name: 'turtle', likes: 'pond' },
//     { name: 'otter', likes: 'fish biscuits' }
// ]

// const usersByLikes = myUsers.map(item => {
//     const container = {};

//     container[item.name] = item.likes;
//     container.age = item.name.length * 10;

//     return container;
// })

// console.log(usersByLikes);

// Task_14
// Дополни код так, чтобы в переменной planetsLengths получился
//  массив длин названий планет.Обязательно используй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// var_2
// planets.map(planet =>  {
// planetsLengths.push(planet.length);
// });


// Task_15
// Используя метод map() сделай так, чтобы в переменной titles
// получился массив названий книг(свойство title) из всех объектов
//  массива books.

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.38 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 8.51 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 7.75 },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(books => books.title);
// console.log(titles);


// task_16
// Используя метод flatMap() сделай так, чтобы в переменной genres
// получился массив всех жанров книг(свойство genres) из массива книг books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter((genre, index, allGenres)  => allGenres.indexOf(genre) === index );
// console.log(uniqueGenres);

// Change code below this line
// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color)
// // Change code above this line
// console.log(getUsersWithEyeColor);

// const getFriends = (users) => {
//    return users
//      .flatMap(user => user.friends)
//      .filter((user, index, users) => users.indexOf(user) === index)
  
// };

const getSortedFriends = users => {
   return [...users]
    .sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name))
    .filter((name, index, array) => array.indexOf(name) === index)
    
};
console.log(SortedFriends);