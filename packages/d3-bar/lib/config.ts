export interface Atom {
  x: string;
  y: number;
}

export interface Axis {
  type: string;
  data: Array<string>;
}

export interface Margin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface Config {
  element: any; // TODO ???
  width: number; // width of chart container
  height: number; // height of chart container
  barWidth: number; // width of bar
  barPadding: number; // padding of bar
  axis: boolean; // show axis or not
  xAxis: Axis; // x - axis
  margin: Margin; // margin of chart area
}

export const defaults: Config = {
  element: "#chart",
  width: 500,
  height: 130,
  barWidth: 32,
  barPadding: 28,
  axis: true,
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  margin: { top: 15, right: 15, bottom: 35, left: 60 }
};
