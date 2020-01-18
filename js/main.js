var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;
var getFireballSpeed = function (left) {
  left ? wizardSpeed = 5 : wizardSpeed = 3
  return wizardSpeed;
}

var getWizardHeight = function () {
  return 1.337 * wizardWidth
}

getWizardX = function (width) {
  return (width - wizardWidth)/2;
}

console.log (getWizardHeight);
getWizardY = function (height) {
  return height/3 + getWizardHeight()/2;
}
