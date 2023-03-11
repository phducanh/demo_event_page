import Image from "next/image";
import Head from "next/head";
import { PopUpItemsProps } from "@/config/interface";
import { Layout, Menu, Row } from "antd";
import type { MenuProps } from "antd";
const { Header, Content } = Layout;
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

export const BaseHeaders = () => {
  return (
    <Header className="bg-transparent">
      <Row justify="space-between">
        <Image
          src="/images/logo.png"
          className="cursor-pointer flex self-center"
          width={200}
          height={35.56}
          alt="avatar"
        />

        <Menu className="bg-transparent" mode="horizontal" items={itemsList} />
      </Row>
    </Header>
  );
};
