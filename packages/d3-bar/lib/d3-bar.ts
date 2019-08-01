import * as d3 from "d3";
import { Atom, Config, defaults } from "./config";

export default class BarChart {
  private _options_: Config = defaults;
  private _data_: Atom[] = [];
  constructor(options: {}) {
    Object.assign(this._options_, options);
    this.init();
  }

  public chart: any;
  public w: number = 0;
  public h: number = 0;
  public step: number = 0;
  public x: any;
  public y: any;

  init() {
    const { element, width, height, barWidth, barPadding, axis, xAxis, margin } = this._options_;
    if (axis && xAxis && xAxis.type === "category") {
      this.w = width - margin.left - margin.right;
      this.h = height - margin.top - margin.bottom;
      this.step = barWidth + barPadding;
    }

    this.chart = d3
      .select(element)
      .attr("width", width)
      .attr("height", height)
      .attr("class", "wrapper")
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);
  }

  renderAxis(data: Atom[] = []) {
    const { _options_, chart, w, h, step } = this;
    const { barPadding, xAxis } = _options_;
    const paddingOuter = (w - step * xAxis.data.length + barPadding) / step / 2; // step * paddingOuter * 2 + step * len - barPadding = w; barWidth + barPadding = step;
    if (xAxis && xAxis.type === "category") {
      this.x = d3
        .scaleBand()
        .domain(xAxis.data)
        .rangeRound([0, w])
        .paddingInner(barPadding / step)
        .paddingOuter(paddingOuter);
      chart
        .append("g")
        .attr("class", "axis x-axis")
        .attr("transform", `translate(0, ${h})`)
        .call(d3.axisBottom(this.x));

      const yMax: number = d3.max(data, (d: Atom) => d.y) || 0;
      this.y = d3
        .scaleLinear()
        .domain([yMax, 0])
        .range([0, h]);
      this.chart
        .append("g")
        .attr("class", "axis y-axis")
        .call(
          d3
            .axisLeft(this.y)
            .ticks(2)
            .tickValues([0, yMax])
        );
    }
  }

  renderBars(data: Atom[] = []) {
    const { _options_, chart, h, x, y } = this;
    const { barWidth } = _options_;
    const bar = chart.selectAll(".bar").data(data);
    bar
      .enter() // enter
      .append("rect")
      .merge(bar) // update
      .attr("class", "bar")
      .attr("width", barWidth)
      .attr("height", (d: Atom) => h - y(d.y))
      .attr("x", (d: Atom) => x(d.x))
      .attr("y", (d: Atom) => y(d.y));
    bar.exit().remove(); // exit
  }

  render(data: Atom[] = []) {
    this.renderAxis(data);
    this.renderBars(data);
  }

  update(data: Atom[] = []) {
    this.renderBars(data);
  }
}
