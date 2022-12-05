import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container,
    Row,
    Col,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';
import "./css/Home.css";

const items = [
    {
        src: 'https://hbomax-images.warnermediacdn.com/2021-11/hero_dsk_0.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=2800',
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
    },
    {
        src: 'https://i.ytimg.com/vi/8d2EmV46mmo/maxresdefault.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: 'https://hbomax-images.warnermediacdn.com/images/GYGP7pwQv_ojDXAEAAAFc/tileburnedin?size=1280x720&partner=hbomaxcom&v=bd4e8b8745a1fcccbb19d76012ae572e&host=art-gallery.api.hbo.com&language=pt-br&w=1280',
        altText: 'Slide 3',
        caption: 'Slide 3',
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
                <img className="d-block w-100 ImageCarousel" src={item.src} alt={item.altText} />
                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    return (
        <Container className="Homepage">

            <Col className="SlideCarousel">
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


            <Row className="Spotlight">
                <Col clasName="Spot">
                    <img
                        alt="Card"
                        src="https://picsum.photos/300/200"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Card Title
                        </CardTitle>
                        <CardText>
                            <a>This is some text within a card body.</a>
                        </CardText>
                    </CardBody>
                </Col>
                <Col clasName="Spot">
                    <img
                        alt="Card"
                        src="https://picsum.photos/300/200"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Card Title
                        </CardTitle>
                        <CardText>
                            <a>This is some text within a card body.</a>
                        </CardText>
                    </CardBody>
                </Col>
                <Col clasName="Spot">
                    <img
                        alt="Card"
                        src="https://picsum.photos/300/200"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Card Title
                        </CardTitle>
                        <CardText>
                            <a>This is some text within a card body.</a>
                        </CardText>
                    </CardBody>
                </Col>
            </Row>


        </Container>
    );
}

export default Home; 