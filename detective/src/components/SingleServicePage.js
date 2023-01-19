import { useParams } from "react-router-dom";
import React from "react";
import sanityClient from "./client"
import SanityBlockContent from "@sanity/block-content-to-react";


export default function SingleServicePage(props) {
    console.log(props)
    const [serviceData, setServiceData] = React.useState(null)
    const { slug } = useParams()

    React.useEffect(() => {
        sanityClient
            .fetch(`*[_type == "service" && slug.current == $slug][0]{

                    title,
                    slug,
                    price,
                    description,
                    body,
                    _ref,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                    },
                }`, { slug })
            .then(data => {
                setServiceData(data)
            })
    }, [slug])

    let imgUrl = ''
    if (serviceData) {
        imgUrl = serviceData.mainImage.asset.url
    }
    return (
        <>{serviceData && console.log(serviceData)}
            {serviceData && <section className="main-section">
                <img className="main-section-img" src={imgUrl} alt={serviceData.mainImage.asset._id} />
                <div className="main-section-title section-title-text">{serviceData.title}</div>
                <div className="main-section-text">
                    {/* {serviceData.body[0].children[0].text} */}
                    <SanityBlockContent blocks={serviceData.body} />
                </div>
            </section>}

        </>
    )
}