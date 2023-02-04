// import Posts from './Post';
import { Routes, Route } from 'react-router-dom'
import React, { useEffect } from "react"
import sanityClient from "./client"
import Layout from './Layout';
import MainPage from './MainPage';
import ServicesPage from './ServicesPage';
import NotFoundPage from './NotFoundPage';
import SingleServicePage from './SingleServicePage';
import DetectveLifePage from "./DetectveLifePage"
import DetectivePostPage from './DetectivePostPage';
import ContactsPage from './ContactsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';




function App() {

  const [generalService, setGeneralService] = React.useState(null)
  const [detectiveBlogs, setDetectiveBlogs] = React.useState(null)
  // const [serviceData, setServiceData] = React.useState(null)
  // const [serviceList, setServiceList] = React.useState([])
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "generalService" ]{
        
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                },
                categories[]->{
                  title,
                  slug,
                  price,
                  description,
                  body,
                  mainImage{
                    asset->{
                      _id,
                      url,
                  },
                  },
                },
                body,
                mainBody,
            }`)
      .then(data => {
        setGeneralService(data)
      })
    sanityClient
      .fetch(`*[_type == "detectiveBlog" ]{
        
                title,
                slug,
                publishedAt,
                description,
                body,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                },
                
            }`)
      .then(data => {
        setDetectiveBlogs(data)

      })

  }, [])
  return (
    <>

      {/* <NavBar /> */}
      <Routes>
        <Route path='/work' element={<Layout />}>
          <Route index element={<MainPage data={generalService} blogData={detectiveBlogs} />} />
          <Route path="service" element={<ServicesPage data={generalService} />} />
          <Route path="life" element={<DetectveLifePage data={detectiveBlogs} />} />
          <Route path={`service/curent-service/:slug`} element={<SingleServicePage />} />
          <Route path={`life/detective-blog/:slug`} element={<DetectivePostPage data={detectiveBlogs} />} />
          <Route path="contacts" element={<ContactsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {/* <Posts /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
