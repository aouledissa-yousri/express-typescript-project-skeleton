import { MainController } from "./MainController" 

describe("Testing MainController ", () => { 
	test("Testing sum function", () => {
		const sum = MainController.sum(1, 2)
		expect(sum).toBe(3)
	}) 
})