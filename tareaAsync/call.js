function levantarse(callback) {
  console.log("levantarse");
  callback();
}
function vestirse(callback) {
  console.log("vestirse");
  callback();
}
function desayunar(callback) {
  console.log("desayunar");
  callback();
}
function marchar() {
  console.log("marcho");
}

levantarse(function() {
  vestirse(function() {
    desayunar(function() {
      marchar();
    });
  });
});
