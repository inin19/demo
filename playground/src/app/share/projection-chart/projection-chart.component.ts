import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { ProjectionData } from './../model/projectionData.model';
import * as d3 from 'd3';


@Component({
  selector: 'app-projection-chart',
  templateUrl: './projection-chart.component.html',
  styleUrls: ['./projection-chart.component.css']
})
export class ProjectionChartComponent implements OnInit {

  private jsonData: Array<any>;
  private projectionData: ProjectionData;
  private graphData: Array<any>;
  private categories: Array<string>;

  // #chart referentce in the template
  @ViewChild('chart') private chartContainer: ElementRef;

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

  ngOnInit() {
    this.categories = ['EMPLOYER_PREMIUM', 'FUNDING_GAP', 'MEMBER_PREMIUM', 'TAX', 'FEES'];

    this.jsonData = [
      {
        'period': 0,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TOTAL_LIVES',
        'value': 426
      },
      {
        'period': 1,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TOTAL_LIVES',
        'value': 430.26
      },
      {
        'period': 2,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TOTAL_LIVES',
        'value': 434.56
      },
      {
        'period': 3,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TOTAL_LIVES',
        'value': 438.91
      },
      {
        'period': 4,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TOTAL_LIVES',
        'value': 443.3
      },
      {
        'period': 5,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TOTAL_LIVES',
        'value': 447.73
      },
      {
        'period': 0,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TOTAL_COST',
        'value': 3195000
      },
      {
        'period': 1,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TOTAL_COST',
        'value': 3710992.5
      },
      {
        'period': 2,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TOTAL_COST',
        'value': 3935507.55
      },
      {
        'period': 3,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TOTAL_COST',
        'value': 4173605.75
      },
      {
        'period': 4,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TOTAL_COST',
        'value': 4426108.9
      },
      {
        'period': 5,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TOTAL_COST',
        'value': 4693888.49
      },
      {
        'period': 0,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2556000
      },
      {
        'period': 1,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2633191.2
      },
      {
        'period': 2,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2712713.57
      },
      {
        'period': 3,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2794637.52
      },
      {
        'period': 4,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2879035.58
      },
      {
        'period': 5,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2965982.45
      },
      {
        'period': 0,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'MEMBER_PREMIUM',
        'value': 639000
      },
      {
        'period': 1,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'MEMBER_PREMIUM',
        'value': 651843.9
      },
      {
        'period': 2,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'MEMBER_PREMIUM',
        'value': 664945.96
      },
      {
        'period': 3,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'MEMBER_PREMIUM',
        'value': 678311.38
      },
      {
        'period': 4,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'MEMBER_PREMIUM',
        'value': 691945.43
      },
      {
        'period': 5,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'MEMBER_PREMIUM',
        'value': 705853.54
      },
      {
        'period': 0,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TAX',
        'value': 402010.3
      },
      {
        'period': 1,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TAX',
        'value': 466741.35
      },
      {
        'period': 2,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TAX',
        'value': 494914.01
      },
      {
        'period': 3,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TAX',
        'value': 524790.48
      },
      {
        'period': 4,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TAX',
        'value': 556473.8
      },
      {
        'period': 5,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'TAX',
        'value': 590073.31
      },
      {
        'period': 0,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'FEES',
        'value': 10650
      },
      {
        'period': 1,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'FEES',
        'value': 10756.5
      },
      {
        'period': 2,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'FEES',
        'value': 10864.07
      },
      {
        'period': 3,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'FEES',
        'value': 10972.71
      },
      {
        'period': 4,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'FEES',
        'value': 11082.43
      },
      {
        'period': 5,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'FEES',
        'value': 11193.26
      },
      {
        'period': 0,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'ESTIMATED_OOP_COST',
        'value': 319500
      },
      {
        'period': 1,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'ESTIMATED_OOP_COST',
        'value': 337435.18
      },
      {
        'period': 2,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'ESTIMATED_OOP_COST',
        'value': 360819.48
      },
      {
        'period': 3,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'ESTIMATED_OOP_COST',
        'value': 382766.13
      },
      {
        'period': 4,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'ESTIMATED_OOP_COST',
        'value': 406887.11
      },
      {
        'period': 5,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'ESTIMATED_OOP_COST',
        'value': 439969.13
      },
      {
        'period': 0,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'FUNDING_GAP',
        'value': 0
      },
      {
        'period': 1,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'FUNDING_GAP',
        'value': 425957.4
      },
      {
        'period': 2,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'FUNDING_GAP',
        'value': 557848.01
      },
      {
        'period': 3,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'FUNDING_GAP',
        'value': 700656.85
      },
      {
        'period': 4,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'FUNDING_GAP',
        'value': 855127.89
      },
      {
        'period': 5,
        'planId': 1,
        'currentModified': 'Current',
        'category': 'FUNDING_GAP',
        'value': 1022052.5
      },
      {
        'period': 0,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TOTAL_LIVES',
        'value': 3561642.65
      },
      {
        'period': 1,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TOTAL_LIVES',
        'value': 430.26
      },
      {
        'period': 2,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TOTAL_LIVES',
        'value': 434.56
      },
      {
        'period': 3,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TOTAL_LIVES',
        'value': 438.91
      },
      {
        'period': 4,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TOTAL_LIVES',
        'value': 443.3
      },
      {
        'period': 5,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TOTAL_LIVES',
        'value': 447.73
      },
      {
        'period': 0,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TOTAL_COST',
        'value': 0
      },
      {
        'period': 1,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TOTAL_COST',
        'value': 3710992.5
      },
      {
        'period': 2,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TOTAL_COST',
        'value': 3935507.55
      },
      {
        'period': 3,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TOTAL_COST',
        'value': 4173605.75
      },
      {
        'period': 4,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TOTAL_COST',
        'value': 4426108.9
      },
      {
        'period': 5,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TOTAL_COST',
        'value': 4693888.49
      },
      {
        'period': 0,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'EMPLOYER_PREMIUM',
        'value': 0
      },
      {
        'period': 1,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2633191.2
      },
      {
        'period': 2,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2712713.57
      },
      {
        'period': 3,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2794637.52
      },
      {
        'period': 4,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2879035.58
      },
      {
        'period': 5,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2965982.45
      },
      {
        'period': 0,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'MEMBER_PREMIUM',
        'value': 0
      },
      {
        'period': 1,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'MEMBER_PREMIUM',
        'value': 651843.9
      },
      {
        'period': 2,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'MEMBER_PREMIUM',
        'value': 664945.96
      },
      {
        'period': 3,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'MEMBER_PREMIUM',
        'value': 678311.38
      },
      {
        'period': 4,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'MEMBER_PREMIUM',
        'value': 691945.43
      },
      {
        'period': 5,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'MEMBER_PREMIUM',
        'value': 705853.54
      },
      {
        'period': 0,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TAX',
        'value': 0
      },
      {
        'period': 1,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TAX',
        'value': 466741.35
      },
      {
        'period': 2,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TAX',
        'value': 494914.01
      },
      {
        'period': 3,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TAX',
        'value': 524790.48
      },
      {
        'period': 4,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TAX',
        'value': 556473.8
      },
      {
        'period': 5,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'TAX',
        'value': 590073.31
      },
      {
        'period': 0,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'FEES',
        'value': 0
      },
      {
        'period': 1,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'FEES',
        'value': 10756.5
      },
      {
        'period': 2,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'FEES',
        'value': 10864.07
      },
      {
        'period': 3,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'FEES',
        'value': 10972.71
      },
      {
        'period': 4,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'FEES',
        'value': 11082.43
      },
      {
        'period': 5,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'FEES',
        'value': 11193.26
      },
      {
        'period': 0,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'ESTIMATED_OOP_COST',
        'value': 0
      },
      {
        'period': 1,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'ESTIMATED_OOP_COST',
        'value': 337435.18
      },
      {
        'period': 2,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'ESTIMATED_OOP_COST',
        'value': 360819.48
      },
      {
        'period': 3,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'ESTIMATED_OOP_COST',
        'value': 382766.13
      },
      {
        'period': 4,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'ESTIMATED_OOP_COST',
        'value': 406887.11
      },
      {
        'period': 5,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'ESTIMATED_OOP_COST',
        'value': 439969.13
      },
      {
        'period': 0,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'FUNDING_GAP',
        'value': 0
      },
      {
        'period': 1,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'FUNDING_GAP',
        'value': 425957.4
      },
      {
        'period': 2,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'FUNDING_GAP',
        'value': 557848.01
      },
      {
        'period': 3,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'FUNDING_GAP',
        'value': 700656.85
      },
      {
        'period': 4,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'FUNDING_GAP',
        'value': 855127.89
      },
      {
        'period': 5,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'FUNDING_GAP',
        'value': 1022052.5
      },
      {
        'period': 0,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TOTAL_LIVES',
        'value': 426
      },
      {
        'period': 1,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TOTAL_LIVES',
        'value': 430.26
      },
      {
        'period': 2,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TOTAL_LIVES',
        'value': 434.56
      },
      {
        'period': 3,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TOTAL_LIVES',
        'value': 438.91
      },
      {
        'period': 4,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TOTAL_LIVES',
        'value': 443.3
      },
      {
        'period': 5,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TOTAL_LIVES',
        'value': 447.73
      },
      {
        'period': 0,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TOTAL_COST',
        'value': 3195000
      },
      {
        'period': 1,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TOTAL_COST',
        'value': 3710992.5
      },
      {
        'period': 2,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TOTAL_COST',
        'value': 3935507.55
      },
      {
        'period': 3,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TOTAL_COST',
        'value': 4173605.75
      },
      {
        'period': 4,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TOTAL_COST',
        'value': 4426108.9
      },
      {
        'period': 5,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TOTAL_COST',
        'value': 4693888.49
      },
      {
        'period': 0,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2556000
      },
      {
        'period': 1,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2633191.2
      },
      {
        'period': 2,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2712713.57
      },
      {
        'period': 3,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2794637.52
      },
      {
        'period': 4,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2879035.58
      },
      {
        'period': 5,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2965982.45
      },
      {
        'period': 0,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'MEMBER_PREMIUM',
        'value': 639000
      },
      {
        'period': 1,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'MEMBER_PREMIUM',
        'value': 651843.9
      },
      {
        'period': 2,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'MEMBER_PREMIUM',
        'value': 664945.96
      },
      {
        'period': 3,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'MEMBER_PREMIUM',
        'value': 678311.38
      },
      {
        'period': 4,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'MEMBER_PREMIUM',
        'value': 691945.43
      },
      {
        'period': 5,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'MEMBER_PREMIUM',
        'value': 705853.54
      },
      {
        'period': 0,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TAX',
        'value': 402010.3
      },
      {
        'period': 1,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TAX',
        'value': 466741.35
      },
      {
        'period': 2,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TAX',
        'value': 494914.01
      },
      {
        'period': 3,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TAX',
        'value': 524790.48
      },
      {
        'period': 4,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TAX',
        'value': 556473.8
      },
      {
        'period': 5,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'TAX',
        'value': 590073.31
      },
      {
        'period': 0,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'FEES',
        'value': 10650
      },
      {
        'period': 1,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'FEES',
        'value': 10756.5
      },
      {
        'period': 2,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'FEES',
        'value': 10864.07
      },
      {
        'period': 3,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'FEES',
        'value': 10972.71
      },
      {
        'period': 4,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'FEES',
        'value': 11082.43
      },
      {
        'period': 5,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'FEES',
        'value': 11193.26
      },
      {
        'period': 0,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'ESTIMATED_OOP_COST',
        'value': 319500
      },
      {
        'period': 1,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'ESTIMATED_OOP_COST',
        'value': 337435.18
      },
      {
        'period': 2,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'ESTIMATED_OOP_COST',
        'value': 360819.48
      },
      {
        'period': 3,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'ESTIMATED_OOP_COST',
        'value': 382766.13
      },
      {
        'period': 4,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'ESTIMATED_OOP_COST',
        'value': 406887.11
      },
      {
        'period': 5,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'ESTIMATED_OOP_COST',
        'value': 439969.13
      },
      {
        'period': 0,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'FUNDING_GAP',
        'value': 0
      },
      {
        'period': 1,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'FUNDING_GAP',
        'value': 425957.4
      },
      {
        'period': 2,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'FUNDING_GAP',
        'value': 557848.01
      },
      {
        'period': 3,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'FUNDING_GAP',
        'value': 700656.85
      },
      {
        'period': 4,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'FUNDING_GAP',
        'value': 855127.89
      },
      {
        'period': 5,
        'planId': 2,
        'currentModified': 'Current',
        'category': 'FUNDING_GAP',
        'value': 1022052.5
      },
      {
        'period': 0,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TOTAL_LIVES',
        'value': 0
      },
      {
        'period': 1,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TOTAL_LIVES',
        'value': 430.26
      },
      {
        'period': 2,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TOTAL_LIVES',
        'value': 434.56
      },
      {
        'period': 3,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TOTAL_LIVES',
        'value': 438.91
      },
      {
        'period': 4,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TOTAL_LIVES',
        'value': 443.3
      },
      {
        'period': 5,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TOTAL_LIVES',
        'value': 447.73
      },
      {
        'period': 0,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TOTAL_COST',
        'value': 0
      },
      {
        'period': 1,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TOTAL_COST',
        'value': 3710992.5
      },
      {
        'period': 2,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TOTAL_COST',
        'value': 3935507.55
      },
      {
        'period': 3,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TOTAL_COST',
        'value': 4173605.75
      },
      {
        'period': 4,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TOTAL_COST',
        'value': 4426108.9
      },
      {
        'period': 5,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TOTAL_COST',
        'value': 4693888.49
      },
      {
        'period': 0,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'EMPLOYER_PREMIUM',
        'value': 0
      },
      {
        'period': 1,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2633191.2
      },
      {
        'period': 2,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2712713.57
      },
      {
        'period': 3,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2794637.52
      },
      {
        'period': 4,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2879035.58
      },
      {
        'period': 5,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'EMPLOYER_PREMIUM',
        'value': 2965982.45
      },
      {
        'period': 0,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'MEMBER_PREMIUM',
        'value': 0
      },
      {
        'period': 1,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'MEMBER_PREMIUM',
        'value': 651843.9
      },
      {
        'period': 2,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'MEMBER_PREMIUM',
        'value': 664945.96
      },
      {
        'period': 3,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'MEMBER_PREMIUM',
        'value': 678311.38
      },
      {
        'period': 4,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'MEMBER_PREMIUM',
        'value': 691945.43
      },
      {
        'period': 5,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'MEMBER_PREMIUM',
        'value': 705853.54
      },
      {
        'period': 0,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TAX',
        'value': 0
      },
      {
        'period': 1,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TAX',
        'value': 466741.35
      },
      {
        'period': 2,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TAX',
        'value': 494914.01
      },
      {
        'period': 3,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TAX',
        'value': 524790.48
      },
      {
        'period': 4,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TAX',
        'value': 556473.8
      },
      {
        'period': 5,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'TAX',
        'value': 590073.31
      },
      {
        'period': 0,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'FEES',
        'value': 0
      },
      {
        'period': 1,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'FEES',
        'value': 10756.5
      },
      {
        'period': 2,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'FEES',
        'value': 10864.07
      },
      {
        'period': 3,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'FEES',
        'value': 10972.71
      },
      {
        'period': 4,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'FEES',
        'value': 11082.43
      },
      {
        'period': 5,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'FEES',
        'value': 11193.26
      },
      {
        'period': 0,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'ESTIMATED_OOP_COST',
        'value': 0
      },
      {
        'period': 1,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'ESTIMATED_OOP_COST',
        'value': 337435.18
      },
      {
        'period': 2,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'ESTIMATED_OOP_COST',
        'value': 360819.48
      },
      {
        'period': 3,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'ESTIMATED_OOP_COST',
        'value': 382766.13
      },
      {
        'period': 4,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'ESTIMATED_OOP_COST',
        'value': 406887.11
      },
      {
        'period': 5,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'ESTIMATED_OOP_COST',
        'value': 439969.13
      },
      {
        'period': 0,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'FUNDING_GAP',
        'value': 0
      },
      {
        'period': 1,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'FUNDING_GAP',
        'value': 425957.4
      },
      {
        'period': 2,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'FUNDING_GAP',
        'value': 557848.01
      },
      {
        'period': 3,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'FUNDING_GAP',
        'value': 700656.85
      },
      {
        'period': 4,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'FUNDING_GAP',
        'value': 855127.89
      },
      {
        'period': 5,
        'planId': 2,
        'currentModified': 'Modified',
        'category': 'FUNDING_GAP',
        'value': 1022052.5
      }
    ];

    this.projectionData = new ProjectionData(this.jsonData, this.categories);
    this.graphData = this.projectionData.getGraphkData();


    // apply some filters
    // this.projectionData.processGraphData(this.jsonData, this.categories, undefined, [1, 2, 3], ['Modified']);
    // this.graphData = this.projectionData.getGraphkData();


    this.createChart();

    this.updateChart();


  }

