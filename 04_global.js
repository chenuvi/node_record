// console.log(global)
// console.log(__filename)
// console.log(__dirname)
// console.log(this)
// console.log(this === global) // false

(function () {
  console.log(this === global);
})();
