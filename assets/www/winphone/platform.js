// ...
console.log('WinPhone platform.js');

//$('<script>').attr('src', 'winphone/cordova-1.6.1.js').appendTo('html');
document.write('<script src="winphone/cordova-1.6.1.js"></script>');

// http://bugs.jquery.com/ticket/10660
$.support.cors = true;
