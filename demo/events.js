const EventEmitter = require('events')
//
// const emitter = new EventEmitter()
//
// emitter.on('anything', data => {
// 	console.log('on: anuthing ', data)
// })
//
// emitter.emit('anything', {a: 1})

class Dispatcher extends EventEmitter {
	subscribe(eventName, cb) {
		this.on(eventName, cb)
	}

	dispatch(eventName, data) {
		this.emit(eventName, data)
	}
}

const dis = new Dispatcher()

dis.subscribe('aa', data => {
	console.log('ON: aa', data)
})

dis.dispatch('aa', {aa: 22})
