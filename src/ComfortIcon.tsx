import React from "react";

const css = `
  .graphic-icon {
    width: 18px;
    height: 18px;
  }

  .graphic-icon path {
    fill: #B7110D;
  }

  @media (max-width: 768px) {
    .graphic-icon {
      width: 16px;
      height: 16px;
    }
  }
`

export default function ComfortIcon() {
    return (
        <svg
            className="graphic-icon"
            height="100%"
            viewBox="0 0 57 57"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <style>{css}</style>
            <path d="M36.2,29.9c-0.3,1.9-1.4,3.6-2.9,4.8s-3.4,1.8-5.4,1.6c-4-0.3-7.2-3.6-7.3-7.6c-0.1-1.9,0.6-3.7,1.7-5.1
	c1.2-1.5,2.8-2.4,4.6-2.8c1.8-0.4,3.7,0,5.3,0.9c1.6,0.9,2.9,2.4,3.5,4.1h20.4c-1.4-14.5-14-25.8-29-25.2
	C13.2,1.2,1.5,12.6,0.7,26.7c-1,16.2,11.9,29.7,27.9,29.7c14.9,0,27.2-11.7,27.9-26.5C56.5,29.9,36.2,29.9,36.2,29.9z"/>
        </svg>
    )

}