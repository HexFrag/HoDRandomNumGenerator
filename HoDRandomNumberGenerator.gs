function GenerateRandomValues() {
  const spreadsheetId = '';
  const rangeName = 'HOD!A2:J999';
  try {
    
    const values = Sheets.Spreadsheets.Values.get(spreadsheetId, rangeName).values;    
    if (!values) {
      Logger.log('No data found.');
      return;
    }

    for(let i = 2; i < values.length + 2; i++){

      let rand = Math.round(Math.random() * 1000, 0);
      let range = "J" + i;
      let val = SpreadsheetApp.getActiveSheet().getRange(range).getValue();
      
      if(val.toString().length == 0){
        
        SpreadsheetApp.getActiveSheet().getRange(range).setValue(rand);
        Logger.log("Set value " + rand + " for cell " + range);
      }
    }
  } catch (err) {
    
    Logger.log(err.message);
  }

}