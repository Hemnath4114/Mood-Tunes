const list = {
    romantic:{
        song1:{
            img: "/images/green.jpg",
            name: "Apocalypse",
            artist: "Cigarettes After Sex",
            src: "./songs/Romantic/Apocalypse.mp3"
        },
        song2:{
            img: "/images/green.jpg",
            name: "Heavenly",
            artist: "Cigarettes After Sex",
            src: "./songs/Romantic/Heavenly.mp3"
        },
        song3:{
            img: "/images/green.jpg",
            name: "Wanna be yours",
            artist: "Artic Monkeys",
            src:"songs/Romantic/I wanna be yours .mp3"
        },
        song4:{
            img: "/images/green.jpg",
            name: "Golden Hous",
            artist: "JVKE",
            src:"songs/Romantic/JVKE - golden hour.mp3"
        }
        
    },

    energetic:{
        song1:{
            img: "/images/green.jpg",
            name: "All The Stars",
            artist: "Kedrick, SZA",
            src:"songs/energetic/All The Stars.mp3"
        },
        song2:{
            img: "/images/green.jpg",
            name: "Blinding lights",
            artist: "Weeknd",
            src:"songs/energetic/Blinding lights.mp3"
        },
        song3:{
            img: "/images/green.jpg",
            name: "F!en",
            artist: "Travis Scott",
            src:"songs/energetic/F!EN nokia ringtone.mp3"
        },
        song4:{
            img: "/images/green.jpg",
            name: "Not Like Us",
            artist: "Kendrick Lamar",
            src:"songs/energetic/Not Like Us .mp3"
        }
        
    },

    chill:{
        song1:{
            img: "/images/green.jpg",
            name: "Boa Duvet",
            artist: "Boa",
            src:"songs/chill/Boa Duvet Best Part .mp3"
        },
        song2:{
            img: "/images/green.jpg",
            name: "Espresso",
            artist: "Sabrina Carpenter",
            src:"songs/chill/Espresso.mp3"
        },
        song3:{
            img: "/images/green.jpg",
            name: "Let me down ",
            artist: "Alec Benjamin",
            src:"songs/chill/Let me down slowly.mp3"
        },
        song4:{
            img: "/images/green.jpg",
            name: "Sunroof",
            artist: "Nicky Youre",
            src:"songs/chill/Sunroof .mp3"
        }
        
    },

    depression:{
        song1:{
            img: "/images/green.jpg",
            name: "Lonely",
            artist: "Akon",
            src:"songs/depression/Akon lonley .mp3"
        },
        song2:{
            img: "/images/green.jpg",
            name: "Luminary",
            artist: "Joel Sunny",
            src:"songs/depression/Luminary.mp3"
        },
        song3:{
            img: "/images/green.jpg",
            name: "Arcade",
            artist: "Ducane Laurence",
            src:"songs/depression/Arcade .mp3"
        },
        song4:{
            img: "/images/green.jpg",
            name: "Somewhere Only",
            artist: "Keane",
            src:"songs/depression/Somwere only we know.mp3"
        }
        
    },
    
    


}

const tunesSection = document.querySelector('.tunes');

document.querySelector('.romantic').addEventListener('click',()=>{
    tunesSection.classList.remove('show');
    tunesSection.innerHTML=`<div class="tunes-container">
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.romantic.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.romantic.song1.name}</div>
                <div class="artist">${list.romantic.song1.artist}</div>
                <div class="audio-player">
                    <audio loop  class="myAudio" src="${list.romantic.song1.src}"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#" class="spo-link">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.romantic.song2.img}" alt="" width="100px"></div>
                <div class="song-name">${list.romantic.song2.name}</div>
                <div class="artist">${list.romantic.song2.artist}</div>
                 <div class="audio-player">
                    <audio loop class="myAudio"src="${list.romantic.song2.src}"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#" class="spo-link">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.romantic.song3.img}" alt="" width="100px"></div>
                <div class="song-name">${list.romantic.song3.name}</div>
                <div class="artist">${list.romantic.song3.artist}</div>
                <div class="audio-player">
                    <audio loop class="myAudio" src="${list.romantic.song3.src}"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#" class="spo-link">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.romantic.song4.img}" alt="" width="100px"></div>
                <div class="song-name">${list.romantic.song4.name}</div>
                <div class="artist">${list.romantic.song4.artist}</div>
                 <div class="audio-player">
                    <audio loop class="myAudio" src="${list.romantic.song4.src}"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#" class="spo-link">Spotify</a></div>
            </div>
        </div>`;
        
    setTimeout(()=>{
        tunesSection.classList.add('show');
        themeChange("#ffe6e6", "#3a3a3a","Great Vibes","cursive");
    },1000);
    playPause();
});

