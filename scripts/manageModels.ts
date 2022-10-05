import fs from "fs"
import colors from "colors"

colors.enable()

let operation = process.argv[2]
let modelName = process.argv[3].charAt(0).toUpperCase() + process.argv[3].substring(1).toLowerCase()


if(operation == "create" || operation == "c"){
    console.log("Creating model...".blue)
    fs.writeFile("src/models/"+modelName+".ts", `export class ${modelName} {}`, (error) => {
        if(error) throw error 
        else console.log(modelName.green + " Has been created successfully".green)
    })

}else if(operation == "delete" || operation == "d"){
    console.log("Deleting model...".blue)
    fs.rm("src/models/"+modelName+".ts", {recursive: true, force: true} ,(error) => {
        if(error) throw error 
        else console.log((modelName.green + " Has been deleted successfully".green))
    })
}
