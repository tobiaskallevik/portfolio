import React from "react";
import { GithubOutlined, LinkedinOutlined, FilePdfOutlined } from '@ant-design/icons';

const LinkGrid = () => {
  return (
    <div className="link-container">
      <a href="https://github.com/tobiaskallevik" target="_blank" rel="noopener noreferrer">
        <button className="link-button"><GithubOutlined style={{ fontSize: '1.5rem'}}/></button>
      </a>
      <a href="https://www.linkedin.com/in/tobias-fidje-kallevik-428ba9289" target="_blank" rel="noopener noreferrer">
        <button className="link-button"><LinkedinOutlined style={{ fontSize: '1.5rem'}}/></button>
      </a>
    </div>

  );
}

export default LinkGrid;