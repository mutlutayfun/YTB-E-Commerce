import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [form] = Form.useForm();
  const formLayout = "vertical";
  const navigate = useNavigate();

  const handleCreateUser = async (values) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        message.success("Kullanıcı başarıyla eklendi.");
        navigate("/admin/users");
        console.log(response)
      } else {
        const errorData = await response.json();
        message.error(`Kullanıcı oluşturulurken hata: ${errorData.message}`);
      }
    } catch (error) {
      message.error("Sunucu hatası: " + error.message);
    }
  };

  return (
    <>
      <h2>Create User Panel</h2>
      <br />
      <hr />
      <br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={handleCreateUser}
      >
        <Form.Item
          label="User Name"
          name="username"
          rules={[{ required: true, message: "Lütfen kullanıcı adını girin!" }]}
        >
          <Input placeholder="User name enter..." />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Lütfen email girin!" }]}
        >
          <Input placeholder="Email enter..." />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Lütfen şifre girin!" }]}
        >
          <Input.Password placeholder="Password enter..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateUser;