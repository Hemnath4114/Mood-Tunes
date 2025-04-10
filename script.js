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
    document.body.style.color="red";
    document.body.style.backgroundColor="pink";
    
        tunesSection.innerHTML=`<div class="tunes-container">
                    <div class="tunes-item">
                        <div class="thumbnail"><img src="${list.romantic.song1.img}" alt="" width="100px"></div>
                        <div class="song-name">${list.romantic.song1.name}</div>
                        <div class="artist">${list.romantic.song1.artist}</div>
                        <div class="audio-player">
                            <audio id="myAudio" src="your-audio.mp3"></audio>
                            <i class="fa fa-play play-button" aria-hidden="true"></i>
                            <div class="progress-container">
                                <div class="progress-bar"></div>
                            </div>
                            <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                        </div>
                        <div class="spotify-link"><a href="#">Spotify</a></div>
                    </div>
                    <div class="tunes-item">
                        <div class="thumbnail"><img src="${list.romantic.song1.img}" alt="" width="100px"></div>
                        <div class="song-name">${list.romantic.song2.name}</div>
                        <div class="artist">${list.romantic.song2.artist}</div>
                         <div class="audio-player">
                            <audio id="myAudio" src="your-audio.mp3"></audio>
                            <i class="fa fa-play play-button" aria-hidden="true"></i>
                            <div class="progress-container">
                                <div class="progress-bar"></div>
                            </div>
                            <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                        </div>
                        <div class="spotify-link"><a href="#">Spotify</a></div>
                    </div>
                    <div class="tunes-item">
                        <div class="thumbnail"><img src="${list.romantic.song1.img}" alt="" width="100px"></div>
                        <div class="song-name">${list.romantic.song3.name}</div>
                        <div class="artist">${list.romantic.song3.artist}</div>
                        <div class="audio-player">
                            <audio id="myAudio" src="your-audio.mp3"></audio>
                            <i class="fa fa-play play-button" aria-hidden="true"></i>
                            <div class="progress-container">
                                <div class="progress-bar"></div>
                            </div>
                            <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                        </div>
                        <div class="spotify-link"><a href="#">Spotify</a></div>
                    </div>
                    <div class="tunes-item">
                        <div class="thumbnail"><img src="${list.romantic.song1.img}" alt="" width="100px"></div>
                        <div class="song-name">${list.romantic.song4.name}</div>
                        <div class="artist">${list.romantic.song4.artist}</div>
                         <div class="audio-player">
                            <audio id="myAudio" src="your-audio.mp3"></audio>
                            <i class="fa fa-play play-button" aria-hidden="true"></i>
                            <div class="progress-container">
                                <div class="progress-bar"></div>
                            </div>
                            <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                        </div>
                        <div class="spotify-link"><a href="#">Spotify</a></div>
                    </div>
                </div>`;
                setTimeout(()=>{
                    document.querySelector('.tunes').classList.add('show');
                    
                },10);
});

        

document.querySelector('.energetic').addEventListener('click',()=>{
    document.body.style.color="orange";
    document.body.style.backgroundColor="blue";
    tunesSection.innerHTML=`<div class="tunes-container">
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.energetic.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.energetic.song1.name}</div>
                <div class="artist">${list.energetic.song1.artist}</div>
                <div class="audio-player">
                    <audio id="myAudio" src="your-audio.mp3"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.energetic.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.energetic.song2.name}</div>
                <div class="artist">${list.energetic.song2.artist}</div>
                 <div class="audio-player">
                    <audio id="myAudio" src="your-audio.mp3"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.energetic.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.energetic.song3.name}</div>
                <div class="artist">${list.energetic.song3.artist}</div>
                <div class="audio-player">
                    <audio id="myAudio" src="your-audio.mp3"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.energetic.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.energetic.song4.name}</div>
                <div class="artist">${list.energetic.song4.artist}</div>
                 <div class="audio-player">
                    <audio id="myAudio" src="your-audio.mp3"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#">Spotify</a></div>
            </div>
        </div>`;

        setTimeout(()=>{
            document.querySelector('.tunes').classList.add('show');
        },10);
});

document.querySelector('.chill').addEventListener('click',()=>{
    document.body.style.color="green";
    document.body.style.backgroundColor="grey";
    tunesSection.innerHTML=`<div class="tunes-container">
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.chill.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.chill.song1.name}</div>
                <div class="artist">${list.chill.song1.artist}</div>
                <div class="audio-player">
                    <audio id="myAudio" src="your-audio.mp3"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.chill.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.chill.song2.name}</div>
                <div class="artist">${list.chill.song2.artist}</div>
                 <div class="audio-player">
                    <audio id="myAudio" src="your-audio.mp3"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.chill.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.chill.song3.name}</div>
                <div class="artist">${list.chill.song3.artist}</div>
                <div class="audio-player">
                    <audio id="myAudio" src="your-audio.mp3"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.chill.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.chill.song4.name}</div>
                <div class="artist">${list.chill.song4.artist}</div>
                 <div class="audio-player">
                    <audio id="myAudio" src="your-audio.mp3"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#">Spotify</a></div>
            </div>
        </div>`;

        setTimeout(()=>{
            document.querySelector('.tunes').classList.add('show');
        },10);
});

document.querySelector('.depression').addEventListener('click',()=>{
    document.body.style.color="white";
    document.body.style.backgroundColor="black";
    tunesSection.innerHTML=`<div class="tunes-container">
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.depression.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.depression.song1.name}</div>
                <div class="artist">${list.depression.song1.artist}</div>
                <div class="audio-player">
                    <audio id="myAudio" src="your-audio.mp3"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.depression.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.depression.song2.name}</div>
                <div class="artist">${list.depression.song2.artist}</div>
                 <div class="audio-player">
                    <audio id="myAudio" src="your-audio.mp3"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.depression.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.depression.song3.name}</div>
                <div class="artist">${list.depression.song3.artist}</div>
                <div class="audio-player">
                    <audio id="myAudio" src="your-audio.mp3"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#">Spotify</a></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="${list.depression.song1.img}" alt="" width="100px"></div>
                <div class="song-name">${list.depression.song4.name}</div>
                <div class="artist">${list.depression.song4.artist}</div>
                 <div class="audio-player">
                    <audio id="myAudio" src="your-audio.mp3"></audio>
                    <i class="fa fa-play play-button" aria-hidden="true"></i>
                    <div class="progress-container">
                        <div class="progress-bar"></div>
                    </div>
                    <i class="fa fa-volume-up volume-on" aria-hidden="true"></i>
                </div>
                <div class="spotify-link"><a href="#">Spotify</a></div>
            </div>
        </div>`;

        setTimeout(()=>{
            document.querySelector('.tunes').classList.add('show');
        },10);
});


