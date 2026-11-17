import { useState } from 'react';
import { useRouter } from 'next/router';

function FloralCorner({ className }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none" aria-hidden="true">
      <path d="M12 168C56 153 69 119 87 91C104 64 128 43 168 15" />
      <path d="M51 145C39 122 42 104 61 91C74 109 71 128 51 145Z" />
      <path d="M78 105C69 82 75 64 97 54C107 75 100 93 78 105Z" />
      <path d="M111 67C105 46 114 30 137 24C144 45 135 60 111 67Z" />
      <path d="M54 143C74 137 88 122 97 105M81 101C103 96 119 80 127 62M113 66C132 62 147 47 153 32" />
      <path d="M82 95C67 83 65 67 77 52C92 64 94 80 82 95Z" />
      <path d="M111 62C96 49 96 33 110 19C124 32 124 48 111 62Z" />
      <circle cx="91" cy="91" r="3" />
      <circle cx="126" cy="56" r="3" />
      <circle cx="65" cy="119" r="2" />
    </svg>
  );
}

export default function Home() {
  const router = useRouter();
  const [isOpening, setIsOpening] = useState(false);

  const openInvitation = () => {
    setIsOpening(true);
    window.setTimeout(() => router.push('/invitation'), 650);
  };

  return (
    <main className={`invitation-launcher${isOpening ? ' is-opening' : ''}`}>
      <div className="corner-ornament corner-top-left" aria-hidden="true" />
      <div className="corner-ornament corner-bottom-right" aria-hidden="true" />
      <FloralCorner className="floral floral-top-right" />
      <FloralCorner className="floral floral-bottom-left" />

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
          background:
            radial-gradient(ellipse at 50% 48%, rgba(255, 255, 251, 0.98), rgba(248, 241, 224, 0.92) 72%),
            #f8f3e8;
          color: #651c2a;
          display: flex;
          height: 100vh;
          height: 100dvh;
          justify-content: center;
          overflow: hidden;
          position: relative;
          transition: opacity 650ms ease, transform 650ms ease;
          width: 100%;
        }

        .invitation-launcher.is-opening {
          opacity: 0;
          transform: scale(1.025);
        }

        .corner-ornament {
          height: clamp(90px, 18vw, 190px);
          pointer-events: none;
          position: absolute;
          width: clamp(90px, 18vw, 190px);
        }

        .corner-top-left {
          background: linear-gradient(135deg, #651c2a, #7f2935);
          border-bottom: 1px solid #b69354;
          border-right: 1px solid #b69354;
          clip-path: polygon(0 0, 100% 0, 0 100%);
          left: 0;
          top: 0;
        }

        .corner-top-left::after,
        .corner-bottom-right::after {
          border: 1px solid rgba(218, 188, 123, 0.9);
          content: '';
          height: 100%;
          position: absolute;
          width: 100%;
        }

        .corner-top-left::after {
          clip-path: polygon(0 0, 83% 0, 0 83%);
        }

        .corner-bottom-right {
          background: linear-gradient(315deg, #651c2a, #7f2935);
          border-left: 1px solid #b69354;
          border-top: 1px solid #b69354;
          bottom: 0;
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
          right: 0;
        }

        .corner-bottom-right::after {
          clip-path: polygon(100% 17%, 100% 100%, 17% 100%);
        }

        .floral {
          color: #a47d42;
          height: clamp(112px, 21vw, 220px);
          opacity: 0.54;
          pointer-events: none;
          position: absolute;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.15;
          width: clamp(112px, 21vw, 220px);
        }

        .floral-top-right {
          right: clamp(8px, 3vw, 38px);
          top: clamp(8px, 3vw, 38px);
        }

        .floral-bottom-left {
          bottom: clamp(8px, 3vw, 38px);
          left: clamp(8px, 3vw, 38px);
          transform: rotate(180deg);
        }

        .open-invitation {
          appearance: none;
          background: linear-gradient(180deg, #792b38 0%, #651c2a 55%, #531521 100%);
          border: 1px solid #c6a45e;
          border-radius: 999px;
          box-shadow: 0 10px 25px rgba(69, 25, 28, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.14);
          color: #fffaf0;
          cursor: pointer;
          font-family: 'Noto Serif Sinhala', 'Georgia', serif;
          font-size: clamp(17px, 2.4vw, 23px);
          font-weight: 500;
          letter-spacing: 0.015em;
          min-height: 62px;
          min-width: min(270px, 76vw);
          padding: 10px 38px;
          position: relative;
          transition: box-shadow 240ms ease, filter 240ms ease, transform 240ms ease;
          z-index: 1;
        }

        .open-invitation::before {
          border: 1px solid rgba(230, 205, 150, 0.85);
          border-radius: inherit;
          content: '';
          inset: 4px;
          pointer-events: none;
          position: absolute;
        }

        .open-invitation:hover {
          box-shadow: 0 12px 30px rgba(69, 25, 28, 0.25), 0 0 18px rgba(194, 157, 82, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.18);
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
          .corner-ornament {
            height: 105px;
            width: 105px;
          }

          .floral {
            height: 128px;
            width: 128px;
          }

          .open-invitation {
            min-height: 58px;
            min-width: min(250px, 78vw);
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
