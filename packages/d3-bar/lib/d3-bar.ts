import * as d3 from "d3";
import { Config, defaults, Atom } from "./config";

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
  public x: any;
  public y: any;

  init() {
    const { element, width, height, axis, margin } = this._options_;
    this.chart = d3
      .select(element)
      .attr("width", width)
      .attr("height", height)
      .attr("class", "wrapper");

    if (axis) {
      this.w = width - margin.left - margin.right;
      this.h = height - margin.top - margin.bottom;
    }

    this.chart
      .append("g")
      .attr("width", this.w)
      .attr("height", this.h)
      .attr("class", "inner")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);
  }

  renderAxis(data: Atom[] = []) {
    const { w, h } = this;
    const xMax: number = d3.max(data, (d: Atom) => d.x) || 0;
    const xScale = d3
      .scaleLinear()
      .domain([0, xMax + 5]) // TODO: 避免水平方向溢出
      .range([0, w]);
    this.x = xScale;
    const xAxis = d3.axisBottom(xScale).ticks(5);
    this.chart
      .select("g.inner")
      .append("g")
      .attr("class", "axis")
      .attr("transform", `translate(0, ${h})`)
      .call(xAxis);

    const yMax: number = d3.max(data, (d: Atom) => d.y) || 0;
    const yScale = d3
      .scaleLinear()
      .domain([yMax, 0])
      .range([0, h]);
    this.y = yScale;
    const yAxis = d3.axisLeft(yScale).ticks(5);
    this.chart
      .select("g.inner")
      .append("g")
      .attr("class", "axis")
      .call(yAxis);
  }

  renderBars(data: Atom[] = []) {
    const { _options_, w, h } = this;
    const { barPadding } = _options_;
    const barWidth: number = w / data.length - barPadding;
    this.chart // render bars
      .select("g.inner")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("width", barWidth)
      .attr("height", (d: Atom) => h - this.y(d.y))
      .attr("x", (d: Atom) => this.x(d.x))
      .attr("y", (d: Atom) => this.y(d.y))
      .attr("transform", `translate(${-barWidth / 2}, 0)`);
  }

  render(data: Atom[] = []) {
    this.renderAxis(data);
    this.renderBars(data);
  }
}
