import { getLayout } from "./components/layout";
import { NextPageWithLayout } from "./_app";
import CarouselImg from "./components/carousel-img";

const Home: NextPageWithLayout = () => {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <CarouselImg
              imgList={[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMEmG1qClzsjzDJznbtF9y0W6Y1G6XgBzSw&usqp=CAU",
                "https://www.thespruce.com/thmb/X_O6fPKasSFHP9z_Szg4ebapeaQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/porcelain-tile-vs-ceramic-tile-1822583_hero-83338b9dbf96484fbf81538ea0bbe2df.jpg",
              ]}
            />
          </div>
          <div className="content">
            <h3 className="title">Apple Iphone X</h3>
            <div className="describe mb-2">介紹介紹介紹</div>
          </div>
          <div className="buttom-content">
            <p className="price">
              金額:
              <span>$2000</span>
            </p>
            <p className="counts">
              數量
              <span>(30)</span>
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <CarouselImg
              imgList={[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMEmG1qClzsjzDJznbtF9y0W6Y1G6XgBzSw&usqp=CAU",
                "https://www.thespruce.com/thmb/X_O6fPKasSFHP9z_Szg4ebapeaQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/porcelain-tile-vs-ceramic-tile-1822583_hero-83338b9dbf96484fbf81538ea0bbe2df.jpg",
              ]}
            />
          </div>
          <div className="content">
            <h3 className="title">Apple Iphone X</h3>
            <div className="describe mb-2">介紹介紹介紹</div>
          </div>
          <div className="buttom-content">
            <p className="price">
              金額:
              <span>$2000</span>
            </p>
            <p className="counts">
              數量
              <span>(30)</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <CarouselImg
              imgList={[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMEmG1qClzsjzDJznbtF9y0W6Y1G6XgBzSw&usqp=CAU",
                "https://www.thespruce.com/thmb/X_O6fPKasSFHP9z_Szg4ebapeaQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/porcelain-tile-vs-ceramic-tile-1822583_hero-83338b9dbf96484fbf81538ea0bbe2df.jpg",
              ]}
            />
          </div>
          <div className="content">
            <h3 className="title">Apple Iphone X</h3>
            <div className="describe mb-2">介紹介紹介紹</div>
          </div>
          <div className="buttom-content">
            <p className="price">
              金額:
              <span>$2000</span>
            </p>
            <p className="counts">
              數量
              <span>(30)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = getLayout;
export default Home;
