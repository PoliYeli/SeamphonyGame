import React, { useEffect, useRef } from "react";
import "./styles.css";

function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null); // Reference for audio element

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "r" || event.key === "R") {
        window.location.reload(); // Reload the page
      }
    };

    if (audioRef.current) {
      audioRef.current.play(); // Automatically play audio
      audioRef.current.volume = 0.1; // Set volume (0.0 is mute, 1.0 is full volume)
    }

    // Add event listener when component mounts
    window.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      {/* Background Music */}
      <audio ref={audioRef} src="/musicback (1).mp3" loop autoPlay />
    </div>
  );
}

export default App;
