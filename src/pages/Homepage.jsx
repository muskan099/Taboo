import CurrencyFormat from 'react-currency-format';
import React, { useEffect, useState } from "react";
import { Row, Col, Container, Modal , Button,} from "react-bootstrap";
import { toast } from "react-toastify";
import Slider from "react-slick";



import { tabooMarketData } from "../helpers/TabooHelper";

const onClose = () => {
  window.close();
};

const Homepage = () => {
  const isAbove18 = !!localStorage.getItem("below-18");
  console.log(isAbove18);
  const [showImg, setShowImg] = useState(false);
  const [show, setShow] = useState(false);
  // const [isBelow18, setIsBelow18] = useState(isAbove18 ? false : true);
  const [isBelow18, setIsBelow18] = useState(false);
  const [ageError, setAgeError] = useState(false);

  const[marketData,setMarketData]=useState(false)

  const handleClose = () => setShow(false);
  const handleAbove18 = () => {
    setIsBelow18(false);
    localStorage.setItem("below-18", false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("0x9abdba20edfba06b782126b4d8d72a5853918fd0");
    toast.success("Smart Contract Copied To Clipboard");
  };

  useEffect(async()=>{
     let mdata=  await tabooMarketData();

     setMarketData(mdata);


  })

  const [showModal1, setShowModal1] = useState(false);

  const handleModalClose1 = () => {
    setShowModal1(false);
  };
  const settings = {
    fade: true,
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 2000,
    autoplay: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    
  };
  return (
    <>
    {/* <section className="slider-main-sec-new">
    <Slider {...settings} className="slider-outer-banner">
          <div>
             <img className="main-bg-zoom" src="images/slider/Slide1BG.png" alt="" />
             <div className="slider-inner-content">
                 <div className="first-div">
                    <img className="common-text text-img" src="images/slider/Slide1txt.png" alt="" />
                    <img className="common-card slider-card" src="images/slider/Slide1txt2.png" alt="" />
                    <img className="registration-img" src="images/slider/registration.png" alt="" />
                    <img className="bottam-logo" src="images/slider/Taboo logo.png" alt="" />
                 </div>
             </div>
          </div>
          <div>
          <img className="main-bg-zoom" src="images/slider/Slide2BG.png" alt="" />
          <div className="slider-inner-content">
                 <div className="first-div">
                    <img className="text-img" src="images/slider/Slide2txt.png" alt="" />
                    <img className="common-card slider-card1" src="images/slider/Slide2Card1.png" alt="" />
                    <img className="common-card slider-card2" src="images/slider/Slide2Card2.png" alt="" />
                    <img className="bottam-logo" src="images/slider/Taboo logo.png" alt="" />
                 </div>
             </div>
          </div>
          <div>
          <img className="main-bg-zoom" src="images/slider/Slide3BG.png" alt="" />
          <div className="slider-inner-content">
                 <div className="first-div">
                    <img className="text-img" src="images/slider/Slide3txt.png" alt="" />
                    <img className="common-card slider-card" src="images/slider/Slide3card1.png" alt="" />
                    <img className="common-card slider-card3" src="images/slider/Slide3card2.png" alt="" />
                    <img className="common-card slider-card4" src="images/slider/Slide3card3.png" alt="" />
                    <img className="common-card slider-card5" src="images/slider/Slide3card4.png" alt="" />
                    <img className="bottam-logo" src="images/slider/Taboo logo.png" alt="" />
                 </div>
             </div>
          </div>
          <div>
          <img className="main-bg-zoom" src="images/slider/Slide4BG.png" alt="" />
          <div className="slider-inner-content">
                 <div className="first-div">
                    <img className="text-img" src="images/slider/Slide4txt.png" alt="" />
                    <img className="common-card slider-card" src="images/slider/Slide4card.png" alt="" />
                    <img className="bottam-logo" src="images/slider/Taboo logo.png" alt="" />
                 </div>
             </div>
          </div>
          <div>
          <img className="main-bg-zoom" src="images/slider/Slide5BG.png" alt="" />
          <div className="slider-inner-content">
                 <div className="first-div">
                    <img className="text-img" src="images/slider/Slide5txt.png" alt="" />
                    <img className="common-card slider-card6" src="images/slider/Slide5Card1.png" alt="" />
                    <img className="common-card slider-card7" src="images/slider/Slide5Card2.png" alt="" />
                    <img className="common-card slider-card8" src="images/slider/Slide5Card3.png" alt="" />
                    <img className="common-card slider-card9" src="images/slider/Slide5Card4.png" alt="" />
                    <img className="common-card slider-card10" src="images/slider/Slide5Card5.png" alt="" />
                    <img className="common-card slider-card11" src="images/slider/Slide5Card6.png" alt="" />
                    <img className="advantage-img" src="images/slider/take-advantage.png" alt="" />
                    <img className="bottam-logo" src="images/slider/Taboo logo.png" alt="" />
                 </div>
             </div>
          </div>
    </Slider>
    </section> */}



      <section className="banner-section">
        <Container>
          <Row>
            <Col>
              <div>
                <img
                  src={"images/Logo_big.png"}
                  alt="logo"
                  className="taboo-logo"
                />
                <h4>TABOO IS THE PLAYBOY OF CRYPTO</h4>
                <Button
                  className="common-btn taboo-banner-btn"
                  variant="outline-success"
                  // onClick={()=>setShowModal1(true)}
                >
              Hot News
            </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="total-cap-banner">
          <ul>
            <li>
              <div>
                <p>Total Market Cap</p>
                <h5>
                  
                  <CurrencyFormat value={marketData.market_cap} displayType={'text'} thousandSeparator={true} prefix={'$'} />

                 </h5>
              </div>
            </li>
            <li>
              <div>
                <p>Current Price</p>
                <h5>${marketData&&marketData.price}</h5>
              </div>
            </li>
            <li>
              <div>
                <p>Volume 24H</p>
                <h5>
                <CurrencyFormat value={marketData.volume} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                  
                  </h5>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="partner-section">
        <Container>
          <Row>
            <Col>
              <div>
                <ul className="partner-list">

                  <li>
                  <a href="https://www.bloomberg.com/press-releases/2022-07-06/taboo-launches-its-marketplace-and-announces-the-first-ever-mansion-party-with-supermodels">
                    <img
                      src="data:image/png;base64,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"
                      alt="example"
                    />
                  </a>
                  </li>

                <li>
                <a href="https://finance.yahoo.com/news/taboo-launches-marketplace-announces-first-060000650.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvLnRoLw&guce_referrer_sig=AQAAAG3WZCvu5QC4cRHz8RKaaCbh2JcVQZ2fR9qE7y5nuiY24H0ASC1aJOod8hfBaZp-SJmZIMtptthRHgCiBqwuqk0fpXBp9u9yMk20BjDi-jGO6_XeUGCsGxvbnsh69qxbeE7KXLNDEgzsfutU_a2VRg9GpT_0e9wsmPMbWhMpJSIm">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcoAAABuCAMAAACQuKOiAAAA9lBMVEX///8jKjFgAdJbANH59P4eJi0gJy9GS1Hw8fEbIyv8/PxWAND+/P8YICgQGiMTHSXg4eKfoqRLAM3PtvKRX9/IystxIdfn2fk0OkDp6uqMWN5ZXmJmam4vNj24uryFiIuYXOOPkpXbyvWCR9v79/5wdXh9PtqGT90AEBsmLzbw5vuwsrTX2Nn07PwACBbZw/V0MtdPVFrLrvG0iOu7lO0ACBfi0vd4fIF2KNlsFdZTWF09Q0m2j+vEo+6qfuenqaydauPQsvKmeOZ2Ote3mOqAStqlheSdduNtLdaTZuB2OdjIp++kfuWCTtvSu/KQXN8AAACiaucXK7+TAAAPLElEQVR4nO1daXvauhI2Fna8YBuSGEMAUwgQswWyQSjZmqZretPT//9nrldpZJsESA4p9+r90OexJI8cvZ7RzGhMOY6BgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGB4X8Myns/AMNaUKRyfjAoS1JIoFK2C/0BY3MJtLIRWhucNZcFAO2SXZU1H6WG5DUoddHQNOOkvMGH21Jkj3YjfN/crMPiLoGai5rLDe1YEzM+ZLnvtVQd/1rTzc093ZYiu4/4AOhwc7OOdnmCs7BRMU+ckEcXYtd2mxp6eCnvSJt7vO3Eu1CZvVMBlb2w1a5pmQxNpVnC3Ir1jT3eluJdqJwgQiTaD+3rYEfOQHhU3jr4Uqtu7PG2FO9BZescKmUzaCxXdYpJXysLpE2uMi/2ebwHlb0ZUMpO6DjbTiZJJdPKFfAeVD4BpUSnQVu5otFU+gbW7uK9Up5u6vG2Fe9AZWsMtkp+GDQOLgCLxrEL3fNg69iDnbPI8gW8A5UWUEr1Jmy0j4lp1aeDfH5gD9zmfCXgUjbsDT3d9uIdqPwAlHI3jEQkHEBmxIwdODj+v+W2psmaMR9s6OG2GJunMgd3yk7Y6DKGN8U25apKg0a7bjLr+jI2TyWMRHbDSIQrn+CgUoin6BSJhSHLYPNU8hBRKj1fErB9/T/TwKxFMKS7SMckXKhc9vGSV1WVP+vlXAeSDMgmqGyNDhEeGUMu+3TE+72He9lktz+kZd3P/CGX5730k5YR2CnVIBKRJGlAog5xIAUIuyL4qqnQ14pZ1S8uLkqFFPqVfGPuXFzoJ/1USbFryfzoSZr301K9itSvZDxZO9OBQpkIRTHbNbfH6VbtNY1Hr6NiXFI9TYQ7kG++clZHDZcPqYcW98RH/fwnisovXG5vFg5F6ocePWN2cqkSOeplM8vFkRvekSFI5a+HKYR3YCTiz1F2dN2AoYju4cLbMsvVCz2AU/NcWKVxrEcNDU6xu7pvlwXtYhojUzG7uuZrumA4dbez4kQ3zn0L3saS9AKn3GZ0f7BoyPU4mZJdcgxZDCbStSlhTBlUdT3oEWXD+WiulfJ/JDvOzIIdR8DR9/RieINgxpPf+3QZXRT3aK0cXkGPpDiBLFlHUIxHVadJPxE3POOpITyanSb4toqg/8bvLmtiJglj6lMZeUNiKaASO7pCgyvoAh6u0T5uvqqRvozWNRUsSdgJqMSSM7euWDxa1E7yUJJizg0gKiM6+KXJ1wUqbSwY1XXOyCeXZNnuQHsLrNTIW99Denl5voPTZjSVfJE6r+DRJeEy9ziLi3FV85FSOquTGMKjDzHrz93D3mCCcjzPEyz/C1RmpjbMKmRkyOVgh5Ypd/uViI84lZlu45ZKGmrwnFuqOwIlKqNHveaJEX8H5Zq9BpdEg9BnsKTneD3RgbuMvQSTQHNiVMZ0ylXTSG7uBiVpctX+Hkw8it8eyJjRdjr7GUx31HuZyui1T1JZit0mn+BVNOdxkYKMVz1JZS3GiE7CIalCJ/kBlbYox7s8ne2vTuUTyUnPrkkztp6+T5H9nba+i6hM4DwUerNgDCJcNpNqGwwpUnp5DbrUPe41VCasslAIJ8mfGPE+OCxOZUKS2I34kKpJSSGVti4kurx7j1dPS7W+Ef3bx60jTDAaW1zu1zNEvkwl+hIw9bhwBH6J0qxrKOQI7pdfgFKOJ6+iMgF5J1AmafrMoDQqk2yFro1ST6EroHJQS9FJX7xObbVLgSww+ox3tX3yzl+5xBb55/CiVs683ZabjBcOQd+DmVt3S+g29aa5D3iee1sqxVqQXOg/Q1JmKSrDIZwdN70efColcLqq6Y6jE2nG6gervQOyfF+jNrIVuTQAxfWWHcU3vDQq6Sv3dXBVO+a6Uld3/rx7RXoINe8h8bCpyUZhoxuMGHBdZcOD016VSs+p5aCrFNwoyzQfS1CZkW+9IVLs4E0UxIhKkv0X9Xah3y+0dTyLtnpF2VeyWvvhhnROmr5lKR1A6PL+7K5I8ZCg0h00hmT6RI2+A6OoFg8OLiFTRd9Nhu+Myh/+7lCvRPSicT3AuHoXbaJSvV6fgqWu1n30X6RS80JFwFNwOm1DyyfrtcrHDLWtpVFpOAYlSfdfin4XNAm6XtvpOu5Al8ryR/xcmb5vcMu3OKRao95hQvanWZA2yf0gK3hNZTvRbM8aZofWNfROEh7sUdOyJveg4Ycr9AFIGY+sXs8aHYKme45ywRD/MHGHTL4RvslueQb4RY/4D1mc7XmWSrlqDsxCTQANsSGiXjG987L+HHgvKVRqdVdSA7g/AZVtcJdRK7iiBqZZv3CpM/EcxMvBEY3YXT31SIhDwYv/9B03HPS4IXFf0c8wJshZwPGIUYk6/iDY8tvVOLAN7odSQBs6asF8hetsBTtg9pRYgFnoqrYO4WtDRSn5GsnBgpTJc1TKVW+g0icMyBVPElaYjCgWQll5QFySSs1P8CgF8joZdcVzhMlborfzoapJA8V9jOhmEAFJO/hPWN2JJTsU6vjux1eywr+8SA9fgehuj4Qrca28CkackvsOctAn/ox90ewR3JOz3+BVhJv4i0ZHIsAZWotKoRR4ikod645ccdfVJKokk3IgUG+SoFKuhpLwZAGVt0RLjSqVkpNw8l+rulofwKxEtwtrVJT9h6yWFxX08DUaNznuEzGDcN3uFlEZZeqsMaSSSAE0wW34AUQi6AMZksN0o29BC7TlRTrttwaVJ+GYW9zkU9nHmRsBVkHb84XZHiOqsK2DJlcSOA2f055MmWzH3XmEUhcPL61OJfByfmThW+9vcqeYhO/QmD1hXY7lYMehHzLENtijEkiBU2P3GV1xTazoCBJ0Q57GN7rNThFj9pWjsAaVkcr18br6VJIknNgAExCVS1CpReMatIHFdUUZrR17WrDPCqLgQyTWWKitnlbP4r2R55+4HLBznk9xHZFAMnAehj+jYTEqO+EoYj0pKtFPODWeyzXlTfIKwYMtHPiGfg/1yU/sBGwNKiNdssFe6W5jBex91KgtC1OXoBJniQqYjIBKg1zSTzt4PnIV16CS+4PJUx9AQiBghVD5Bd6T7axEJXghoBRIJdiU4ZBPuPUwnlRP4DVU4iUMqNTxHZRVnC7UShFTiU2kT+UUU6nFqDRfoHINF5brkUXsWNdkb/QiBOJX4rJhH2QrXE0r+TGcGXvPrk/TJJ4R5Aybf7T/4vd+b6aVMCZYUisXUbmUVobmlYK8ViHEIeFyn3iVQQqbkDCDW9gVvmVFKr8DnnrE0zmHbs8DmGifdnty1h+0u8vfp2ro6lTK6VoJ3B4Z7nAS8S/nC6nEkmJ7pUw7sGCvFGs7aViHSuBJgpj8wO97AhEj2SyHxO1diso9PAF/R+YFZyWnXA94wSR3Duz9L0/qWfCASD1NqS14MwMLPlgQ4QkmcWmWphJ4sN1b+mlB1FKWpLIHP6tRDrDe94OpJxKBElogDX4VLV+WxCLLUWmRuL74FI7IES/YTz6AhNBdxGWPGAkv89T6Sl3+e1SaIGVAzpBN8pnY0lSCvJ38kZQHKApXxk/rZyXeCA9JIqPi0tY9qAq4CuKR3j0YuBSVua8klTO79q3jEKT/grAHvE9//HRPtkmY9I7boHKjz1biz3g7KsktXkPAgGTPSePSVJJEq+v47NjBayHlC2VOwj5UxsGarwzyq4eTENkxn0D01l/Div7xY7PZvC7Cmo+lqATJH1fKz8fR6PFQBdR5u6MFM3L81dNo7w7k0z226Y9jf/2LVFJpWi3TMAem3XZAin1pKoEL68p2Kn3TNO26eEzlYHEditK/KBVeV3p9w8eAxpGNs36CJUfq7q6qUuZ4OSp7vykpKiUkjDPOodygmo+eZkI94Y83oFJcQCVnwvMMUT++uHCo2OEZDzZGpQ0lZTTn+PjYMQT/ZARn7jJy7dbMl/NmwxEF3am+5sdM4MeKAW5w33naRroqlZRaJhBYACtZQkQT14Tcot+JQrw3pPKFIoIVqOSqafGjR6UCCrtER9up7uh6yHepYa9eRhDiILaKRbITPbfCy1OZXVwigH6HEePimpGg0GCDVKaf/a9FpVlKqfrwj57Lc9gjyCBrpzuFdRVzotJLdwD69orPcbkklVzvywIpvkPjo5Ww8xj+CVeTqit4CwO7aK/kwBHUa6nkCt1kcU9Q22MnCifxU5TW1kouRhc4v+ByZ/wzWJZKKqyBlMxIpeyiGiE1sMB0EecZF8dbaqV7V7JOjiz8KlRKdTnBWECla2LTuRRe8wtDp5RaFqkAPJvgcmEVAaHyIE5luqVGVFn8MK3CEqlRKAq8afQ59g0D98ZUcvlKnEttjpNyq1DpVTSnU+kle9OqJzX5Nb8V1YJUqrH4u3VNe63q/jk+TlmeSi+YiDGFdmOV561Tnjb1XpkPVtvhD9J5mvwb3pZKrlyhdcb5OKgskU5PUskp9j+x1yIqaVbsWsK/Eo9PXvdN7xn8YjGRFRuOSWiAdu9bo6KKfKgz7/Of3+EVUn9iA4ubjnAePNcb7xI23cimYyVmap3BQAWp/CeQRu8dqFHiLuVPyHflKBctUFQaUXP4+Y8T5azxaYUtR7caFZKSudV1MWRTlI/bEoclaWFcqUeSZUylGEnSwTdA5faFIUQvhiho/+DYsVx3dEHEXaLsGLev/M2vITBef1L6rfuiH7HMZvuuSbTuPoS4c69y59HVh2gHy13hpisopnd2GQY+s8uzpI300Do9nAVjZsX9Uazzejxz8Sc1nV6ukFw0WA2pjlsrHgFKYY4bIgJMcif8XlpplLqiXznZ/ehpyhSPqvqKQyTvRLXo/ZOoZd6ATmi54Zpnj3OX0VobOjVSwe3xZvG7Kut8MEIDULmbvsS5XvPT48h67W9L5obW6NSVk/axXYSWN9XeJO3rytywN9zgz1sqebswnRbsN/j0Vimbt41pu56SAJDMvtszbfQHb/EjfKRIEl0+s8gMfz1yZH9S40aNYasAf5zqxcoLhr8Z5MRJvWb2dZsBf5wqeRDIsEUgVXfojtnXbQY45GJOz3aDFNChw/SgkmE7AApC1MeXhzP8vXhQ8X/ywE9eHs7w96LXxEjmtxkYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBi2EP8Fuqyi/NejDPQAAAAASUVORK5CYII="
                      alt="example"
                    />
                  </a>
                </li>
                  <li>
                    <a href="https://www.nasdaq.com/press-release/taboo-launches-its-marketplace-and-announces-the-first-ever-mansion-party-with">
                    <img
                      src="data:image/png;base64,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"
                      alt="example"
                    />
                    </a>
                  </li>
                
                  <li>
                    <a href="https://www.newsbtc.com/press-releases/taboo-announces-its-first-ever-mansion-party-with-supermodels-are-you-attending…">
                    <img
                      src="data:image/png;base64,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"
                      alt="example"
                    />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="banner-section-2">
        <Container>
          <Row className="">
            <Col md={4} sm={6} xs={12}>
              <div
                className="team-side-box about-box-new"
                id="taboo-about-us-box"
              >
                <h2>
                  <span>What Is</span> <span>Taboo</span>
                </h2>
                <p>
                  At TABOO, nothing is forbidden. We aim to promote personal
                  empowerment, inspiring our holders to be confident, happy, and
                  excited to explore their taboo fantasies. Put simply, Taboo
                  will not only be a platform to discover adult content from
                  carefully selected models, but also a gateway to some of the
                  world’s most beautiful NFTs, with a beautiful TABOO Metaverse
                  to come The best bit? That would be the full integration of
                  NFT blockchain technology, the fiat on-ramp for easy purchase,
                  breath-taking Virtual Reality experiences and the finest
                  content, making Taboo a genuine market disruptor within the
                  adult industry
                </p>
                <div className="d-flex align-items-center">
                  <a
                    href="/explore"  className="common-btn white-btn"
                   
                  >
                    Marketplace{" "}
                  </a>
                  <a
                    href="images/whiteWallpaperLink.pdf"
                    className="common-btn white-btn"
                    target={"_blank"}
                  >
                    Whitepaper{" "}
                  </a>
                </div>
              </div>
            </Col>
            <Col md={3}></Col>
            <Col md={5} sm={6} xs={12}>
              <div className="nft-side-about-us" id="taboo-about-us-nft">
                <h5>KHLOE TERAE NFTs</h5>
                <img
                  className="img-fluid"
                  src={"images/White-frame.png"}
                  alt="about-Image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="">
        <Container>
          <Row>
            <Col>
              <div className="main-timeline">
                <ul className="inner-roadmap-list">
                  <div
                    className="aos-init aos-animate"
                    data-aos="slide-left"
                    data-aos-duration="800"
                    data-aos-delay="600"
                  >
                    <h2>
                      <span>Road</span>
                      <span>Map</span>
                    </h2>
                  </div>
                  <li
                    className="aos-init aos-animate show-roadmap-content"
                    data-aos="fade-left"
                    data-aos-duration="20"
                    data-aos-delay="20"
                  >
                    <button className="button-plus Q1">
                      <img src={"images/plus-24.png"} alt="icon" />
                    </button>
                    <div>
                      <h4>Q2 2022</h4>
                      <ul>
                      <li>
                        Release of highly anticipated new UI/UX for main website
                      </li>
                        <li>
                        - Launch of TABOOPUNKS NFTS on Openseas and completion of claim rounds for whitelisted TABOOPUNK NFT collection holders 
                        </li>
                        <li>
                        - Release of TABOO’s innovative V1 Marketplace with integrated Tiering System and NFT Collection TABOOPUNKS wallet connect integration
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li
                    className="roadmap-new-box aos-init aos-animate show-roadmap-content"
                    data-aos="fade-right"
                    data-aos-duration="20"
                    data-aos-delay="20"
                  >
                    <button className="button-plus Q2">
                      <img src={"images/plus-24.png"} alt="icon" />
                    </button>
                    <div>
                      <h4>Q3 2022</h4>
                      <ul>
                        <li>
                        	- Taboo Digital Periodical (Magazine) will begin.
                        </li>
                        <li>- Taboo’s 1st Mansion Party for Top Tier holders begins (scheduled for August 12-15th)
                            with major press releases and continual global marketing pushes</li>
                        <li>- Live convention events and formal marketing to industry specific counterparts</li>
                        
                        <li>
                          	- Unveiling of additional utilities for TABOOPUNKS NFT Collection for upcoming live events, marketplace, and future metaverse access
                        </li>
                        <li>- Marketplace V1 additional feature adds – Buy TABOO Swap, Auctions, Resell NFTS</li>
                        <li>
                        	- More Photoshoots with Model Partners for exclusive NFT Content
                        </li>
                        <li>
                        	- Certik Audit completion
                        </li>
                        <li>
                        	- Creation and release of TABOO Merchandise Store 
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="aos-init aos-animate show-roadmap-content"
                    data-aos="fade-left"
                    data-aos-duration="20"
                    data-aos-delay="20"
                  >
                    <button className="button-plus Q3">
                      <img src={"images/plus-24.png"} alt="icon" />
                    </button>
                    <div>
                      <h4>Q4 2022</h4>
                      <ul>
                        <li>
                        	- Launching V2 of the marketplace, with full features
                        </li>
                        <li>- TABOOVerse Metaverse introductions and progress videos with sharing of benefits for early access to holders </li>
                        <li>- More Industry and Crypto partnerships</li>
                        <li>- More top CEX's.</li>
                        <li>- Strategic Crypto Partnerships</li>
                        <li>- Billboard campaigns and major brand awareness initiatives with model partners</li>
                        <li>- Acquiring of additional model partners in every quarter</li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="aos-init aos-animate show-roadmap-content"
                    data-aos="fade-right"
                    data-aos-duration="20"
                    data-aos-delay="20"
                  >
                    <button className="button-plus Q4">
                      <img src={"images/plus-24.png"} alt="icon" />
                    </button>
                    <div>
                      <h4>Q1 2023</h4>
                      <ul>
                        <li>- Marketplace V3, with VR integration.</li>
                        <li>- TABOOVerse Metaverse introduction</li>
                        <li>- TABOO Festival live event for all TABOOPUNK NFT Holders</li>
                        <li>-	Cross chain SDK integration will have begun by now, with cross chain functionalities Including chains like Polygon, Harmony, Cardano, and more.</li>
                      </ul>
                    </div>
                  </li>
                  
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="how-to-buy-sec">
        <div
          className="copy-box aos-init aos-animate"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="500"
          style={{ zIndex: "10", cursor: "pointer" }}
        >
          <img src={"images/copy.png"} alt="" onClick={copyToClipboard} />
          <div>
            <h4 onClick={copyToClipboard}>Taboo Smart Contract</h4>
            <p onClick={copyToClipboard}>
              0x9abdba20edfba06b782126b4d8d72a5853918fd0
            </p>
          </div>
        </div>
        <Container>
          <Row>
            <Col>
              <div
                className="inner-box-how aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <div
                  className={` how-it-image-box ${
                    showImg ? "full-img-show" : ""
                  } `}
                >
                  <img className="small-img" src={"images/2.png"} alt="" />
                  {/* <img
                    className="full-img"
                    src={"images/full-View.png"}
                    alt=""
                  /> */}
                  {showImg && (
                    <iframe
                      width="700"
                      height="350"
                      src="https://www.youtube.com/embed/fTZBo_V0sTk?autoplay=1"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  )}
                  <button
                    className="show-btn"
                    onClick={() => setShowImg(true)}
                    style={{ display: showImg ? "none" : "block" }}
                  >
                    <img src={"images/Polygon.png"} alt="" />
                  </button>
                  <button
                    className="hide-btn"
                    onClick={() => setShowImg(false)}
                  >
                    X
                  </button>
                </div>
                <h3>How To Buy</h3>
                <p>
                  The process is simple, hit the BUY NOW button below and join
                  the world of exclusive content.
                </p>
                <a
                  href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x9abDbA20EdFbA06B782126b4D8d72A5853918FD0"
                  target={"_blank"}
                >
                  Buy Now
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="team-sec-new">
        <Container fluid>
          <Row className="align-items-center">
            <Col
              xxl={3}
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={12}
              className="order-2 mt-auto mb-auto ml-0"
            >
              <div
                className="team-side-box aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1800"
                data-aos-delay="500"
              >
                <h2>
                  <span>Our</span>
                  <span>Team</span>
                </h2>
                <p>
                  Taboo’s founders and core-staff are all serial entrepreneurs,
                  from across multiple industries, that have all found a
                  connection within the world of Cryptocurrency. What each one
                  of them has in common is a relentless commitment to excellence
                  and the vision to build the world’s finest adult entertainment
                  experience.
                </p>
              </div>
            </Col>
            <Col xxl={9} xl={9} lg={9} md={9} sm={12} xs={12}>
              <div>
                <ul className="team-list">
                  <li>
                    <div>
                      <img
                        className="aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration="900"
                        data-aos-delay="200"
                        src={"images/Team/teamn.jpg"}
                        alt="team"
                      />
                      <div className="content-team">
                        <h4>James</h4>
                        <p>CMO/CEO</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        className="aos-init aos-animate"
                        data-aos="fade-down"
                        data-aos-duration="800"
                        data-aos-delay="250"
                        src={"images/Team/teamn.jpg"}
                        alt="team"
                      />
                      <div className="content-team">
                        <h4>Majid</h4>
                        <p>COO/Co-Founder</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        className="aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        src={"images/Team/teamn.jpg"}
                        alt="team"
                      />
                      <div className="content-team">
                        <h4>Paul</h4>
                        <p>Developer</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        className="aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="250"
                        src={"images/Team/teamn.jpg"}
                        alt="team"
                      />
                      <div className="content-team">
                        <h4>Matt</h4>
                        <p>Community Manager</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        className="aos-init aos-animate"
                        data-aos="fade-down"
                        data-aos-duration="900"
                        data-aos-delay="500"
                        src={"images/Team/teamn.jpg"}
                        alt="team"
                      />
                      <div className="content-team">
                        <h4 className="p-0">Nadeem</h4>
                        <p>CTO</p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div>
                      <img
                        className="aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="500"
                        src={"images/Team/teamn.jpg"}
                        alt="team"
                      />
                      <div className="content-team">
                        <h4>
                          Khloe <br></br> terae
                        </h4>
                        <p>Brand Ambassador</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        className="aos-init aos-animate"
                        data-aos="fade-down"
                        data-aos-duration="900"
                        data-aos-delay="500"
                        src={"images/Team/teamn.jpg"}
                        alt="team"
                      />
                      <div className="content-team">
                        <h4>Conrad</h4>
                        <p>Legal Aid/Advisor</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        className="aos-init aos-animate "
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        src={"images/Team/teamn.jpg"}
                        alt="team"
                      />
                      <div className="content-team">
                        <h4>Eli</h4>
                        <p>Social Media Manager</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="modal-comming-soon "
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton className="border-none"></Modal.Header>
          <Modal.Body>
            <div className="outer-div">
              <img src={"images/coming-soon.png"} className="img-fluid" />
              <h5>This page will be Added Soon</h5>
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="modal-comming-soon below-18-popup"
          backdrop="static"
          keyboard={false}
          show={isBelow18}
          onHide={handleAbove18}
        >
          <Modal.Header className="border-none p-0"></Modal.Header>
          <Modal.Body className="outer-age-box">
            {!ageError ? (
              <>
                <div className="outer-div">Are You Above 18 Years Of Age</div>
                <button onClick={() => setAgeError(true)}>No</button>
                <button onClick={handleAbove18}>Yes</button>
              </>
            ) : (
              <div className="outer-div mb-0">
                <h3>Sorry...!!!</h3>
                You Can't Access The Website..!!
              </div>
            )}
          </Modal.Body>
        </Modal>
      </section>

      <Modal
          show={showModal1}
          onHide={handleModalClose1}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="video-new"
        >
          <Modal.Header closeButton={handleModalClose1}></Modal.Header>
          <Modal.Body>
            <div>
            <video loop autoPlay>
                <source
                  src="images/Taboo-video.mp4"
                  type="video/mp4"
                />
                </video>
            </div>
          </Modal.Body>
        </Modal>
    </>
  );
};

export default Homepage;
