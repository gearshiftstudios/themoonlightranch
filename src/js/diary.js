var Diary = {
	writer: {
		login: {
			create: () => {
				Graphics.element('diary-page').render('tab-lt', 'id', 'diary-login')
				if(Graphics.element('diary-login').exists()) {
					Graphics.element('diary-login').make('width:25vh;height:19vh;margin-left:50vw;margin-top:50vh;').style()
					Graphics.element('diary-login').add('center').cl()
					Graphics.element('diary-login').render('label-lt', 'id', 'diary-login-username-label')
					Graphics.element('diary-login').render('input', 'id', 'diary-login-username-input')
					Graphics.element('diary-login').render('label-lt', 'id', 'diary-login-password-label')
					Graphics.element('diary-login').render('input', 'id', 'diary-login-password-input')
					Graphics.element('diary-login').render('button-lb', 'id', 'diary-login-login')
					Graphics.element('diary-login').render('button-lb', 'id', 'diary-login-cancel')
					if(Graphics.element('diary-login-username-label').exists()) {
						Graphics.element('diary-login-username-label').make('width:calc(100% - 2vh);height:3vh;margin-left:1vh;margin-top:1vh;font-size:2vh;').style()
						Graphics.element('diary-login-username-label').actions.setText('Username')
					}
					if(Graphics.element('diary-login-username-input').exists()) {
						Graphics.element('diary-login-username-input').add('abs-lt text-center').cl()
						Graphics.element('diary-login-username-input').make('width:calc(100% - 2vh);height:3vh;margin-left:1vh;margin-top:4vh;font-size:2vh;').style()
					}
					if(Graphics.element('diary-login-password-label').exists()) {
						Graphics.element('diary-login-password-label').make('width:calc(100% - 2vh);height:3vh;margin-left:1vh;margin-top:8vh;font-size:2vh;').style()
						Graphics.element('diary-login-password-label').actions.setText('Password')
					}
					if(Graphics.element('diary-login-password-input').exists()) {
						Graphics.element('diary-login-password-input').add('abs-lt text-center').cl()
						Graphics.element('diary-login-password-input').make('width:calc(100% - 2vh);height:3vh;margin-left:1vh;margin-top:11vh;font-size:2vh;').style()
						Graphics.element('diary-login-password-input').make('password').type()
					}
					if(Graphics.element('diary-login-login').exists()) {
						Graphics.element('diary-login-login').make('width:11vh;height:3vh;margin-left:1vh;margin-bottom:1vh;font-size:2vh;').style()
						Graphics.element('diary-login-login').actions.setText('Log In')
					}
					if(Graphics.element('diary-login-cancel').exists()) {
						Graphics.element('diary-login-cancel').make('width:11vh;height:3vh;margin-left:13vh;margin-bottom:1vh;font-size:2vh;').style()
						Graphics.element('diary-login-cancel').actions.setText('Cancel')
					}
				}
			},
		},
		show: () => {

		},
		hide: () => {

		},
	},
}

Graphics.element('diary-write').actions.listener('click', () => {
	if(admin) {
		Diary.writer.login.create()
	}
})