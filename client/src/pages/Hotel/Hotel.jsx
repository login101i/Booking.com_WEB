import { useState } from "react";
import { useLocation } from "react-router-dom";

import { FooterInfo1, Navbar } from "../../components";
import { Header } from "../../components/Header";
import { MailList } from "../../components";
import { FooterInfo2 } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "../../hooks/useFetch";

import "./hotel.css";
import { Text } from "../../sharedComponents";

export const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const id = location.pathname.split("/")[3];
  console.log(id);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  console.log(data);

  const {
    _id,
    name,
    type,
    city,
    address,
    distance,
    photos,
    title,
    desc,
    rating,
    rooms,
    cheapestPrice
  } = data;

  const photosGallery = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1"
    }
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? photos.length : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photos.length ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <>
      <div className="headerContainer">
        <Navbar />
        <Header type="list" />
      </div>
      {loading
        ? "loading"
        : data && (
            <div className="hotelContainer">
              {open && (
                <div className="slider">
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="close"
                    onClick={() => setOpen(false)}
                  />
                  <FontAwesomeIcon
                    icon={faCircleArrowLeft}
                    className="arrow"
                    onClick={() => handleMove("l")}
                  />
                  <div className="sliderWrapper">
                    <img
                      src={photos[slideNumber]}
                      alt=""
                      className="sliderImg"
                    />
                  </div>
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className="arrow"
                    onClick={() => handleMove("r")}
                  />
                </div>
              )}
              <div className="hotelWrapper">
                <button className="bookNow">Zarezerwuj teraz !</button>
                <h1 className="hotelTitle">{name}</h1>
                <div className="hotelAddress">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{address}</span>
                </div>
                <span className="hotelDistance">
                  Excellent location – 500m from center
                </span>
                <span className="hotelPriceHighlight">
                  Zarezerwuj teraz a otrzymasz darmowy transport z lotniska.
                </span>
                <div className="hotelImages">
                  {photos?.map((photo, i) => (
                    <div className="hotelImgWrapper" key={i}>
                      <img
                        onClick={() => handleOpen(i)}
                        src={photo}
                        alt=""
                        className="hotelImg"
                      />
                    </div>
                  ))}
                </div>
                <div className="hotelDetails">
                  <div className="hotelDetailsTexts">
                    <h1 className="hotelTitle">{name}</h1>
                    <p className="hotelDesc">{desc}</p>
                  </div>
                  <div className="hotelDetailsPrice">
                    <h1>Doskonały na jedną noc</h1>
                    <span>{desc}</span>
                    <h2>
                      <b>{cheapestPrice} zł</b> (1 noc)
                    </h2>
                    <button>Zarezerwuj teraz !</button>
                  </div>
                </div>
              </div>
              <MailList />
              <FooterInfo1 />

              <FooterInfo2 />
            </div>
          )}
    </>
  );
};
