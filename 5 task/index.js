class Dropdown {
	constructor(selector, options) {
		this.$el = document.querySelector(selector);
		this.items = options.items;

		this.$el.querySelector('.dropdown__label').textContent = this.items[0].label;

		this.$el.addEventListener('click', e => {
			if (e.target.classList.contains('dropdown__label')) {
				this.$el.classList.contains('open') ? this.close() : this.open();
			} else if (e.target.tagName.toLowerCase() === 'li') {
				this.select(e.target.dataset.id);
			}
		});

		const itemsHTML = this.items.map(i => {
			return `<li data-id=${i.id}>${i.label}</li>`;
		}).join(' ');
		this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML);
	}
	select(id) {
		const item = this.items.find(item => item.id === id);
		this.$el.querySelector('.dropdown__label').textContent = item.label;
		this.close();
	}

	open() {
		this.$el.classList.add('open');
	}

	close() {
		this.$el.classList.remove('open');
	}
}



const dropdown = new Dropdown('#dropdown', {
	items: [
		{ label: 'Київ', id: 'kie' },
		{ label: 'Вінниця', id: 'vin' },
		{ label: 'Харків', id: 'khr' },
		{ label: 'Львів', id: 'lvv' }
	]
});