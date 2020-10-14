Plotly.d3.csv('choleraDeaths.csv', function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
  }

  var headerNames = Plotly.d3.keys(rows[0]);

  var headerValues = [];
  var cellValues = [];
  for (i = 0; i < headerNames.length; i++) {
    headerValue = [headerNames[i]];
    headerValues[i] = headerValue;
    cellValue = unpack(rows, headerNames[i]);
    cellValues[i] = cellValue;
  }

  // clean date
  for (i = 0; i < cellValues[1].length; i++) {
  var dateValue = cellValues[1][i].split(' ')[0]
  cellValues[1][i] = dateValue
  }


var data = [{
  type: 'table',
  columnwidth: [500,150,150,350,350],
  columnorder: [0,1,2,3,4],
  header: {
    values: headerValues,
    align: "center",
    line: {width: 1, color: 'rgb(50, 50, 50)'},
    fill: {color: ['rgb(250,240,230)']},
    font: {family: "Arial", size: 13, color: "black"}
  },
  cells: {
    values: cellValues,
    align: ["center", "center"],
    line: {color: "black", width: 1},
    fill: {color: ['rgba(253,245,230, 0.65)','rgb(253,245,230)']},
    font: {family: "Arial", size: 11, color: ["black"]}
  }
}]

var layout1 = {
  title: "Cholera Attacks/Deaths By Date Table"
}

Plotly.newPlot('table1', data, layout1);
});

trace1 = {
  type: 'scatter',
  x: ["19-Aug", "20-Aug","21-Aug","22-Aug","23-Aug","24-Aug","25-Aug","26-Aug",
      "27-Aug","28-Aug","29-Aug","30-Aug","31-Aug","1-Sep","2-Sep","3-Sep","4-Sep",
      "5-Sep","6-Sep","7-Sep","8-Sep","9-Sep","10-Sep","11-Sep","12-Sep","13-Sep",
      "14-Sep","15-Sep","16-Sep","17-Sep","18-Sep","19-Sep", "20-Sep","21-Sep","22-Sep",
      "23-Sep","24-Sep","25-Sep","26-Sep","27-Sep","28-Sep","29-Sep"],
  y: ["1",
                      "0",
                      "2",
                      "0",
                      "0",
                      "2",
                      "0",
                      "0",
                      "1",
                      "0",
                      "1",
                      "2",
                      "3",
                      "70",
                      "127",
                      "76",
                      "71",
                      "45",
                      "37",
                      "32",
                      "30",
                      "24",
                      "18",
                      "15",
                      "6",
                      "13",
                      "6",
                      "8",
                      "6",
                      "5",
                      "2",
                      "3",
                      "0",
                      "0",
                      "2",
                      "3",
                      "0",
                      "0",
                      "2",
                      "0",
                      "2",
                      "1"],
  mode: 'lines',
  name: '# of Deaths per day',
  line: {
    color: 'rgb(77,106,255)',
    width: 3,
    dash: 'dot'

  }
};

trace2 = {
  type: 'scatter',
  x: ["19-Aug", "20-Aug","21-Aug","22-Aug","23-Aug","24-Aug","25-Aug","26-Aug",
            "27-Aug","28-Aug","29-Aug","30-Aug","31-Aug","1-Sep","2-Sep","3-Sep","4-Sep",
            "5-Sep","6-Sep","7-Sep","8-Sep","9-Sep","10-Sep","11-Sep","12-Sep","13-Sep",
            "14-Sep","15-Sep","16-Sep","17-Sep","18-Sep","19-Sep", "20-Sep","21-Sep","22-Sep",
            "23-Sep","24-Sep","25-Sep","26-Sep","27-Sep","28-Sep","29-Sep"],
  y: ["1",
                      "1",
                      "1",
                      "0",
                      "1",
                      "1",
                      "0",
                      "1",
                      "1",
                      "1",
                      "1",
                      "8",
                      "56",
                      "143",
                      "116",
                      "54",
                      "46",
                      "36",
                      "20",
                      "28",
                      "12",
                      "11",
                      "5",
                      "5",
                      "1",
                      "3",
                      "0",
                      "1",
                      "4",
                      "2",
                      "3",
                      "0",
                      "0",
                      "2",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "0",
                      "0"],
  mode: 'lines',
  name: '# of Attacks Per Day',
  line: {
    color: 'rgb(255,165,0)',
    width: 3,
    dash: 'dot'
  }
};

