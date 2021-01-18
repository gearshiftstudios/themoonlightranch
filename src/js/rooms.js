
const imgPrefix = 'https://github.com/gearshiftstudios/themoonlightranch/blob/main/res/'
const imgSuffix = '?raw=true'

var rooms = {
	side: 'front',
    selected: 1, // room selected in DOM
    hovered: null, // room hovered in DOM
	curImg: 1,
    sections: {
        types: ['general', 'bathroom', 'views'],
        selected: 'general',
        hovered: null,
        buttons: {
            'general': document.getElementById('room-sections-general'),
            'bathroom': document.getElementById('room-sections-bathroom'),
            'views': document.getElementById('room-sections-views'),
        },
        'general': {
            1: {
                items: [`First room visble from the Foyer at the beginning of the 1st floor hallway.`, `Will have a big 8' X 4' window installed that grants you a view of the Beartooth Mountain's vertical face.`],
                images: ['r1g1.jpg'],
            },
            2: {
                items: ['Last room on right side of the 1st floor hallway.', 'Has a balance of sheetrock and cordwood for the walls.', `Has a big 8' X 4' window that grants you a view of the Beartooth Mountain's vertical face along with another 3' X 4' window with a partial view of Yellowstone National Park.`],
                images: ['r2g1.jpg'],
            },
            3: {
                items: ['First room on the left side of the 1st floor hallway.', `Has a nice 6'8" X 6' sliding glass door for a nice view of the Clark's Forke & Yellowstone River`],
                images: ['r3g1.jpg'],
            },
            4: {
                items: ['Last room on the left side of the 1st floor hallway.', `Has a nice 6'8" X 6' sliding glass door for a nice view of the Clark's Forke & Yellowstone River`],
                images: [],
            },
            5: {
                items: [`First room on the right side of the 2nd floor hallway.`, `Has a big 8' X 4' window that grants you a view of the Beartooth Mountain's vertical face.`],
                images: ['r5g1.jpg'],
            },
            6: {
                items: ['Last room on the right side of the 2nd floor hallway.', `Has a big 8' X 4' window that grants you a view of the Beartooth Mountain's vertical face along with another 3' X 4' window with a partial view of Yellowstone National Park.`],
                images: ['r6g1.jpg'],
            },
            7: {
                items: [`Biggest room in the house (overall 21' X 40').`, `Only room of the lest side of the hallway`, `Has 3 nice 6'8" X 6' sliding glass doors overlooking the Clark's Forke & Yellowstone River, the rolling hills, and the well-known big sky.`, `Lots of room to store things since it has a 21' X 6' closet.`],
                images: ['r7g1.jpg'],
            },
        },
        'bathroom': {
            1: {
                items: [`Spacious 12' X 6' bathroom perfect for couple (dimensions include the shower).`, `Modern shower fan with built-in light.`],
                images: ['r1b1.jpg', 'r1b2.jpg'],
            },
            2: {
                items: [`Spacious 12' X 6' bathroom perfect for couple (dimensions include the shower).`, `Modern shower fan with built-in light.`, `Has a 2' X 4' window for some nice views on the john.`,`Combination of cordwood and sheetrock walls to keep things interesting.`],
                images: ['r2b1.jpg', 'r2b2.jpg'],
            },
            3: {
                items: [`Spacious 12' X 6' bathroom perfect for couple (dimensions include the shower).`, `Modern shower fan with built-in light.`],
                images: ['r3b1.jpg', 'r3b2.jpg'],
            },
            4: {
                items: [`Spacious 12' X 6' bathroom perfect for couple (dimensions include the shower).`, `Modern shower fan with built-in light.`, `Has a 2' X 4' window for some nice views on the john.`, `Combination of cordwood and sheetrock walls to keep things interesting.`],
                images: ['r4b1.jpg', 'r4b2.jpg'],
            },
            5: {
                items: [`Spacious 12' X 6' bathroom perfect for couple (dimensions include the shower).`, `Modern shower fan with built-in light.`],
                images: ['r5b1.jpg', 'r5b2.jpg'],
            },
            6: {
                items: [`Spacious 12' X 6' bathroom perfect for couple (dimensions include the shower).`, `Modern shower fan with built-in light.`, `Has a 2' X 4' window for some nice views on the john.`],
                images: ['r6b1.jpg', 'r6b2.jpg'],
            },
            7: {
                items: [`Humungous 21' X 11' bathroom perfect for anyone`, `Two bathtubs that can give you and another a relaxing time.`, `Has a nice 6'8" X 6' sliding glass door for views of the Big Sky and Clark's Forke & Yellowstone River from your bathtub.`],
                images: ['r7b1.jpg'],
            },
        },
        'views': {
            1: {
                items: [`Here is the exterior view from the room.`],
                images: ['r1v1.jpg', 'r1v2.jpg'],
            },
            2: {
                items: [`Here is the exterior view from the room.`],
                images: ['r2v1.jpg', 'r2v2.jpg'],
            },
            3: {
                items: [`Here is the exterior view from the room.`],
                images: ['r3v1.jpg', 'r3v2.jpg', 'r3v2.jpg'],
            },
            4: {
                items: [`Here is the exterior view from the room.`],
                images: ['r4v1.jpg', 'r4v2.jpg', 'r4v3.jpg', 'r4v4.jpg'],
            },
            5: {
                items: [`Here is the exterior view from the room.`],
                images: ['r5v1.jpg', 'r5v2.jpg'],
            },
            6: {
                items: [`Here is the exterior view from the room.`],
                images: ['r6v1.jpg', 'r6v2.jpg'],
            },
            7: {
                items: [`Here is the exterior view from the room.`],
                images: ['r7v1.jpg', 'r7v2.jpg'],
            },
        },
    },
    count: 7,
    names: ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5', 'Room 6', 'Room 7'], //names of rooms
    moneyPutDown: [15, 20, 25, 30, 40, 45, 80], // * 1000
    nightlyBookingFee: [1.5, 2, 2.5, 3.5, 5, 6, 10], // * 100
}

