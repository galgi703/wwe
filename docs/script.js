// script.js
document.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    const countElement = document.getElementById('count');
    const image = document.getElementById('gameImage');

    image.addEventListener('click', () => {
        // 카운트 증가
        count++;
        countElement.textContent = count;

        // 사진 밑으로 내려갔다가 위로 올라오기
        image.classList.add('clicked');

        // 애니메이션이 끝나면 다시 원래 위치로 돌아가게
        setTimeout(() => {
            image.classList.remove('clicked');
        }, 500); // 0.5초 뒤에 원래 위치로 돌아가게 설정
    });
});
