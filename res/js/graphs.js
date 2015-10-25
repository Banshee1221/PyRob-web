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


    $('#chartContainer4').highcharts({
        chart: {
            type: 'column'
        },
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
            max:6,
            categories: [0, 'Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
            tickInterval:1,
            showLastLabel: false,
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
        chart: {
            type: 'column'
        },
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
            max:6,
            categories: [0, 'Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
            tickInterval:1,
            showLastLabel: false,
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
        credits: {
            enabled: false
        }
    });
});