trace3 = {
  type: 'scatter',
  x: ["19-Aug", "20-Aug","21-Aug","22-Aug","23-Aug","24-Aug","25-Aug","26-Aug",
            "27-Aug","28-Aug","29-Aug","30-Aug","31-Aug","1-Sep","2-Sep","3-Sep","4-Sep",
            "5-Sep","6-Sep","7-Sep","8-Sep","9-Sep","10-Sep","11-Sep","12-Sep","13-Sep",
            "14-Sep","15-Sep","16-Sep","17-Sep","18-Sep","19-Sep", "20-Sep","21-Sep","22-Sep",
            "23-Sep","24-Sep","25-Sep","26-Sep","27-Sep","28-Sep","29-Sep"],
  y: [1,2,3,3,4,5,5,6,7,8,9,17,73,216,332,386,432,468,488,516,528,539,544,549,550,553,553,554,558,560,563,563,563,565,566,567,568,569,
      570,571,571,571],
  mode: 'lines',
  name: 'Total Attacks To Date',
  line: {
    color: 'rgb(255,165,0)',
    width: 3
  }
};

trace4 = {
  type: 'scatter',
  x: ["19-Aug", "20-Aug","21-Aug","22-Aug","23-Aug","24-Aug","25-Aug","26-Aug",
            "27-Aug","28-Aug","29-Aug","30-Aug","31-Aug","1-Sep","2-Sep","3-Sep","4-Sep",
            "5-Sep","6-Sep","7-Sep","8-Sep","9-Sep","10-Sep","11-Sep","12-Sep","13-Sep",
            "14-Sep","15-Sep","16-Sep","17-Sep","18-Sep","19-Sep", "20-Sep","21-Sep","22-Sep",
            "23-Sep","24-Sep","25-Sep","26-Sep","27-Sep","28-Sep","29-Sep"],
  y: [1,1,3,3,3,5,5,5,6,6,7,9,12,82,209,285,356,401,438,470,500,524,542,557,563,580,586,594,600,605,607,610,610,610,612,615,615,
      615,617,617,619,620],
  mode: 'lines',
  name: 'Total Deaths To Date',
  line: {
    color: 'rgb(77,106,255)',
    width: 3
  }
};

var layout = {
  title: "Cholera Attacks/Deaths By Date Line Graph",
  xaxis: {
     title: "Date"
  },
  yaxis: {
       title: "Attacks/Deaths"
    },
};

var data = [trace1, trace2, trace3, trace4];

Plotly.newPlot('plot1', data, layout);

Plotly.d3.csv('naplesCholeraAgeSexData.csv', function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
  }

  var headerNames = Plotly.d3.keys(rows[0]);

  var headerValues = [];
  var cellValues = [];
  for (i = 0; i < headerNames.length; i++) {
    headerValue = [headerNames[i]];
    headerValues[i] = headerValue;
    cellValue = unpack(rows, headerNames[i]);
    cellValues[i] = cellValue;
  }

  // clean date
  for (i = 0; i < cellValues[1].length; i++) {
  var dateValue = cellValues[1][i].split(' ')[0]
  cellValues[1][i] = dateValue
  }


