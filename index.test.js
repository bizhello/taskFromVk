const splitTextIntoSMS = require('./index.js')

it('Test number ONE', () => {
    expect(splitTextIntoSMS("Lorem ipsum dolor sit amet consectetur adipiscing elit")).toEqual(['Lorem ipsum dolor sit amet consectetur adipiscing elit']);
});

it('Test number TWO', () => {
    expect(splitTextIntoSMS("Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam eleifend odio at magna pretium suscipit Nam commodo mauris felis ut suscipit velit efficitur eget Sed sit amet posuere risus")).toEqual(['Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam eleifend odio at magna pretium suscipit Nam commodo mauris felis ut 1/2', 'suscipit velit efficitur eget Sed sit amet posuere risus 2/2']);
});
