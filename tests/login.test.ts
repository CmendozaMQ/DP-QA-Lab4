// import { driverInstance } from "../src/core/driver";
import { driverInstance } from "../src/core/driver";
import { LoginPage } from "../src/pages/login.page";

describe('open encuentralos.org', () => {
    let loginPage: LoginPage;

    beforeAll(async () => {              
        await driverInstance.startDriver();
        loginPage = new LoginPage();  
        // loginPage = new LoginPage();
    });

    afterAll(async () => {
        //await driverInstance.closeDriver();
    });

    it('Go To Page', async () => {
        await loginPage.navigateTo('https://encuentralos.org/');
    });

    it('Click nosotros option', async()=>{
        await loginPage.ClickNosotrosOption();
    });

    it('Click Historias option', async()=>{
        await loginPage.ClickHistoriasOption();
    });

    // it('Sets Username', async () => {
    //     //await loginPage.Login('standard_user', 'secret_sauce');
    //     await loginPage.setUsername('standard_user');
    // });

    // it('Sets Password', async () => {
    //     //await loginPage.Login('standard_user', 'secret_sauce');
    //     await loginPage.setPassword('secret_sauce');
    // });

    // it('Clicks login Button', async () => {
    //     //await loginPage.Login('standard_user', 'secret_sauce');
    //     await loginPage.clickButton();
    // });

    it('close browser', async () => {
        //await loginPage.Login('standard_user', 'secret_sauce');
        await loginPage.close();
    });
});