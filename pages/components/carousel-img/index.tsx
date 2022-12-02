import { FC } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

interface Props {
  imgList?: string[];
}

const CarouselImg: FC<Props> = ({ imgList }) => {
  return (
    <Carousel interval={null}>
      {imgList &&
        imgList.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <Image
                layout="responsive"
                alt=""
                width={100}
                height={80}
                src={item}
              ></Image>
              {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
};

export default CarouselImg;
