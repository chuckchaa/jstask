'use strict';
let numberOrFilms;

function start() {
	numberOrFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
	while (numberOrFilms === '' || numberOrFilms == null || isNaN(numberOrFilms)) {
		numberOrFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
	}
}

start();
const personalMovieDB = {
	count: numberOrFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько оцените его?', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
		} else {
			console.log('error');
			i--;
		}
	}
	// let i = 0;
	// while(i < 2) {
	// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
	// 		b = prompt('На сколько оцените его?', '');

	// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
	// 		personalMovieDB.movies[a] = b;
	// 		i++;
	// 	} else {
	// 		console.log('error');
	// 	}
	// }
	// do {
	// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
	// 		b = prompt('На сколько оцените его?', '');

	// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
	// 		personalMovieDB.movies[a] = b;
	// 		i++;
	// 	} else {
	// 		console.log('error');
	// 	}
	// } while(i < 2);
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}
detectPersonalLevel();
function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
		personalMovieDB.genres[i] = genre;
	}
}
writeYourGenres();
function showMyDB() {
	if (!personalMovieDB.privat) {
		console.log(personalMovieDB);
	}
}
showMyDB();