var data = [{
  type: 'table',
  columnwidth: [200,150,150,300,300],
  columnorder: [0,1,2,3,4],
  header: {
    values: headerValues,
    align: "center",
    line: {width: 1, color: 'rgb(50, 50, 50)'},
    fill: {color: ['rgb(250,240,230)']},
    font: {family: "Arial", size: 13, color: "black"}
  },
  cells: {
    values: cellValues,
    align: ["center", "right"],
    line: {color: "black", width: 1},
    fill: {color: ['rgba(253,245,230, 0.65)','rgb(253,245,230)']},
    font: {family: "Arial", size: 11, color: ["black"]}
  }
}]

var layout3 = {
  title: "Cholera by Age and Sex Table"
}

Plotly.newPlot('table2', data, layout3);
});

var xValue = ['0-1','2-5','6-10','11-15','16-20','21-40','41-60','61-80','over 80'];

var yValue = ['8.2','14.0','12.1','7.8','7.2','12.1','13.7','20.5','39.6'];
var yValue2 = ['8.9','14.7','11.2','7.1','7.2','11.8','12.9','20.5','37.8'];

var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  text: yValue,
  name: '# of Male Deaths by Age',
  marker: {
    color: 'rgb(191,179,255)',
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5
    }
  }
};

var trace2 = {
  x: xValue,
  y: yValue2,
  type: 'bar',
  text: yValue2,
    name: '# of Female Deaths by Age',
  marker: {
    color: 'rgba(58,200,225,.5)',
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5
    }
  }
};

var data = [trace1,trace2];

var layout2 = {
  title: 'Cholera By Age and Sex Bar Graph',
  xaxis: {
  title: 'Ages'
  },
  yaxis: {
  title: '# of Deaths by 10,000'
  }
};

Plotly.newPlot('plot2', data, layout2);

Plotly.d3.csv('UKcensus1851.csv', function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
  }

  var headerNames = Plotly.d3.keys(rows[0]);

  var headerValues = [];
  var cellValues = [];
  for (i = 0; i < headerNames.length; i++) {
    headerValue = [headerNames[i]];
    headerValues[i] = headerValue;
    cellValue = unpack(rows, headerNames[i]);
    cellValues[i] = cellValue;
  }

  // clean date
  for (i = 0; i < cellValues[1].length; i++) {
  var dateValue = cellValues[1][i].split(' ')[0]
  cellValues[1][i] = dateValue
  }


var data = [{
  type: 'table',
  columnwidth: [200,150,150,300,300],
  columnorder: [0,1,2,3,4],
  header: {
    values: headerValues,
    align: "center",
    line: {width: 1, color: 'rgb(50, 50, 50)'},
    fill: {color: ['rgb(250,240,230)']},
    font: {family: "Arial", size: 13, color: "black"}
  },
  cells: {
    values: cellValues,
    align: ["center", "center"],
    line: {color: "black", width: 1},
    fill: {color: ['rgba(253,245,230, 0.65)','rgb(253,245,230)']},
    font: {family: "Arial", size: 11, color: ["black"]}
  }
}]

var layout4 = {
  title: "1851 UK Census Data Table"
}

Plotly.newPlot('table3', data, layout4);
});

var maleColors = [
   ['rgb(102,25,255)','rgb(119,51,255)','rgb(136,77,255)','rgb(153,102,255)','rgb(170,128,255)','rgb(187,153,255)',
    'rgb(204,179,255)','rgb(221,204,255)','rgb(238,230,255)']
];

var data = [{
  values: [2075391,1711664,1395091,1073914,810979,560534,351893,166194,40772],
  labels: ['0-9','10-19','20-29','30-39','40-49','50-59','60-69','70-79','80+'],
  marker: {
     colors: maleColors[0]
    },
  type: 'pie'
}];

var layout5 = {
  height: 400,
  width: 500,
  title: "UK Census Male Pie Chart"
};

Plotly.newPlot('plot3', data, layout5);

var femaleColors = [
   ['rgb(25,178,255)','rgb(51,187,255)','rgb(77,195,255)','rgb(102,204,255)','rgb(128,212,255)','rgb(153,221,255)',
    'rgb(179,229,255)','rgb(204,238,255)','rgb(230,247,255)']
];

