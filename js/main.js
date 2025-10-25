(function(){    
    const $ = item => document.querySelector(item)
    const YEARMIN = 2019

    const footerYear = $('#footer-year')
    const nowYear = (new Date()).getFullYear()
    footerYear.textContent = nowYear >= YEARMIN ? nowYear : YEARMIN
})()