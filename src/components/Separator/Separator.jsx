// Separator.jsx
import React from 'react';
import './Separator.scss';

const Separator = () => {
  const separatorItems = [
    'https://framerusercontent.com/images/MYHoScSnz87hRsydBGYtNowjC8.png?scale-down-to=512',
    'https://framerusercontent.com/images/gtoiSmt00CDb0rC8AtlSd1aIJo.png?scale-down-to=512',
    'https://framerusercontent.com/images/AqXRZsNJF7Jb6fGnM3HL7qqCvQ.png?scale-down-to=512',
    'https://framerusercontent.com/images/bGSnTfWwxnwxlrDmKScffdULTrs.png?scale-down-to=512',
    'https://framerusercontent.com/images/4VzZJVIORAvA4VdLNDTa7RT9YM.png?scale-down-to=512',
  ];

  return (
    <div className="logo-separator">
      <div className="scroll-container">
        {separatorItems.map((src, index) => (
          <img
            key={`first-${index}`}
            src={src}
            alt="separator item"
          />
        ))}
        {separatorItems.map((src, index) => (
          <img
            key={`second-${index}`}
            src={src}
            alt="separator item"
          />
        ))}
      </div>
    </div>
  );
};

export default Separator;