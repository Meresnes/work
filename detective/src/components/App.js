// import Posts from './Post';
import { Routes, Route } from 'react-router-dom'
import React, { useEffect } from "react"
import sanityClient from "./client"
import Layout from './Layout';
import MainPage from '../pages/MainPage';
import ServicesPage from '../pages/ServicesPage';
import NotFoundPage from '../pages/NotFoundPage';
import SingleServicePage from '../pages/SingleServicePage';
import DetectveLifePage from "../pages/DetectveLifePage"
import DetectivePostPage from '../pages/DetectivePostPage';
import ContactsPage from '../pages/ContactsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';




function App() {

  const [generalService, setGeneralService] = React.useState(null)
  const [detectiveBlogs, setDetectiveBlogs] = React.useState(null)
  // const [serviceData, setServiceData] = React.useState(null)
  // const [serviceList, setServiceList] = React.useState([])
  useEffect(() => {
    async function fetchData() {
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


    }
    fetchData()
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