var data = [{
  values: [2065096,1711627,1542876,1140383,845260,592970,399019,199326,55704],
  labels: ['0-9','10-19','20-29','30-39','40-49','50-59','60-69','70-79','80+'],
  marker: {
   colors: femaleColors[0]
  },
  type: 'pie'
}];

var layout6 = {
  height: 400,
  width: 500,
  title: "UK Census Female Pie Chart"
};

Plotly.newPlot('plot4', data, layout6);

var xValue = ['0-9','10-19','20-29','30-39','40-49','50-59','60-69','70-79','80+'];

var yValue = ['2075391','1711664','1395091','1073914','810979','560534','351893','166194','40772'];
var yValue2 = ['2065096','1711627','1542876','1140383','845260','592970','399019','199326','55704'];

var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  text: yValue,
  name: 'Male Population',
  marker: {
    color: 'rgb(191,179,255)',
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5
    }
  }
};

var trace2 = {
  x: xValue,
  y: yValue2,
  type: 'bar',
  text: yValue2,
    name: 'Female Population',
  marker: {
    color: 'rgba(58,200,225,.5)',
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5
    }
  }
};

var data = [trace1,trace2];

var layout2 = {
  title: 'Men VS Women Population',
  xaxis: {
  title: 'Ages'
  },
  yaxis: {
  title: 'Population'
  }
};

Plotly.newPlot('plot5', data, layout2);

var colors1 = [
  ['rgb(191,179,255)','rgba(58,200,225,.5)']
];

var data = [{
  values: [8186432,8552261],
  labels: ['male','female'],
  marker: {
   colors: colors1[0],
   line: {
         color: 'rgb(8,48,107)',
         width: 1
       }
  },
  type: 'pie'
}];

var layout5 = {
  height: 400,
  width: 500,
  title: "UK Census Male VS Female Pie Chart"
};

Plotly.newPlot('plot6', data, layout5);

Plotly.d3.csv('choleraDeathLocations.csv', function (data1) {
  Plotly.d3.csv('choleraPumpLocations.csv', function (data2) {

    var numDeaths = [];
    var deathLat = [];
    var deathLong = [];
    var pumpLat = [];
    var pumpLong = [];

    for (let i = 0; i < data1.length; i++) {
      numDeaths.push(data1[i].NumDeaths);
      deathLat.push(data1[i].Lat);
      deathLong.push(data1[i].Long);
    }

    for (let i = 0; i < data1.length; i++) {
      console.log(deathLat[i]);
    }

    for (let i = 0; i < data2.length; i++) {
      pumpLat.push(data2[i].Lat);
      pumpLong.push(data2[i].Long);
    }


    var mymap = L.map('mapid').setView([51.5135, -0.136], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(mymap);

    var circle;
    var marker;

    for (let i = 0; i < data1.length; i++) {
      circle = L.circle([deathLong[i], deathLat[i]], {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.5,
        radius: 1.5 * numDeaths[i]
      }).addTo(mymap);
      circle.bindPopup(numDeaths[i] + " deaths");
    }


    for (let i = 0; i < data2.length; i++) {
      marker = L.marker([pumpLong[i], pumpLat[i]]).addTo(mymap);
      marker.bindPopup("(" + pumpLong[i] + ", " + pumpLat[i] + ")");
    }

    var legend = L.control({position: 'topright'});
    legend.onAdd = function (mymap) {

      var div = L.DomUtil.create('div', 'legend');
      div.innerHTML += "<h4>Legend</h4>";
      div.innerHTML += '<img src="download.jpg" width="15" height="15"><span> Death Location</span><br>';
      div.innerHTML += '<img src="marker.png" width="15" height="15"><span>Pump Location</span><br>';
      return div;
    };

    legend.addTo(mymap);
  });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}