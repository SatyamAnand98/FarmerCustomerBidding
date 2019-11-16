var intendedElement = document.getElementById('grid');
var text;
document.addEventListener('click', function(e) {

    if(intendedElement.contains(e.target)){
        e = e || window.event;
        target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
        text = text.substring(text.length - 24, text.length);
        // alert(text);
        localStorage.setItem('Pid', text);
    }
    // alert(list)
}, false);
