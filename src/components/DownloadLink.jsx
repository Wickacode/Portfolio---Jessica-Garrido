import React from 'react';

const DownloadLink = ({ fileUrl }) => {
  return (
    <a className="downloadLink" href={fileUrl} download>
      Accès à mon CV
    </a>
  );
};

export default DownloadLink;