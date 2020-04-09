import renderImage from '../home/render-img.js';
const test = QUnit.test;
test('testing that renderImage function that renders html', function(assert) {

    //Act 
    // Call the function you're testing and set the result to a const
    const images = { url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1 };
    
    const expected = `<div class="image-container">
    <img src="${images.url}" alt="${images.title} image">
    <h3>UniWhal</h3>
    <p>Number of Horns:${images.horns}</p>
    </div>`; 
    //Assert
    // Make assertions about what is expected valid result
    assert.htmlEqual(renderImage(images), expected);
});