document.querySelector('.energetic').addEventListener('click',()=>{
    tunesSection.classList.remove('show');
    tunesSection.innerHTML=`<div class="tunes-container">
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.energetic.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.energetic.song1.name}</div>
                <div class="artist">${list.energetic.song1.artist}</div>
                <div class="audio-player">
                    <audio loop  class="myAudio" src="${list.energetic.song1.src}"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#" class="spo-link">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.energetic.song2.img}" alt="" width="100px"></div>
                <div class="song-name">${list.energetic.song2.name}</div>
                <div class="artist">${list.energetic.song2.artist}</div>
                 <div class="audio-player">
                    <audio loop class="myAudio"src="${list.energetic.song2.src}"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#" class="spo-link">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.energetic.song3.img}" alt="" width="100px"></div>
                <div class="song-name">${list.energetic.song3.name}</div>
                <div class="artist">${list.energetic.song3.artist}</div>
                <div class="audio-player">
                    <audio loop class="myAudio" src="${list.energetic.song3.src}"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#" class="spo-link">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.energetic.song4.img}" alt="" width="100px"></div>
                <div class="song-name">${list.energetic.song4.name}</div>
                <div class="artist">${list.energetic.song4.artist}</div>
                 <div class="audio-player">
                    <audio loop class="myAudio" src="${list.energetic.song4.src}"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#" class="spo-link">Spotify</a></div>
            </div>
        </div>`;
        
    setTimeout(()=>{
        tunesSection.classList.add('show');
        themeChange("#fff3b0", "#1f1f1f","Bebas Neue"," sans-serif");
    },1000);
    playPause();
});

document.querySelector('.chill').addEventListener('click',()=>{
    tunesSection.classList.remove('show');
    tunesSection.innerHTML=`<div class="tunes-container">
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.chill.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.chill.song1.name}</div>
                <div class="artist">${list.chill.song1.artist}</div>
                <div class="audio-player">
                    <audio  loop class="myAudio" src="${list.chill.song1.src}"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#" class="spo-link">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.chill.song2.img}" alt="" width="100px"></div>
                <div class="song-name">${list.chill.song2.name}</div>
                <div class="artist">${list.chill.song2.artist}</div>
                 <div class="audio-player">
                    <audio loop  class="myAudio"src="${list.chill.song2.src}"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#" class="spo-link">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.chill.song3.img}" alt="" width="100px"></div>
                <div class="song-name">${list.chill.song3.name}</div>
                <div class="artist">${list.chill.song3.artist}</div>
                <div class="audio-player">
                    <audio loop class="myAudio" src="${list.chill.song3.src}"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#" class="spo-link">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.chill.song4.img}" alt="" width="100px"></div>
                <div class="song-name">${list.chill.song4.name}</div>
                <div class="artist">${list.chill.song4.artist}</div>
                 <div class="audio-player">
                    <audio loop  class="myAudio" src="${list.chill.song4.src}"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#" class="spo-link">Spotify</a></div>
            </div>
        </div>`;
        
    setTimeout(()=>{
        tunesSection.classList.add('show');
        themeChange("#d0f0f7", "#2b3e50","Quicksand","sans-serif");
    },1000);
    playPause();
});

