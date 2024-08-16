let intervalId;
let intervalTime = 180000; // 초기 3분 (밀리초)
let timerDuration = 30 * 60 * 1000; // 30분 (밀리초)
let remainingTime = timerDuration;

function startTimer() {
    clearInterval(intervalId); // 이전 타이머가 실행 중일 경우 정지
    updateDisplay();
    
    intervalId = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(intervalId);
            document.getElementById('audio').play();
            document.getElementById('timerDisplay').textContent = '00:00';
          
        } else {
            remainingTime -= 1000; // 1초 감소
            updateDisplay();
            checkInterval();
        }
    }, 1000); // 1초마다 업데이트
}

function checkInterval() {
    if (remainingTime % intervalTime === 0) {
        document.getElementById('audio').play();
      
    }
}

function changeInterval() {
    intervalTime = 150000; // 2분 30초 (밀리초)
    alert('알람 간격이 2분 30초로 변경되었습니다!');
}

function updateDisplay() {
    const minutes = Math.floor(remainingTime / 60000);
    const seconds = Math.floor((remainingTime % 60000) / 1000);
    document.getElementById('timerDisplay').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
