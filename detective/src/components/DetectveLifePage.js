import React from "react"
import DetectiveLife from "./CMSComponents/DetectiveLife"
import '../styles/DetectiveLifePage.css'
export default function DetectveLifePage(props) {
    const postsData = props.data
    const url = 'detective-blog/'
    return (
        <>
            <section className="main-section">
                <div className="main-section-title section-title-text">Жизнь Детектива</div>
                <div className="section-main-block">
                    {postsData && postsData.map(item => (
                        <DetectiveLife key={item.slug.current} data={item} url={url} />
                    ))}
                </div>
            </section>

        </>
    )
}