interface Margin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface Config {
  element: any;
  width: number;
  height: number;
  barPadding: number; // padding between bars
  axis: boolean; // show axis
  margin: Margin;
}

export const defaults: Config = {
  element: "#chart",
  width: 500,
  height: 130,
  barPadding: 50,
  axis: true,
  margin: { top: 15, right: 15, bottom: 35, left: 60 }
};

export interface Atom {
  x: number;
  y: number;
}
