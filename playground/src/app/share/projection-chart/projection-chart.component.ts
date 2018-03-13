import { Component, OnInit, OnChanges, ViewChild, Input, ElementRef } from '@angular/core';
import { ProjectionData } from './../model/projectionData.model';
import * as d3 from 'd3';


@Component({
  selector: 'app-projection-chart',
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


  constructor() { }


  ngOnChanges() {

    // update data

    if (this.chart) {
      console.log('data changes');
      console.log(this.jsonData);

      this.createChartData();


      this.updateChart2(this.jsonData, this.categories, undefined, undefined, undefined);




    }

  }

  ngOnInit() {
    this.createChartData();
    this.createChart();
    this.initialChart();

    this.createSelector();

  }


  createSelector() {

    // VERY IMPORTANT Capture class instance
    const _this = this;

    const selector = d3.select('#selector').selectAll('button')
      .data(this.projectionData.getGraphPeriod())
      .enter()
      .append('button')
      .classed('priodButton', true)
      .text((d) => d === 0 ? 'Current Policy' : 'period ' + d)
      .on('click', function (d) {
        console.log(d);
        // console.log(_this);

        _this.updateChart2(_this.jsonData, _this.categories, undefined, [1], undefined);

      });

  }


  createChartData() {
    this.categories = ['EMPLOYER_PREMIUM', 'FUNDING_GAP', 'MEMBER_PREMIUM', 'TAX', 'FEES'];
    this.projectionData = new ProjectionData(this.jsonData, this.categories);
    this.graphData = this.projectionData.getGraphkData();

  }

  createChart() {

    this.categories = ['EMPLOYER_PREMIUM', 'FUNDING_GAP', 'MEMBER_PREMIUM', 'TAX', 'FEES'];
    this.projectionData = new ProjectionData(this.jsonData, this.categories);
    this.graphData = this.projectionData.getGraphkData();

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

    // const innercColumns = {
    //   'column1': this.categories,
    //   'column2': this.categories
    // };

    const innercColumns = {};

    for (const item of this.projectionData.getGraphCurrentModified()) {
      innercColumns[item] = this.categories;
    }



    // define X & Y domains
    //    const xDomain = this.projectionData.getGraphPeriod();
    //    const yDomain = [0, d3.max(this.projectionData.getGraphkData(), (d) => d['total'])];

    // create scales
    this.x0Scale = d3.scaleBand().domain(this.projectionData.getGraphPeriod().map(String))
      .rangeRound([0, this.width])
      .padding(0.2);

    this.x1Scale = d3.scaleBand().domain(d3.keys(innercColumns))
      .range([0, this.x0Scale.bandwidth()])
      .paddingInner(0.1);

    this.yScale = d3.scaleLinear()
      .domain([0, d3.max(this.projectionData.getGraphkData(), (d) => d['total'])])
      .range([this.height, 0]);

    // bar colors

    this.colors = d3.scaleOrdinal(['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00', '#b82e2e',
      '#316395', '#994499', '#22aa99', '#aaaa11', '#6633cc', '#e67300', '#8b0707', '#651067', '#329262', '#5574a6', '#3b3eac']);

    this.colors.domain(this.categories);

    // x & y axis
    const xaxis = d3.axisBottom(this.x0Scale)
      .tickSizeOuter(0)
      .tickFormat((d) => d === '0' ? 'Current Policy' : 'period ' + d);

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





  initialChart() {


    this.projectionData.processGraphData(this.jsonData, this.categories, undefined, undefined, undefined);
    this.graphData = this.projectionData.getGraphkData();



    this.x0Scale.domain(this.projectionData.getGraphPeriod().map(String));
    this.yScale.domain([0, d3.max(this.projectionData.getGraphkData(), (d) => d['total'])]);


    this.x1Scale
      .domain(this.projectionData.getGraphCurrentModified())
      .range([0, this.x0Scale.bandwidth()]);


    // x & y axis
    const xaxis = d3.axisBottom(this.x0Scale)
      .tickSizeOuter(0)
      .tickFormat((d) => d === '0' ? 'Current Policy' : 'period ' + d);

    const yaxis = d3.axisLeft(this.yScale)
      .tickSizeOuter(0)
      .tickFormat(d3.format('.2s'));





    this.xAxis.transition().call(xaxis);
    this.yAxis.transition().call(yaxis);



    // charting
    const project_stackedbar = this.chart.selectAll('.group')
      .data(this.graphData)
      .enter().append('g')
      .attr('class', 'group')
      .attr('transform', d => 'translate(' + this.x0Scale(d['period']) + ',0)');


    const rect = project_stackedbar
      .selectAll('rect')
      .data(d => d['stackNumber'])
      .enter().append('rect')
      .classed('bar', true)
      .attr('width', d => d['display'] === 0 ? this.x1Scale.bandwidth() * 2 : this.x1Scale.bandwidth())
      .attr('x', d => this.x1Scale(d['column']))
      .attr('y', d => this.yScale(0))
      .attr('height', 0)
      .style('fill', d => this.colors(d['name']))
      .style('stroke', d => this.colors(d['name']))

      .style('fill-opacity', 0.7)
      .transition()
      .delay((d, i) => {
        const abc = (d['column'] === 'Current' ? 0 : 1);
        return d['period'] * 50 + abc * 25;
      })
      .attr('y', d => this.yScale(d['yEnd']))
      .attr('height', d => this.yScale(d['yBegin']) - this.yScale(d['yEnd']));

    rect.each(function (d) {
      this.classList.add(d['column']);
    });

  }



  updateChart2(jsonData: Array<any>, categories: Array<string>,
    plans?: Array<number>, periods?: Array<number>, currentModified?: Array<string>) {

    const cm = ['Modified', 'Current'];

    // update data
    // this.projectionData.processGraphData(this.jsonData, this.categories, [1], [0, 1, 2, 5], undefined);
    // this.projectionData.processGraphData(this.jsonData, this.categories, undefined, undefined, undefined);


    this.projectionData.processGraphData(jsonData, categories, plans, periods, currentModified);


    this.graphData = this.projectionData.getGraphkData();
    // update scale
    this.x0Scale.domain(this.projectionData.getGraphPeriod().map(String));
    this.yScale.domain([0, d3.max(this.projectionData.getGraphkData(), (d) => d['total'])]);
    this.x1Scale.domain(this.projectionData.getGraphCurrentModified())
      .range([0, this.x0Scale.bandwidth()]);


    // update axis
    const xaxis = d3.axisBottom(this.x0Scale)
      .tickSizeOuter(0)
      .tickFormat((d) => d === '0' ? 'Current Policy' : 'period ' + d);

    this.xAxis.transition().call(xaxis);

    const yaxis = d3.axisLeft(this.yScale)
      .tickSizeOuter(0)
      .tickFormat(d3.format('.2s'));

    this.yAxis.transition().call(yaxis);



    // update chart
    const update = this.chart.selectAll('.group')
      .data(this.graphData);

    update.exit().remove();


    // change existing group
    const abc = this.chart.selectAll('.group') // .transition()
      .attr('transform', d => 'translate(' + this.x0Scale(d['period']) + ',0)');


    // if current modified is selected
    // abc.selectAll('.bar.Current').remove();

    const barUpdate = abc.selectAll('.bar')
      .data(function (d) {
        console.log(d);
        return d['stackNumber'];
      });


    barUpdate.exit().remove();

    barUpdate

      .transition()
      .attr('width', d => (d['display'] === 0 && cm.length !== 1) ? this.x1Scale.bandwidth() * 2 : this.x1Scale.bandwidth())
      .attr('x', d => this.x1Scale(d['column']))
      .attr('y', d => this.yScale(d['yEnd']))
      .attr('height', d => this.yScale(d['yBegin']) - this.yScale(d['yEnd']));


    // console.log(update);


    // apppend new group
    const barAdd = update
      .enter().append('g')
      .attr('class', 'group')
      .attr('transform', d => 'translate(' + this.x0Scale(d['period']) + ',0)');


    const rect = barAdd
      .selectAll('rect')
      .data(function (d) { return d['stackNumber']; })
      .enter().append('rect')
      .classed('bar', true)
      .transition()
      .attr('width', d => (d['display'] === 0 && cm.length !== 1) ? this.x1Scale.bandwidth() * 2 : this.x1Scale.bandwidth())
      .attr('x', d => this.x1Scale(d['column']))
      .attr('y', d => this.yScale(d['yEnd']))
      .attr('height', d => this.yScale(d['yBegin']) - this.yScale(d['yEnd']))
      .style('fill', d => this.colors(d['name']))
      .style('stroke', d => this.colors(d['name']))

      .style('fill-opacity', 0.7);


    rect.each(function (d) {
      this.classList.add(d['column']);
    });


  }


  // to be deleted
  updateChart() {

    // update data
    this.projectionData.processGraphData(this.jsonData, this.categories, [1], [1, 2, 3, 4], undefined);
    this.graphData = this.projectionData.getGraphkData();

    // for (const i of this.graphData) {
    //   console.log(i);
    // }


    // update scale
    this.x0Scale.domain(this.projectionData.getGraphPeriod().map(String));
    this.yScale.domain([0, d3.max(this.projectionData.getGraphkData(), (d) => d['total'])]);
    this.x1Scale.domain(this.projectionData.getGraphCurrentModified())
      .range([0, this.x0Scale.bandwidth()]);



    // update axis
    const xaxis = d3.axisBottom(this.x0Scale)
      .tickSizeOuter(0)
      .tickFormat((d) => d === '0' ? 'Current Policy' : 'period ' + d);

    this.xAxis.transition().call(xaxis);

    const yaxis = d3.axisLeft(this.yScale)
      .tickSizeOuter(0)
      .tickFormat(d3.format('.2s'));

    this.yAxis.transition().call(yaxis);





    // update chart
    const project_stackedbar = this.chart.selectAll('.group')
      .data(this.graphData);


    // for (const i of this.graphData) {
    //   console.log(i);
    // }

    project_stackedbar.exit().remove();

    // change existing group
    this.chart.selectAll('.group').transition()
      .attr('transform', d => 'translate(' + this.x0Scale(d['period']) + ',0)');


    // apppend new group
    project_stackedbar
      .enter().append('g')
      .attr('class', 'group')
      .attr('transform', d => 'translate(' + this.x0Scale(d['period']) + ',0)');



    const update = this.chart.selectAll('.bar')
      .data(function (d) {
        console.log(d['stackNumber']);
        return d['stackNumber'];
      });
    console.log(update);


    update.exit().remove();

    // change existing bar


    this.chart.selectAll('.bar')
      // .transition()
      .attr('x', d => this.x1Scale(d['column']))
      .attr('y', d => this.yScale(d['yEnd']))
      .attr('width', d => d['display'] === 0 ? this.x1Scale.bandwidth() * 2 : this.x1Scale.bandwidth())
      .attr('height', d => this.yScale(d['yBegin']) - this.yScale(d['yEnd']));






    update
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('width', d => d['display'] === 0 ? this.x1Scale.bandwidth() * 2 : this.x1Scale.bandwidth())
      .attr('x', d => this.x1Scale(d['column']))
      .attr('y', d => this.yScale(0))
      .attr('height', 0)
      .style('fill', d => this.colors(d['name']))
      .style('stroke', d => this.colors(d['name']))

      .style('fill-opacity', 0.7)
      .transition()
      .delay((d, i) => {
        console.log(d);
        // const abc = (d['column'] === 'Current' ? 0 : 1);
        // return d['period'] * 50 + abc * 25;
        return 10;
      })
      .attr('y', d => this.yScale(d['yEnd']))
      .attr('height', d => this.yScale(d['yBegin']) - this.yScale(d['yEnd']));



  }
}
