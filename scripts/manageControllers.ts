import fs from "fs"
import colors from "colors"

colors.enable()
let operation = process.argv[2]
let controllerName = process.argv[3].charAt(0).toUpperCase() + process.argv[3].substring(1).toLowerCase() + "Controller"
let controllerRouteName = controllerName.charAt(0).toLowerCase() + controllerName.substring(1) + "Routes"

if(operation == "create" || operation == "c"){
    console.log("Creating controller...".blue)
    fs.mkdir("src/controllers/"+controllerName, () => {return})
   
    fs.writeFile("src/controllers/"+controllerName+"/"+controllerName+".ts", `export abstract class ${controllerName} {}`, (error) => {
        if(error) throw error 
        else {
            fs.writeFile("src/controllers/"+controllerName+"/"+controllerName+"Routes.ts", `import { ${controllerName} } from "./${controllerName}" \n` +
            `import express from "express" \n\nlet ${controllerRouteName} = express.Router()\n\n//put your routes here\n\n${controllerRouteName}.get("/", (request, response) => response.send("Express TS"))\n\nexport { ${controllerRouteName} }` 
                ,(error) => {
                    if(error) throw error 
                }
            )

            fs.writeFile("src/controllers/"+controllerName+"/"+controllerName+".test.ts", `import { ${controllerName} } from "./${controllerName}" \n\n` + 
                `describe("Testing ${controllerName} ", () => { \n\ttest("", () => {}) \n})`
                ,(error) => {
                    if(error) throw error 
                }
            )


            console.log(controllerName.green + " Has been created successfully".green)
        }
    })

}else if(operation == "delete" || operation == "d"){
    console.log("Deleting controller...".blue)
    fs.rm("src/controllers/"+controllerName, {recursive: true, force: true} ,(error) => {
        if(error) throw error 
        else console.log(controllerName.green + " Has been deleted successfully".green)
    })
}
