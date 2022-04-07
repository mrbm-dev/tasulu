import { ConfigProvider } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider direction="rtl" locale={fa_IR}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;
