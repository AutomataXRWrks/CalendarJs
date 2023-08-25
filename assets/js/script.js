// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var rootEl = $('.container-fluid');

  var currentDay = dayjs().format('MMMM dddd D, YYYY'); // gets day of current week;
  var currentHour = dayjs().hour(); // gets current hour';
  //var currentHour = 11;
  //console.log(currentHour);
  //console.log(currentDay);
  

  
  var hoursCalendarDay = [
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17'
  ];

  var hoursCalendarDayText = [
    '9',
    '10',
    '11',
    '12',
    '1',
    '2',
    '3',
    '4',
    '5'  
  ]

  for (var i = 0; i < hoursCalendarDay.length; i++) {
    // Create a new `<div>` for each ability and its text content
    var day = $('#currentDay')
    day.text(currentDay);
    var rowdiv = $('<div>');
    var textHour = $('<div>');
    var textArea = $('<textarea>');
    var buttons =  $('<button>')
    rowdiv.addClass('row time-block past');
    rowdiv.attr('id', 'hour-'+i);
    rootEl.append(rowdiv);
    textHour.addClass('col-2 col-md-1 hour text-center py-3');
    if (i < 2){
      textHour.text(hoursCalendarDayText[i]+'AM');
    } else {
      textHour.text(hoursCalendarDayText[i]+'PM');
    }
    rowdiv.append(textHour);
    textArea.addClass('col-8 col-md-10 description');
    textArea.attr('rows', '3');
    textArea.attr('id', 'textcontentN'+i)
    rowdiv.append(textArea);
    buttons.addClass('btn saveBtn col-2 col-md-1');
    buttons.attr('aria-label', 'save');
    buttons.html('<i class="fas fa-save" aria-hidden="true"></i>');
    rowdiv.append(buttons);



    if (currentHour == hoursCalendarDay[i]){
      var hourCurr = $('#hour-'+i);
      hourCurr.addClass('present');
      hourCurr.children('textarea').text('CurrentHour');
      var lastHour = currentHour-1;
      var hourCurrPast = $('#hour-'+hoursCalendarDay.indexOf(lastHour.toString()));
      hourCurrPast.children('textarea').text('Event that already happened');  
    } if (currentHour > hoursCalendarDay[i]) {
      var hourCurr = $('#hour-'+i);
      hourCurr.addClass('past');
    } if (currentHour < hoursCalendarDay[i] ){
      var hourCurr = $('#hour-'+i);
      hourCurr.addClass('future');      
    }

  }




  var memoryDailyCalendar = {
    text: []
  };
  var htmlElementCalendar = {
    element: []
  };



$('.saveBtn').on('click', function(event){

memoryDailyCalendar.text.push(event.target.parentNode.childNodes[1].value);
htmlElementCalendar.element.push(event.target.parentNode.childNodes[1].id);
localStorage.setItem("dayMemory",JSON.stringify(memoryDailyCalendar));
localStorage.setItem("htmlEl",JSON.stringify(htmlElementCalendar));
});


var contentMemory = JSON.parse(localStorage.getItem("dayMemory"));
var htmlMemory = JSON.parse(localStorage.getItem("htmlEl"));
//console.log(contentMemory);

$( document ).ready(function() {
  var htmlMemory = JSON.parse(localStorage.getItem("htmlEl"));
  var contentMemory = JSON.parse(localStorage.getItem("dayMemory"));
  //memoryDailyCalendar.push(contentMemory);
  //htmlElementCalendar.push(htmlMemory);
  for (c = 0; c < 8; c++){
    ///htmlMemory[c].text(contentMemory[c]);
    //console.log( $(htmlMemory[c]).text(contentMemory[c]));

  }
  //console.log('ready');
});


  
  

 
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
    //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
