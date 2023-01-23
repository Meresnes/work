import React from "react"
import Button from 'react-bootstrap/Button'
import DetectiveLife from "./CMSComponents/DetectiveLife"
import '../styles/DetectiveLifePage.css'
export default function DetectveLifePage(props) {
    const postsData = props.data

    return (
        <>
            <section className="main-section">
                <div className="main-section-title section-title-text">Жизнь Детектива</div>
                <div className="section-main-block">
                    {postsData && postsData.map(item => (
                        <DetectiveLife key={item.slug.current} data={item} />
                    ))}
                </div>
            </section>

        </>
    )
}