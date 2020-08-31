let NN = scale => {
  let find = (input) => {
    let x = Math.round(input.x / scale.x);
    let y = Math.round(input.y / scale.y);
    return {x: x, y: y};
  };
  return {
    find: find
  };
};

let canvas = document.querySelector("#canvas");
let originalCtx = canvas.getContext("2d");
let image = document.querySelector("#image");
image.src = "image.jpg";
let originalImage;
image.addEventListener("load", event => {
  originalCtx.drawImage(image, -900, -500);
  originalImage = originalCtx.getImageData(0, 0, canvas.width, canvas.height);
});
let scaled = document.querySelector("#scaled");
let scaledCtx = scaled.getContext("2d");
let scaledImage = scaledCtx.createImageData(scaled.width, scaled.height);
let nn = NN({
  x: scaled.width/canvas.width,
  y: scaled.height/canvas.height
});
scaledImage.data.forEach((item, i) => {
  
});
