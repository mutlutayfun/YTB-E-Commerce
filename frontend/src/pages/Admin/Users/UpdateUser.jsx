import { Button, Form, Input, message } from "antd";
import { useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const [form] = Form.useForm();
  const formLayout = "vertical";
  const params = useParams();
  const navigate = useNavigate();
  const userId = params.id;

  const getUserById = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${userId}`);

      if (response.ok) {
        const data = await response.json();
        if (data) {
          form.setFieldsValue({
            username: data.username,
            email: data.email,
            password: data.password,
            role:data.role,
            _id: userId,
          });
          console.log(form.getFieldsValue());
        }
      }
    } catch (error) {
      console.log("Sunucu hatası : ", error);
    }
  };

  useEffect(() => {
    getUserById();
  }, []);
  const handleUpdateUser = async (values) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      if (response.ok) {
        message.success("Kullanıcı güncelleme işlemi başarılı...");
        navigate("/admin/users");
      } else {
        message.error("Kullanıcı güncelleme işlemi başarısız...", 3);
      }
    } catch (error) {
      console.log("Sunucu hatası : ", error);
    }
  };
  return(
    <>
      <h2>Update User Panel</h2>
      <br />
      <hr />
      <br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={handleUpdateUser}
      >
        <Form.Item
          label="User Name"
          name="username"
          rules={[{ required: true, message: "Lütfen kullanıcı adını girin!" }]}
        >
          <Input placeholder="User name enter..." />
        </Form.Item>
        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: "Lütfen rol girin!" }]}
        >
          <Input placeholder="Role enter..." />
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
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  )
  
}

export default UpdateUser;
