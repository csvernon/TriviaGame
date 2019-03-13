var i = 1;
var time = 15;
var intervalId;
var correct;
var ans1;
var ans2;
var ans3;
var ans4;
var questionRan = "no"
var wasTrue = "no";
var wasFalse = "no";
var wins = 0;
var losses= 0;
var noAnswer = 0;
$("#start").on("click", function(event) {
    question1()
    $("#start").remove();

});
function question1() {
    time = 15;
    $("#top").text("Who is the Mad Titan?");
    $(".ans1").text("⦿ Loki");
    ans1 = "Loki";
    $(".ans2").text("⦿ Hela");
    ans2 = "Hela";
    $(".ans3").text("⦿ Red Skull");
    ans3 = "Red Skull";
    $(".ans4").text("⦿ Thanos");
    ans4 = "Thanos";
    correct = "Thanos";
    run();
}
function question2() {
    time = 15;
    $("#top").text("Where was the Soul Stone?");
    $(".ans1").text("⦿ Knowhere");
    ans1 = "Knowhere";
    $(".ans2").text("⦿ Vormir");
    ans2 = "Vormir";
    $(".ans3").text("⦿ Nidavellir");
    ans3 = "Nidavellir";
    $(".ans4").text("⦿ Valhalla");
    ans4 = "Valhalla";
    correct = "Vormir";
    run();
}
function question3() {
    time = 15;
    $("#top").text("Spider-Man and Starlord bond over which movie?");
    $(".ans1").text("⦿ Footloose");
    ans1 = "Footloose";
    $(".ans2").text("⦿ Flashdance");
    ans2 = "Flashdance";
    $(".ans3").text("⦿ The Breakfast Club");
    ans3 = "The Breakfast Club";
    $(".ans4").text("⦿ Grease");
    ans4 = "Grease";
    correct = "Footloose";
    run();
}
function question4() {
    time = 15;
    $("#top").text("What is Agent Coulson's first name?");
    $(".ans1").text("⦿ Steve");
    ans1 = "Steve";
    $(".ans2").text("⦿ John");
    ans2 = "John";
    $(".ans3").text("⦿ Cal");
    ans3 = "Cal";
    $(".ans4").text("⦿ Phil");
    ans4 = "Phil";
    correct = "Phil";
    run();
}
function question5() {
    time = 15;
    $("#top").text("What is Captain Marvel's Name?");
    $(".ans1").text("⦿ Pepper Potts");
    ans1 = "Pepper Potts";
    $(".ans2").text("⦿ Carol Danvers");
    ans2 = "Carol Danvers";
    $(".ans3").text("⦿ Jessica Jones");
    ans3 = "Jessica Jones";
    $(".ans4").text("⦿ Natalia Romanova");
    ans4 = "Natalia Romanova";
    correct = "Carol Danvers";
    run();
}
function question6() {
    time = 15;
    $("#top").text("Who is Bruce Banner?");
    $(".ans1").text("⦿ Ironman");
    ans1 = "Ironman";
    $(".ans2").text("⦿ Thor");
    ans2 = "Thor";
    $(".ans3").text("⦿ The Hulk");
    ans3 = "The Hulk";
    $(".ans4").text("⦿ Captain America");
    ans4 = "Captain America";
    correct = "The Hulk";
    run();
}
function question7() {
    time = 15;
    $("#top").text("What color is the Time Stone?");
    $(".ans1").text("⦿ Red");
    ans1 = "Red";
    $(".ans2").text("⦿ Blue");
    ans2 = "Blue";
    $(".ans3").text("⦿ Yellow");
    ans3 = "Yellow";
    $(".ans4").text("⦿ Green");
    ans4 = "Green";
    correct = "Green";
    run();
}
function question8() {
    time = 15;
    $("#top").text("Who was Captain America's sidekick during World War II?");
    $(".ans1").text("⦿ Steve Rodgers");
    ans1 = "Steve Rodgers";
    $(".ans2").text("⦿ Bucky Barnes");
    ans2 = "Bucky Barnes";
    $(".ans3").text("⦿ Tony Stark");
    ans3 = "Tony Stark";
    $(".ans4").text("⦿ Sam Wilson");
    ans4 = "Sam Wilson";
    correct = "Bucky Barnes";
    run();
}
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    if (time > 0){
        $(".ans1").on("click", function(event) {
            stop();
            
        if (ans1 == correct){
            $("#top").text("You are correct");
            wasTrue = "yes";
            blank();
            $(".giffy").html('<img src="https://media.giphy.com/media/3oEdv3Ul8g6BCngQ36/giphy.gif" style="height: 200px;right: 16%;"/>');
    
            
        }
        else {
            $("#top").text("Incorrect, better luck next time");
            wasFalse = "yes";
            blank();
            $(".giffy").html('<img src="https://media.giphy.com/media/6bdgwW6B0ooer3r8AZ/giphy.gif" style="height: 200px;right: 16%;"/>');
        }
        setTimeout(function() {
            next();
          }, 5000);
        });
        $(".ans2").on("click", function(event) {
            stop();
            
        if (ans2 == correct){
            $("#top").text("You are correct");
            wasTrue = "yes";
            blank();
            $(".giffy").html('<img src="https://media.giphy.com/media/3oEdv3Ul8g6BCngQ36/giphy.gif" style="height: 200px;right: 16%;"/>');
    
        }
        else {
            $("#top").text("Incorrect, better luck next time");
            wasFalse = "yes";
            blank();
            $(".giffy").html('<img src="https://media.giphy.com/media/6bdgwW6B0ooer3r8AZ/giphy.gif" style="height: 200px;right: 16%;"/>');
        }
        setTimeout(function() {
            next();
          }, 5000);
        });
        $(".ans3").on("click", function(event) {
            stop();
            
        if (ans3 == correct){
            $("#top").text("You are correct");
            wasTrue = "yes";
            blank();
            $(".giffy").html('<img src="https://media.giphy.com/media/3oEdv3Ul8g6BCngQ36/giphy.gif" style="height: 200px;right: 16%;"/>');
    
    
        }
        else {
            $("#top").text("Incorrect, better luck next time");
            wasFalse = "yes";
            blank();
            $(".giffy").html('<img src="https://media.giphy.com/media/6bdgwW6B0ooer3r8AZ/giphy.gif" style="height: 200px;right: 16%;"/>');
        }
        setTimeout(function() {
            next();
          }, 5000);
        });
        $(".ans4").on("click", function(event) {
            stop();
            
        if (ans4 == correct){
            $("#top").text("You are correct");
            wasTrue = "yes";
            blank();
            $(".giffy").html('<img src="https://media.giphy.com/media/3oEdv3Ul8g6BCngQ36/giphy.gif" style="height: 200px;right: 16%;"/>');
    
    
        }
        else {
            $("#top").text("Incorrect, better luck next time");
            wasFalse = "yes";
            blank();
            $(".giffy").html('<img src="https://media.giphy.com/media/6bdgwW6B0ooer3r8AZ/giphy.gif" style="height: 200px;right: 16%;"/>');
    
        }
        setTimeout(function() {
            next();
          }, 5000);
        });
      }
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
      blank();
        noAnswer++
      //  Alert the user that time is up.
      $("#top").text("You're out of time, you'll have to be faster");
    
      $(".giffy").html('<img src="https://media1.tenor.com/images/5c604725daf2e673c77cc66bd69b5510/tenor.gif?itemid=5150380" style="height: 200px;right: 16%;"/>');

      setTimeout(function() {
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
    questionRan = "yes"
    time = 15;
    $(".timer").text("Time remaining: " + time + " seconds");

  }

  function next(){
    $(".giffy").html("");
        if (questionRan === "yes"){
            i++;
            questionRan = "no";
            if (wasTrue === "yes"){
                wins++;
                wasTrue = "no";
            }
            if (wasFalse === "yes"){
                losses++;
                wasFalse = "no";
            }
        }
  
      if (i === 2) {
        question2();
      } else if (i === 3){
        question3();
      } else if (i === 4){
        question4();
      } else if (i === 5){
        question5();
      } else if (i === 6){
        question6();
      } else if (i === 7){
        question7();
      } else if (i === 8){
        question8();
      } else if (i === 9){
        gameover();
      }
      }
    
  function blank (){
    $(".ans1").text("");
    $(".ans2").text("");
    $(".ans3").text("");
    $(".ans4").text("");
  }

  function gameover (){
      blank();
    $("#top").text("YOU'RE IN THE END GAME NOW");
    $(".timer").text("Results");
    $(".correct").text("Correct: " + wins);
    $(".incorrect").text("Incorrect: " + losses);
    $(".unanswered").text("Unanswered: " + noAnswer);
    $(".reset").text("Start Over?");
    $(".reset").on("click", function(event) {
        i = 1;
        time = 15;
        questionRan = "no"
        wasTrue = "no";
        wasFalse = "no";
        wins = 0;
        losses= 0;  
        noAnswer = 0;
        $(".correct").text("");
        $(".incorrect").text("");
        $(".unanswered").text("");
        $(".reset").text("");
        question1();
        
  })
}