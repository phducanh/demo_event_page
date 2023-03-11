import { Layout } from "antd";
const { Content } = Layout;

import { BaseHeaders } from "@/layout/BaseHeader";
import style from "./style.module.scss";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout className={`font-primary min-h-screen ${style["layout"]}`}>
      <BaseHeaders />
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
    </Layout>
  );
}
