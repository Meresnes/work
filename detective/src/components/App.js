import NavBar from './NavBar';
import Posts from './Post';
import MainPage from './MainPage';
import Footer from './Footer';
import ServicePage from './ServicePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import React, { useEffect } from "react"
import sanityClient from "./client"

import '../styles/App.css';

function App() {
  const [serviceData, setServiceData] = React.useState(null)
  // const [serviceList, setServiceList] = React.useState([])
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "generalService"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                },
                categories,
                body,
                mainBody,
            }`)
      .then(data => {
        setServiceData(data)
      })

  }, [])
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/work" element={<MainPage data={serviceData} />} />
        <Route path="/work/service/" element={<ServicePage data={serviceData} />} />
      </Routes>
      {/* <Posts /> */}
      <Footer />
    </>
  );
}

export default App;
