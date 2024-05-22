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

      //  await page.goto("http://localhost:4200/pages/forms/layouts",);
      //   await page.locator('[placeholder="Jane Doe"]').fill('Ashurchik2')
      //   // await page.locator('[placeholder="Jane Doe"] ~ [placeholder="Email"]').fill('not_fully_works@gmail.com')
      //   await page.locator("//form[@class='form-inline ng-untouched ng-pristine ng-valid']/input[2]").fill('not_fully_works@gmail.com')
      //   /*await page.locator('[placeholder="Jane Doe"] ~ [class="status-basic nb-transition"]').click()*/
      //   /* await page.locator('[placeholder="Jane Doe"] ~ [type="submit"]').click()*/
      //   await page.locator("//*[@id='inputEmail1']").fill('not_fully_works@gmail.com')
      //   await page.locator("//*[@id='inputPassword2']").fill('1234test')
      //   await page.locator("//*[contains(text(),'Option 1')]").click()
      //   await page.locator("//*[contains(text(),'Sign in')][@class='appearance-filled size-medium shape-rectangle status-primary nb-transition']").click()*/

        
        
             


        await page.goto("http://demoqa.com/automation-practice-form",);
        await page.locator('[autocomplete="off"][class=" mr-sm-2 form-control"][id="firstName"]').fill("Ashur");
        await page.locator("#lastName").fill("ITishnikov");
        // await page.locator("#lastName").pressSequentially("ITishnikov", { delay: 200 })
        await page.locator('[autocomplete="off"][class="mr-sm-2 form-control"][id="userEmail"]').fill("email@email.com")
                // await page.locator('[autocomplete="off"][class="mr-sm-2 form-control"][id="userEmail"]').pressSequentially("email@email.com", { delay: 200 })
        await page.locator('[autocomplete="off"][class=" mr-sm-2 form-control"][id="userNumber"]').fill("1234567890")
        await page.locator('[for="gender-radio-1"][class="custom-control-label"]').click();
        await page.locator('//*[contains(text(),"Submit")]').click();

        // await page.getByPlaceholder('[class=" css-1wa3eu0-placeholder"],("Select State")').fill('Rajasthan')
        

    });
  });


