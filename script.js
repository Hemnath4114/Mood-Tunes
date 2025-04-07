const tunesSection = document.querySelector('.tunes');
document.querySelector('.romantic').addEventListener('click',()=>{
tunesSection.innerHTML=`<div class="tunes-container">
            <div class="tunes-item">
                <div class="thumbnail"><img src="/images/green.jpg" alt="" width="100px"></div>
                <div class="song-name">dheema</div>
                <div class="artist">ani</div>
                <div class="audio"></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="/images/green.jpg" alt="" width="100px"></div>
                <div class="song-name">kadhal kanave</div>
                <div class="artist">aldon</div>
                <div class="audio"></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="/images/green.jpg" alt="" width="100px"></div>
                <div class="song-name">wanna be yours</div>
                <div class="artist">artic monkey</div>
                <div class="audio"></div>
            </div>
            <div class="tunes-item">
                <div class="thumbnail"><img src="/images/green.jpg" alt="" width="100px"></div>
                <div class="song-name">nilave vaa</div>
                <div class="artist">raja</div>
                <div class="audio"></div>
            </div>
        </div>`;
});

document.querySelector('.energetic').addEventListener('click',()=>{
    tunesSection.innerHTML=``;
})