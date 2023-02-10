import { useState, memo, useMemo } from "react";
import Carousel from "react-bootstrap/Carousel";
import SubmitForm from "../components/SubmitForm";
import YandexMap from "../components/YandexMap";
import DetectiveLife from "../components/CMSComponents/DetectiveLife";
import ServiceComponents from "../components/CMSComponents/ServiceComponents";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DetectivePhoto from "../img/detective-photo.jpg";
import LegalityIcon from "../img/zakonnost.png";
import ProfessionalIcon from "../img/professional.png";
import PrivacyIcon from "../img/privacy-shield.png";
import MoneyIcon from "../img/pack-of-money.png";
import "../styles/MainPage.css";

// const YandexMapComponent = () => {
//   const [YandexMap, setYandexMap] = useState(null);

//   useEffect(() => {
//     import("../components/YandexMap").then((mod) => {
//       setYandexMap(mod.default);
//     });
//   }, []);

//   if (!YandexMap) {
//     return <div>Loading...</div>;
//   }

//   return YandexMap;
// };

export default memo(function MainPage(props) {
  const [onShow, setOnShow] = useState(false);
  const serviceData = useMemo(() => props.data, [props.data]);
  const detectiveBlogsData = useMemo(() => props.blogData, [props.blogData]);
  const url = "/work/life/detective-blog/";
  // detectiveBlogsData.map(item => (
  //     <DetectiveLife key={item.slug} data={item} />
  // ))
  // console.log(detectiveBlogsData[0])

  // const src = "https://www.youtube.com/embed/jt2m440S3Uk"
  // const iFrameSrc = ({ src }) => {
  //     const iframeRef = React.useMemo(() => {
  //         return "https://www.youtube.com/embed/jt2m440S3Uk";
  //     }, [src]);
  // }
  // const videoId = "jt2m440S3Uk"
  // const MyIframe = ({ videoId }) => {
  //     const src = React.useMemo(() => {
  //         return `https://www.youtube.com/embed/${videoId}`;
  //     }, [videoId]);
  // }
  return (
    <>
      <Modal show={onShow} onHide={() => setOnShow(false)}>
        <SubmitForm />
      </Modal>

      <div className="topcontainer__main">
        <div className="title-block">
          <h3>Частный детектив</h3>
        </div>

        <div className="content-block">
          {serviceData &&
            serviceData.map((item) => (
              <ServiceComponents key={item.slug.current} data={item} />
            ))}
        </div>
        <div className="button-block">
          <Button className="main-page-button" onClick={() => setOnShow(true)}>
            Связаться с нами
          </Button>
        </div>
      </div>
      {/* <div className="main-content">
                <div className="visit-cart-block">
                    <div className="block">
                        <div className="left-block">
                            <img src={DetectivePhoto} height={"550px"} alt="Detective" />
                        </div>
                        <div className="right-block">
                            <div className="title"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            <div className="name">Владимир Петрухин </div>
                            <Button variant="outline-primary">Подробнее</Button>{' '}
                        </div>
                    </div>

                    <div className="block">
                        <div className="right-block">
                            <div className="title"> Визитная карточка</div>
                            <div className="name">Lorem ipsum dolor sit amet consectet</div>
                            <Button variant="outline-primary">Подробнее</Button>{' '}
                        </div>
                        <div className="left-block">
                            <img src={Holder} alt="Detective" />
                        </div>
                    </div>
                </div>

            </div> */}
      <div className="about-block block">
        <div className="title">О нас</div>
        <div className="main-block">
          <div className="center-block">
            <iframe
              className="video-player"
              src={"https://www.youtube.com/embed/jt2m440S3Uk"}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
            {/* <YouTube className='video-player' videoId="jt2m440S3Uk"
                            opts={opts} /> */}
          </div>
          <div className="bottom-block">
            <div className="achievement-block">
              <div className="icon">
                <img
                  className="icon-block-img"
                  src={LegalityIcon}
                  alt="Легальность"
                />
              </div>
              <div className="achievement-title">Законность</div>
              <div className="achievement-text">
                Согласно действующему законодательству осуществляем свою
                деятельность при наличии государственной лицензии, соблюдая ФЗ
                РФ от 11.03.1992 N 2487-1 «О частной детективной и охранной
                деятельности»
              </div>
            </div>

            <div className="achievement-block">
              <div className="icon">
                <img
                  className="icon-block-img"
                  src={ProfessionalIcon}
                  alt="Профессионализм"
                />
              </div>
              <div className="achievement-title">Профессионализм</div>
              <div className="achievement-text">
                Более 10 летний опыт работы, в правоохранительных органах и в
                детективном агентстве, сотни успешных дел, оперативность
                выполнении поставленных задач, ответственный и индивидуальный
                подход к каждому клиенту гарантируют достижение максимального
                результата.
              </div>
            </div>
            <div className="achievement-block">
              <div className="icon">
                <img
                  className="icon-block-img"
                  src={PrivacyIcon}
                  alt="Конфиденциальность"
                />
              </div>
              <div className="achievement-title">Конфиденциальность</div>
              <div className="achievement-text">
                Гарантируем полную конфиденциальность. Полученные в ходе работы
                данные не подлежат разглашению. Для сохранения Вашей приватности
                и репутации весь материал удаляется после передачи отчета.
              </div>
            </div>

            <div className="achievement-block">
              <div className="icon">
                <img
                  className="icon-block-img"
                  src={MoneyIcon}
                  alt="Возврат_предоплаты"
                />
              </div>
              <div className="achievement-title">Возврат предоплаты</div>
              <div className="achievement-text">
                Работаем официально с заключением Договора на оказание услуг. В
                случаях, в которых не смогли достичь никакого результата по
                договоренностям, возвращаем предоплату. Таким образом, Вы ничем
                не рискуете и можете быть уверенны в нашей благонадежности.
              </div>
            </div>
          </div>
        </div>
        <div className="about-block__description--block">
          <div className="image-block">
            <img
              className="detective-img"
              src={DetectivePhoto}
              alt="Детектив"
            />
          </div>
          <div className="text-block">
            <div className="title">
              Частные сыщики работают там, где вам нужно
            </div>
            <div className="achievement-text">
              <p>
                Поиск человека — главное направление работы нашего агентства.
                Сыщики немедленно откликнутся на розыск, так как промедление
                чревато. Наши детективы найдут человека, где бы он не был.
              </p>
              <p>
                Сбор информации — мы отыщем всё, независимо от того, под какими
                замками находится правда.
              </p>
              <p>
                Семейные дела —  узнаем, какой секрет закрыт в шкафу. Мы выясним
                весь круг общения и установим образ жизни ваших близких и
                обеспечим многим другим.
              </p>
              <p>
                Поддержка бизнеса — мы выясним, является ли партнер или
                контрагент достаточно достойным и надежным, чтобы позволить
                вашей компании процветать и безопасно развиваться. Будем
                пресекать любые незаконные действия, которые идут в сторону
                бизнеса.
              </p>
              <p>
                Расследования под ключ —частный детектив проведет расследование
                в нужной Вам области.
              </p>
              <p>
                Консультации и рабочие процессы проводятся в условиях полной
                конфиденциальности.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="life-block block">
        <div className="title">Блог детектива</div>

        <Carousel className="carousel-block" variant="dark" interval={null}>
          <Carousel.Item className="carousel-item">
            <div className="carousel-inside">
              {detectiveBlogsData && (
                <DetectiveLife
                  key={detectiveBlogsData[0].slug.current}
                  data={detectiveBlogsData[0]}
                  url={url}
                />
              )}
              {detectiveBlogsData && (
                <DetectiveLife
                  key={detectiveBlogsData[1].slug.current}
                  data={detectiveBlogsData[1]}
                  url={url}
                />
              )}
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="carousel-inside">
              {detectiveBlogsData && (
                <DetectiveLife
                  key={detectiveBlogsData[2].slug.current}
                  data={detectiveBlogsData[2]}
                  url={url}
                />
              )}
              {detectiveBlogsData && (
                <DetectiveLife
                  key={detectiveBlogsData[3].slug.current}
                  data={detectiveBlogsData[3]}
                  url={url}
                />
              )}
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <div className="carousel-inside">
              {detectiveBlogsData && (
                <DetectiveLife
                  key={detectiveBlogsData[4].slug.current}
                  data={detectiveBlogsData[4]}
                  url={url}
                />
              )}
              {detectiveBlogsData && (
                <DetectiveLife
                  key={detectiveBlogsData[5].slug.current}
                  data={detectiveBlogsData[5]}
                  url={url}
                />
              )}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <section className="maps-section">
        <div className="main-section-title section-title-text">
          Где мы находимся?
        </div>

        <YandexMap />
      </section>
    </>
  );
});
