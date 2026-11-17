import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [isOpening, setIsOpening] = useState(false);

  const openInvitation = () => {
    setIsOpening(true);
    window.setTimeout(() => router.push('/invitation'), 650);
  };

  return (
    <main className={`invitation-launcher${isOpening ? ' is-opening' : ''}`}>
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
          background:
            radial-gradient(ellipse at 50% 48%, rgba(255, 251, 242, 0.82), rgba(250, 236, 215, 0.48) 100%),
            repeating-linear-gradient(115deg, rgba(160, 112, 55, 0.025) 0, rgba(160, 112, 55, 0.025) 1px, transparent 1px, transparent 5px),
            repeating-linear-gradient(25deg, rgba(135, 88, 42, 0.018) 0, rgba(135, 88, 42, 0.018) 1px, transparent 1px, transparent 7px),
            #fbf0de;
          color: #651c2a;
          display: grid;
          inset: 0;
          place-items: center;
          overflow: hidden;
          position: fixed;
          transition: opacity 650ms ease, transform 650ms ease;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          min-height: 100%;
        }

        .invitation-launcher.is-opening {
          opacity: 0;
          transform: scale(1.025);
        }

        .open-invitation {
          appearance: none;
          background: linear-gradient(180deg, #9b0008 0%, #830008 48%, #690008 100%);
          border: 2px solid #d39425;
          border-radius: 999px;
          box-shadow: 0 15px 26px rgba(95, 53, 25, 0.28), inset 0 1px 0 rgba(255, 238, 190, 0.28), inset 0 -2px 0 rgba(70, 0, 4, 0.4);
          color: #fffaf0;
          cursor: pointer;
          font-family: 'Noto Serif Sinhala', 'Georgia', serif;
          font-size: clamp(17px, 2.4vw, 23px);
          font-weight: 500;
          letter-spacing: 0.015em;
          min-height: clamp(76px, 9vw, 142px);
          min-width: min(700px, 76vw);
          padding: 14px 48px;
          position: relative;
          transition: box-shadow 240ms ease, filter 240ms ease, transform 240ms ease;
          z-index: 1;
        }

        .open-invitation::before {
          border: 1px solid rgba(255, 218, 126, 0.94);
          border-radius: inherit;
          content: '';
          inset: 5px;
          pointer-events: none;
          position: absolute;
        }

        .open-invitation:hover {
          box-shadow: 0 16px 32px rgba(69, 25, 28, 0.29), 0 0 22px rgba(227, 177, 67, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2);
          filter: brightness(1.08);
          transform: translateY(-2px);
        }

        .open-invitation:focus-visible {
          outline: 2px solid #a47d42;
          outline-offset: 5px;
        }

        .open-invitation:disabled {
          cursor: wait;
        }

        @media (max-width: 480px) {
          .open-invitation {
            justify-self: center;
            align-self: center;
            margin: 0;
            min-height: 68px;
            min-width: min(350px, 78vw);
            padding-inline: 28px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .invitation-launcher,
          .open-invitation {
            transition-duration: 0.01ms;
          }
        }
      `}</style>
    </main>
  );
}








