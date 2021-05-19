const { paginator } = require('./index');

describe('Pagination', () => {
    it('Can correctly count the number of pages', () => {
        expect(paginator({currentPage: 1, itemsPerPage: 20, totalItems: 200}).totalPages).toBe(10);
    });

    // it('Can correctly count the number of pages with different page size', () => {
    //     expect(paginator({currentPage: 1, itemsPerPage: 10, totalItems: 200}).totalPages).toBe(20);
    // });

    it('Will return the page number when original request was valid', () => {
        expect(paginator({currentPage: 1, itemsPerPage: 20, totalItems: 200}).currentPage).toBe(1);
    });

    // it('Will return a corrected page number when original request was below range', () => {
    //     expect(paginator({currentPage: 0, itemsPerPage: 20, totalItems: 200}).currentPage).toBe(1);
    // });

    // it('Will return a corrected page number when original request was above range', () => {
    //     expect(paginator({currentPage: 11, itemsPerPage: 20, totalItems: 200}).currentPage).toBe(10);
    // });

    it('Returns the same number of totalItems as passed in', () => {
        expect(paginator({currentPage: 1, itemsPerPage: 20, totalItems: 200}).totalItems).toBe(200);
        expect(paginator({currentPage: 1, itemsPerPage: 20, totalItems: 123}).totalItems).toBe(123);
    });

    it('Returns the expected page number labels when on first page', () => {
        expect(paginator({currentPage: 1, itemsPerPage: 20, totalItems: 200}).pages).toEqual(['1','2','3','4','...','10']);
    });
});
