// 隨機生成加法題目
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return { num1, num2, answer: num1 + num2 };
}

let currentQuestion = generateQuestion();

document.getElementById('question').innerHTML = `${currentQuestion.num1} + ${currentQuestion.num2} = ?`;

document.getElementById('submitBtn').addEventListener('click', function() {
    const userAnswer = parseInt(document.getElementById('answerInput').value);
    const feedback = document.getElementById('feedback');
    const nextQuestionBtn = document.getElementById('nextQuestionBtn');

    if (userAnswer === currentQuestion.answer) {
        feedback.innerHTML = "答對了！";
        feedback.style.color = "green";
        nextQuestionBtn.style.display = "block";
    } else {
        feedback.innerHTML = "答錯了，請再試一次。";
        feedback.style.color = "red";
        document.getElementById('answerInput').classList.add('shake');
        document.getElementById('answerInput').select();  // 反白錯誤答案

        // 移除震動效果
        setTimeout(function() {
            document.getElementById('answerInput').classList.remove('shake');
        }, 500);
    }
});

document.getElementById('nextQuestionBtn').addEventListener('click', function() {
    currentQuestion = generateQuestion();
    document.getElementById('question').innerHTML = `${currentQuestion.num1} + ${currentQuestion.num2} = ?`;
    document.getElementById('answerInput').value = '';
    document.getElementById('feedback').innerHTML = '';
    this.style.display = "none";
});