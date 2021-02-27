// 20 = 20 per second
RELOAD_INTERVAL = 20

if (location.pathname === '/platform/comment/article') {
    setTimeout(clickDeleteButton,2000);
    setTimeout(clickDecisionButton,2000);
    function clickDeleteButton() {
        document.getElementsByClassName('bcc-button del bcc-button--default large')[0].click()
    }
    function clickDecisionButton() {
        document.getElementsByClassName('bcc-button bcc-button--primary large')[0].click()
    }
    const timer = RELOAD_INTERVAL * 1000
    setInterval('location.reload()',timer);
}
