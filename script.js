const list = {
    romantic:{
        song1:{
            img: "images/X's (Cigarettes After Sex).jfif",
            name: "Apocalypse",
            artist: "Cigarettes After Sex",
            src: "./songs/Romantic/Apocalypse.mp3",
            link:"https://open.spotify.com/track/1oAwsWBovWRIp7qLMGPIet?si=230bd6745b7542fd"
        },
        song2:{
            img: "images/X's (Cigarettes After Sex).jfif",
            name: "Heavenly",
            artist: "Cigarettes After Sex",
            src: "./songs/Romantic/Heavenly.mp3",
            link:"https://open.spotify.com/track/5oxWFclzZaZZWlo0BZWz6j?si=ad77ed7a68ff482d"
        },
        song3:{
            img: "images/12aa17a3-9609-470c-bd62-d6fac94b7d3c.jfif",
            name: "Wanna be yours",
            artist: "Artic Monkeys",
            src:"songs/Romantic/I wanna be yours .mp3",
            link:"https://open.spotify.com/track/5XeFesFbtLpXzIVDNQP22n?si=67430c98aa5a43e5"
        },
        song4:{
            img: "images/_golden hour - Single de JVKE en Apple Music.jfif",
            name: "Golden Hous",
            artist: "JVKE",
            src:"songs/Romantic/JVKE - golden hour.mp3",
            link:"https://open.spotify.com/track/4yNk9iz9WVJikRFle3XEvn?si=5bbfaa2d13ce4c68"
        }
        
    },

    energetic:{
        song1:{
            img: "images/3413397e-a3fa-4d98-8e7e-5e7650e31389.jfif",
            name: "All The Stars",
            artist: "Kedrick, SZA",
            src:"songs/energetic/All The Stars.mp3",
            link:"https://open.spotify.com/track/3GCdLUSnKSMJhs4Tj6CV3s?si=f67fc501e72648b7"
        },
        song2:{
            img: "images/_Песня «Blinding Lights» (The Weeknd) в….jfif",
            name: "Blinding lights",
            artist: "Weeknd",
            src:"songs/energetic/Blinding lights.mp3",
            link:"https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b?si=c36602afb06e4795"
        },
        song3:{
            img: "images/b34718f7-4796-415d-b26b-54629606bc8f.jfif",
            name: "Fe!n",
            artist: "Travis Scott",
            src:"songs/energetic/F!EN nokia ringtone.mp3",
            link:"https://open.spotify.com/track/42VsgItocQwOQC3XWZ8JNA?si=cadefc83d64f401d"
        },
        song4:{
            img: "images/from the not like us music video.jfif",
            name: "Not Like Us",
            artist: "Kendrick Lamar",
            src:"songs/energetic/Not Like Us .mp3",
            link:"https://open.spotify.com/track/6AI3ezQ4o3HUoP6Dhudph3?si=d22a79b5c0ff427a"
        }
        
    },

    chill:{
        song1:{
            img: "images/Twilight album by Bôa album cover.jfif",
            name: "Boa Duvet",
            artist: "Boa",
            src:"songs/chill/Boa Duvet Best Part .mp3",
            link:"https://open.spotify.com/track/42qNWdLKCI41S4uzfamhFM?si=4d426f80b41d480c"
        },
        song2:{
            img: "images/Sabrina Carpenter _ just wanted to put out a….jfif",
            name: "Espresso",
            artist: "Sabrina Carpenter",
            src:"songs/chill/Espresso.mp3",
            link:"https://open.spotify.com/track/2qSkIjg1o9h3YT9RAgYN75?si=e364702c8ef2429f"
        },
        song3:{
            img: "images/b22448f7-b53a-4bc6-b999-991fd26650ef.jfif",
            name: "Let me down ",
            artist: "Alec Benjamin",
            src:"songs/chill/Let me down slowly.mp3",
            link:"https://open.spotify.com/track/0lYBSQXN6rCTvUZvg9S0lU?si=d683e72442394d6c"
        },
        song4:{
            img: "images/046821b1-c861-4f7c-9080-12a1501425f7.jfif",
            name: "Sunroof",
            artist: "Nicky Youre",
            src:"songs/chill/Sunroof .mp3",
            link:"https://open.spotify.com/track/6WHSNH8PhDHbpYxg4I181o?si=9ae7614afad54177"
        }
        
    },

    depression:{
        song1:{
            img: "images/4477ea16-5848-4cd1-b989-ee015965f1c1.jfif",
            name: "Lonely",
            artist: "Akon",
            src:"songs/depression/Akon lonley .mp3",
            link:"https://open.spotify.com/track/4v7DCN09hgXkKazefkznDQ?si=9252206713bc41e1"
        },
        song2:{
            img: "images/Joel Sunny 🌞 on Instagram_ _luminary origin….jfif",
            name: "Luminary",
            artist: "Joel Sunny",
            src:"songs/depression/Luminary.mp3",
            link:"https://open.spotify.com/track/66pWxtaxTV8CxcGOvivZeT?si=1df227976e804b89"
        },
        song3:{
            img: "images/Arcade.jfif",
            name: "Arcade",
            artist: "Ducane Laurence",
            src:"songs/depression/Arcade .mp3",
            link:"https://open.spotify.com/track/1Xi84slp6FryDSCbzq4UCD?si=6c7b714841ee414e"
        },
        song4:{
            img: "images/Somewhere Only We Know   « and if you got a minute….jfif",
            name: "Somewhere Only",
            artist: "Keane",
            src:"songs/depression/Somwere only we know.mp3",
            link:"https://open.spotify.com/track/1SKPmfSYaPsETbRHaiA18G?si=fc0e56b3815c4f4c"
        }
        
    },
}

