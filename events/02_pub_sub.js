class PubSub {
  constructor() {
    this._events = {};
  }

  subscribe(event, cb) {
    if (!this._events[event]) {
      this._events[event] = [cb];
    } else {
      this._events[event].push(cb);
    }
  }

  publish(event, ...args) {
    const cbList = this._events[event];
    if (cbList && cbList.length) {
      cbList.forEach((cb) => {
        cb.apply(this, args);
      });
    }
  }
}
