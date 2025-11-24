// Attempt autoplay; if blocked by browser policy, play on first user interaction.
(function(){
  const audio = document.getElementById('xmasAudio');
  if (!audio) return;
  audio.volume = 0.25; // subtle background volume
  const tryPlay = () => {
    const p = audio.play();
    if (p && typeof p.catch === 'function') {
      p.catch(() => {
        // Autoplay blocked; wait for first interaction then play
        const resume = () => {
          audio.play().catch(()=>{});
          window.removeEventListener('pointerdown', resume, { once: true });
        };
        window.addEventListener('pointerdown', resume, { once: true });
      });
    }
  };
  // Try once on load
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    tryPlay();
  } else {
    document.addEventListener('DOMContentLoaded', tryPlay, { once: true });
  }
})();