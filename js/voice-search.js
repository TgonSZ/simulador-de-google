


const voiceSearchModalOpen = ()=>{
	voiceSearch.style.display = "flex";
	voiceSearch.style.animation = "aparecer 0.5s forwards";
	voiceRecognition();
}


const voiceSearchModalClose = () =>{
	voiceSearch.style.animation = "desaparecer 0.25s forwards";
	setTimeout(()=>{
	    voiceSearch.style.display = "none";
	},250)
}

const voiceRecognition = () =>{
	if (microAceptado == false) {
	window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
	if (!'SpeechRecognition' in window) {
		alert("que pena, no podes usar la API")
}  
	}
	document.querySelector(".voice-search__result-text").innerHTML = "Habla ahora";
    let recognition = new window.SpeechRecognition();

    recognition.onresult = (event) => {
    let voiceText = event.results[0][0].transcript;
    document.querySelector(".voice-search__result-text").innerHTML = voiceText;
    recognition.stop();
    setTimeout(()=>{
    window.open("https://google.com/search?q="+voiceText);
    },1800)
}
    recognition.start();
}

