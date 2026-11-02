import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [isOpening, setIsOpening] = useState(false);

  const openInvitation = () => {
    setIsOpening(true);
    window.setTimeout(() => router.push('/invitation'), 550);
  };

  return (
    <main className={`invitation-launcher${isOpening ? ' is-opening' : ''}`}>
      <video
        className="invitation-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source
          src="/Dancers_performing_at_traditiona…_202609080053.mp4"
          type="video/mp4"
        />
      </video>

      <div className="invitation-shade" aria-hidden="true" />
      <button
        className="open-invitation"
        type="button"
        onClick={openInvitation}
        disabled={isOpening}
      >
        විවෘත කරන්න
      </button>

      <style jsx>{`
        .invitation-launcher {
          align-items: center;
          background: #000;
          display: flex;
          justify-content: center;
          height: 100dvh;
          overflow: hidden;
          position: relative;
          transition: opacity 550ms ease;
          width: 100%;
        }

        .invitation-launcher.is-opening {
          opacity: 0;
        }

        .invitation-video,
        .invitation-shade {
          inset: 0;
          height: 100%;
          position: absolute;
          width: 100%;
        }

        .invitation-video {
          object-fit: cover;
          z-index: 0;
        }

        .invitation-shade {
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
        }

        .open-invitation {
          appearance: none;
          background: linear-gradient(180deg, #9b6b2f 0%, #6d421c 48%, #4b2914 100%);
          border: 2px solid #d4a95d;
          border-radius: 0;
          box-shadow:
            0 5px 12px rgba(35, 17, 5, 0.52),
            inset 0 1px 0 rgba(255, 224, 145, 0.7),
            inset 0 -2px 0 rgba(41, 19, 6, 0.7);
          cursor: pointer;
          color: #f3d38a;
          font-family: 'Noto Serif Sinhala', serif;
          font-size: clamp(16px, 2.3vw, 22px);
          font-weight: 600;
          letter-spacing: 0.02em;
          min-height: 52px;
          min-width: min(210px, 72vw);
          padding: 4px 30px;
          position: relative;
          clip-path: polygon(7% 0, 93% 0, 100% 50%, 93% 100%, 7% 100%, 0 50%);
          transition: filter 200ms ease, transform 200ms ease;
          z-index: 2;
        }

        .open-invitation::before {
          border: 1px solid rgba(238, 198, 111, 0.75);
          content: '';
          inset: 5px 10px;
          pointer-events: none;
          position: absolute;
          clip-path: polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0 50%);
        }

        .open-invitation:hover {
          filter: brightness(1.14);
          transform: translateY(-2px);
        }

        .open-invitation:focus-visible {
          outline: 3px solid #e3c888;
          outline-offset: 4px;
        }

        .open-invitation:disabled {
          cursor: wait;
        }
      `}</style>
    </main>
  );
}
