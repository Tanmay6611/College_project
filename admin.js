

// notification onclick function
function togglehide(){
    let notify = document.getElementById('ddi');


    if(notify.style.display != 'none'){
        notify.style.display = 'none';
    }
    else{
        notify.style.display = "block";
    }
}


// card graph function /// 1 link is given in admin.html and here is logic

// card1 graph logic
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2013',  1000,      400],
    ['2014',  1170,      460],
    ['2015',  660,       1120],
    ['2016',  1030,      540]
  ]);

  var options = {
    title: 'Company Performance',
    hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0}
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}