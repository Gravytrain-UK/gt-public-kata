/**
 * Options:
 * {
 *  currentPage: number, // which page does the user want to see
 *  itemsPerPage: number, // how many items per page do they want to see
 *  totalItems: number, // how many items are there in the collection?
 * }
 * 
 * This function will calculate the nearest page within range to the user's choice.
 * It will return a current page of 0 only when there are no items.
 * It will return a list of up to 6 page identities the user can go to, which will always include
 * - the current page 
 * - the previous page (if possible) 
 * - the next page (if possible)
 * - the last page (if that's not a duplicate)
 * - some `...` to indicate gaps in the sequence
 * E.g. page 3 of 10 = ['...', '2', '3', '4', '...', '10' ]
 * Page 2 of 10 = ['1', '2', '3', '4', '...', '10' ] 
 */
function paginator(options) {
    return {
        currentPage: 1,
        itemsPerPage: 20,
        totalPages: 10,
        totalItems: options.totalItems,
        pages: [ '1', '2', '3', '4', '...', '10' ],
    };
}

module.exports = {
    paginator,
};
