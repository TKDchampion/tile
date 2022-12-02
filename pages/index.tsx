import { getLayout } from "./components/layout";
import { NextPageWithLayout } from "./_app";
import CarouselImg from "./components/carousel-img";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { useEffect, useState } from "react";
import SpinnerCommon from "./components/spinner";

interface dataInfo {
  title: string;
  desc: string;
  imgs: string[];
  amount: number;
  counts: number;
}

const Home: NextPageWithLayout = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [data, setData] = useState<dataInfo[]>();
  const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
  const SHEET_ID = parseInt(process.env.NEXT_PUBLIC_SHEET_ID as string);
  const CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
  const PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY;
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  useEffect(() => {
    appendSpreadsheet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const appendSpreadsheet = async () => {
    setIsLoad(true);
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL as any,
        private_key: (PRIVATE_KEY as any).replace(/\\n/g, "\n"),
      });
      // loads document properties and worksheets
      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID];
      const rows = await sheet.getRows();
      const fotmatterData = rows.map((item) => ({
        title: item.Title,
        desc: item.Describe,
        imgs: item.Images.split(","),
        amount: item.Amount,
        counts: item.Counts,
      }));
      setData(fotmatterData);
      setIsLoad(false);
    } catch (e) {
      setIsLoad(false);
      console.error("Error: ", e);
    }
  };

  return (
    <div className="row">
      <>
        {isLoad && <SpinnerCommon />}
        {data &&
          data.map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div className="card">
                  <div className="image">
                    <CarouselImg imgList={item.imgs} />
                  </div>
                  <div className="content">
                    <h3 className="title">{item.title}</h3>
                    <div className="describe mb-2">{item.desc}</div>
                  </div>
                  <div className="buttom-content">
                    <p className="price">
                      金額:
                      <span>${item.amount}</span>
                    </p>
                    <p className="counts">
                      數量
                      <span>({item.counts})</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </>
    </div>
  );
};

Home.getLayout = getLayout;
export default Home;
