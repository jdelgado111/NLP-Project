import { handleSubmit, updateUI } from "../src/client/js/formHandler";

describe("Testing the submit functionality", () => { 
    test("Ensure handleSubmit() is defined", () => {
           expect(handleSubmit).toBeDefined();
})});

describe("Testing the update functionality", () => { 
    test("Ensure updateUI() is defined", () => {
           expect(updateUI).toBeDefined();
})});
