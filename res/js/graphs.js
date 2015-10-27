$(function () {
    $('#chartContainer1').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Feasibility Survey'
        },
        xAxis: {
            title:{
                text: "Question"
            },
            categories: ['Do you play video games in your spare time?',
                'Would you be interested in a video game that assists you in learning your coursework',
                'Is this the first time you have been exposed to programming'
            ]},
        yAxis: {
            title: {
                text: 'Number of Responses'
            }
        },
        series: [{
            name: "Yes",
            data: [12, 14, 13]
        },
        {
            name: "No",
            data: [2, 0, 1]
        }],
        credits: {
            enabled: false
        }
    });

    $('#chartContainer2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Video Game Genre Interests'
        },
        xAxis: {
            title:{
                text: "Genre"
            },
            categories: ['Action Adventure',
                'Fighting',
                'First Person Shooter',
                'Massive Online Battle Arena',
                'Puzzle',
                'Racing',
                'Role Playing',
                'Simulation',
                'Sports',
                'Strategy']},
        yAxis: {
            title: {
                text: 'Number of Votes'
            }
        },
        series: [{
            name: "Vote Count",
            data: [8, 2, 5, 3, 9, 13, 4, 4, 8, 5]
        }],
        credits: {
            enabled: false
        }
    });

    $('#chartContainer3').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'User Testing #1 Feedback'
        },
        xAxis: {
            title:{
                text: "Question"
            },
            categories: ['Would you have enjoyed playing a game like this as additional material for your first year course?',
                'Do you think that the visual feedback is a good indicator to what your code is doing?',
                'Do you feel that there should be additional gamification elements?',
                'Is this game something that interests you?',
                'Is the layout of the user interface elements appropriate/intuitive?',
                'Do you feel that the game challenges your problem solving skills in terms of designing a complete piece of code?'
            ]},
        yAxis: {
            title: {
                text: 'Number of Responses'
            }
        },
        series: [{
            name: "Strongly Disagree",
            data: [1, 0, 0, 0, 2, 0]
        },
        {
            name: "Disagree",
            data: [1, 0, 1, 0, 1, 0]
        },
        {
            name: "Neutral",
            data: [2, 4, 1, 4, 7, 3]
        },
        {
            name: "Agree",
            data: [4, 4, 6, 5, 5, 7]
        },
        {
            name: "Strongly Agree",
            data: [9, 9, 9, 8, 2, 7]
        }],
        credits: {
            enabled: false
        }
    });

    /*
    $('#chartContainer4').highcharts({
            chart: {
                type: 'bar'
            },
            xAxis: [{
//                categories: categories,
                reversed: false
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                //categories: categories,
                linkedTo: 0
            }],
               
            plotOptions: {
                series: {
                    stacking: 'normal',
                    borderWidth: 0
                }
            },
  
            
    
            series: [{
                name: 'Strongly Disagree',
                data: [-10, -5, -6]
            }, {
                name: 'Disagree',
                data: [-2, -5, -3]
            }, {
                name: 'Neutral',
                data: [-2, -5, -3],
                color: 'gray',
                id: 'neutral'
            },{
                name: 'Strongly Agree',
                data: [5, 1,6]
            },{
                name: 'Agree',
                data: [6, 8, 2]
            },{
                name: 'Neutral',
                data: [2, 5, 3],
                color: 'gray',
                linkedTo: 'neutral'
            }]
        });
        */

    $('#chartContainer4').highcharts({
        title: {
            text: 'User Testing #1 Feedback - Likert Scale'
        },
        xAxis: {
            title:{
                text: "Question"
            },
            categories: ['Would you have enjoyed playing a game like this as additional material for your first year course?',
                'Do you think that the visual feedback is a good indicator to what your code is doing?',
                'Do you feel that there should be additional gamification elements?',
                'Is this game something that interests you?',
                'Is the layout of the user interface elements appropriate/intuitive?',
                'Do you feel that the game challenges your problem solving skills in terms of designing a complete piece of code?'
            ]},
        yAxis: {
            minPadding: 0,
            maxPadding: 0,
            min: 0,
            max:5,
            categories: [0, 'Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
            tickInterval:1,
            //showLastLabel: false,
            showFirstLabel: false,
            labels: {
                enabled: true,
                formatter: function() { return this.value;}
            },
            title: {
                text: 'Number of Responses'
            }
        },
        series: [{
            name: "Result",
            data: [5, 5, 5, 5, 3, 4]
        }],
        plotOptions: {
            line: {
                lineWidth: 0
            },
            series: {
                enableMouseTracking: false
            }
        },
        credits: {
            enabled: false
        }
    });

    $('#chartContainer5').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'User Testing #2 Feedback'
        },
        xAxis: {
            title:{
                text: "Question"
            },
            categories: ['Would you have enjoyed playing a game like this as additional material for your first year course?',
                'Do you think that the visual feedback is a good indicator to what your code is doing?',
                'Do you feel that there should be additional gamification elements?',
                'Is this game something that interests you?',
                'Is the layout of the user interface elements appropriate/intuitive?',
                'Do you feel that the game challenges your problem solving skills in terms of designing a complete piece of code?'
            ]},
        yAxis: {
            title: {
                text: 'Number of Responses'
            }
        },
        series: [{
            name: "Strongly Disagree",
            data: [0, 0, 0, 0, 0, 0]
        },
        {
            name: "Disagree",
            data: [0, 0, 2, 0, 0, 0]
        },
        {
            name: "Neutral",
            data: [0, 2, 0, 0, 3, 0]
        },
        {
            name: "Agree",
            data: [1, 2, 4, 2, 5, 2]
        },
        {
            name: "Strongly Agree",
            data: [8, 5, 3, 7, 1, 7]
        }],
        credits: {
            enabled: false
        }
    });

    $('#chartContainer6').highcharts({
            title: {
                text: 'User Testing #2 Feedback - Likert Scale'
            },
            xAxis: {
                title:{
                    text: "Question"
                },
                categories: ['Would you have enjoyed playing a game like this as additional material for your first year course?',
                    'Do you think that the visual feedback is a good indicator to what your code is doing?',
                    'Do you feel that there should be additional gamification elements?',
                    'Is this game something that interests you?',
                    'Is the layout of the user interface elements appropriate/intuitive?',
                    'Do you feel that the game challenges your problem solving skills in terms of designing a complete piece of code?'
                ]},
            yAxis: {
                minPadding: 0,
                maxPadding: 0,
                min: 0,
                max:5,
                categories: [0, 'Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
                tickInterval:1,
                //showLastLabel: false,
                showFirstLabel: false,
                labels: {
                    enabled: true,
                    formatter: function() { return this.value;}
                },
                title: {
                    text: 'Number of Responses'
                }
            },
            series: [{
                name: "Result",
                data: [5, 5, 4, 5, 4, 5]
            }],
            plotOptions: {
                line: {
                    lineWidth: 0
                },
                series: {
                    enableMouseTracking: false
                }
            },
            credits: {
                enabled: false
            }
        });

    $('#chartContainer7').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'User Testing #2 Feedback - Flow Questions Set 1'
        },
        xAxis: {
            title:{
                text: "Question"
            },
            categories: ['I feel just the right amount of challenge.',
                'My thoughts/activities run fluidly and smoothly.',
                'I don’t notice time passing.',
                'I have no difficulty concentrating. ',
                'My mind is completely clear.',
                'I am totally absorbed in what I am doing.',
                'The right thoughts/movements occur of their own accord.',
                'I know what I have to do each step of the way.',
                'I feel that I have everything under control.',
                'I am completely lost in thought.'
            ]},
        yAxis: {
            title: {
                text: 'Number of Responses'
            }
        },
        series: [{
            name: "Not At All",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 4]
        },
        {
            name: "Mostly Not",
            data: [0, 0, 0, 1, 0, 0, 0, 0, 0, 1]
        },
        {
            name: "Sometimes Not",
            data: [1, 0, 1, 2, 0, 0, 0, 0, 0, 1]
        },
        {
            name: "Partly",
            data: [1, 2, 0, 0, 2, 2, 2, 3, 4, 1]
        },
        {
            name: "Somewhat",
            data: [2, 1, 2, 0, 2, 0, 1, 0, 1, 1]
        },
        {
            name: "Mostly",
            data: [2, 2, 3, 3, 3, 3, 1, 3, 1, 1]
        },
        {
            name: "Very Much",
            data: [3, 4, 3, 3, 2, 4, 5, 3, 3, 0]
        }],
        credits: {
            enabled: false
        }
    });

    $('#chartContainer8').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'User Testing #2 Feedback - Flow Questions Set 2'
        },
        xAxis: {
            title:{
                text: "Question"
            },
            categories: ['Compared to all other activities which I partake in, this one is …']},
        yAxis: {
            title: {
                text: 'Number of Responses'
            }
        },
        series: [
            {
                name: "Easy",
                data: [0]
            },
            {
                name: "Mostly Easy",
                data: [1]
            },
            {
                name: "Fairly Easy",
                data: [0]
            },
            {
                name: "Somewhat Easy",
                data: [3]
            },
            {
                name: "Neutral",
                data: [2]
            },
            {
                name: "Somewhat Difficult",
                data: [1]
            },
            {
                name: "Fairly Difficult",
                data: [2]
            },
            {
                name: "Mostly Difficult",
                data: [0]
            },
            {
                name: "Difficult",
                data: [0]
            }],
        credits: {
            enabled: false
        }
    });
    $('#chartContainer9').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'User Testing #2 Feedback - Flow Questions Set 2'
        },
        xAxis: {
            title:{
                text: "Question"
            },
            categories: ['I think that my competence in this area is ...']},
        yAxis: {
            title: {
                text: 'Number of Responses'
            }
        },
        series: [
            {
                name: "Low",
                data: [0]
            },
            {
                name: "Fairly Low",
                data: [0]
            },
            {
                name: "Quite Low",
                data: [0]
            },
            {
                name: "Somewhat Low",
                data: [2]
            },
            {
                name: "Neutral",
                data: [2]
            },
            {
                name: "Somewhat High",
                data: [5]
            },
            {
                name: "Quite High",
                data: [0]
            },
            {
                name: "Fairly High",
                data: [0]
            },
            {
                name: "High",
                data: [0]
            }],
        credits: {
            enabled: false
        }
    });
    $('#chartContainer10').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'User Testing #2 Feedback - Flow Questions Set 2'
        },
        xAxis: {
            title:{
                text: "Question"
            },
            categories: ['For me personally, the current demands are ...']},
        yAxis: {
            title: {
                text: 'Number of Responses'
            }
        },
        series: [
            {
                name: "Too Low",
                data: [0]
            },
            {
                name: "Very Low",
                data: [1]
            },
            {
                name: "Fairly Low",
                data: [1]
            },
            {
                name: "Somewhat Low",
                data: [5]
            },
            {
                name: "Just Right",
                data: [1]
            },
            {
                name: "Somewhat High",
                data: [0]
            },
            {
                name: "Fairly High",
                data: [1]
            },
            {
                name: "Very High",
                data: [0]
            },
            {
                name: "Too High",
                data: [0]
            }],
        credits: {
            enabled: false
        }
    });
});