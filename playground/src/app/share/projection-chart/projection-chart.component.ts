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


  // related to selectors

  public selectedPlanAll: any;
  public selectedPeriodAll: any;
  public selectedCurrentModifiedAll: any;

  public plansSelector: Array<any>;
  public periodSelector: Array<any>;
  public currentModifiedSelector: Array<any>;

  // arrays for selectors

  selectedPlans: Array<number>;
  selectedPeriods: Array<number>;
  selectedCurrentModified: Array<string>;


  constructor() {
  }


  ngOnChanges() {

    // update data

    if (this.chart) {
      // console.log('data changes');
      // console.log(this.jsonData);

      this.ReCreateChartData();

      this.updateChart(this.jsonData, this.categories, this.projectionData.getPlans(), this.projectionData.getPeriods(),
        this.projectionData.getCurrentModified());

      this.createSelector();


    }

  }

  ngOnInit() {
    this.createChart();
    this.updateChart(this.jsonData, this.categories, this.projectionData.getPlans(), this.projectionData.getPeriods(),
    this.projectionData.getCurrentModified());

//    this.initialChart();

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




    // Initial CurrentModified Selectors
    this.currentModifiedSelector = new Array();
    this.selectedCurrentModifiedAll = true;
    this.selectedCurrentModified = new Array();

    for (const i of this.projectionData.getCurrentModified()) {
      this.currentModifiedSelector.push({ currentModified: i, selected: true });
      this.selectedCurrentModified.push(i);
    }




    // console.log('populate plans: ' + this.selectedPlans);
    // console.log('populate period:' + this.selectedPeriods);
    // console.log('populate Current/Modified:' + this.selectedCurrentModified);

  }

  selectPlanAll() {

    this.selectedPlans = [];
    // for (let i = 0; i < this.plansSelector.length; i++) {
    //   this.plansSelector[i].selected = this.selectedPlanAll;
    // }

    for (const i of this.plansSelector) {
      i.selected = this.selectedPlanAll;
    }

    if (this.selectedPlanAll) {
      for (const i of this.plansSelector) {
        this.selectedPlans.push(i.plan);
      }
    }

    console.log('populate plans: ' + this.selectedPlans);
    console.log('populate period:' + this.selectedPeriods);
    console.log('populate current/modfied:' + this.selectedCurrentModified);

    this.updateChart(this.jsonData, this.categories, this.selectedPlans, this.selectedPeriods, this.selectedCurrentModified);

  }


  selectPeriodAll() {
    this.selectedPeriods = [];
    // for (let i = 0; i < this.periodSelector.length; i++) {
    //   this.periodSelector[i].selected = this.selectedPeriodAll;
    // }

    for (const i of this.periodSelector) {
      i.selected = this.selectedPeriodAll;
    }

    if (this.selectedPeriodAll) {
      for (const i of this.periodSelector) {
        this.selectedPeriods.push(i.period);
      }
    }
    console.log('populate plans: ' + this.selectedPlans);
    console.log('populate period:' + this.selectedPeriods);
    console.log('populate current/modfied:' + this.selectedCurrentModified);

    this.updateChart(this.jsonData, this.categories, this.selectedPlans, this.selectedPeriods, this.selectedCurrentModified);
  }

  selectCurrentModifiedAll() {
    this.selectedCurrentModified = [];
    // for (let i = 0; i < this.currentModifiedSelector.length; i++) {
    //   this.currentModifiedSelector[i].selected = this.selectedCurrentModifiedAll;
    // }

    for (const i of this.currentModifiedSelector) {
      i.selected = this.selectedCurrentModifiedAll;
    }


    if (this.selectedCurrentModifiedAll) {
      for (const i of this.currentModifiedSelector) {
        this.selectedCurrentModified.push(i.currentModified);
      }
    }
    console.log('populate plans: ' + this.selectedPlans);
    console.log('populate period:' + this.selectedPeriods);
    console.log('populate current/modfied:' + this.selectedCurrentModified);

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

    this.updateChart(this.jsonData, this.categories, this.selectedPlans, this.selectedPeriods, this.selectedCurrentModified);

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
    this.updateChart(this.jsonData, this.categories, this.selectedPlans, this.selectedPeriods, this.selectedCurrentModified);
  }

  checkIfAllCurrentModifiedSelected() {
    this.selectedCurrentModifiedAll = this.currentModifiedSelector.every(function (item: any) {
      return item.selected === true;
    });

    this.selectedCurrentModified = [];

    for (const i of this.currentModifiedSelector) {
      if (i.selected) {
        this.selectedCurrentModified.push(i.currentModified);
      }
    }


    console.log('populate plans: ' + this.selectedPlans);
    console.log('populate period:' + this.selectedPeriods);
    console.log('populate current/modfied:' + this.selectedCurrentModified);

    this.updateChart(this.jsonData, this.categories, this.selectedPlans, this.selectedPeriods, this.selectedCurrentModified);


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

    // const innercColumns = {
    //   'column1': this.categories,
    //   'column2': this.categories
    // };

    const innercColumns = {};

    for (const item of this.projectionData.getCurrentModified()) {
      innercColumns[item] = this.categories;
    }

    console.log(innercColumns);

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
    this.graphData = this.projectionData.getGraphData();



    this.x0Scale.domain(this.projectionData.getPeriods().map(String));
    this.yScale.domain([0, d3.max(this.projectionData.getGraphData(), (d) => d['total'])]);


    this.x1Scale
      .domain(this.projectionData.getCurrentModified())
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



  updateChartBackup(jsonData: Array<any>, categories: Array<string>,
    plans?: Array<number>, periods?: Array<number>, currentModified?: Array<string>) {

    // const cm = ['Modified', 'Current'];

    // update data
    // this.projectionData.processGraphData(this.jsonData, this.categories, [1], [0, 1, 2, 5], undefined);
    // this.projectionData.processGraphData(this.jsonData, this.categories, undefined, undefined, undefined);


    this.projectionData.processGraphData(jsonData, categories, plans, periods, currentModified);

    this.graphData = this.projectionData.getGraphData();

    // for (const i of this.graphData) {
    //   console.log(i);
    // }



    // update scale
    this.x0Scale.domain(this.projectionData.getPeriods().map(String));
    this.yScale.domain([0, d3.max(this.projectionData.getGraphData(), (d) => d['total'])]);
    this.x1Scale.domain(this.projectionData.getCurrentModified())
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
        //        console.log(d['stackNumber']);
        return d['stackNumber'];
      });

    // for (const i of this.graphData) {
    //   console.log(i);
    // }

    console.log(barUpdate);

    barUpdate.exit().remove();

    barUpdate

      .transition()
      .attr('width', d => (d['display'] === 0 && currentModified.length !== 1) ? this.x1Scale.bandwidth() * 2 : this.x1Scale.bandwidth())
      .attr('x', d => this.x1Scale(d['column']))
      .attr('y', d => this.yScale(d['yEnd']))
      .attr('height', d => this.yScale(d['yBegin']) - this.yScale(d['yEnd']))
      .style('fill', d => this.colors(d['name']))
      .style('stroke', d => this.colors(d['name']))
      .attr('classed', true);




    barUpdate.each(function (d) {
      this.classList.add(d['column']);
    });



    // console.log(barUpdate);


    // apppend new group
    const barAdd = update
      .enter().append('g')
      .attr('class', 'group')
      .attr('transform', d => 'translate(' + this.x0Scale(d['period']) + ',0)');


    const rect = barAdd
      .selectAll('rect')
      .data(function (d) {

        console.log('adding + ' + d['stackNumber']);
        return d['stackNumber'];
      })
      .enter().append('rect')
      .classed('bar', true)
      .transition()
      .attr('width', d => (d['display'] === 0 && currentModified.length !== 1) ? this.x1Scale.bandwidth() * 2 : this.x1Scale.bandwidth())
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




  updateChart(jsonData: Array<any>, categories: Array<string>,
    plans?: Array<number>, periods?: Array<number>, currentModified?: Array<string>) {

    this.projectionData.processGraphData(jsonData, categories, plans, periods, currentModified);

    this.graphData = this.projectionData.getGraphData();

    // update scale
    this.x0Scale.domain(this.projectionData.getPeriods().map(String));
    this.yScale.domain([0, d3.max(this.projectionData.getGraphData(), (d) => d['total'])]);
    this.x1Scale.domain(this.projectionData.getCurrentModified())
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
      .attr('width', d => (d['display'] === 0 && currentModified.length !== 1) ? this.x1Scale.bandwidth() * 2 : this.x1Scale.bandwidth())
      .attr('x', d => this.x1Scale(d['column']))
      .attr('y', d => this.yScale(d['yEnd']))
      .attr('height', d => this.yScale(d['yBegin']) - this.yScale(d['yEnd']));

    // adding new bars
    bars
      .enter()
      .append('rect')
      .classed('bar', true)
      .transition()
      .attr('width', d => (d['display'] === 0 && currentModified.length !== 1) ? this.x1Scale.bandwidth() * 2 : this.x1Scale.bandwidth())
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



  // ------------------------------------------------------------------------------- to be deleted
  updateChart_delete() {

    // update data
    this.projectionData.processGraphData(this.jsonData, this.categories, [1], [1, 2, 3, 4], undefined);
    this.graphData = this.projectionData.getGraphData();

    // for (const i of this.graphData) {
    //   console.log(i);
    // }


    // update scale
    this.x0Scale.domain(this.projectionData.getPeriods().map(String));
    this.yScale.domain([0, d3.max(this.projectionData.getGraphData(), (d) => d['total'])]);
    this.x1Scale.domain(this.projectionData.getCurrentModified())
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
