document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var fullName = document.getElementById("fullName").value;
    var dob = document.getElementById("dob").value;
    var studentID = document.getElementById("studentID").value;
    var className = document.getElementById("className").value;

    var studentInfoContainer = document.getElementById("studentInfoContainer");
    studentInfoContainer.innerHTML = "<h3>Thông tin sinh viên:</h3>" +
                                      "<p><strong>Họ và tên:</strong> " + fullName + "</p>" +
                                      "<p><strong>Ngày sinh:</strong> " + dob + "</p>" +
                                      "<p><strong>Mã sinh viên:</strong> " + studentID + "</p>" +
                                      "<p><strong>Lớp:</strong> " + className + "</p>";

    document.getElementById("studentForm").style.display = "none";
    document.getElementById("nhap").style.display = "none";
    document.getElementById("quizContainer").classList.remove("hidden");
});
var a = 0;
function checkAnswers() {
    var q1Answer = document.querySelector('input[name="q1"]:checked');
    var q2Answer = document.querySelector('input[name="q2"]:checked');
    var q3Answer = document.querySelector('input[name="q3"]:checked');
    var q4Answer = document.querySelector('input[name="q4"]:checked');
    var q5Answer = document.querySelector('input[name="q5"]:checked');
    var q6Answer = document.querySelector('input[name="q6"]:checked');
    var q7Answer = document.querySelector('input[name="q7"]:checked');
    var q8Answer = document.querySelector('input[name="q8"]:checked');
    var q9Answer = document.querySelector('input[name="q9"]:checked');
    var q10Answer = document.querySelector('input[name="q10"]:checked');


    var resultContainer = document.getElementById("result");
    var score = 0;

    if (q1Answer && q2Answer && q3Answer&& q4Answer&& q5Answer&& q6Answer&& q7Answer&& q8Answer&& q9Answer&& q10Answer) {
        if (q1Answer.value === "A") {
            score++; 
        }
        if (q2Answer.value === "B") {
            score++; 
        }
        if (q3Answer.value === "B") {
            score++; 
        }
        if (q4Answer.value === "B") {
            score++; 
        }
        if (q5Answer.value === "B") {
            score++; 
        }
        if (q6Answer.value === "A") {
            score++; 
        }
        if (q7Answer.value === "B") {
            score++; 
        }
        if (q8Answer.value === "A") {
            score++; 
        }
        if (q9Answer.value === "A") {
            score++; 
        }
        if (q10Answer.value === "A") {
            score++; 
        }
        resultContainer.innerHTML = "Your score: " + score + "/10"; 
        a = a + score;
    } else {
        resultContainer.innerHTML = "Please answer all questions."; 
    }
}
var correctAnswers = ['B', 'A', 'B', 'C', 'C', 'A', 'A', 'A', 'C', 'B'];

function checkAnswers2() {
    var userAnswers = []; 

    for (var i = 1; i <= 10; i++) {
        var answer = document.querySelector('input[name="q' + i + '"]:checked');
        if (answer) {
            userAnswers.push(answer.value); 

        }
        else {
            alert("nhập câu trả lời ");
            return
        }
    }

    var score = 0;

    for (var j = 0; j < userAnswers.length; j++) {
        if (userAnswers[j] === correctAnswers[j]) {
            score++;
        }
    }

    var resultContainer = document.getElementById("result2");
    resultContainer.innerHTML = "Your score: " + score + "/10"; 
    a = a + score;
}

var correctAnswers = [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['A', 'D'],
    ['B', 'C'],
    ['A', 'D'],
    ['B', 'C'],
    ['A', 'B'],
    ['C', 'D'],
    ['A', 'C']
];
function checkAnswers3() {
    var userAnswers = []; 

    for (var i = 1; i <= 10; i++) {
        var selectedOptions = document.querySelectorAll('input[name="q' + i + '"]:checked');
        var selectedValues = Array.from(selectedOptions).map(option => option.value);
        userAnswers.push(selectedValues); 
    }

    var score = 0;

    for (var j = 0; j < userAnswers.length; j++) {
        var correct = true;
        for (var k = 0; k < correctAnswers[j].length; k++) {
            if (!userAnswers[j].includes(correctAnswers[j][k])) {
                correct = false;
                break;
            }
        }
        if (correct) {
            score++;
        }
    }

    var resultContainer = document.getElementById("result3");
    resultContainer.innerHTML = "Your score: " + score + "/10";
    a = a + score;
}

var correctAnswers = ["2", "3", "4", "9", "5", "11", "8", "8", "10", "1"];

function checkAnswers4() {
    var userAnswers = []; 
   
    for (var i = 1; i <= 10; i++) {
        var userAnswer = document.getElementById("q" + i + "Answer").value.trim();
        userAnswers.push(userAnswer);
    }

    var score = 0;

    for (var j = 0; j < userAnswers.length; j++) {
        if (userAnswers[j].toLowerCase() === correctAnswers[j].toLowerCase()) {
            score++;
        }
    }

    var resultContainer = document.getElementById("result4");
    resultContainer.innerHTML = "Your score: " + score + "/10";
    a = a + score;
}
function checkAnswers5(){
    var resultContainer = document.getElementById("result5");
    resultContainer.innerHTML = "Your score: " + a + "/40";
}
