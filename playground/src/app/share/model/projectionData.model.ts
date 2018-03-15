import * as d3 from 'd3';
import * as crossfilter from 'crossfilter';


export class ProjectionData {

    private ndx: any;
    private planDimension: any;
    private otherDimension: any;
    // private categoryDimension: any;
    // private currentProposedDimension: any;
    // private periodDimension: any;



    // groups
    private otherDimensionGroup: any;


    // data aggreate
    private proposalAggregateData: any;


    // Output
    private graphData: Array<any>;
    private graphPeriod: Array<number>;
    private graphCurrentProposed: Array<string>;
    private graphPlan: Array<number>;
    private graphCategory: Array<string>;




    constructor(data: Array<any>, categories: Array<string>) {
        this.createDimentionGroup(data, categories);
        this.processGraphData(data, categories);
    }

    createDimentionGroup(data: Array<any>, categories: Array<string>) {
        this.ndx = crossfilter(data);

        // Create Dimensions : Plan, period, Current/Modifeid, Other
        this.planDimension = this.ndx.dimension((d) => d.planId);

        // may used them later

        // this.periodDimension = this.ndx.dimension((d) => d.period);
        // this.currentProposedDimension = this.ndx.dimension((d) => d.currentProposed);
        // this.categoryDimension = this.ndx.dimension((d) => d.category);

        this.otherDimension = this.ndx.dimension((d) => JSON.stringify({
            'period': d.period,
            'currentProposed': d.currentProposed,
            'category': d.category
        }));

        // Create Groups
        this.otherDimensionGroup = this.otherDimension.group();


        this.otherDimensionGroup.all().forEach(function (d) {
            d.key = JSON.parse(d.key);
        });
    }


    processGraphData(data: Array<any>, categories: Array<string>, plans?: Array<number>, periods?: Array<number>,
        currentProposed?: Array<string>) {


        // Apply Filters
        if (plans) {
            this.planDimension.filter((d) => plans.indexOf(d) !== -1);
        }

        // no use use dropdown to pass selector

        // if (periods) {
        //     this.periodDimension.filter((d) => periods.indexOf(d) !== -1);
        // }

        // if (currentProposed) {
        //     this.currentProposedDimension.filter((d) => currentProposed.indexOf(d) !== -1);
        // }



        // aggregate plans data to proposal level
        this.proposalAggregateData = this.otherDimensionGroup.reduceSum(function (d) { return d.value; }).all();





        if (periods) {
            this.graphPeriod = periods;
        } else {
            this.graphPeriod = Array.from(new Set(data.map(item => item.period)));
        }

        if (currentProposed) {
            this.graphCurrentProposed = currentProposed;
        } else {
            this.graphCurrentProposed = Array.from(new Set(data.map(item => item.currentProposed)));
        }

        if (plans) {
            this.graphPlan = plans;
        } else {
            this.graphPlan = Array.from(new Set(data.map(item => item.planId)));
        }


        // graph cetegories is determined by country
        this.graphCategory = categories;



        // --------------------------------------------------------------------------------------------------------------------------
        // Transform data

        this.graphData = new Array();

        for (const periodNumber of this.graphPeriod) {
            const yColumn = new Array();
            const Current = new Array();
            const Proposed = new Array();

            let y1Begin = 0;
            let y2Begin = 0;

            categories.forEach(el => {

                if (this.graphCurrentProposed.indexOf('Current') !== -1) {

                    // populate current
                    if (!yColumn['Current']) {
                        yColumn['Current'] = 0;
                    }
                    y1Begin = yColumn['Current'];

                    const curr = this.proposalAggregateData.filter(function (d) {
                        return (d.key['period'] === +periodNumber) && (d.key['category'] === el)
                            && (d.key['currentProposed'] === 'Current');
                    })[0].value;

                    yColumn['Current'] += + curr;

                    if (periodNumber === 0) {
                        Current.push({
                            display: 0,
                            period: periodNumber,
                            name: el,
                            column: 'Current',
                            yBegin: y1Begin,
                            yEnd: +curr + y1Begin
                        });
                    } else {
                        Current.push({
                            display: 1,
                            period: periodNumber,
                            name: el,
                            column: 'Current',
                            yBegin: y1Begin,
                            yEnd: +curr + y1Begin
                        });

                    }

                }

                if (this.graphCurrentProposed.indexOf('Proposed') !== -1) {
                    // populate Proposed
                    if (!yColumn['Proposed']) {
                        yColumn['Proposed'] = 0;
                    }
                    y2Begin = yColumn['Proposed'];

                    const proposed = this.proposalAggregateData.filter(function (d) {
                        return (d.key['period'] === +periodNumber) && (d.key['category'] === el)
                            && (d.key['currentProposed'] === 'Proposed');
                    })[0].value;
                    yColumn['Proposed'] += proposed;
                    Proposed.push({
                        display: 1,
                        period: periodNumber,
                        name: el,
                        column: 'Proposed',
                        yBegin: y2Begin,
                        yEnd: +proposed + y2Begin
                    });

                }

            });

            this.graphData.push({
                period: periodNumber,
                stackNumber: Current.concat(Proposed),
                total: d3.max(Current.concat(Proposed), function (d) {
                    return d['yEnd'];
                })
            });

        }
    }

    getGraphData(): Array<any> {
        return this.graphData;
    }


    // only used to populate seletors
    getPeriods(): Array<number> {
        return this.graphPeriod;
    }

    getCurrentProposed(): Array<string> {
        return this.graphCurrentProposed;
    }


    getPlans(): Array<number> {
        return this.graphPlan;
    }

    getCategories(): Array<string> {
        return this.graphCategory;
    }
}
