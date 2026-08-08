import './PdfViewer.css';

function CvPage() {
  const pdfUrl = window.location.origin + '/Aadarsh_Mehdi_CV.pdf';
  const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;

  return (
    <div className="pdf-page">
      <div className="pdf-header">
        <a href="/" className="pdf-back">← Back</a>
        <h2>Curriculum Vitae</h2>
        <a href="/Aadarsh_Mehdi_CV.pdf" download className="pdf-download-btn">
          ⬇ Download CV
        </a>
      </div>
      <div className="pdf-viewer">
        <iframe
          src={googleViewerUrl}
          title="Aadarsh Mehdi CV"
          width="100%"
          height="100%"
          frameBorder={0}
        />
      </div>
    </div>
  );
}

export default CvPage;
