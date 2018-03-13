import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  json: Array<any>;

  json1: Array<any>;
  json2: Array<any>;



  ngOnInit() {

    this.json1 = [
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

    this.json2 = [
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
        'value': 325957.4
      },
      {
        'period': 2,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'FUNDING_GAP',
        'value': 457848.01
      },
      {
        'period': 3,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'FUNDING_GAP',
        'value': 600656.85
      },
      {
        'period': 4,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'FUNDING_GAP',
        'value': 755127.89
      },
      {
        'period': 5,
        'planId': 1,
        'currentModified': 'Modified',
        'category': 'FUNDING_GAP',
        'value': 922052.5
      }
    ];

    this.json = this.json1;
  }


  changeData(num: number) {

    if (num === 2) {
      this.json = this.json2;
    } else {
      this.json = this.json1;
    }


  }
}
