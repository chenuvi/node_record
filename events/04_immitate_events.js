function MyEvent() {
  this._events = Object.create(null);
}

MyEvent.prototype.on = function (type, cb) {
  if (this._events[type]) {
    this._events[type].push(cb);
  } else {
    this._events[type] = [cb];
  }
};

MyEvent.prototype.emit = function (type, ...args) {
  if (this._events[type] && this._events[type].length) {
    this._events[type].forEach((cb) => {
      cb.apply(this, args);
    });
  }
};

MyEvent.prototype.off = function (type, cb) {
  if (this._events && this._events[type]) {
    // TODO
    // ? item !== cb.link ?
    this._events[type].filter((item) => item !== cb && item !== cb.link);
  }
};

MyEvent.prototype.once = function (type, cb) {
  let foo = function (...args) {
    cb.apply(this, args);
    this.off(type, foo);
  };
  // foo cb 建立联系，可取消 cb
  foo.link = cb;
  this.on(type, foo);
};
