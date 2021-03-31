// import { App } from "./src/App.js"
// const app = new App();
// app.mount();

// console.log('loaded index.js');
// console.log('start cmd yarn js-primer-local-server --port 8000');

import { EventEmitter } from "./src/EventEmitter.js";
const event = new EventEmitter();

event.addEventListener('test-event', () => console.log('1'));
event.addEventListener('test-event', () => console.log('100'));

event.emit('test-event');
