import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from "@pbe/react-yandex-maps";
import React, { memo } from "react";

export default memo(function YandexMap() {
  const defaultState = {
    center: [59.990994, 30.251872],
    zoom: 15,
    controls: [],
    ZoomControl: false,
  };

  return (
    <>
      <YMaps loading="lazy">
        <Map
          width={"100%"}
          height={"300px"}
          defaultState={defaultState}
          behaviors={{ scrollZoom: false }}>
          <Placemark geometry={[59.990994, 30.251872]} />
          <FullscreenControl />
          <ZoomControl options={{ float: "left", scrollZoom: false }} />
        </Map>
      </YMaps>
    </>
  );
});
