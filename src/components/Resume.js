import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import resumeLink from "../Resume2022.pdf";
import "../css/components/Resume.css";
import { Link } from "react-router-dom";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const Resume = () => {
  const [pdfWidth, setPdfWidth] = useState();
  const { isMobile, deviceWidth } = useContext(Context);
  useEffect(() => {
    if (isMobile) {
      setPdfWidth(deviceWidth - deviceWidth * 0.05);
    } else {
      setPdfWidth(deviceWidth - deviceWidth * 0.4);
    }
  }, [isMobile, deviceWidth]);
  return (
    <main className="resume">
      <h1>My Resume</h1>
      <Link
        className="button featured"
        to={resumeLink}
        download="Ahmad Ibrahim's Resume"
        target="_blank"
      >
        Download Resume
      </Link>
      {/* <img src={resumeImg} alt="Ahmad's Resume" /> */}
      <Document file={resumeLink}>
        <Page size="A4" id="page" pageNumber={1} width={pdfWidth} />
      </Document>
    </main>
  );
};
export default Resume;
