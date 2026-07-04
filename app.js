const btn = document.getElementById('genBtn');
const loader = document.getElementById('loader');

btn.addEventListener('click', async () => {
    // Start Animation
    btn.classList.add('opacity-50', 'cursor-not-allowed');
    loader.classList.remove('hidden');

    const res = await fetch('/generate', { method: 'POST' });
    const data = await res.json();

    // End Animation & Display
    loader.classList.add('hidden');
    btn.classList.remove('opacity-50');
    alert("Generation complete: " + data.audio_url);
});
