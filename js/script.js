
var divEl = document.getElementById('imgs');
var imgEl1 = document.getElementById('img1');
var imgEl2 = document.getElementById('img2');
var imgEl3 = document.getElementById('img3');
var products = [];
var productsName = [];
var votes = [];
var randomNums = [];
var numOfClicks = 0;

if (localStorage.getItem('products')) {
  retrieveLs();
  console.log('it exists');
} else {
  console.log('we dont have it!');
  new Product('R2D2 Luggage', 'img/bag.jpg');
  new Product('Banna Cutter', 'img/banana.jpg');
  new Product('Ipad Stand', 'img/bathroom.jpg');
  new Product('Toeless Boots', 'img/boots.jpg');
  new Product('Breakfast Genie', 'img/breakfast.jpg');
  new Product('Meatball Bubble Gum', 'img/bubblegum.jpg');
  new Product('Bump Chair', 'img/chair.jpg');
  new Product('Cthulhu', 'img/cthulhu.jpg');
  new Product('Duck Bill Dog Mouthpiece', 'img/dog-duck.jpg');
  new Product('Dragon Meat', 'img/dragon.jpg');
  new Product('Pen Utensils', 'img/pen.jpg');
  new Product('Pet Sweep', 'img/pet-sweep.jpg');
  new Product('Pizza Scissors', 'img/scissors.jpg');
  new Product('Shark Sleeping Bag', 'img/shark.jpg');
  new Product('Baby Sweep', 'img/sweep.jpg');
  new Product('Tauntaun Sleeping Bag', 'img/tauntaun.jpg');
  new Product('Unicorn Meat', 'img/unicorn.jpg');
  new Product('Tentacle USB', 'img/usb.jpg');
  new Product('Water Can', 'img/water-can.jpg');
  new Product('Wine Glass', 'img/wine-glass.jpg');
}



function Product(name, path, numTimeShown, numTimeClick) {
  this.name = name;
  this.path = path;
  this.numTimeShown = numTimeShown || 0;
  this.numTimeClick = numTimeClick || 0;
  products.push(this);
}

function randomNum() {
  return Math.floor(Math.random() * (19 + 1));
}

function render() {
  var randomNums = [];
  randomNums.push(randomNum());
  randomNums.push(randomNum());
  randomNums.push(randomNum());
  imgEl1.setAttribute('src', products[randomNums[0]].path);
  imgEl2.setAttribute('src', products[randomNums[1]].path);
  imgEl3.setAttribute('src', products[randomNums[2]].path);
}



var data = {
  labels: productsName,
  datasets: [{
    label: '# of Votes',
    data: votes,
    backgroundColor: [
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)'
    ],
var: borderColor = [
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)'],
    }]
  };
  render();

  divEl.addEventListener("click", function(event) {
    var currentSrc = event.target.currentSrc;
    var srcArray = currentSrc.split("/");
    var productName = srcArray[srcArray.length -1].split(".")[0];
console.log(productName);

  })