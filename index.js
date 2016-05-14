function a2m (a, k) {
  var o = {};
  a.forEach(function (e) {
    o[e[k]] = e;
  });
  return o;
}

module.exports = a2m;
