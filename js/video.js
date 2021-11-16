var video = document.querySelector("#player1")
var vidvol = document.querySelector("#volume");
var vidmute = document.querySelector("#mute");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// Play video and update volume
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	vidvol.innerHTML = video.volume * 100 + "%";
});

// Pause video 
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow video down by 5%
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = 0.95 * video.playbackRate;
	console.log("New speed is " + video.playbackRate);
});

// Speed video up by 5%
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = 1.05 * video.playbackRate;
	console.log("New speed is " + video.playbackRate);
});

// Skip by 15 sec and restart if doesn't work
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime);
	if(video.currentTime < video.duration - 15) {
		video.currentTime += 15;
		console.log("New location " + video.currentTime);
	}
	
	else{
		video.load()
		video.play()
		console.log("Going back to the beginning")
	}
});

// Mute and unmute
document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == true){
		video.muted = false;
		vidmute.innerHTML = "Mute";
	}

	else{
		video.muted = true;
		vidmute.innerHTML = "Unmute";
	}
})

// Update slider
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	vidvol.innerHTML = video.volume * 100 + "%";
	console.log(video.volume);
})

// Switch between old school and original style
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});