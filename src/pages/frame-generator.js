import React from 'react';
import { useState, useRef } from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import html2canvas from 'html2canvas';

export default function FrameGenerator() {
  const {siteConfig} = useDocusaurusContext();

  const [image, setImage] = useState(null);
  const [frameUrl, setFrameUrl] = useState('/img/frame.png'); // Set your frame URL here
  const imageContainerRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log('file is ', file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        console.log('reader is ', reader);
        console.log('reader is ', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Capture the image with the frame and allow download
  const handleDownload = async () => {
    if (imageContainerRef.current) {
      const canvas = await html2canvas(imageContainerRef.current);
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'framed-profile.png';
      link.click();
    }
  };



  return (
    <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Frame generator">
 
        <main>
            <div className="container">
                <div className="row">
                    <div className="col" style={{display: 'flex', justifyContent: 'center'}}>

                        <div style={{marginTop: '50px', marginBottom: '50px'}}>
                            <input type="file" onChange={handleImageUpload} accept="image/*" />
                            <div ref={imageContainerRef} style={{ position: 'relative', width: '300px', height: '300px' }}>
                                {image && (
                                <img
                                    src={image}
                                    alt="Uploaded"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }}
                                />
                                )}
                                {frameUrl && (
                                <img
                                    src={frameUrl}
                                    alt="Frame"
                                    style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                                />
                                )}
                            </div>
                            <button onClick={handleDownload}>Download Framed Image</button>
                        </div>



                    </div>
                </div>
            </div>
        </main>
    </Layout>


  );
}
