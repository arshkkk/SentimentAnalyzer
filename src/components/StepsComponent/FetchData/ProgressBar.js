import React, { useEffect, useState } from 'react';
import { message, Progress } from 'antd';

export const CustomProgressBar = ({ setFileUploaded }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setProgress((p) => {
        const toAdd = parseInt((Math.random() * 5).toFixed(0));
        console.log(toAdd);
        console.log(progress);
        if (p + toAdd === 100) message.success('File Uploaded');
        return p + toAdd;
      });
    }, 500);
  }, []);

  return <Progress percent={progress} />;
};
