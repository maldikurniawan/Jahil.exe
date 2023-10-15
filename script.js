const jumpscareContainer = document.getElementById('jumpscare-container');
const jumpscareButton = document.getElementById('jumpscare-button');
const jumpscareAudio = document.getElementById('jumpscare-audio');

jumpscareButton.addEventListener('click', () => {
    jumpscareAudio.play(); // Memainkan suara jumpscare
    jumpscareContainer.style.display = 'block';
    setTimeout(() => {
        jumpscareContainer.style.display = 'none';
    }, 1000); // Gambar jumpscare akan muncul selama 1 detik
});