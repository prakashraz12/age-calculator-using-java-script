function age(){
  var d1 = document.getElementById('day').value;
  var m1 = document.getElementById('month').value;
  var y1= document.getElementById('year').value


  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var months = [31,28,31,30,31,30,31,31,30,31,30,31];
//  this is defult months days like jan have 31 days and feb have 28th and others are so on 

  if(d1>d2){
    d2= d2 + months[m2-1]
    m2 = m2 -1;
  }
  if(m1>m2){
    m2 =m2 + 12;
    y2 = y2-1;
  }
  var d =d2 - d1;
  var m = m2-m1;
  var y =y2-y1;


  const output = document.getElementById('dis').innerHTML = 'Your Current Date of Birth is'+ " " +  y  + 'year'+ " " + m + 'Months' + " "+ 'and' + " " + d +" "+"days.";

};

