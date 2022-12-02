import { FC } from "react";

interface Props {
  children?: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      {/* Navbar Start */}
      <div className="bar">
        <h1>磁磚平台</h1>
      </div>
      {/* Navbar End */}

      <div className="contain">
        <div className="container-lg">{children}</div>
      </div>

      {/* Footer Start */}
      {/* <div>FOOTER</div> */}
      {/* Footer End */}
    </div>
  );
};

export default Layout;

export const getLayout = (page: any) => <Layout>{page}</Layout>;
