const playerElm = document.querySelector('.player')
const videoElm = document.querySelector('.player video')
const playBtnToggleElm = document.querySelector('.playButton')
const playIconToggle = document.querySelector('.fa-play')
const videoProgressBarElm = document.querySelector('.videoProgress input')
const videoCurrTimeElm = document.querySelector('#videoLeftTime')
const volumeElm = document.querySelector('.volume')



volumeElm.addEventListener('change', e => {
    let videoVol = e.target.value / 100
    videoVolume(videoVol)
})
// video play button toggle

// console.log(videoElm);


volumeElm.value = 20 
videoElm.volume = volumeElm.value / 100 


function videoVolume(vol){
    videoElm.volume = vol
}

function videoPlayToggle(){
    if(videoElm.paused){
        videoElm.play()
        videoDuration()
        setInterval(() => {
            videoCurrTime()
        }, 1000);
    }else{
        videoElm.pause()
    }
}

function vidoeCurrTIme(){
    // videoCurrTimeElm.innerHTML = Math.floor(videoElm.currentTime)

    videoElm.currentTime += 5

    console.log(Math.floor(videoElm.duration));
}

function videoDuration(){
    const videoSec = Math.floor(videoElm.duration)
    let videoMin = Math.floor(videoSec / 60)
    let videoRemSec = Math.floor(videoSec % 60)

    videoProgressBarElm.setAttribute('min', 0)
    videoProgressBarElm.setAttribute('max', videoSec)

    if(videoMin < 10){
        videoMin = '0'+videoMin
    }

    if(videoRemSec < 10){
        videoRemSec = '0'+videoRemSec
    }

    document.querySelector('#videoMin').textContent = videoMin

    document.querySelector('#videoSec').innerHTML = videoRemSec
}

function videoCurrTime(){

    let videoCurrTime = Math.floor(videoElm.currentTime)

    videoProgressBarElm.value = videoCurrTime


    let currMin = Math.floor(videoCurrTime / 60)
    let currSec = Math.floor(videoCurrTime % 60)

    if(currMin < 10){
        currMin = '0'+currMin
    }

    if(currSec < 10){
        currSec = '0'+currSec
    }

    document.querySelector('#currMin').textContent = currMin

    document.querySelector('#currSec').textContent = currSec

}


function skipVide(){
    document.querySelector('#backVid').addEventListener('click', () => {
        let vidDur = Math.floor(videoElm.currentTime)

        if(vidDur < 0){
            vidDur = 0
        }
        videoElm.currentTime = vidDur-5
    })

    document.querySelector('#fordVid').addEventListener('click', () => {
        let vidDur = Math.floor(videoElm.currentTime)

        if(vidDur > videoElm.currentTime){
            vidDur = 0
        }
        videoElm.currentTime = vidDur+5
    })
}

skipVide()

playBtnToggleElm.addEventListener('click', () => {
    videoPlayToggle()
    
})

videoProgressBarElm.addEventListener('change', e => {
    videoElm.currentTime = e.target.value
})