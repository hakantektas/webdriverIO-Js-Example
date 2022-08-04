
describe('TatilBudurExample', () => {

    PATH = '/Users/mobven/Desktop/example_webdriver_io/example_test_tatilbudur/screenShot/'
    var date= new Date()

    it('Open Url Title Control', async () => {
       
        await browser.url("https://www.tatilbudur.com")
        /*await browser.maximizeWindow();
        await browser.setWindowSize(1920, 1080);*/
        await browser.fullscreenWindow();
        await expect(browser).toHaveTitle("TatilBudur ile %50'ye Varan İndirimli Tatil Fırsatlarını Kaçırmayın!")
        await browser.pause(5000)
        console.log("Title"+":"+ await browser. getTitle())


    });
    it('Search with City', async () => {
       
        await $("//*[contains(@id,'key')]").setValue("Antalya")
        await browser.pause(5000)
        await browser.saveScreenshot(PATH+date+".png")
        await $("//*[contains(@id,'searchFormHotelSubmitBtn')]").click()
        await browser.pause(5000)
        await browser.saveScreenshot(PATH+date+".png")

        var element_1 = await $("(//*[contains(@class,'modal-content')])[6]")
        
        await element_1.waitForDisplayed({timeout:5000})
    
        var alert_1 = element_1.getText()
        console.log("Beklediğim Alert"+":"+alert_1)

        await browser.saveScreenshot(PATH+date+".png")





    });
});


