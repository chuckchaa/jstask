'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		this.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
		while (this.count === '' || this.count == null || isNaN(this.count)) {
			this.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?', '');

			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				this.movies[a] = b;
			} else {
				console.log('error');
				i--;
			}
		}
	},
	detectPersonalLevel: function () {
		if (this.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (this.count >= 10 && this.count < 30) {
			console.log('Вы классический зритель');
		} else if (this.count >= 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	showMyDB: function () {
		if (this.privat) {
			console.log(this);
		}
	},
	writeYourGenres: function () {
		for (let i = 0; i < 3; i++) {
			this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
			while (this.genres[i] === '' || this.genres[i] == null) {
				this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
			}
		}
		this.genres.forEach((item, i) => {
			console.log(`Любимый жанр #${i + 1} - это ${item}`);
		});
	},
	toggleVisibleMyDB: function () {
		this.privat = !this.privat;
	}
};






