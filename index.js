// database
const Database = require("@replit/database")
const db = new Database()

const ip = require("ip");
const os = require('os');
const networkInterfaces = os.networkInterfaces();
const express = require('express')
const app = express()
const http = require('http')
const socketLib = require('socket.io')
const server = http.Server(app)
const mlr_server = socketLib(server)
const port = process.env.PORT || 3000
app.set('port', port)
app.use('/', express.static(__dirname + '/'))
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/renderer.html')
})
server.listen(port, '0.0.0.0', function() {
	console.log('Starting the Moonlight Ranch B&B Server on port ' + port)
})

const admin = {
	username: 'JeffreyKarinja253',
	password: 'soulmateMLR@253_252',
	ipAddress: ['172.18.0.114']
}

mlr_server.on('connection', (MLR) => {
	// check if local IP matches any of the admin IPs
	MLR.emit('[client] check IP Adress', admin.ipAddress, ip.address())
	
	// if the local IP matches one of the admin IPs
	MLR.on('[server] IP is host', () => {
		MLR.emit('[client] IP is host')
	})
	// check login database
	MLR.on('[server] check credentials', (username, password) => {
		if(username === admin.username && password === admin.password) {
			MLR.emit('[server] success credentials')
		} else {
			MLR.emit('[server] fail credentials')
		}
	})
})
