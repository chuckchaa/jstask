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

function detectDayBudget(budjet) {
	alert('Бюджет на 1 день: ' + Math.round(budjet / 30));
}
// detectDayBudget(appData.budjet);

function detectLevel(budjet) {
	if (budjet < 100000) {
		alert('bad');
	} else if (budjet >= 100000 && budjet < 1000000) {
		alert('norm');
	} else {
		alert('nice');
	}
}
// detectLevel(appData.budjet);

function chooseOptExpenses() {
	for (let i = 0; i < 3; i++) {
		const a = prompt('Статья необязательных расходов?', '');
		appData.optionalExpenses[i + 1] = a;
	}
}
chooseOptExpenses();

console.log(appData);
