import Head from "next/head";
import Image from "next/image";
import { Layout, Menu, Row } from "antd";
import type { MenuProps } from "antd";
const { Header, Content } = Layout;
import { PopUpItemsProps } from "@/config/interface";
import style from "./style.module.scss";

const items: PopUpItemsProps[] = [
  { name: "Blog", href: "/" },
  { name: "Socials", href: "/" },
  { name: "Past Socials", href: "/" },
  { name: "Clubs", href: "/" },
  { name: "Contact", href: "/" },
];
const itemsList: MenuProps["items"] = items.map((item: PopUpItemsProps) => ({
  key: item.name,
  label: `${item.name}`,
}));

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout className={`font-primary min-h-screen ${style["layout"]}`}>
      <Header className="bg-transparent">
        <Row justify="space-between">
          <Image
            src="/images/logo.png"
            className="cursor-pointer flex self-center"
            width={200}
            height={35.56}
            alt="avatar"
          />

          <Menu
            className="bg-transparent"
            mode="horizontal"
            items={itemsList}
          />
        </Row>
      </Header>
      {/* <Layout>
        <Layout className="bg-white">{children}</Layout>
      </Layout> */}

      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">Content</div>
      </Content>
    </Layout>
  );
}
