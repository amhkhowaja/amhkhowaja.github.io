import './PdfViewer.css';

function ThesisPage() {
  const pdfUrl = window.location.origin + '/thesis.pdf';
  const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;

  return (
    <div className="pdf-page">
      <div className="pdf-header">
        <a href="/" className="pdf-back">← Back</a>
        <h2>B.Sc. Thesis</h2>
        <a href="/thesis.pdf" download className="pdf-download-btn">
          ⬇ Download
        </a>
      </div>
      <p className="pdf-subtitle">
        "Adaptive, Context-Aware AI Conversational Agent for IoT Service Portal"
      </p>
      <div className="pdf-viewer">
        <iframe
          src={googleViewerUrl}
          title="Thesis"
          width="100%"
          height="100%"
          frameBorder={0}
        />
      </div>
    </div>
  );
}

export default ThesisPage;
