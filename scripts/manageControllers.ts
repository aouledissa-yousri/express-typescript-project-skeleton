import fs from "fs"
import colors from "colors"

colors.enable()
let operation = process.argv[2]
let controllerName = process.argv[3].charAt(0).toUpperCase() + process.argv[3].substring(1).toLowerCase() + "Controller"

if(operation == "create" || operation == "c"){
    console.log("Creating controller...".blue)
    fs.mkdir("src/controllers/"+controllerName, () => {return})
    fs.writeFile("src/controllers/"+controllerName+"/"+controllerName+".ts", `export abstract class ${controllerName} {}`, (error) => {
        if(error) throw error 
        else console.log(controllerName.green + " Has been created successfully".green)
    })

}else if(operation == "delete" || operation == "d"){
    console.log("Deleting controller...".blue)
    fs.rm("src/controllers/"+controllerName, {recursive: true, force: true} ,(error) => {
        if(error) throw error 
        else console.log(controllerName.green + " Has been deleted successfully".green)
    })
}
