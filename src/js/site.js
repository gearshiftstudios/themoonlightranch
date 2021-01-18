const directory = {
	pages: {
		displayed: 'home',
		list: ['home', 'rooms', 'activities', 'diary'],
		'home': {
			video: {
				displayed: false
			}
		}
	},
	refreshPages: (state) => {
		for(let i = 0; i < directory.pages.list.length; i++) {
			Graphics.element(`${directory.pages.list[i]}-page`).actions.hide(0)
		}
		Graphics.element(`${state}-page`).actions.show(0)
	}
}

Graphics.element('topper-buttons').actions.listener('mouseover', () => {
	for(let i = 0; i < directory.pages.list.length; i++) {
		Graphics.element(`topper-${directory.pages.list[i]}`).actions.listener('click', () => {
			if(directory.pages.list[i] != directory.pages.displayed) {
				directory.refreshPages(directory.pages.list[i])
				directory.pages.displayed = directory.pages.list[i]
			}
		})
	}
})

directory.refreshPages('home')