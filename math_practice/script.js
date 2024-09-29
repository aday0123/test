// 隨機生成加法題目
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return { num1, num2, answer: num1 + num2 };
}

let currentQuestion = generateQuestion();

document.getElementById('question').innerHTML = `${currentQuestion.num1} + ${currentQuestion.num2} = ?`;

// 當網頁載入時，焦點自動放在文字框
window.onload = function() {
    document.getElementById('answerInput').focus();
};

// 確認答案的功能
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answerInput').value);
    const feedback = document.getElementById('feedback');
    
    if (userAnswer === currentQuestion.answer) {
        feedback.innerHTML = "答對了！";
        feedback.style.color = "green";
        
        // 2秒後自動生成下一題
        setTimeout(function() {
            nextQuestion();
        }, 2000);
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
}

// 生成下一題並將焦點再次放在文字框
function nextQuestion() {
    currentQuestion = generateQuestion();
    document.getElementById('question').innerHTML = `${currentQuestion.num1} + ${currentQuestion.num2} = ?`;
    document.getElementById('answerInput').value = '';
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('answerInput').focus();  // 焦點重新回到文字框
}

// 點擊確認按鈕時檢查答案
document.getElementById('submitBtn').addEventListener('click', checkAnswer);

// 按下 Enter 鍵時也能檢查答案
document.getElementById('answerInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});
