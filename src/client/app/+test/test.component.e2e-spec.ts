describe('Test', () => {

    beforeEach(() => {
        browser.get('/test');
    });

    it('should have correct feature heading', () => {
        expect(element(by.css('sd-about h2')).getText()).toEqual('Features');
    });

});
