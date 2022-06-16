/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt(`Скільки фільмів ви уже подивилсь?`);
	while (numberOfFilms == `` || numberOfFilms == null || 50 < numberOfFilms.length || isNaN(numberOfFilms)) {
		numberOfFilms = prompt(`Скільки фільмів ви уже подивилсь?`);
	}
}

// start();

let personalMovieDB = {
	cout: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function rememberMyFilms() {
	for (let index = 0; index < 2; index++) {
		const a = prompt("Один із останніх переглянутих фільмів"),
			b = prompt(`На скільки оціниье його?`);
		if (a != null && b != null && a != `` && b != `` && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log(`done`);
		} else {
			console.log(`error`);
		}
	}
}

// rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.cout <= 10) {
		console.log(`переглянуто замало фільмів`);
	} else if (11 <= personalMovieDB.cout && personalMovieDB.cout <= 30) {
		console.log(`Ви класний переглядач`);
	} else {
		console.log(`Ви кіноман`);
	}
}

// detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

// showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let index = 0; index < 3; index++) {
		personalMovieDB.genres[index] = prompt(`Ваш улюблений жанр під номером ${index + 1}`);
	}
}

writeYourGenres();
