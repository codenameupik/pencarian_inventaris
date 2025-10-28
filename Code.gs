function doGet() {
  return HtmlService.createHtmlOutputFromFile('Page');
}

function searchStudent(nopeserta) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Bidang Sekretariat");
  var data = sheet.getDataRange().getValues().splice(1);
  var results = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i][1].toString().toLowerCase().includes(nopeserta.toLowerCase()) || data[i][4] == nopeserta || data[i][6].toString().toLowerCase().includes(nopeserta.toLowerCase())) {
      results.push([i, data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], data[i][5], data[i][6], data[i][7], data[i][8], data[i][9]]);
    }
  }
  return results;
}
