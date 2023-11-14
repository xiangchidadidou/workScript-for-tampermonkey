// ==UserScript==
// @name         刷时效V1.3
// @namespace    http://your-namespace.com
// @version      0.3
// @description  Scrape text from the current page and log it to the console
// @author       Your Name
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let scrapeInterval;

    document.addEventListener('keydown', function(event) {
        getTheKeyboard('keyCode：',event.keyCode);
    });

    function getTheKeyboard(str,number){
        if(number==49){
            //send my keycode
            console.log(str, event.keyCode);//press the munber 1,keyCode 49
            isScrapeText(49);
        }else if(number==50){
            //send my keycode
            console.log(str, event.keyCode);//press the munber 2,keyCode50
            isScrapeText(50);
        }
    }

    function scrapeText() {
        let isShowElements = document.querySelectorAll('.isShow'); // Capture the class of the current page => .isShow
        isShowElements.forEach(function(element) { // Traverse the captured .isShow
            let buttons = element.querySelectorAll('button'); // Capture all button elements in isShow
            buttons.forEach(function(button) {
                let span = button.querySelector('span');
                if (span && span.textContent.trim() === '不推送 (N)') {
                    button.click(); // Click on each button that meets the criteria here
                }
            });
        });
    }

    window.addEventListener('load', scrapeText);
    function isScrapeText(number) {
        if (number == 49) {
            console.log('开启脚本');
            // Clear the previously set timer
            clearInterval(scrapeInterval);
            // Create a new timer
            scrapeInterval = setInterval(scrapeText, 3500); // To the right of the comma is the non push time, measured in milliseconds, and 1000 is 1 second
        } else if (number == 50) {
            console.log('关闭脚本');
            clearInterval(scrapeInterval);
        }
    }
})();