class Room {
    constructor(name, base_moneyPutDown, base_nightlyBookingFee) {
        this.name = name,
        this.money = {
            base_moneyPutDown: base_moneyPutDown,
            base_nightlyBookingFee: base_nightlyBookingFee,
            base_occupancyRate: 65, // percent
            base_recoveryDays: base_moneyPutDown / base_nightlyBookingFee
        }
    }
}

var changeImages = (count) => {
        Graphics.element('room-image').actions.setTransform('translate(-50%, -50%) scale(0)')
        Graphics.element('room-image').actions.setOpacity(0)
        setTimeout(() => {
            Graphics.element('room-image').actions.setTransform('translate(-50%, -50%) scale(1)')
            Graphics.element('room-image').actions.setOpacity(1)
            Graphics.element('room-image').actions.setImage(imgPrefix + rooms.sections['general'][count].images[0] + imgSuffix)
			rooms.curImg = 1
        }, 500);
		if(count === 1 || count === 2 || count === 5 || count === 6) {
			Graphics.element('room-house').actions.setImage(`${imgPrefix}house_front.png${imgSuffix}`)
		} else {
			Graphics.element('room-house').actions.setImage(`${imgPrefix}house_back.png${imgSuffix}`)
		}
}

var changeName = (number) => {
    Graphics.element('room-name-text').actions.setText(rooms.names[number - 1])
}

var changeInfo = (number) => {
    Graphics.element('room-info').clear()
    Graphics.element('room-info').actions.addListContainer('room-info-content', 'ul')
    Graphics.element('room-info-content').actions.setOpacity(0)
    for(let i = 0; i < rooms.sections[rooms.sections.selected][number].items.length; i++) {
        Graphics.element('room-info-content').actions.addListItem(rooms.sections[rooms.sections.selected][number].items[i])
    }
    setTimeout(() => {
        Graphics.element('room-info-content').actions.setOpacity(1)
    }, 250);
}

var changeRooms = (i) => {
    changeName(i)
    changeInfo(i)
    changeImages(i)
	rooms.selected = i
    rooms.sections.selected = 'general'
	if(i === 1 || i === 2 || i === 5 || i === 6) {
		rooms.side = 'front'
	}
	if(i === 3 || i === 4 || i === 7) {
		rooms.side = 'back'
	}
	if(rooms.side === 'front') {
		for(let r = 1; r <= rooms.count; r++) { 
			if(r === 1 || r === 2 || r === 5 || r === 6) {
				Graphics.element(`svg-room-${r}`).actions.show(0)
			}
			if(r === 3 || r === 4 || r === 7) {
				Graphics.element(`svg-room-${r}`).actions.hide(0)
			}
		}
	} else if(rooms.side === 'back') {
		for(let r = 1; r <= rooms.count; r++) { 
			if(r === 1 || r === 2 || r === 5 || r === 6) {
				Graphics.element(`svg-room-${r}`).actions.hide(0)
			}
			if(r === 3 || r === 4 || r === 7) {
				Graphics.element(`svg-room-${r}`).actions.show(0)
			}
		}
	}
}

