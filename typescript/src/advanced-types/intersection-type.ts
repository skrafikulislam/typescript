type Dragable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};
// Intersection type ==>
type UIwidget = Dragable & Resizable;

let textBox: UIwidget = {
  drag: () => {},
  resize: () => {},
};
