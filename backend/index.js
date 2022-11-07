var xlsx = require('xlsx')

var db = xlsx.readFile('moviesdb.xlsx')


let data = []
  
const sheets = db.SheetNames
  
for(let i = 0; i < sheets.length; i++)
{
   const temp = xlsx.utils.sheet_to_json(
        db.Sheets[db.SheetNames[i]])
   temp.forEach((res) => {
      data.push(res)
   })
}
  
// Printing data
console.log(data)

// console.log(db.Sheets['Feuil1'])