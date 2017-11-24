import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('My first test using Chai and Mocha', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    })
});

describe('index.html', () => {
    let index;
    let window;

    beforeEach(() => {
        // get in memory reference to the file under test
        index = fs.readFileSync('./src/index.html', "utf-8");
        window = new jsdom.JSDOM(index);
    });

    it('should show exclamation', (done) => {        
        // Setup JSDom (Version 9, the version 11 is changed)
        // a secondo parameter specifies the list of JSs to load with the index file
        // jsdom.env(index, (err, window) => {
        //     const h1 = window.document.getElementsByTagName('h1')[0];
        //     expect(h1.innerHTML).to.equal("Wooooo... that's cool");
        //     done();
        //     window.close();
        // });

        const h1 = window.window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal("Wooooo... that's cool");
        done();
    })

    afterEach(() => {
        //window.close();
    });
});
