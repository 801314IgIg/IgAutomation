import { test as it } from '@playwright/test'
// it.describe("HOME WORK TEST", () => {
//     it.beforeAll(() => {
//       console.log("beforeAll");
//     });
//     it.beforeEach(() => {
//       console.log("beforeEach");
//     });
//     it.afterEach(() => {
//       console.log("afterEach");
//     });
//     it.afterAll(() => {
//       console.log("afterAll");
//     });
  
//     it("Test1", () => {
//       console.log("test1");
//     });
//     it("Test2", () => {
//       console.log("test2");
//     });
//   });



  it.describe("HOME TYPE", () => {
    it("Fill all fields", async ({page}) => {

        await page.goto("https://demoqa.com/automation-practice-form",);

        await page.locator('[autocomplete="off"][class=" mr-sm-2 form-control"][id="firstName"]').fill("Ashur");
                 await page.locator("#lastName").fill("ITishnikov");
        await page.locator("#lastName").pressSequentially("ITishnikov", { delay: 200 })
        await page.locator('[autocomplete="off"][class="mr-sm-2 form-control"][id="userEmail"]').fill("email@email.com")
                // await page.locator('[autocomplete="off"][class="mr-sm-2 form-control"][id="userEmail"]').pressSequentially("email@email.com", { delay: 200 })
        await page.locator('[autocomplete="off"][class=" mr-sm-2 form-control"][id="userNumber"]').fill("1234567890")
        await page.locator('[for="gender-radio-1"]').click();
                await page.locator('[for="gender-radio-1"][class="custom-control-label"]').click("")

        // await page.getByPlaceholder('Select State').fill('Rajasthan')
        

    });
  });
