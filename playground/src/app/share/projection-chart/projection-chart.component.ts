import { Component, OnInit, OnChanges, ViewChild, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { ProjectionData } from './../model/projectionData.model';
import * as d3 from 'd3';


@Component({
  selector: 'app-projection-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './projection-chart.component.html',
  styleUrls: ['./projection-chart.component.css']
})
export class ProjectionChartComponent implements OnInit, OnChanges {

  // private jsonData: Array<any>;
  private projectionData: ProjectionData;
  private graphData: Array<any>;
  private categories: Array<string>;

  // #chart referentce in the template
  @ViewChild('chart') private chartContainer: ElementRef;

  @Input() private jsonData: Array<any>;

  private margin: any = { top: 30, right: 60, bottom: 30, left: 60 };
  private chart: any;
  private width: number;
  private height: number;
  private x0Scale: any;
  private x1Scale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;
  // private svg: any;


  // related to selectors

  public selectedPlanAll: any;
  public selectedPeriodAll: any;
  public selectedCurrentProposedAll: any;

  public plansSelector: Array<any>;
  public periodSelector: Array<any>;
  public currentProposedSelector: Array<any>;

  // arrays for selectors

  selectedPlans: Array<number>;
  selectedPeriods: Array<number>;
  selectedCurrentProposed: Array<string>;


  constructor() {
  }


  ngOnChanges() {

    if (this.chart) {

      this.ReCreateChartData();
      this.updateChart(this.jsonData, this.categories, this.projectionData.getPlans(), this.projectionData.getPeriods(),
        this.projectionData.getCurrentProposed());
      this.createSelector();
    }
  }

  ngOnInit() {
    this.createChart();
    this.updateChart(this.jsonData, this.categories, this.projectionData.getPlans(), this.projectionData.getPeriods(),
      this.projectionData.getCurrentProposed());
    this.createSelector();
  }


  createSelector() {

    // Initial Plan Selectors
    this.plansSelector = new Array();
    this.selectedPlanAll = true;
    this.selectedPlans = new Array();

    for (const i of this.projectionData.getPlans()) {
      this.plansSelector.push({ plan: i, selected: true });
      this.selectedPlans.push(i);
    }

    // Initial Period Selectors
    this.periodSelector = new Array();
    this.selectedPeriodAll = true;
    this.selectedPeriods = new Array();

    for (const i of this.projectionData.getPeriods()) {
      this.periodSelector.push({ period: i, selected: true });
      this.selectedPeriods.push(i);
    }




    // Initial CurrentProposed Selectors
    this.currentProposedSelector = new Array();
    this.selectedCurrentProposedAll = true;
    this.selectedCurrentProposed = new Array();

    for (const i of this.projectionData.getCurrentProposed()) {
      this.currentProposedSelector.push({ currentProposed: i, selected: true });
      this.selectedCurrentProposed.push(i);
    }



  }

  selectPlanAll() {

    this.selectedPlans = [];
    for (const i of this.plansSelector) {
      i.selected = this.selectedPlanAll;
    }

    if (this.selectedPlanAll) {
      for (const i of this.plansSelector) {
        this.selectedPlans.push(i.plan);
      }
    }
    this.updateChart(this.jsonData, this.categories, this.selectedPlans, this.selectedPeriods, this.selectedCurrentProposed);
  }


  selectPeriodAll() {
    this.selectedPeriods = [];
    for (const i of this.periodSelector) {
      i.selected = this.selectedPeriodAll;
    }

    if (this.selectedPeriodAll) {
      for (const i of this.periodSelector) {
        this.selectedPeriods.push(i.period);
      }
    }

    this.updateChart(this.jsonData, this.categories, this.selectedPlans, this.selectedPeriods, this.selectedCurrentProposed);
  }

  selectCurrentProposedAll() {
    this.selectedCurrentProposed = [];
    for (const i of this.currentProposedSelector) {
      i.selected = this.selectedCurrentProposedAll;
    }


    if (this.selectedCurrentProposedAll) {
      for (const i of this.currentProposedSelector) {
        this.selectedCurrentProposed.push(i.currentProposed);
      }
    }
    // console.log('populate plans: ' + this.selectedPlans);
    // console.log('populate period:' + this.selectedPeriods);
    // console.log('populate current/modfied:' + this.selectedCurrentProposed);
    this.updateChart(this.jsonData, this.categories, this.selectedPlans, this.selectedPeriods, this.selectedCurrentProposed);

  }

  checkIfAllPlanSelected() {
    this.selectedPlanAll = this.plansSelector.every(function (item: any) {
      return item.selected === true;
    });

    this.selectedPlans = [];

    for (const i of this.plansSelector) {
      if (i.selected) {
        this.selectedPlans.push(i.plan);
      }
    }
    this.updateChart(this.jsonData, this.categories, this.selectedPlans, this.selectedPeriods, this.selectedCurrentProposed);
  }
  checkIfAllPeriodSelected() {
    this.selectedPeriodAll = this.periodSelector.every(function (item: any) {
      return item.selected === true;
    });
    this.selectedPeriods = [];
    for (const i of this.periodSelector) {
      if (i.selected) {
        this.selectedPeriods.push(i.period);
      }
    }
    this.updateChart(this.jsonData, this.categories, this.selectedPlans, this.selectedPeriods, this.selectedCurrentProposed);
  }

  checkIfAllCurrentProposedSelected() {
    this.selectedCurrentProposedAll = this.currentProposedSelector.every(function (item: any) {
      return item.selected === true;
    });

    this.selectedCurrentProposed = [];

    for (const i of this.currentProposedSelector) {
      if (i.selected) {
        this.selectedCurrentProposed.push(i.currentProposed);
      }
    }

    this.updateChart(this.jsonData, this.categories, this.selectedPlans, this.selectedPeriods, this.selectedCurrentProposed);
  }

  createChart() {
    this.categories = ['EMPLOYER_PREMIUM', 'FUNDING_GAP', 'MEMBER_PREMIUM', 'TAX', 'FEES'];
    this.projectionData = new ProjectionData(this.jsonData, this.categories);
    this.graphData = this.projectionData.getGraphData();

    const element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;

    const svg = d3.select('#chart').append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    this.chart = svg
      .append('g')
      .classed('bars', true)
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);


    const innercColumns = {};

    for (const item of this.projectionData.getCurrentProposed()) {
      innercColumns[item] = this.categories;
    }

    // console.log(innercColumns);

    // create scales
    this.x0Scale = d3.scaleBand().domain(this.projectionData.getPeriods().map(String))
      .rangeRound([0, this.width])
      .padding(0.2);

    this.x1Scale = d3.scaleBand().domain(d3.keys(innercColumns))
      .range([0, this.x0Scale.bandwidth()])
      .paddingInner(0.1);

    this.yScale = d3.scaleLinear()
      .domain([0, d3.max(this.projectionData.getGraphData(), (d) => d['total'])])
      .range([this.height, 0]);

    // bar colors

    this.colors = d3.scaleOrdinal(['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00', '#b82e2e',
      '#316395', '#994499', '#22aa99', '#aaaa11', '#6633cc', '#e67300', '#8b0707', '#651067', '#329262', '#5574a6', '#3b3eac']);

    this.colors.domain(this.categories);

    // x & y axis
    const xaxis = d3.axisBottom(this.x0Scale)
      .tickSizeOuter(0)
      .tickFormat((d) => d === '0' ? 'Current Policy' : 'Period ' + d);

    const yaxis = d3.axisLeft(this.yScale)
      .tickSizeOuter(0)
      .tickFormat(d3.format('.2s'));

    this.xAxis = this.chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${this.height})`)
      .call(xaxis);

    this.yAxis = this.chart.append('g')
      .attr('class', 'y axis')
      .call(yaxis);
  }

  updateChart(jsonData: Array<any>, categories: Array<string>,
    plans?: Array<number>, periods?: Array<number>, currentProposed?: Array<string>) {

    this.projectionData.processGraphData(jsonData, categories, plans, periods, currentProposed);

    this.graphData = this.projectionData.getGraphData();

    // update scale
    this.x0Scale.domain(this.projectionData.getPeriods().map(String));
    this.yScale.domain([0, d3.max(this.projectionData.getGraphData(), (d) => d['total'])]);
    this.x1Scale.domain(this.projectionData.getCurrentProposed())
      .range([0, this.x0Scale.bandwidth()]);

    // update axis
    const xaxis = d3.axisBottom(this.x0Scale)
      .tickSizeOuter(0)
      .tickFormat((d) => d === '0' ? 'Current Policy' : 'Period ' + d);

    this.xAxis.transition().call(xaxis);

    const yaxis = d3.axisLeft(this.yScale)
      .tickSizeOuter(0)
      .tickFormat(d3.format('.2s'));

    this.yAxis.transition().call(yaxis);


    // update chart
    let groups = this.chart.selectAll('.group')
      .data(this.graphData);

    groups.exit().remove();



    // update existing groups
    groups
      .attr('transform', d => 'translate(' + this.x0Scale(d['period']) + ',0)');

    // adding new groups
    groups
      .enter().append('g')
      .classed('group', true)
      .attr('transform', d => 'translate(' + this.x0Scale(d['period']) + ',0)');


    // rejoin data VERY IMPORTANT
    groups = this.chart.selectAll('.group')
      .data(this.graphData);

    const bars = groups.selectAll('.bar')
      .data((d) => d['stackNumber']);

    bars.exit().remove();

    // update existing bars
    bars
      .transition()
      .attr('width', d => (d['display'] === 0 && currentProposed.length !== 1) ? this.x1Scale.bandwidth() * 2 : this.x1Scale.bandwidth())
      .attr('x', d => this.x1Scale(d['column']))
      .attr('y', d => this.yScale(d['yEnd']))
      .attr('height', d => this.yScale(d['yBegin']) - this.yScale(d['yEnd']));

    // adding new bars
    bars
      .enter()
      .append('rect')
      .classed('bar', true)
      .transition()
      .attr('width', d => (d['display'] === 0 && currentProposed.length !== 1) ? this.x1Scale.bandwidth() * 2 : this.x1Scale.bandwidth())
      .attr('x', d => this.x1Scale(d['column']))
      .attr('y', d => this.yScale(d['yEnd']))
      .attr('height', d => this.yScale(d['yBegin']) - this.yScale(d['yEnd']))
      .style('fill', d => this.colors(d['name']))
      .style('stroke', d => this.colors(d['name']))
      .style('fill-opacity', 0.7);


  }


  ReCreateChartData() {
    this.projectionData = new ProjectionData(this.jsonData, this.categories);
    this.graphData = this.projectionData.getGraphData();
  }



}
