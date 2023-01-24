import React from 'react';
import { YMaps, Map, Placemark, FullscreenControl, ZoomControl } from '@pbe/react-yandex-maps';
import '../styles/ContactsPage.css'

export default function ContactsPage() {
    const defaultState = {
        center: [59.990994, 30.251872],
        zoom: 17,
    };
    return <>

        <section className="main-contacts-section">
            <div className="main-section-title section-title-text">Контакты</div>
            <div className="main-contacts-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet vitae, nostrum tempora eius quaerat, ipsam reiciendis esse molestiae voluptas quia dolore rerum in vero illo consectetur harum saepe numquam. Tempora aut unde maxime mollitia quisquam placeat voluptates ex magnam cum nobis molestias, inventore facilis vero hic accusantium, assumenda nulla sint?
            </div>



        </section>
        <section className="maps-section">
            <div className="main-section-title section-title-text">Где мы находимся?</div>


            <YMaps>
                <Map width={"100%"} height={"500px"} defaultState={defaultState}>
                    <Placemark geometry={[59.990994, 30.251872]} />
                    <FullscreenControl />
                    <ZoomControl options={{ float: "left" }} />

                </Map>
            </YMaps>


        </section>
    </>
}