const tunesSection = document.querySelector('.tunes');
const aboutSection = document.querySelector('.about-section');

document.querySelector('.about').addEventListener('mouseover',()=>{
    aboutSection.classList.remove('about-sectio');
    aboutSection.classList.add('about-section-reveal');
    aboutSection.innerHTML=`<div>Hey there! I'm <b class="name">Hemnath</b>, an aspiring web developer with a passion for clean design and meaningful digital experiences.
            Mood Tunes is a personal project I built to blend two things I love: music and tech.
        </div>
        <div>    
            This site was born out of those late-night playlists where the vibe says more than words ever could. I wanted to create a space where music connects with emotion, right from your browser.
        </div>
        <div>
            I'm currently exploring Web development, and bringing ideas to life with HTML, CSS, and Javascript. Mood Tunes is just the beginning — I’m always learning and creating.
        </div>    
        <div>
            <b>
            Thanks for stopping by. Hope the tunes hit just right 🎶
            </b>
        </div>`;
        document.querySelector('.about').addEventListener('mouseout',()=>{
            setTimeout(()=>{
                aboutSection.classList.remove('about-section-reveal');
                    aboutSection.innerHTML="";
        },2000);
        });
});

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
                <div class="spotify-link"><a href="${list.romantic.song1.link}" class="spo-link" target="_blank">Spotify</a></div>
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
                <div class="spotify-link"><a href="${list.romantic.song2.link}" class="spo-link" target="_blank">Spotify</a></div>
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
                <div class="spotify-link"><a href="${list.romantic.song3.link}" class="spo-link" target="_blank">Spotify</a></div>
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
                <div class="spotify-link"><a href="${list.romantic.song4.link}" class="spo-link" target="_blank">Spotify</a></div>
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
                <div class="spotify-link"><a href="${list.energetic.song1.link}" class="spo-link" target="_blank">Spotify</a></div>
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
                <div class="spotify-link"><a href="${list.energetic.song2.link}" class="spo-link" target="_blank">Spotify</a></div>
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
                <div class="spotify-link"><a href="${list.energetic.song3.link}" class="spo-link" target="_blank">Spotify</a></div>
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
                <div class="spotify-link"><a href="${list.energetic.song4.link}" class="spo-link" target="_blank">Spotify</a></div>
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
                <div class="spotify-link"><a href="${list.chill.song1.link}" class="spo-link" target="_blank">Spotify</a></div>
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
                <div class="spotify-link"><a href="${list.chill.song2.link}" class="spo-link" target="_blank">Spotify</a></div>
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
                <div class="spotify-link"><a href="${list.chill.song3.link}" class="spo-link" target="_blank">Spotify</a></div>
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
                <div class="spotify-link"><a href="${list.chill.song4.link}" class="spo-link" target="_blank">Spotify</a></div>
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
                    <div class="spotify-link"><a href="${list.depression.song1.link}" class="spo-link" target="_blank">Spotify</a></div>
                </div>
                <div class="tunes-item">
                    <div class="thumbnail"><img src="${list.depression.song2.img}" alt="" width="100px"></div>
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
                    <div class="spotify-link"><a href="${list.depression.song2.link}" class="spo-link" target="_blank">Spotify</a></div>
                </div>
                <div class="tunes-item">
                    <div class="thumbnail"><img src="${list.depression.song3.img}" alt="" width="100px"></div>
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
                    <div class="spotify-link"><a href="${list.depression.song3.link}" class="spo-link" target="_blank">Spotify</a></div>
                </div>
                <div class="tunes-item">
                    <div class="thumbnail"><img src="${list.depression.song4.img}" alt="" width="100px"></div>
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
                    <div class="spotify-link"><a href="${list.depression.song4.link}" class="spo-link" target="_blank">Spotify</a></div>
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