var init_rooms = (count) => {
    for(let r = 1; r <= count; r++) {
        rooms[r] = new Room(rooms.names[r - 1], rooms.moneyPutDown[r - 1] * 1000, rooms.nightlyBookingFee[r - 1] * 100)
		Graphics.element(`svg-room-${r}`).actions.setTransition('fill 0.5s ease-out')
		Graphics.element(`svg-room-${r}`).actions.setFill('transparent')
    }
	changeRooms(1)
	if(rooms.sections[rooms.sections.selected][rooms.selected].images.length > 0) {
		Graphics.element('room-image').actions.setImage(imgPrefix + rooms.sections['general'][rooms.selected].images[0] + imgSuffix)
		if(rooms.sections[rooms.sections.selected][rooms.selected].images.length > 1) {
			Graphics.element('room-image-next').actions.show(0)
			Graphics.element('room-image-back').actions.show(0)
		} else {
			Graphics.element('room-image-next').actions.hide(0)
			Graphics.element('room-image-back').actions.hide(0)
		}
    }
    Graphics.element('room-image').actions.setOpacity(0)
    setTimeout(() => {
        Graphics.element('room-image').actions.setOpacity(1)
    }, 500);
}
init_rooms(rooms.count)

Graphics.element('room-image-back').actions.listener('click', () => {
    if(rooms.curImg > 1) {
        rooms.curImg--
    } else {
        rooms.curImg = 1
    }
	Graphics.element('room-image').actions.setImage(imgPrefix + rooms.sections[rooms.sections.selected][rooms.selected].images[rooms.curImg - 1] + imgSuffix)
})
Graphics.element('room-image-next').actions.listener('click', () => {
    if(rooms.curImg < rooms.sections[rooms.sections.selected][rooms.selected].images.length) {
        rooms.curImg++
    } else {
        rooms.curImg = rooms.sections[rooms.sections.selected][rooms.selected].images.length
    }
	Graphics.element('room-image').actions.setImage(imgPrefix + rooms.sections[rooms.sections.selected][rooms.selected].images[rooms.curImg - 1] + imgSuffix)
})

Graphics.element('room-back').actions.listener('click', () => {
	for(let r = 1; r <= rooms.count; r++) { 
		Graphics.element(`svg-room-${r}`).actions.setFill('transparent')
	}
    if(rooms.selected > 1) {
        rooms.selected--
        changeRooms(rooms.selected)
    } else {
        rooms.selected = 1
    }
	if(rooms.sections[rooms.sections.selected][rooms.selected].images.length > 0) {
		if(rooms.sections[rooms.sections.selected][rooms.selected].images.length > 1) {
			Graphics.element('room-image-next').actions.show(0)
			Graphics.element('room-image-back').actions.show(0)
		} else {
			Graphics.element('room-image-next').actions.hide(0)
			Graphics.element('room-image-back').actions.hide(0)
		}
	}
})
Graphics.element('room-next').actions.listener('click', () => {
	for(let r = 1; r <= rooms.count; r++) { 
		Graphics.element(`svg-room-${r}`).actions.setFill('transparent')
	}
    if(rooms.selected < rooms.count) {
        rooms.selected++
        changeRooms(rooms.selected)
    } else {
        rooms.selected = rooms.count
    }
	if(rooms.sections[rooms.sections.selected][rooms.selected].images.length > 0) {
		if(rooms.sections[rooms.sections.selected][rooms.selected].images.length > 1) {
			Graphics.element('room-image-next').actions.show(0)
			Graphics.element('room-image-back').actions.show(0)
		} else {
			Graphics.element('room-image-next').actions.hide(0)
			Graphics.element('room-image-back').actions.hide(0)
		}
	}
})

