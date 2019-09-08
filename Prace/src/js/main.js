var sayinfo = function say() {
    var name = document.getElementById('info1').value;
    var number = document.getElementById('info2').value;
    var email = document.getElementById('info3').value;
 
    var html = 'Your name: ' + name + " | " + 'Your e-mail: ' + email + " | " + 'Yor number: ' + number;
 
    alert(html);
}

btn.addEventListener('click', sayinfo);