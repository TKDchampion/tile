import { FC } from "react";
import Image from "next/image";
import logo from "../../asset/img/logo.png";

interface Props {
  children?: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      {/* Navbar Start */}
      <div className="bar">
        <div className="container-lg d-flex">
          <div className="img me-2">
            <Image
              layout="responsive"
              className="w-100"
              src={logo}
              alt="Image"
            />
          </div>
          <h1>NG磁磚平台</h1>
        </div>
      </div>
      {/* Navbar End */}

      <div className="contain">
        <div className="container-lg">{children}</div>
      </div>

      {/* Footer Start */}
      <div className="footer">
        <div className="container-lg d-flex align-items-center">
          <a href="https://www.facebook.com/yaziprinting/">
            訂購請點此連結私訊YAZI粉專
          </a>
          &nbsp; / &nbsp;
          <a href="https://www.yazicolor.com/">YAZI官方網站</a>
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
};

export default Layout;

export const getLayout = (page: any) => <Layout>{page}</Layout>;
