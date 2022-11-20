'use strict';

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

const appData = {
	budjet: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

for (let i = 0; i < 2; i++) {
	const a = prompt('Введите обязательную статью расходов в этом месяце', '');
	const b = prompt('Во сколько обойдется?', '');
	appData.expenses[a] = b;
}

alert('Бюджет на 1 день: ' + Math.round(appData.budjet / 30));