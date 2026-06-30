import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import ambienceAsset from "@/assets/memorial-ambience.mp3.asset.json";

/**
 * Floating minimal play/pause control for the memorial background music.
 * Starts paused (no autoplay) and loops softly once the visitor opts in.
 */
export function AmbientAudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.35;
    }
  }, []);

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  }

  return (
    <>
      <audio ref={audioRef} src={ambienceAsset.url} loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pausar música de fondo" : "Reproducir música de fondo"}
        aria-pressed={playing}
        className="fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 sm:size-14"
      >
        {playing ? (
          <Pause className="size-5 sm:size-6" />
        ) : (
          <Music className="size-5 sm:size-6" />
        )}
      </button>
    </>
  );
}
