"use client";

import { useState } from "react";

/** "A Thousand Years" — Christina Perri (the wedding-scene song from Twilight: Breaking Dawn). */
const SPOTIFY_TRACK_ID = "6uSqAABnipzLuOVzZy2Od6";

function MusicIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function MusicPlayer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open ? (
        <div className="w-[300px] max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-lg border border-gold/40 bg-warm shadow-lift">
          <iframe
            title="A Thousand Years — Christina Perri"
            src={`https://open.spotify.com/embed/track/${SPOTIFY_TRACK_ID}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            style={{ border: 0, display: "block" }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Fechar nossa música" : "Tocar nossa música"}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-royal text-warm shadow-lift transition hover:bg-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        {open ? (
          <CloseIcon className="h-5 w-5" />
        ) : (
          <MusicIcon className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
