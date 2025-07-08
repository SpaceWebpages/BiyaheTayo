function speech(){
    // SPEECH TO TEXT
const micIcon = document.getElementById('mic');

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.lang = 'en-US'; // Default, can be changed dynamically
    recognition.interimResults = true;

    micIcon.addEventListener('click', () => {
        recognition.start();
    });

    // recognition.onstart = () => {
    //     console.log('Voice recognition started...');
    // };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('txt1').value = transcript;
        console.log('Transcript:', transcript);
    };

    // recognition.onerror = (event) => {
    //     console.error('Speech recognition error:', event.error);
    // };

    // recognition.onend = () => {
    //     console.log('Voice recognition ended.');
    // };
    } else {
        alert('Speech recognition not supported in this browser.');
    }
}