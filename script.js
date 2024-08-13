// get randomized number from computer to be assigned to choices later
// added number 1 for the Math.random() so it returns number 1 through 3
function getComputerChoice() {
  return Math.floor((Math.random() * 3) + 1);
}