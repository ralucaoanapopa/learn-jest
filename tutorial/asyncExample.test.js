// assume fetchDataOverApi returns data from external API
const fetchDataOverApi = require('./fetchData.js');

// non async example
test('the user data for user 1', () => {
    const data = fetchDataOverApi();
    expect(data).toBe('Hakuna Matata');
});

// async example
test('the user data for user 1', async() => {
    const data = await fetchDataOverApi();
    expect(data).toBe('Hakuna Matata');
});