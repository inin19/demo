import * as d3 from 'd3';
import * as crossfilter from 'crossfilter';


export class ProjectionData {

    private ndx: any;
    private planDimension: any;
    private periodDimension: any;
    private currentModifiedDimension: any;
    private otherDimension: any;


    // group
    private otherDimensionGroup: any;
    private planDimensionGroup: any;


    private data_filteredByPlan: any;
    private data_filteredByPlanReduced: any;


    // Output
    private graphData: Array<any>;
    private graphPeriod: Array<number>;
    private graphCurrentModified: Array<string>;
    private graphPlan: Array<number>;




    constructor(data: Array<any>, categories: Array<string>) {
        this.createDimentionGroup(data, categories);
        this.processGraphData(data, categories);
    }

    createDimentionGroup(data: Array<any>, categories: Array<string>) {
        this.ndx = crossfilter(data);

        // Create Dimensions : Plan, period, Current/Modifeid, Other
        this.planDimension = this.ndx.dimension((d) => d.planId);
        this.periodDimension = this.ndx.dimension((d) => d.period);
        this.currentModifiedDimension = this.ndx.dimension((d) => d.currentModified);
        this.otherDimension = this.ndx.dimension((d) => JSON.stringify({
            'period': d.period,
            'currentModified': d.currentModified,
            'category': d.category
        }));

        // Create Groups
        this.otherDimensionGroup = this.otherDimension.group();
        this.planDimensionGroup = this.planDimension.group();

        this.otherDimensionGroup.all().forEach(function (d) {
            // parse the json string created above
            d.key = JSON.parse(d.key);
            // filtered indicator, 0 means filtered out
            d.extra = d.value;
        });
    }


    processGraphData(data: Array<any>, categories: Array<string>, plans?: Array<number>, periods?: Array<number>,
        currentmodified?: Array<string>) {


        // Apply Filters
        if (plans) {
            this.planDimension.filter((d) => plans.indexOf(d) !== -1);
        }
        if (periods) {
            this.periodDimension.filter((d) => periods.indexOf(d) !== -1);
        } else {
            // console.log(periods);
            // this.periodDimension.filterAll();
        }
        if (currentmodified) {
            this.currentModifiedDimension.filter((d) => currentmodified.indexOf(d) !== -1);
        }


        // recreate dimension

        this.otherDimension.dispose();
        this.otherDimensionGroup = this.otherDimension.group();

        this.otherDimensionGroup.all().forEach(function (d) {
            // parse the json string created above
            d.key = JSON.parse(d.key);
            // filtered indicator, 0 means filtered out
            d.extra = d.value;
        });



        // this.otherDimensionGroup.all().forEach(function (d) {
        //     // parse the json string created above
        //    // d.key = JSON.parse(d.key);
        //     // filtered indicator, 0 means filtered out
        //      d.extra = d.value;

        //     console.log(d.value);
        // });


        // console.log('-------------------------------------------------------------');

        // for (const i of this.otherDimensionGroup.all()) {
        //     console.log(i);
        // }








        // Prepform Group by and fitler out the groups that does not apply
        this.data_filteredByPlan = this.otherDimensionGroup.reduceSum(function (d) { return d.value; }).all();






        // this.data_filteredByPlanReduced = this.data_filteredByPlan.filter((d) => (d.extra !== 0));


        this.data_filteredByPlanReduced = this.data_filteredByPlan.filter((d) => (d.value !== -999));



        // console.log('DDDDDBUG');
        // for (const i of this.data_filteredByPlanReduced) {
        //     console.log(i);
        // }

        // ? better way  get period number
        if (periods) {
            this.graphPeriod = periods;
        } else {
            this.graphPeriod = [0, 1, 2, 3, 4, 5];
        }

        if (currentmodified) {
            this.graphCurrentModified = currentmodified;
        } else {
            this.graphCurrentModified = ['Current', 'Modified'];
        }

        if (plans) {
            this.graphPlan = plans;
        } else {
            this.graphPlan = Array.from(new Set(data.map(item => item.planId)));
        }



        // --------------------------------------------------------------------------------------------------------------------------
        // Transform data

        this.graphData = new Array();

        for (const periodNumber of this.graphPeriod) {
            const yColumn = new Array();
            const Current = new Array();
            const Modified = new Array();

            let y1Begin = 0;
            let y2Begin = 0;

            categories.forEach(el => {

                if (this.graphCurrentModified.indexOf('Current') !== -1) {

                    // populate current
                    if (!yColumn['Current']) {
                        yColumn['Current'] = 0;
                    }
                    y1Begin = yColumn['Current'];

                    const curr = this.data_filteredByPlanReduced.filter(function (d) {
                        return (d.key['period'] === +periodNumber) && (d.key['category'] === el)
                            && (d.key['currentModified'] === 'Current');
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

                if (this.graphCurrentModified.indexOf('Modified') !== -1) {
                    // populate modified
                    if (!yColumn['Modified']) {
                        yColumn['Modified'] = 0;
                    }
                    y2Begin = yColumn['Modified'];

                    const modified = this.data_filteredByPlanReduced.filter(function (d) {
                        return (d.key['period'] === +periodNumber) && (d.key['category'] === el)
                            && (d.key['currentModified'] === 'Modified');
                    })[0].value;
                    yColumn['Modified'] += modified;
                    Modified.push({
                        display: 1,
                        period: periodNumber,
                        name: el,
                        column: 'Modified',
                        yBegin: y2Begin,
                        yEnd: +modified + y2Begin
                    });

                }

            });

            this.graphData.push({
                period: periodNumber,
                stackNumber: Current.concat(Modified),
                total: d3.max(Current.concat(Modified), function (d) {
                    return d['yEnd'];
                })
            });

        }
    }

    getGraphkData(): Array<any> {
        return this.graphData;
    }


    getGraphPeriod(): Array<number> {
        return this.graphPeriod;
    }

    getGraphCurrentModified(): Array<string> {
        return this.graphCurrentModified;
    }


    getGraphPlan(): Array<number> {
        return this.graphPlan;
    }

}
