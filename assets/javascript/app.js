var i = 1;
var time = 30;
var intervalId;
var correct;
var ans1;
var ans2;
var ans3;
var ans4;
var wins = 0;
var losses= 0;
var question = "question" + i;
$("#start").on("click", function(event) {
    question1()
    $("#start").remove();

});
function question1() {
    
    $("#top").text("Who is the Mad Titan?");
    $(".ans1").text("⦿ Loki");
    ans1 = "⦿ Loki";
    $(".ans2").text("⦿ Thanos");
    ans2 = "⦿ Thanos";
    $(".ans3").text("⦿ Red Skull");
    ans3 = "⦿ Red Skull";
    $(".ans4").text("⦿ Hela");
    ans4 = "⦿ Hela";
    correct = "⦿ Thanos";
    i++;
    run();
    check();
}
function question2() {
    
    $("#top").text("Where was Thor born?");
    $(".ans1").text("⦿ Mars");
    ans1 = "⦿ Mars";
    $(".ans2").text("⦿ Earth");
    ans2 = "⦿ Earth";
    $(".ans3").text("⦿ Jupiter");
    ans3 = "⦿ Jupiter";
    $(".ans4").text("⦿ Valhalla");
    ans4 = "⦿ Valhalla";
    correct = "⦿ Valhalla";
    i++;
    run();
    check();
}
function question3() {
    
    $("#top").text("Who is Bruce Banner?");
    $(".ans1").text("⦿ Ironman");
    ans1 = "⦿ Ironman";
    $(".ans2").text("⦿ Thor");
    ans2 = "⦿ Thor";
    $(".ans3").text("⦿ The Hulk");
    ans3 = "⦿ The Hulk";
    $(".ans4").text("⦿ Captain America");
    ans4 = "⦿ Captain America";
    correct = "⦿ The Hulk";
    i++;
    run();
    check();
}
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    time--;

    //  Show the number in the #show-number tag.
    $(".timer").text("Time remaining: " + time + " seconds");


    //  Once number hits zero...
    if (time === 0) {

      //  ...run the stop function.
      stop();
        losses++
      //  Alert the user that time is up.
      $("#top").text("You're out of time, you'll have to be faster");
      $(".ans1").text("");
      $(".ans2").html('<img src="https://media1.tenor.com/images/5c604725daf2e673c77cc66bd69b5510/tenor.gif?itemid=5150380" style="height: 200px;right: 16%;"/>');
      $(".ans3").text("");
      $(".ans4").text("");



      var windowTimeout = setTimeout(function() {
        next();
      }, 5000);
      
    }
  }

  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);

    // reset timer
    time = 30;
    $(".timer").text("Time remaining: " + time + " seconds");

  }

  function check() {
    $(".ans1").on("click", function(event) {
        stop();
        
    if (ans1 == correct){
        $("#top").text("You are correct");
        wins++;
        blank();

    }
    else {
        $("#top").text("Incorrect, better luck next time");
        losses++;
        blank();
    }
    var windowTimeout = setTimeout(function() {
        next();
      }, 5000);
    });
    $(".ans2").on("click", function(event) {
        stop();
        
    if (ans2 == correct){
        $("#top").text("You are correct");
        wins++;
        blank();
    }
    else {
        $("#top").text("Incorrect, better luck next time");
        losses++;
        blank();

    }
    var windowTimeout = setTimeout(function() {
        next();
      }, 5000);
    });
    $(".ans3").on("click", function(event) {
        stop();
        
    if (ans3 == correct){
        $("#top").text("You are correct");
        wins++;
        blank();

    }
    else {
        $("#top").text("Incorrect, better luck next time");
        losses++;
        blank();

    }
    var windowTimeout = setTimeout(function() {
        next();
      }, 5000);
    });
    $(".ans4").on("click", function(event) {
        stop();
        
    if (ans4 == correct){
        $("#top").text("You are correct");
        wins++;
        blank();

    }
    else {
        $("#top").text("Incorrect, better luck next time");
        losses++;
        blank();

    }
    var windowTimeout = setTimeout(function() {
        next();
      }, 5000);
    });
  }
  function next(){
      if (i === 2) {
        question2();
    
      } else if (i === 3){
        question3();
    }
       else if (i === 4){
        question4();
    }
       else if (i === 5){
        question5();
    }
      }
    
  function blank (){
    $(".ans1").text("");
    $(".ans2").text("");
    $(".ans3").text("");
    $(".ans4").text("");
  }