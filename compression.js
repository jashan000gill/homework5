jashangill("QQQUUUUUUUlllllllqqQQQQQQQQQTTA");
function jashangill (jas) {
  
    if (jas.length ==0) {
      console.log('Please enter valid string.');
      return;
    }
    var output = '';
    var count = 0;
    for (var i = 0; i < jas.length; i++) {
      count++;
      if (jas[i] != jas[i+1]) {
        output +=  count + jas[i] ;
        count = 0;
      }
    }
    console.log(output);
  }
  