for(section in rooms.sections.buttons) {
    rooms.sections.buttons[section].addEventListener('click', function() {
        let section = this.id
        section = section.slice(14, section.length - 0)
        if(rooms.sections.selected != section) {
            rooms.sections.selected = section
            changeInfo(rooms.selected)
            if(rooms.sections[rooms.sections.selected][rooms.selected].images.length > 0) {
				Graphics.element('room-image').actions.setImage(imgPrefix + rooms.sections[rooms.sections.selected][rooms.selected].images[0] + imgSuffix)
				if(rooms.sections[rooms.sections.selected][rooms.selected].images.length > 1) {
					Graphics.element('room-image-next').actions.show(0)
					Graphics.element('room-image-back').actions.show(0)
				} else {
					Graphics.element('room-image-next').actions.hide(0)
					Graphics.element('room-image-back').actions.hide(0)
				}
            }
        }
    })
    rooms.sections.buttons[section].addEventListener('mouseover', function() {
        let section = this.id
        section = section.slice(14, section.length - 0)
        rooms.sections.hovered = section
    })
    rooms.sections.buttons[section].addEventListener('mouseout', function() {
        Graphics.element(this.id).actions.setBackground('transparent')
        let section = this.id
        section = section.slice(14, section.length - 0)
        rooms.sections.hovered = null
    })
}

Graphics.element('svg-rooms').actions.listener('mouseover', () => {
	for(let i = 1; i <= rooms.count; i++) {
		Graphics.element(`svg-room-${i}`).actions.listener('click', () => {
			for(let r = 1; r <= rooms.count; r++) { 
				Graphics.element(`svg-room-${r}`).actions.setFill('transparent')
			}
			changeRooms(i)
		})
		Graphics.element(`svg-room-${i}`).actions.listener('mouseover', () => {
			Graphics.element(`svg-room-${i}`).actions.setFill('rgba(255,255,255,0.7)')
			Graphics.setCursor('pointer')
		})
		Graphics.element(`svg-room-${i}`).actions.listener('mouseout', () => {
			Graphics.element(`svg-room-${i}`).actions.setFill('transparent')
			Graphics.setCursor('default')
		})
	}
})

var highlightRoom = setInterval(()=> {
	Graphics.element(`svg-room-${rooms.selected}`).actions.setFill('transparent')
	setTimeout(() => {
		Graphics.element(`svg-room-${rooms.selected}`).actions.setFill('rgba(255,255,255,0.7)')
		setTimeout(() => {
			Graphics.element(`svg-room-${rooms.selected}`).actions.setFill('transparent')
		}, 500)
	}, 500)
}, 1000)

var updater = () => {
	for(let i = 1; i <= rooms.count; i++) {
		if(i != rooms.selected) {
			Graphics.element(`svg-room-${i}`).actions.setFill('transparent')
		}
	}
    for(let s = 0; s < rooms.sections.types.length; s++) {
        Graphics.element(`room-sections-${rooms.sections.types[s]}`).actions.setBackground('transparent')
        Graphics.element(`room-sections-${rooms.sections.types[s]}`).actions.setShadows('inset 0px 0px 0vh black')
        if(rooms.sections.selected === rooms.sections.types[s]) {
            Graphics.element(`room-sections-${rooms.sections.types[s]}`).actions.setBackground('rgb(185,185,185)')
            Graphics.element(`room-sections-${rooms.sections.types[s]}`).actions.setShadows('inset 0px 0px 1vh black')
        }
        if(rooms.sections.hovered === rooms.sections.types[s]) {
            Graphics.element(`room-sections-${rooms.sections.types[s]}`).actions.setBackground('rgba(0,0,0,0.4)')
            Graphics.element(`room-sections-${rooms.sections.types[s]}`).actions.setShadows('inset 0px 0px 0vh black')
        }
        if(rooms.sections.hovered === rooms.sections.selected) {
           	Graphics.element(`room-sections-${rooms.sections.hovered}`).actions.setBackground('rgb(185,185,185)')
            Graphics.element(`room-sections-${rooms.sections.hovered}`).actions.setShadows('inset 0px 0px 1vh black')
        }
    }
	if(Graphics.element('diary-login-login').exists()) {
		Graphics.element('diary-login-login').actions.listener('click', () => {
			let username = Graphics.element('diary-login-username-input').actions.getValue()
			let password = Graphics.element('diary-login-password-input').actions.getValue()
			MLR.emit('[server] check credentials', username, password)
		})
	}
    
    requestAnimationFrame(updater)
}
requestAnimationFrame(updater)

// add images to elements in need of it
Graphics.element('room-image-next').actions.setImage(`${imgPrefix}arrow.png${imgSuffix}`)
Graphics.element('room-image-back').actions.setImage(`${imgPrefix}arrow.png${imgSuffix}`)

