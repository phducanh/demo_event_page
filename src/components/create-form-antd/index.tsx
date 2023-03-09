import { useEffect, useState } from "react";
import { Form, Input, Button, Row } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import style from "./style.module.scss";
interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const CreateForm = () => {
  const [form] = Form.useForm();
  const [blogName, setBlogName] = useState("");
  const onFinish = (values: FormValues) => {
    console.log("Received values of form: ", values);
    // Handle form submission here
  };

  const onChangeTitle = (values: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`hehe ${values.target.value}`);
    setBlogName(values.target.value);
  };

  return (
    <Form onFinish={onFinish}>
      <Row>
        <div>
          <Form.Item
            name="name"
            className="self-auto"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            {/* <Input.TextArea
              autoSize={{ minRows: 1, maxRows: 6 }}
              value={blogName}
              className={`bg-[#942F70] placeholder-white text-5xl font-bold text-white rounded-none focus:placeholder-transparent self-auto ${style["input-field"]}`}
              placeholder="Untitle Event"
            /> */}
            <div>
              <span
                className={`bg-[#942F70] placeholder-white text-5xl font-bold text-white rounded-none focus:placeholder-transparent self-auto ${style["input-field"]}`}
              >
                {blogName}
              </span>
            </div>

            <Input
              className="background-transparent"
              onChange={onChangeTitle}
              //   addonBefore={<span>{form.getFieldValue("name")}</span>}
              width={1}
              placeholder="Untitle Event"
            />
          </Form.Item>
          <Form.Item
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
          </Form.Item>
        </div>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
