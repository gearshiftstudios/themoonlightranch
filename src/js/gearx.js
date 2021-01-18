const GearX = {
	engine: {
		units: {
        	percent: '%',
        	pixel: 'px',
    		vpWidth: 'vw',
    		vpHeight: 'vh',
    	},
		graphics: {
			element: (element) => {
				const thisEl = document.getElementById(element)
				const render = (form, type, name) => {
					try {
						const newElement = document.createElement(form);
						if(type === 'id') {
							newElement.setAttribute('id', name)
						} else if(type === 'class') {
							newElement.setAttribute('class', name)
						}
						thisEl.appendChild(newElement)
						GearX.log(`Rendered content to element (${element})`).reg()
					} catch(e) {
						GearX.log(`Problem rendering content to element (${element})`).error()
					}
				}
				const add = (content) => {
					const custom = () => {
						try {
							thisEl.innerHTML += content
							GearX.log(`Added custom content to element (${element})`).reg()
						} catch(e) {
							GearX.log(`Problem adding custom content to element (${element})`).error()
						}
					}
					const cl = () => {
						try {
							if(thisEl.className.length === 0) {
								thisEl.setAttribute('class', content)
							} else {
								thisEl.className += ` ${content}`
							}
							GearX.log(`Added custom content to element (${element})`).reg()
						} catch(e) {
							GearX.log(`Problem adding class to element (${element})`).error()
						}
					}
					return {
						custom: custom,
						cl: cl,
					}
				}
				const make = (content) => {
					const type = () => {
						try {
							thisEl.setAttribute('type', content)
							GearX.log(`Made type of element (${element})`).reg()
						} catch(e) {
							GearX.log(`Problem making type of element (${element})`).error()
						}
					}
					const style = () => {
						try {
							thisEl.setAttribute('style', content)
							GearX.log(`Made style of element (${element})`).reg()
						} catch(e) {
							GearX.log(`Problem making style of element (${element})`).error()
						}
					}
					const source = () => {
						try {
							thisEl.setAttribute('src', content)
							GearX.log(`Made source of element (${element})`).reg()
						} catch(e) {
							GearX.log(`Problem making source of element (${element})`).error()
						}
					}
					const textLength = () => {
						try {
							thisEl.setAttribute('textLength', content)
							GearX.log(`Made textLength of element (${element})`).reg()
						} catch(e) {
							GearX.log(`Problem making textLength of element (${element})`).error()
						}
					}
					const xlink = () => {
						try {
							thisEl.setAttribute('xlink:href', content)
							GearX.log(`Made xlink of element (${element})`).reg()
						} catch(e) {
							GearX.log(`Problem making xlink of element (${element})`).error()
						}
					}
					const fontSize = () => {
						try {
							thisEl.setAttribute('font-size', content)
							GearX.log(`Made font size of element (${element})`).reg()
						} catch(e) {
							GearX.log(`Problem making font size of element (${element})`).error()
						}
					}
					return {
						style: style,
						textLength: textLength,
						xlink: xlink,
						fontSize: fontSize,
						source: source,
						type: type
					}
				}
				const dispose = () => {
					try {
						thisEl.remove()
						GearX.log(`Disposed element (${element})`).reg()
					} catch(e) {
						GearX.log(`Problem disposing element (${element})`).error()
					}
				}
				const clear = () => {
					try {
						thisEl.innerHTML = ''
						GearX.log(`Cleared element (${element})`).reg()
					} catch(e) {
						GearX.log(`Problem clearing element (${element})`).error()
					}
				}
				const actions = {
					capitalize: (string) => {
     					return string.charAt(0).toUpperCase() + string.slice(1); 
					},
					hide: (time) => {
    					setTimeout(() => {thisEl.style.display = "none"}, time * 1000)
					},
					show: (time) => {
    					setTimeout(() => {thisEl.style.display = "inline-block"}, time * 1000)
					},
					setWidth: (size, unit) => {
    					thisEl.style.width = size + unit
					},
					setHeight: (size, unit) => {
    					thisEl.style.height = size + unit
					},
					setMarginLeft: (margin, unit) => {
    					thisEl.style.marginLeft = margin + unit
					},
					setMarginRight: (margin, unit) => {
    					thisEl.style.marginRight = margin + unit
					},
					setMarginTop: (margin, unit) => {
    					thisEl.style.marginTop = margin + unit
					},
					setTransform: (transform) => {
    					thisEl.style.transform = transform
					},
					setTransition: (transition) => {
    					thisEl.style.transition = transition
					},
					setPointerEvents: (event) => {
    					thisEl.style.pointerEvents = event
					},
					setRoundness: (roundness, unit) => {
   						thisEl.style.borderRadius = roundness + unit
					},
					setText: (string) => {
    					thisEl.innerHTML = string
					},
					setValue: (value) => {
    					thisEl.value = value
					},
					setImage: (link) => {
    					thisEl.style.backgroundImage = 'url(' + link + ')'
					},
					setMatrix: (scale, left, top) => {
    					thisEl.style.transform = 'matrix(' + scale + ', 0, 0, ' + scale + ', ' + left + ', ' + top + ');'
					},
					setTextColor: (color) => {
    					thisEl.style.color = color
					},
					setBackgroundSize: (size) => {
    					thisEl.style.backgroundSize = size
					},
					setBackgroundColor: (color) => {
    					thisEl.style.backgroundColor = color
					},
					setBackground: (background) => {
    					thisEl.style.background = background
					},
					setFill: (fill) => {
   						thisEl.style.fill = fill
					},
					setFilter: (filter) => {
    					thisEl.style.filter = filter
					},
					setBorderColor: (color) => {
    					thisEl.style.borderColor = color
					},
					setStroke: (stroke) => {
    					thisEl.style.stroke = stroke
					},
					setOpacity: (opacity) => {
    					thisEl.style.opacity = (opacity * 100) + '%'
					},
					setTextStyle: (style) => {
    					return thisEl.style.fontStyle = style
					},
					clearImage: () => {
    					thisEl.style.backgroundImage = 'none'
					},
					addListItem: (information) => {
    					thisEl.innerHTML += `<li>${information}</li>`
					},
					addListContainer: (id, type) => { // type being 'ul' or 'ol'
    					thisEl.innerHTML += `<${type} id='${id}'></${type}>`
					},
					setAnimation: (animation) => {
    					thisEl.style.animation = animation
					},
					setAnimationState: (state) => {
    					thisEl.style.animationPlayState = state
					},
					getValue: () => {
    					return thisEl.value
					},
					getValueLength: () => {
    					return thisEl.value.length
					},
					getId: () => {
    					return thisEl.id
					},
					setShadows: (shadows) => {
    					thisEl.style.boxShadow = shadows
					},
					play: () => {
    					thisEl.play()
					},
					dragElement: () => {
      					var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      					if (document.querySelector(`${element}-header`)) {
            				// if present, the header is where you move the DIV from:
            				document.querySelector(`${element}-header`).onmousedown = dragMouseDown;
      					} else {
            				// otherwise, move the DIV from anywhere inside the DIV:
            				thisEl.onmousedown = () => {
               	 				dragMouseDown()
            				}
      					}
    
      					const dragMouseDown = (e) => {
            				e = e || window.event;
            				e.preventDefault();
            				// get the mouse cursor position at startup:
            				pos3 = e.clientX;
            				pos4 = e.clientY;
            				document.onmouseup = () => {
                				closeDragElement()
                				// document.body.style.cursor = controller.cursors.normal
            				};
            				// call a function whenever the cursor moves:
            				document.onmousemove = () => {
                				elementDrag()
            				};
      					}

      					const elementDrag = (e) => {
            				e = e || window.event;
            				e.preventDefault();
            				// calculate the new cursor position:
            				pos1 = pos3 - e.clientX;
            				pos2 = pos4 - e.clientY;
            				pos3 = e.clientX;
            				pos4 = e.clientY;
            				// set the element's new position:
            				thisEl.style.top = `${thisEl.offsetTop - pos2}px`;
            				thisEl.style.left = `${thisEl.offsetLeft - pos1}px`;
            				if(thisEl.getBoundingClientRect().left > -1) {
                				thisEl.style.left = `-1px`
            				}
            				if(thisEl.getBoundingClientRect().top > -1) {
                				thisEl.style.top = `-1px`
            				}
            				if(thisEl.getBoundingClientRect().left + thisEl.getBoundingClientRect().width < window.innerWidth + 1) {
                				thisEl.style.left = `-${(thisEl.getBoundingClientRect().width - window.innerWidth) - 1}px`
            				}
            				if(thisEl.getBoundingClientRect().top + thisEl.getBoundingClientRect().height < window.innerHeight + 1) {
                				thisEl.style.top = `-${(thisEl.getBoundingClientRect().height - window.innerHeight) - 1}px`
            				}
      					}

      					const closeDragElement = () => {
            				// stop moving when mouse button is released:
            				document.onmouseup = null;
            				document.onmousemove = null;
      					}
					},
					listener: (eventNames, listener) => {
    					var events = eventNames.split(' ');
    					for (var i=0, iLen=events.length; i<iLen; i++) {
      						thisEl.addEventListener(events[i], listener, false);
    					}
  					},
					updateLoader: (string) => {
    					setInterval(() => {
        					thisEl.innerHTML = string + '.'
        					setTimeout(() => {
            					thisEl.innerHTML = string + '..'
            					setTimeout(() => {
                					thisEl.innerHTML = string + '...'
            					}, 300)
        					}, 300)
    					}, 900)
					},
				}
				const exists = () => {
					return document.getElementById(element)
				}
				return {
					render: render,
					dispose: dispose,
					add: add,
					clear: clear,
					actions: actions,
					make: make,
					exists: exists
				}
			},
			// this command was specifically made for this website's repository, if used in it's current state on another website, it will not work.
			preloadImages: (array) => {
    			if (!GearX.engine.graphics.preloadImages.list) {
        			GearX.engine.graphics.preloadImages.list = [];
    			}
    			var list = GearX.engine.graphics.preloadImages.list;
    			for (var i = 0; i < array.length; i++) {
        			var img = new Image();
        			img.onload = () => {
            			var index = list.indexOf(this);
            			if (index !== -1) {
                			// remove image from the array once it's loaded
                			// for memory consumption reasons
               				list.splice(index, 1);
            			}
        			}
        			list.push(img);
        			img.src = `https://github.com/gearshiftstudios/themoonlightranch/blob/main/res/${array[i]}?raw=true`
    			}
			},
			setCursor: (type) => {
    			document.body.style.cursor = type
			},
		},
		physics: {

		},
	},
	log: (content) => {
		const reg = () => {
			console.log(`[Engine] ${content}`)
		}
		const error = () => {
			console.log(`[Engine] <!> ${content}`)
		}
		const server = {
			reg: () => {
				console.log(`[Server] ${content}`)
			},
			error: () => {
				console.log(`[Server] <!> ${content}`)
			}
		}
		return {
			reg: reg,
			error: error,
			server: server
		}
	},
}

const Engine = GearX
const Physics = GearX.engine.physics
const Graphics = GearX.engine.graphics
const Units = GearX.engine.units
