import fs from "fs"
import colors from "colors"

colors.enable()

let operation = process.argv[2]
let serviceName = process.argv[3].charAt(0).toUpperCase() + process.argv[3].substring(1).toLowerCase() + "Service"


if(operation == "create" || operation == "c"){
    console.log("Creating service...".blue)
    fs.mkdir("src/services/"+serviceName, () => {return})
    fs.writeFile("src/services/"+serviceName+"/"+serviceName+".ts", `export abstract class ${serviceName} {}`, (error) => {
        if(error) throw error 
        else console.log(serviceName + " Has been created successfully".green)
    })

}else if(operation == "delete" || operation == "d"){
    console.log("Deleting service...".blue)
    fs.rm("src/services/"+serviceName, {recursive: true, force: true} ,(error) => {
        if(error) throw error 
        else console.log((serviceName.green + " Has been deleted successfully".green))
    })
}
