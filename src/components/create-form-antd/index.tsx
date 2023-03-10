import { useEffect, useState } from "react";
import Image from "next/image";
import { Form, Input, Button, Row, Col, TimePicker, DatePicker } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import style from "./style.module.scss";
interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const CreateForm = () => {
  const [form] = Form.useForm();
  const [blogName, setBlogName] = useState("Untitled Event");
  const onFinish = (values: FormValues) => {
    console.log("Received values of form: ", values);
    // Handle form submission here
  };

  const onChangeTitle = (values: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`hehe ${values.target.value}`);
    setBlogName(values.target.value);
  };

  function handleTextAreaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setBlogName(event.target.value);
  }

  return (
    <Form onFinish={onFinish}>
      <Row>
        <Col span={12}>
          <Form.Item
            name="name"
            className={`self-auto relative w-full`}
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <div className="w-full relative">
              <span
                className={`bg-[#942F70] text-5xl text-transparent break-word font-bold leading-[75px] ${style["show-title"]}`}
              >
                {blogName}
              </span>
              <Input.TextArea
                maxLength={200}
                autoSize={{ minRows: 1, maxRows: 10 }}
                className={`bg-transparent placeholder-white text-5xl font-bold text-white rounded-none focus:placeholder-transparent top-0 text-transparent p-0 absolute left-0 min-w-[30px] break-word ${style["show-title"]}`}
                value={blogName}
                onChange={handleTextAreaChange}
              />
            </div>
          </Form.Item>
          <Row gutter={24}>
            <Col>
              <Form.Item
                name="startAt"
                className={`self-auto relative w-full flex`}
                rules={[{ required: true, message: "Please enter date" }]}
              >
                <Image
                  className="inline-block mr-4"
                  src="/images/icons/icon-date.svg"
                  height={30}
                  width={30}
                  alt="time"
                />
                <DatePicker
                  format="MMMM DD, dddd"
                  className={`font-bold`}
                  size={"large"}
                  suffixIcon={null}
                  placeholder="Date"
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name="time"
                className={`self-auto relative w-full flex`}
                rules={[{ required: true, message: "Please enter time" }]}
              >
                <Image
                  className="inline-block mr-4"
                  src="/images/icons/icon-time.svg"
                  height={30}
                  width={30}
                  alt="time"
                />
                <TimePicker
                  format="h A"
                  suffixIcon={null}
                  placeholder="Time"
                  className={`font-bold`}
                  size={"large"}
                />
              </Form.Item>
            </Col>
          </Row>

          {/* <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[{ required: true, message: "Please enter your message!" }]}
          >
            <Input.TextArea placeholder="Message" />
          </Form.Item> */}
        </Col>
      </Row>

      {/* <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
    </Form>
  );
};
