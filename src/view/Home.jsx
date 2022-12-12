import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import styles from "./css/Home.module.css";
import Top1 from "./imagens/top1.png";
import Top2 from "./imagens/top2.jpg";
import Top3 from "./imagens/top3.jpg";

const items = [
  {
    src: "https://hbomax-images.warnermediacdn.com/2021-11/hero_dsk_0.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=2800",
    
    key: 1,
  },
  {
    src: "https://i.ytimg.com/vi/8d2EmV46mmo/maxresdefault.jpg",
    
    key: 2,
  },
  {
    src: "https://hbomax-images.warnermediacdn.com/images/GYGP7pwQv_ojDXAEAAAFc/tileburnedin?size=1280x720&partner=hbomaxcom&v=bd4e8b8745a1fcccbb19d76012ae572e&host=art-gallery.api.hbo.com&language=pt-br&w=1280",
    
    key: 3,
  },
];

function Home(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          className="d-block w-100 ImageCarousel"
          src={item.src}
          alt={item.altText}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
  document.title = "Home";
  return (
    
    <Container className={styles.homePage}>
      <Col className={styles.slideCarousel}>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          {...args}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </Col>

      <Col>
        <h2><span>#</span> Lançamentos<span></span></h2>
        <p></p>
        <Col className={styles.card}>
          <div className="col-sm px-4">
            <img alt="Card" src={Top1} />
            <h5>Vingadores: Ultimato</h5>
              <a>
                Após Thanos eliminar metade das criaturas vivas em Vingadores:
                Guerra Infinita, os heróis precisam... Ler mais
              </a>
            
          </div>
          <div className="col-sm px-4">
            <img alt="Card" src={Top2} />
            <h5>Liga da Justiça</h5>
              <a>
                impulsionado pela restauração de sua fé na humanidade e
                inspirado pelo ato altruísta do Superman (Henry Cavill), Bruce
                Wayne (Ben Affleck) convoca sua nova aliada Diana Prince (Gal
                Gadot)... Ler mais
              </a>
            
          </div>
          <div className="col-sm px-4">
            <img alt="Card" src={Top3} />
            <h5>Hereditário</h5>
            
              <a>
                Após a morte da reclusa avó, a família Graham começa a desvendar
                algumas coisas. Mesmo após a partida da matriarca... Ler mais
              </a>
            
          </div>
        </Col>
      </Col>
      <Col className={styles.top10}>
      <h2><span>#</span> TOP<span>10</span></h2>
        <p></p>
        <Col className="col-sm px-0">
        <ul>
          <li><span>1.</span> Top Gun: Maverick</li>
          <p></p>
          <li><span>2.</span> Elvis</li>
          <p></p>
          <li><span>3.</span> Sonic 2 - O Filme</li>
          <p></p>
          <li><span>4.</span> Arremessando Alto</li>
          <p></p>
          <li><span>5.</span> Red: Crescer É uma Fera</li>
          <p></p>
          <li><span>6.</span> Batman</li>
          <p></p>
          <li><span>7.</span> Continência ao Amor</li>
          <p></p>
          <li><span>8.</span> Doutor Estranho no Multiverso da Loucura</li>
          <p></p>
          <li><span>9.</span> O Projeto Adam</li>
          <p></p>
          <li><span>10.</span> Animais Fantásticos: Os Segredos de Dumbledore</li>
        
        </ul>
        </Col>

      </Col>
    </Container>
  );
}

export default Home;
