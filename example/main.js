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
let scaled = document.querySelector("#scaled");
let scaledCtx = scaled.getContext("2d");
let scaledImage = scaledCtx.createImageData(scaled.width, scaled.height);
image.addEventListener("load", event => {
  originalCtx.drawImage(image, -900, -500);
  originalImage = originalCtx.getImageData(0, 0, canvas.width, canvas.height);
  let pixels = Pixels(originalImage);
  let pixel = pixels.x(0).y(0);
  let nn = NN({
    x: scaled.width/canvas.width,
    y: scaled.height/canvas.height
  });

  let nn1 = nn.find({x:, y:0});
  let t1 = pixels.x(nn1.x).y(nn1.y);
});

// let Scale = (originalImageData, nn)

let Pixels = imageData => {
  let pixel = (x, y) => {
    let index = imageData.width*4*y+x*4;
    let p = {};
    [p.r, p.g, p.b, p.a] = imageData.data.slice(index, index+4);
    return p;
  };
  let x = x => {
    let y = y => {
      return pixel(x, y);
    };
    return {
      y: y
    };
  };
  return {
    x: x
  };
};
