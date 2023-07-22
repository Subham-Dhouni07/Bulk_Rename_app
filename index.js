const fs = require('fs');
const replaceThis = "mango"
const replaceWith = "apple"
const preview = false           // if true, it will not change the names, it just review it show the messages.

try {
  fs.readdir("Rename_folder", (err, data) =>{
    
    for (let index = 0; index < data.length; index++) {

      const item = data[index];
      let oldFile = "Rename_folder/" + item
      let newFile = "Rename_folder/" + item.replaceAll(replaceThis, replaceWith)
      
      if(!preview){
          fs.rename(oldFile, newFile, ()=>{
              console.log("rename successful.")
          })
      }
      else{
          if("Rename_folder/" + item !== newFile)
              console.log(item + " will be rename to " + newFile)
      }

    }
  })

} catch (err) {
  console.error(err);
}
