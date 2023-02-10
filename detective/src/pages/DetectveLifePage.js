import React, { useMemo } from "react";
import DetectiveLife from "../components/CMSComponents/DetectiveLife";
import "../styles/DetectiveLifePage.css";
export default function DetectveLifePage(props) {
  const postsData = useMemo(() => props.data, [props]);
  const url = "detective-blog/";

  return (
    <>
      <section className="main-section">
        <div className="main-section-title section-title-text">
          Блог Детектива
        </div>
        <div className="section-main-block">
          {postsData &&
            postsData.map((item) => (
              <DetectiveLife key={item.slug.current} data={item} url={url} />
            ))}
        </div>
      </section>
    </>
  );
}
