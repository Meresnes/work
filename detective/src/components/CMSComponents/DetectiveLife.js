import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './DetectiveLife.css'

export default function DetectiveLife(props) {
    console.log(props.data)
    const title = props.data.title
    const description = props.data.description
    const imgUrl = props.data.mainImage.asset.url
    const alt = props.data.mainImage.asset._id
    const slug = props.data.slug.current
    const date = moment(props.data.publishedAt).format('DD.MM.YYYY');
    return (
        <>
            <div className="blog-card ">

                <img className="card-image" src={imgUrl} alt={alt}></img>

                <div className="blog-card-title">{title}</div>
                <div className="blog-card-description">{description}</div>
                <div className="blog-card-footer">
                    <div className="publish-date">{date}</div> <div className="read-more">
                        <Link to={`detective-blog/${slug}`}>
                            <Button className="read-more-button" >Читать дальше</Button></Link></div>
                </div>
            </div>
        </>
    )
}