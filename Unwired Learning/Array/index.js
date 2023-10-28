// const users=[{}, {}, {},{ }, {}];

//const ratings=[5, 10, 9, 7, 2, 3, 8];

// const filterRatings=ratings.filter((rate) =>{
//     // let result= rate>6;
//     // return result;
//     return rate>6;
// });
// const filterRatings=ratings.filter(rate => rate>6);
// console.log(filterRatings);

// const numbers=[1,2,3,4,5,6,7,8,9];
// const even=numbers.filter((num) =>{
//     let result=num % 2 ==0;
//     return result;
// });
// console.log(even);

// const odd=numbers.filter((num) =>{
//     let result=num % 2 ==0;
//     return !result;
// });
// console.log(odd);


const movies = [
    {name: "Coffee Day", rating: 9},
    {name: "The Lost Coder", rating: 7},
    {name: "Typical Bug", rating: 4}
];

const filteredMovies=movies.filter((movie) =>{
    return movie.rating>6;
})
console.log(filteredMovies);