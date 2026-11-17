import { useState } from 'react';
import { useRouter } from 'next/router';

function FloralCorner({ className }) {
  return (
    <svg className={className} viewBox="0 0 260 220" fill="none" aria-hidden="true">
      <path d="M11 208C47 176 78 156 110 128C147 96 177 55 249 12" />
      <path d="M66 169C38 161 23 140 27 111C58 116 74 136 66 169Z" />
      <path d="M92 147C67 128 63 101 79 76C104 97 110 122 92 147Z" />
      <path d="M125 115C111 88 118 61 143 42C162 70 157 96 125 115Z" />
      <path d="M162 75C155 48 168 25 196 14C207 43 196 65 162 75Z" />
      <path d="M65 166C89 159 106 144 117 124M93 143C119 132 138 111 146 88M126 112C151 101 171 81 181 57" />
      <path d="M92 139C69 120 66 96 83 76C106 96 109 119 92 139Z" />
      <path d="M127 108C106 88 107 63 126 44C148 64 149 87 127 108Z" />
      <path d="M165 69C146 52 149 30 170 13C190 31 189 52 165 69Z" />
      <path d="M203 45C210 30 224 24 240 29C235 45 222 51 203 45Z" />
      <circle cx="111" cy="128" r="4" />
      <circle cx="146" cy="88" r="3" />
      <circle cx="181" cy="57" r="3" />
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
          box-sizing: border-box;
          background:
            radial-gradient(ellipse at 50% 48%, rgba(255, 251, 242, 0.82), rgba(250, 236, 215, 0.48) 100%),
            repeating-linear-gradient(115deg, rgba(160, 112, 55, 0.025) 0, rgba(160, 112, 55, 0.025) 1px, transparent 1px, transparent 5px),
            repeating-linear-gradient(25deg, rgba(135, 88, 42, 0.018) 0, rgba(135, 88, 42, 0.018) 1px, transparent 1px, transparent 7px),
            #fbf0de;
          color: #651c2a;
          display: flex;
          box-sizing: border-box;
          height: 100vh;
          height: 100dvh;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          position: relative;
          transition: opacity 650ms ease, transform 650ms ease;
          width: 100%;
        }

        @media (max-width: 480px) {
          .invitation-launcher {
            inset: 0;
            position: fixed;
            height: 100%;
            min-height: 100%;
            width: 100vw;
            display: grid;
            place-items: center;
          }

          .open-invitation {
            justify-self: center;
            align-self: center;
            margin: 0;
            transform: none;
          }

          .open-invitation:hover {
            transform: translateY(-2px);
          }
        }

        .invitation-launcher.is-opening {
          opacity: 0;
          transform: scale(1.025);
        }

        .corner-ornament {
          height: clamp(110px, 24vw, 250px);
          pointer-events: none;
          position: absolute;
          width: clamp(110px, 24vw, 250px);
        }

        .corner-top-left {
          background: linear-gradient(150deg, #a40812 0%, #87020b 78%, #64030a 100%);
          clip-path: polygon(0 0, 100% 0, 0 100%);
          left: 0;
          top: 0;
        }

        .corner-top-left::after,
        .corner-bottom-right::after {
          border: 1px solid rgba(244, 190, 77, 0.95);
          content: '';
          height: 100%;
          position: absolute;
          width: 100%;
        }

        .corner-top-left::after {
          clip-path: polygon(0 0, 100% 0, 0 100%);
          filter: drop-shadow(0 2px 1px #d8982d);
        }

        .corner-bottom-right {
          background: linear-gradient(330deg, #a40812 0%, #87020b 78%, #64030a 100%);
          bottom: 0;
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
          right: 0;
        }

        .corner-bottom-right::after {
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
          filter: drop-shadow(0 -2px 1px #d8982d);
        }

        .floral {
          color: #bd8423;
          height: clamp(155px, 30vw, 315px);
          opacity: 0.88;
          pointer-events: none;
          position: absolute;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.35;
          width: clamp(180px, 37vw, 390px);
        }

        .floral-top-right {
          right: -24px;
          top: -20px;
        }

        .floral-bottom-left {
          bottom: -24px;
          left: -24px;
          transform: rotate(180deg);
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
          .corner-ornament {
            height: 115px;
            width: 115px;
          }

          .floral {
            height: 165px;
            width: 205px;
          }

          .open-invitation {
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








