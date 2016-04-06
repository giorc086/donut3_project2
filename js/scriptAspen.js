/////////////NOVEMBER
        (function(d3) {
            'use strict';

            var width = 100; //size of donut
            var height = 100;
            var radius = Math.min(width, height) / 2;
            var donutWidth = 25; //width of donut

            var color = d3.scale.ordinal()
                .domain(["Good", "Ok", "Bad"])
                .range(["#8de8ff", "#1f4199", "#cc3917"]);

            var svg = d3.select('#chartNovAspen')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .append('g')
                .attr('transform', 'translate(' + (width / 2) +
                    ',' + (height / 2) + ')');

            var arc = d3.svg.arc()
                .innerRadius(radius - donutWidth)
                .outerRadius(radius);

            var pie = d3.layout.pie()
                .value(function(d) {
                    return d.month;
                })
                .sort(null);

            d3.csv('data/nov_Aspen.csv', function(error, dataset) {
                dataset.forEach(function(d) {
                    d.month = +d.month;
                });

                var path = svg.selectAll('path')
                    .data(pie(dataset))
                    .enter()
                    .append('path')
                    .attr('d', arc)
                    .attr('fill', function(d, i) {
                        return color(d.data.condition);
                    });


                ///Adds label to donut section, in this case a percent number
                var text = svg.selectAll('text')
                    .data(pie(dataset))
                    .enter()
                    .append("text")
                    .transition()
                    .duration(500)
                    .attr("transform", function(d) {
                        return "translate(" + arc.centroid(d) + ")";
                    })
                    .attr("dy", ".4em")
                    .attr("text-anchor", "middle")
                    .text(function(d) {
                        return d.data.percentage + "%";
                    })
                    .style({
                        fill: 'white',
                        'font-size': '10px'
                    });
                ///////finished adding label to donut section
            });

        })(window.d3);

        ///////////////DECEMBER
        (function(d3) {
            'use strict';

            var width = 100;
            var height = 100;
            var radius = Math.min(width, height) / 2;
            var donutWidth = 25;

            var color = d3.scale.ordinal()
                .domain(["Good", "Ok", "Bad"])
                .range(["#8de8ff", "#1f4199", "#cc3917"]);

            var svg = d3.select('#chartDecAspen')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .append('g')
                .attr('transform', 'translate(' + (width / 2) +
                    ',' + (height / 2) + ')');

            var arc = d3.svg.arc()
                .innerRadius(radius - donutWidth)
                .outerRadius(radius);

            var pie = d3.layout.pie()
                .value(function(d) {
                    return d.month;
                })
                .sort(null);

            d3.csv('data/dec_Aspen.csv', function(error, dataset) {
                dataset.forEach(function(d) {
                    d.month = +d.month;
                });

                var path = svg.selectAll('path')
                    .data(pie(dataset))
                    .enter()
                    .append('path')
                    .attr('d', arc)
                    .attr('fill', function(d, i) {
                        return color(d.data.condition);
                    });
                ///Adds label to donut section, in this case a percent number
                var text = svg.selectAll('text')
                    .data(pie(dataset))
                    .enter()
                    .append("text")
                    .transition()
                    .duration(500)
                    .attr("transform", function(d) {
                        return "translate(" + arc.centroid(d) + ")";
                    })
                    .attr("dy", ".4em")
                    .attr("text-anchor", "middle")
                    .text(function(d) {
                        return d.data.percentage + "%";
                    })
                    .style({
                        fill: 'white',
                        'font-size': '10px'
                    });
                ///////finished adding label to donut section
            });
        })(window.d3);

        ///////////////JANUARY
        (function(d3) {
            'use strict';

            var width = 100;
            var height = 100;
            var radius = Math.min(width, height) / 2;
            var donutWidth = 25;

            var color = d3.scale.ordinal()
                .domain(["Good", "Ok", "Bad"])
                .range(["#8de8ff", "#1f4199", "#cc3917"]);

            var svg = d3.select('#chartJanAspen')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .append('g')
                .attr('transform', 'translate(' + (width / 2) +
                    ',' + (height / 2) + ')');

            var arc = d3.svg.arc()
                .innerRadius(radius - donutWidth)
                .outerRadius(radius);

            var pie = d3.layout.pie()
                .value(function(d) {
                    return d.month;
                })
                .sort(null);

            d3.csv('data/jan_Aspen.csv', function(error, dataset) {
                dataset.forEach(function(d) {
                    d.month = +d.month;
                });

                var path = svg.selectAll('path')
                    .data(pie(dataset))
                    .enter()
                    .append('path')
                    .attr('d', arc)
                    .attr('fill', function(d, i) {
                        return color(d.data.condition);
                    });
                ///Adds label to donut section, in this case a percent number
                var text = svg.selectAll('text')
                    .data(pie(dataset))
                    .enter()
                    .append("text")
                    .transition()
                    .duration(500)
                    .attr("transform", function(d) {
                        return "translate(" + arc.centroid(d) + ")";
                    })
                    .attr("dy", ".4em")
                    .attr("text-anchor", "middle")
                    .text(function(d) {
                        return d.data.percentage + "%";
                    })
                    .style({
                        fill: 'white',
                        'font-size': '10px'
                    });
                ///////finished adding label to donut section
            });

        })(window.d3);

        ///////////////FEBRUARY
        (function(d3) {
            'use strict';

            var width = 100;
            var height = 100;
            var radius = Math.min(width, height) / 2;
            var donutWidth = 25;


            var color = d3.scale.ordinal()
                .domain(["Good", "Ok", "Bad"])
                .range(["#8de8ff", "#1f4199", "#cc3917"]);

            var svg = d3.select('#chartFebAspen')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .append('g')
                .attr('transform', 'translate(' + (width / 2) +
                    ',' + (height / 2) + ')');

            var arc = d3.svg.arc()
                .innerRadius(radius - donutWidth)
                .outerRadius(radius);

            var pie = d3.layout.pie()
                .value(function(d) {
                    return d.month;
                })
                .sort(null);

            d3.csv('data/feb_Aspen.csv', function(error, dataset) {
                dataset.forEach(function(d) {
                    d.month = +d.month;
                });

                var path = svg.selectAll('path')
                    .data(pie(dataset))
                    .enter()
                    .append('path')
                    .attr('d', arc)
                    .attr('fill', function(d, i) {
                        return color(d.data.condition);
                    });
                ///Adds label to donut section, in this case a percent number
                var text = svg.selectAll('text')
                    .data(pie(dataset))
                    .enter()
                    .append("text")
                    .transition()
                    .duration(500)
                    .attr("transform", function(d) {
                        return "translate(" + arc.centroid(d) + ")";
                    })
                    .attr("dy", ".4em")
                    .attr("text-anchor", "middle")
                    .text(function(d) {
                        return d.data.percentage + "%";
                    })
                    .style({
                        fill: 'white',
                        'font-size': '10px'
                    });
                ///////finished adding label to donut section
            });

        })(window.d3);

        ///////////////MARCH
        (function(d3) {
            'use strict';

            var width = 100;
            var height = 100;
            var radius = Math.min(width, height) / 2;
            var donutWidth = 25;


            var color = d3.scale.ordinal()
                .domain(["Good", "Ok", "Bad"])
                .range(["#8de8ff", "#1f4199", "#cc3917"]);

            var svg = d3.select('#chartMarAspen')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .append('g')
                .attr('transform', 'translate(' + (width / 2) +
                    ',' + (height / 2) + ')');

            var arc = d3.svg.arc()
                .innerRadius(radius - donutWidth)
                .outerRadius(radius);

            var pie = d3.layout.pie()
                .value(function(d) {
                    return d.month;
                })
                .sort(null);

            d3.csv('data/mar_Aspen.csv', function(error, dataset) {
                dataset.forEach(function(d) {
                    d.month = +d.month;
                });

                var path = svg.selectAll('path')
                    .data(pie(dataset))
                    .enter()
                    .append('path')
                    .attr('d', arc)
                    .attr('fill', function(d, i) {
                        return color(d.data.condition);
                    });
                ///Adds label to donut section, in this case a percent number
                var text = svg.selectAll('text')
                    .data(pie(dataset))
                    .enter()
                    .append("text")
                    .transition()
                    .duration(500)
                    .attr("transform", function(d) {
                        return "translate(" + arc.centroid(d) + ")";
                    })
                    .attr("dy", ".4em")
                    .attr("text-anchor", "middle")
                    .text(function(d) {
                        return d.data.percentage + "%";
                    })
                    .style({
                        fill: 'white',
                        'font-size': '10px'
                    });
                ///////finished adding label to donut section
            });

        })(window.d3);

        ///////////////APRIL
        (function(d3) {
            'use strict';

            var width = 100;
            var height = 100;
            var radius = Math.min(width, height) / 2;
            var donutWidth = 25;


            var color = d3.scale.ordinal()
                .domain(["Good", "Ok", "Bad"])
                .range(["#8de8ff", "#1f4199", "#cc3917"]);

            var svg = d3.select('#chartAprAspen')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .append('g')
                .attr('transform', 'translate(' + (width / 2) +
                    ',' + (height / 2) + ')');

            var arc = d3.svg.arc()
                .innerRadius(radius - donutWidth)
                .outerRadius(radius);

            var pie = d3.layout.pie()
                .value(function(d) {
                    return d.month;
                })
                .sort(null);

            d3.csv('data/apr_Aspen.csv', function(error, dataset) {
                dataset.forEach(function(d) {
                    d.month = +d.month;
                });

                var path = svg.selectAll('path')
                    .data(pie(dataset))
                    .enter()
                    .append('path')
                    .attr('d', arc)
                    .attr('fill', function(d, i) {
                        return color(d.data.condition);
                    });
                ///Adds label to donut section, in this case a percent number
                var text = svg.selectAll('text')
                    .data(pie(dataset))
                    .enter()
                    .append("text")
                    .transition()
                    .duration(500)
                    .attr("transform", function(d) {
                        return "translate(" + arc.centroid(d) + ")";
                    })
                    .attr("dy", ".4em")
                    .attr("text-anchor", "middle")
                    .text(function(d) {
                        return d.data.percentage + "%";
                    })
                    .style({
                        fill: 'white',
                        'font-size': '10px'
                    });
                ///////finished adding label to donut section
            });

        })(window.d3);

        //bar chart below
        var margin = {
                top: 20,
                right: 20,
                bottom: 30,
                left: 40
            },
            width = 700 - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .5);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(5);

        var mySVG1 = d3.select("#barChartAspen").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.csv("data/snowfallAspen.csv", type, function(error, data) {
            if (error) throw error;

            x.domain(data.map(function(d) {
                return d.month;
            }));
            y.domain([0, d3.max(data, function(d) {
                return d.inches;
            })]);

            mySVG1.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            mySVG1.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Inches");

            mySVG1.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("x", function(d) {
                    return x(d.month);
                })
                .attr("width", x.rangeBand())
                .attr("y", function(d) {
                    return y(d.inches);
                })
                .attr("height", function(d) {
                    return height - y(d.inches);
                })
                .attr("fill", "#8de8ff");
        });

        function type(d) {
            d.inches = +d.inches;
            return d;
        }