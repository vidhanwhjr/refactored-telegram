var player1_names = localStorage.getItem("player1");
var player2_names = localStorage.getItem("player2");
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1_display_heading").innerHTML = player1_names;
document.getElementById("player2_display_heading").innerHTML = player2_names;
document.getElementById("span1").innerHTML = player1_score;
document.getElementById("span2").innerHTML = player2_score;
document.getElementById("blank1").innerHTML = "Question by -" + player1_names;
document.getElementById("blank2").innerHTML = "Answer by -" + player2_names;
var question_turn = "player1";
var answer_turn = "player2";

function send(){
    cow = Number(document.getElementById("text-input1").value) * Number(document.getElementById("text-input2").value);
    var word = document.getElementById("text-input1").value;
    var word2 = document.getElementById("text-input2").value;
    var question = "<h4 id='question_display'> Q." + word + "X" + word2 + "</h4>";
    var row = "<br> Answer: <input type='text' id = 'answer_input'>";
    var check = "<br> <button class = 'btn-btn success' onclick='check()'> Check </button>";
    var html = question + row + check ;
    document.getElementById("output").innerHTML = html;
    document.getElementById("text-input1").value = "";

}

function check(){
     answer = Number(document.getElementById("answer_input").value);
     final_answer = answer;
    console.log("running check function");
    if(final_answer == cow){
        if(answer_turn == "player1"){
             player1_score = player1_score + 1;
            document.getElementById("span1").innerHTML = player1_score;
        }
        else{
             player2_score = player2_score + 1;
            document.getElementById("span2").innerHTML = player2_score;
        }

    }
    if(question_turn == "player1"){
         question_turn = "player2";
        document.getElementById("blank1").innerHTML = "Question by -" + player2_names;
    }
    else{
        question_turn = "player1";
       document.getElementById("blank1").innerHTML = "Question by -" + player1_names; 
    }
    if(answer_turn = "player1"){
         answer_turn = "player2"
        document.getElementById("blank2").innerHTML = "Answer by -" + player2_names;
    }
    else{
         answer_turn = "player1"
        document.getElementById("blank2").innerHTML = "Answer by -" + player1_names;
    }
    document.getElementById("output").innerHTML = "";
}

