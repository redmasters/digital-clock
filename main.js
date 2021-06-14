// Vue Instance
var clock = new Vue({
    el: '#clockDiv',
    data: {
        time: '',
        date: ''
    },
})

// Array com dias da semana
var semana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']

// Funcao com Date()
clockTime();
function clockTime() {
    let dateTime = new Date();

    let hour = withZero(dateTime.getHours(), 2); 
    let minutes = withZero(dateTime.getMinutes(), 2); 
    let sec = withZero(dateTime.getSeconds(), 2); 

    let day = dateTime.getDate();
    let month =withZero(dateTime.getMonth() + 1, 2);
    let year = dateTime.getFullYear();
  
    clock.time = hour + ':' + minutes + ':' + sec;
    clock.date =  semana[dateTime.getDay()] + ' - ' +  day + '/' + month + '/' + year;
  
}

function withZero(num, digit) {
    var zero = '';
    for (var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

setInterval(clockTime, 1000)