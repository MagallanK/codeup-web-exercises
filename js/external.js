"use strict";

 var classSize = confirm("Is the class you are trying to join full?");

 var classSchedule = confirm("Do you have a class at 1700 already?");

 alert("You can join the class is a " + (!classSize && !classSchedule) + " statement.");