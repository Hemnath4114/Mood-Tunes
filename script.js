const list = {
    romantic:{
        song1:{
            img: "/images/green.jpg",
            name: "Dheema",
            artist: "Anirudh",
        },
        song2:{
            img: "/images/green.jpg",
            name: "Kadhal Kanave",
            artist: "Aldon",
        },
        song3:{
            img: "/images/green.jpg",
            name: "Wanna be yours",
            artist: "Artic Monkey",
        },
        song4:{
            img: "/images/green.jpg",
            name: "Nilave vaa",
            artist: "Illayaraja",
        }
        
    },

    energetic:{
        song1:{
            img: "/images/green.jpg",
            name: "Veera Soora",
            artist: "Yuvan",
        },
        song2:{
            img: "/images/green.jpg",
            name: "Rayapuram Peteru",
            artist: "Anirudh",
        },
        song3:{
            img: "/images/green.jpg",
            name: "What a karuvadu",
            artist: "Anirudh",
        },
        song4:{
            img: "/images/green.jpg",
            name: "Pumped up kicks",
            artist: "Foster the People",
        }
        
    },

    chill:{
        song1:{
            img: "/images/green.jpg",
            name: "Blue",
            artist: "Yung kai" ,
        },
        song2:{
            img: "/images/green.jpg",
            name: "Beanie",
            artist: "Chezile",
        },
        song3:{
            img: "/images/green.jpg",
            name: "Kathalikkum",
            artist: "Malathy Laxman",
        },
        song4:{
            img: "/images/green.jpg",
            name: "I Ain't worried",
            artist: "OneRepublic",
        }
        
    },

    depression:{
        song1:{
            img: "/images/green.jpg",
            name: "Heavenly",
            artist: "Cigarettes After Sex",
        },
        song2:{
            img: "/images/green.jpg",
            name: "Dead Man",
            artist: "David Kushner",
        },
        song3:{
            img: "/images/green.jpg",
            name: "Cry",
            artist: "Cigarettes After Sex",
        },
        song4:{
            img: "/images/green.jpg",
            name: "Apocalypse",
            artist: "Cigarettes After Sex",
        }
        
    },
    
    


}

const tunesSection = document.querySelector('.tunes');

document.querySelector('.romantic').addEventListener('click',()=>{
    tunesSection.classList.remove('show');
    tunesSection.innerHTML=`<div class="tunes-container">
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.depression.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.depression.song1.name}</div>
                <div class="artist">${list.depression.song1.artist}</div>
                <div class="audio-player">
                    <audio loop  class="myAudio" src="./songs/Boa Duvet Best Part .mp3"></audio>
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
                    <audio loop class="myAudio"src="./songs/Boa Duvet Best Part .mp3"></audio>
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
                    <audio loop class="myAudio" src="./songs/Boa Duvet Best Part .mp3"></audio>
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
                    <audio loop class="myAudio" src="./songs/Boa Duvet Best Part .mp3"></audio>
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
        themeChange("#ffe6e6", "#3a3a3a");
    },500);
    playPause();
});

document.querySelector('.energetic').addEventListener('click',()=>{
    tunesSection.classList.remove('show');
    tunesSection.innerHTML=`<div class="tunes-container">
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.depression.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.depression.song1.name}</div>
                <div class="artist">${list.depression.song1.artist}</div>
                <div class="audio-player">
                    <audio loop  class="myAudio" src="./songs/Boa Duvet Best Part .mp3"></audio>
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
                    <audio loop class="myAudio"src="./songs/Boa Duvet Best Part .mp3"></audio>
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
                    <audio loop class="myAudio" src="./songs/Boa Duvet Best Part .mp3"></audio>
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
                    <audio loop class="myAudio" src="./songs/Boa Duvet Best Part .mp3"></audio>
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
        themeChange("#fff3b0", "#1f1f1f");
    },500);
    playPause();
});

document.querySelector('.chill').addEventListener('click',()=>{
    tunesSection.classList.remove('show');
    tunesSection.innerHTML=`<div class="tunes-container">
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.depression.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.depression.song1.name}</div>
                <div class="artist">${list.depression.song1.artist}</div>
                <div class="audio-player">
                    <audio  loop class="myAudio" src="./songs/Boa Duvet Best Part .mp3"></audio>
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
                    <audio loop  class="myAudio"src="./songs/Boa Duvet Best Part .mp3"></audio>
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
                    <audio loop class="myAudio" src="./songs/Boa Duvet Best Part .mp3"></audio>
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
                    <audio loop  class="myAudio" src="./songs/Boa Duvet Best Part .mp3"></audio>
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
        themeChange("#d0f0f7", "#2b3e50");
    },500);
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
                        <audio loop class="myAudio" src="./songs/Boa Duvet Best Part .mp3"></audio>
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
                        <audio loop class="myAudio"src="./songs/Boa Duvet Best Part .mp3"></audio>
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
                        <audio loop class="myAudio" src="./songs/Boa Duvet Best Part .mp3"></audio>
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
                        <audio loop class="myAudio" src="./songs/Boa Duvet Best Part .mp3"></audio>
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
            themeChange("#1a1a1a", "#cccccc");
        },500);
        playPause();
});


// for the link color change:
function themeChange(bgcolour,colour){
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

