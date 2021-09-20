describe('JSONPath - Array with missing leaves', function () {
    const json = {
        books: [
            {
                category: "reference",
                author: "Nigel Rees",
                title: "Sayings of the Century",
                price: [8.95, 8.94, 8.93]
            },
            {
                author: "Nigel Rees",
                title: "A Man About a Dog ",
                price: [8.95, 8.94, 8.93]
            }
        ]
    };

    it('should omit', () => {
        const expected = [json.books[0].category];
        const result = jsonpath({json, path: 'books[*].category', flatten: true, wrap: false, missingLeaves: 'omit'});
        assert.deepEqual(result, expected);
    });

    it('should return undefined', () => {
        const expected = [json.books[0].category, undefined];
        const result = jsonpath({json, path: 'books[*].category', flatten: true, wrap: false, missingLeaves: 'undefined'});
        assert.deepEqual(result, expected);
    });

    it('should return null', () => {
        const expected = [json.books[0].category, null];
        const result = jsonpath({json, path: 'books[*].category', flatten: true, wrap: false, missingLeaves: 'null'});
        assert.deepEqual(result, expected);
    });
});
