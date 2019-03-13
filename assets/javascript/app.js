var i = 1;
var time = 30;
var intervalId;
var correct;
var ans;
$("#start").on("click", function(event) {
    question1()
    $("#start").remove();

});
function question1() {
    
    $("#top").text("Who is the Mad Titan?");
    $(".ans1").text("⦿ Loki");
    $(".ans2").text("⦿ Thanos");
    $(".ans3").text("⦿ Red Skull");
    $(".ans4").text("⦿ Hela");
    correct = "⦿ Thanos";
    i++;
    run();
        
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

      //  Alert the user that time is up.
      check();
      
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