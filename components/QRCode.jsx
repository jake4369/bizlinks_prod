import QRCodeReact from "qrcode.react";

const QRCode = ({ setShowQr, profileUrl, userName }) => {
  return (
    <div className="qrcode__container">
      <div className="qrcode__img-container">
        <QRCodeReact
          fgColor="white"
          bgColor="#0b84fe"
          value={profileUrl}
          size={160}
        />
      </div>

      <span>{userName}</span>

      <p>
        Simply scan the QR Code to visit my profile and leave your awesome
        reviews
      </p>

      <button className="blue__btn" onClick={() => setShowQr(false)}>
        Close
      </button>
    </div>
  );
};

export default QRCode;