  createChart() {
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

  updateChart() {
    this.x0Scale.domain(this.projectionData.getGraphPeriod().map(String));
    this.yScale.domain([0, d3.max(this.projectionData.getGraphkData(), (d) => d['total'])]);


    // console.log(this.x0Scale.domain());


    // charting
    const project_stackedbar = this.chart.selectAll('.project_stackedbar')
      .data(this.graphData)
      .enter().append('g')
      .attr('class', 'group')
      .attr('transform', d => 'translate(' + this.x0Scale(d['period']) + ',0)');

    const update = project_stackedbar.selectAll('.bar')
      .data(function (d) { console.log(d['stackNumber']); return d['stackNumber']; });


    update.exit().remove();

    update.enter().append('rect')
      .classed('bar', true)
      .attr('width', d => d['display'] === 0 ? this.x1Scale.bandwidth() * 2 : this.x1Scale.bandwidth())
      .attr('x', d => this.x1Scale(d['column']))
      .attr('y', d => this.yScale(0))
      .attr('height', 0)
      .style('fill', d => this.colors(d['name']))
      .style('opacity', 0.8)
      .transition()
      .delay((d, i) => {
        const abc = (d['column'] === 'Current' ? 0 : 1);
        return d['period'] * 50 + abc * 25;
      })
      .attr('y', d => this.yScale(d['yEnd']))
      .attr('height', d => this.yScale(d['yBegin']) - this.yScale(d['yEnd']));


  }


  updateChart2() {

    this.projectionData.processGraphData(this.jsonData, this.categories, [1], [1, 2, 3], undefined);
    this.graphData = this.projectionData.getGraphkData();



    this.x0Scale.domain(this.projectionData.getGraphPeriod().map(String));
    this.yScale.domain([0, d3.max(this.projectionData.getGraphkData(), (d) => d['total'])]);

    // need testing
    this.x1Scale.domain(this.projectionData.getGraphCurrentModified);


    console.log(this.x0Scale('3'));


    // x & y axis
    const xaxis = d3.axisBottom(this.x0Scale)
      .tickSizeOuter(0)
      .tickFormat((d) => d === '0' ? 'Current Policy' : 'period ' + d);

    this.xAxis.transition().call(xaxis);

    const yaxis = d3.axisLeft(this.yScale)
      .tickSizeOuter(0)
      .tickFormat(d3.format('.2s'));


    this.yAxis.transition().call(yaxis);





    // console.log(this.x0Scale.domain());




    // charting
    const project_stackedbar = this.chart.selectAll('.group')
      .data(this.graphData);


    for (const i of this.graphData) {
      console.log(i);
    }

    project_stackedbar.exit().remove();

    project_stackedbar
      .enter().append('g')
      .attr('class', 'group')
      .attr('transform', d => 'translate(' + this.x0Scale(d['period']) + ',0)');



    const update = project_stackedbar.selectAll('.bar')
      .data(function (d) { console.log(d['stackNumber']); return d['stackNumber']; });


    // update.exit().remove();

    update.enter().append('rect')
      .classed('bar', true)
      .attr('width', d => d['display'] === 0 ? this.x1Scale.bandwidth() * 2 : this.x1Scale.bandwidth())
      .attr('x', d => this.x1Scale(d['column']))
      .attr('y', d => this.yScale(0))
      .attr('height', 0)
      .style('fill', d => this.colors(d['name']))
      .style('opacity', 0.8)
      .transition()
      .delay((d, i) => {
        const abc = (d['column'] === 'Current' ? 0 : 1);
        return d['period'] * 50 + abc * 25;
      })
      .attr('y', d => this.yScale(d['yEnd']))
      .attr('height', d => this.yScale(d['yBegin']) - this.yScale(d['yEnd']));






    // this.projectionData.processGraphData(this.jsonData, this.categories, [1], [1, 2, 3], undefined);
    // this.graphData = this.projectionData.getGraphkData();

  }
}
