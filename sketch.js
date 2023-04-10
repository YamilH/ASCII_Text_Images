const density = "Ñ@#W$9876543210?!abc;:+=-,._     ";

let yami;

function preload() {
  yami = loadImage("yami2.png");
}

function setup() {
  noCanvas();
  yami.loadPixels();
  for (let j = 0; j < yami.height; j++) {
    let row = "";
    for (let i = 0; i < yami.width; i++) {
      const pixelIndex = (i + j * yami.width) * 4;
      const r = yami.pixels[pixelIndex + 0];
      const g = yami.pixels[pixelIndex + 1];
      const b = yami.pixels[pixelIndex + 2];

      const avg = (r + g + b) / 3;

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      const c = density.charAt(charIndex);
      if (c == " ") row += "&nbsp;";
      else row += c;
    }
    createDiv(row);
  }
}
