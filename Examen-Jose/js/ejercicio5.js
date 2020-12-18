google.load("visualization", "1", {
  packages: ["corechart"]
});
google.setOnLoadCallback(dibujarGrafico);

function dibujarGrafico() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Dias', {
      role: "style"
    }],
    ['2017', 14252, ' fill-color: #00ff12; opacity: 0.2'],
    ['2018', 23360, 'fill-color: #00ff12;  opacity: 0.7'],
    ['2019', 40421, 'fill-color: #00ff12;  opacity: 0.4'],
    ['2020', 43500, 'fill-color: #00ff12;  opacity: 0.3']
  ]);
  var options = {
    title: 'Evolución de la población de Navalcarnero',
    backgroundColor: '#004fff'
  }
  new google.visualization.ColumnChart(
    document.getElementById('GraficoGoogleChart-ejemplo-1')
  ).draw(data, options);
}
