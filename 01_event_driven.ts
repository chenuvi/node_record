const eventEmitter = require("events");
const myEvent = new eventEmitter();

myEvent.on("event1", () => {
  console.log("🚀 ~ file: 01_event_driven.ts:6 ~ myEvent.on ~ event1 RUN");
});

myEvent.on("event1", () => {
  console.log("🚀 ~ file: 01_event_driven.ts:6 ~ myEvent.on ~ event1 RUN xxx");
});

myEvent.emit('event1')