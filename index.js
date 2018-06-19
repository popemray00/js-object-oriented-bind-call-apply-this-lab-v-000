function justInvoke(fn) {
  this.fn = fn;
}

justInvoke.call(fn)
