/*let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration; 
    progress.value = song.currentTime;
};

function playPaus(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(() => {
      progress.value = song.currentTime;   
    }, 500);

    progress.onchange = function(){
        song.play();
        song.currentTime = progress.value;
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
};*/

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

// Функция для воспроизведения/паузы
function playPaus() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

// Обновление прогресса каждую секунду, когда песня играет
song.addEventListener('play', function() {
    setInterval(() => {
        if (!song.paused) {
            progress.value = song.currentTime;
        }
    }, 500);
});

// Обработка изменения прогресса пользователем
progress.oninput = function() {
    song.currentTime = progress.value;
};

// Обработка изменения состояния песни (пауза/воспроизведение) вручную
song.onplay = function() {
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
};

song.onpause = function() {
    ctrlIcon.classList.add("fa-play");
    ctrlIcon.classList.remove("fa-pause");
};
