import React, { FC } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Form, Input, Button, Checkbox } from "antd";
import { Link, useHistory } from "react-router-dom";
import { RegisrationServices } from "../../services/RegisrationServices";

const SignInPageWrapper = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBtn = styled(Button)`
  margin-left: 15px;
`;

const SignInPage: FC = () => {
  const history = useHistory();

  const onFinish = async (values: {
    password: string;
    remember: boolean;
    username: string;
  }) => {
    const response = await RegisrationServices().authorizationUser({
      ...values,
    });

    if (response.data.isAvtorization) {
      history.push("/");
    } else {
      console.log(response.data);
    }
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Header />
      <SignInPageWrapper>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Link to={"/registration"}>
              <StyledBtn type="primary">Registration</StyledBtn>
            </Link>
          </Form.Item>
        </Form>
      </SignInPageWrapper>
      <Footer />
    </>
  );
};

export default SignInPage;
