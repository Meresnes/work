import NavBar from './NavBar';
// import Posts from './Post';
import MainPage from './MainPage';
import Footer from './Footer';
import ServicePage from './ServicePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import React, { useEffect } from "react"
import sanityClient from "./client"

import '../styles/App.css';

function App() {
  const [generalService, setGeneralService] = React.useState(null)
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
    // sanityClient
    //   .fetch(`*[_type == "service" ]{

    //             title,
    //             slug,
    //             price,
    //             description,
    //             body,
    //             _ref,
    //             mainImage{
    //                 asset->{
    //                     _id,
    //                     url
    //                 },
    //             },
    //         }`)
    //   .then(data => {
    //     setServiceData(data)
    //   })

  }, [])
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/work" element={<MainPage data={generalService} />} />
        <Route exact path="/service" element={<ServicePage data={generalService} />} />
      </Routes>
      {/* <Posts /> */}
      <Footer />
    </>
  );
}

export default App;