document.querySelector('.depression').addEventListener('click',()=>{
        tunesSection.classList.remove('show');
        tunesSection.innerHTML=`<div class="tunes-container">
                <div class="tunes-item">
                    <div class="thumbnail"><img src="${list.depression.song1.img}" alt="" width="100px"></div>
                    <div class="song-name">${list.depression.song1.name}</div>
                    <div class="artist">${list.depression.song1.artist}</div>
                    <div class="audio-player">
                        <audio loop class="myAudio" src="${list.depression.song1.src}"></audio>
                        <i class="fa fa-play play-button" aria-hidden="true"></i>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                        <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                    </div>
                    <div class="spotify-link"><a href="#" class="spo-link">Spotify</a></div>
                </div>
                <div class="tunes-item">
                    <div class="thumbnail"><img src="${list.depression.song1.img}" alt="" width="100px"></div>
                    <div class="song-name">${list.depression.song2.name}</div>
                    <div class="artist">${list.depression.song2.artist}</div>
                     <div class="audio-player">
                        <audio loop class="myAudio"src="${list.depression.song2.src}"></audio>
                        <i class="fa fa-play play-button" aria-hidden="true"></i>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                        <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                    </div>
                    <div class="spotify-link"><a href="#" class="spo-link">Spotify</a></div>
                </div>
                <div class="tunes-item">
                    <div class="thumbnail"><img src="${list.depression.song1.img}" alt="" width="100px"></div>
                    <div class="song-name">${list.depression.song3.name}</div>
                    <div class="artist">${list.depression.song3.artist}</div>
                    <div class="audio-player">
                        <audio loop class="myAudio" src="${list.depression.song3.src}"></audio>
                        <i class="fa fa-play play-button" aria-hidden="true"></i>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                        <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                    </div>
                    <div class="spotify-link"><a href="#" class="spo-link">Spotify</a></div>
                </div>
                <div class="tunes-item">
                    <div class="thumbnail"><img src="${list.depression.song1.img}" alt="" width="100px"></div>
                    <div class="song-name">${list.depression.song4.name}</div>
                    <div class="artist">${list.depression.song4.artist}</div>
                     <div class="audio-player">
                        <audio loop class="myAudio" src="${list.depression.song4.src}"></audio>
                        <i class="fa fa-play play-button" aria-hidden="true"></i>
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                        <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                    </div>
                    <div class="spotify-link"><a href="#" class="spo-link">Spotify</a></div>
                </div>
            </div>
            `;

        setTimeout(()=>{
            tunesSection.classList.add('show');
            themeChange("#1a1a1a", "#cccccc","Roboto Condensed", "sans-serif");
        },1000);
        playPause();
});


// for the link color change:
function themeChange(bgcolour,colour,font,bfont){
    // document.body.style.fontFamily=`${font,bfont}`;
    document.body.style.backgroundColor=`${bgcolour}`;
    document.body.style.color=`${colour}`;
    const  links = document.body.querySelectorAll('a');
    links.forEach(link=>{
        link.style.color=`${colour}`;
    });
    const tuneItems= document.querySelectorAll('.tunes-item');
    tuneItems.forEach(item=>{
        // item.style.backgroundColor=`${colour}`;
        item.style.color=`${colour}`;
    });
    const spotifyLink =document.querySelectorAll('.spo-link');
    spotifyLink.forEach(spotify=>{
        spotify.style.color=`${colour}`;
    })
};

// for the play function of the tracks
function playPause(){
    const tunesItem = document.querySelectorAll('.tunes-item');
    tunesItem.forEach(item =>{
        const audio= item.querySelector('.myAudio');
        const playElement = item.querySelector('.play-button');
        const progressBar = item.querySelector('.progress-bar');
        const volumeElement = item.querySelector('.volume-on');
        playElement.addEventListener('click',()=>{
            tunesItem.forEach(otheritems=>{
                const otheraudio= otheritems.querySelector('.myAudio');
                const otherPlay = otheritems.querySelector('.play-button');
                    if(otheraudio !== audio){
                        otheraudio.pause();
                        otherPlay.classList.remove('fa-pause');
                        otherPlay.classList.add('fa-play');
                    };
            });

            if (audio.paused){
                audio.play();
            playElement.classList.remove('fa-play');
            playElement.classList.add('fa-pause');
            } else {
                audio.pause();
                playElement.classList.remove('fa-pause');
                playElement.classList.add('fa-play');
            };
        
            audio.addEventListener('timeupdate',()=>{
                const percetnBar = (audio.currentTime / audio.duration)* 100;
                progressBar.style.width=`${percetnBar}%`;
            })
        });
        
        volumeElement.addEventListener('click',()=>{
            if(volumeElement.classList.contains('fa-volume-up')){
                volumeElement.classList.remove('fa-volume-up');
                volumeElement.classList.add('fa-volume-off');
                audio.muted=true;
            } else{
                volumeElement.classList.remove('fa-volume-off');
                volumeElement.classList.add('fa-volume-up');
                audio.muted=false;
                
            }
            
        })
    });
};
