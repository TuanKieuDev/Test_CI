const style=`
    .question{
        color:red;
        font-size: larger;
        width: 50%;
    }
    .co-answer, .in_ans{
        background-color:aqua;
        border: 1px solid #49C598;
        border-left-width:5px;
        width:50%;
        margin: 10px 0px;
        cursor:pointer;
    }

    .co-answer:hover, .in_ans:hover{
        background-color: yellow;
    }
    
    @media only screen and (max-width: 600px) {
        .co-answer,.in_ans{
            width:100%
        }
        .question{
            width:100%
        }
      }
`

$.getJSON("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple", function(data){
    console.log(data);
    // var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
    // console.log(icon);
    // $('.icon').attr('src', icon);
    // var temp = data.main.temp;
    // $('.temp').append(temp);
    // var weather = data.weather[0].main;
    // $('.weather').append(weather)
    var results=data.results;
    let cauhoi = document.getElementById("quiz")
    cauhoi.innerHTML = '';
    for (let i = 0; i < results.length; i++) {
        let re=results[i];
        let html = `
        <style>${style}</style>
        <div class="question">
            Question ${i+1}: ${re.question}
        </div>
        <div id="answer">
        <div class="co-answer" id="co" onclick="check('co')" onclick="hide()">
            ${re.correct_answer}
        </div>
        <div class="in_ans" onclick="check('in')">
            ${re.incorrect_answers[0]}
        </div>
        <div class="in_ans" onclick="check('in')">
            ${re.incorrect_answers[1]}
        </div>
        <div class="in_ans" onclick="check('in')">
            ${re.incorrect_answers[2]}
        </div>
        </div>

        `
        cauhoi.innerHTML+=html;
        
    }
   
});
let sum=0;
let k=0;
function check(x) {
    if (x=='co'&&k<=5) {
        alert("Correct, + 10 points")
        sum+=10
        k++
    }
    if(x=='in'&&k<=5){
        alert("Incorrect")
        k++
    }
    if(k==5){
        alert("Your point is: " + sum)
        location.reload()
    }
    
}


