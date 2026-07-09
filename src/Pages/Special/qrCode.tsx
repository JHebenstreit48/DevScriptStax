import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode';
import '@/scss/shared/qrCode.scss';

export default function QRCodePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, 'https://devscriptstax.netlify.app', {
        width: 180,
        color: {
          dark: '#0e0e0e',
          light: '#ffffff',
        },
      });
    }
  }, []);

  function downloadQR() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'devscriptstax-qr.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  return (
    <div className="qrPage">
      <div className="qrCard">
        <div className="qrCard__wordmark">
          Dev<span className="qrCard__accent">Script</span>Stax
        </div>
        <p className="qrCard__tagline">Full Stack Web Development Reference</p>

        <div className="qrCard__wrap">
          <div className="qrCard__frame">
            <canvas ref={canvasRef} />
          </div>
        </div>

        <button className="qrCard__download" onClick={downloadQR}>
          ↓ Download QR Code
        </button>

        <div className="qrCard__divider" />

        <div className="qrCard__info">
          <p className="qrCard__name">DevScriptStax</p>
          <p className="qrCard__role">Full Stack Web Development Reference</p>
          <p className="qrCard__url">devscriptstax.netlify.app</p>
        </div>

        <p className="qrCard__hint">Scan to explore</p>
      </div>

      <Link to="/" className="qrCard__back">← Back to site</Link>
    </div>
  );
}