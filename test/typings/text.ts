import * as kontra from '../../kontra.js';

let text: kontra.Text = kontra.Text({
  text: 'Hello World!',
  color: 'black',
  font: '32px Arial'
});

let str: string = text.text;
let color: string = text.color;
let font: string = text.font;
let textAlign: string = text.textAlign;
let width: number = text.width;
let height: number = text.height;

// inheritance
text.x += 20;
text.rotation = Math.PI;
text.advance();
text.render();

// options
kontra.Text({
  x: 10,
  y: 20,
  text: 'Hello World!',
  color: 'black',
  font: '32px Arial',
  textAlign: 'right',
  width: 200
});