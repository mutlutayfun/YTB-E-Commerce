import { Button, DatePicker, Form, Input, InputNumber, message } from "antd";
import { useNavigate } from "react-router-dom";

function CreateCoupon() {
  const [form] = Form.useForm();
  const formLayout = "vertical";
  const navigate = useNavigate();

  const handleCreateCoupon = async(values) =>{
    try {
      const response = await fetch("http://localhost:5000/api/coupons",{
        method : "POST",
        headers : { "Content-Type" : "application/json"},
        body : JSON.stringify(values)
      });
      if (response.ok) {
        message.success("Kupon başarıyla eklendi...");
            navigate("/admin/coupons")
        }else{
            message.error("Kupon oluşturulurken hata meydana geldi...");
        }
    } catch (error) {
        console.log("Sunucu hatası : ",error);
    }
  }
  return (
    <>
    <h2>Create Coupon Panel</h2>
    <br /><hr /><br />
    <Form
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onFinish={handleCreateCoupon}
    >
      <Form.Item label="Coupon Code" name="code" rules={[{required : true, message : "Coupon Code enter..."}]}>
        <Input placeholder="Coupon Code enter..." />
      </Form.Item>
      <Form.Item label="Discount" name="discount" rules={[{ required : true, message : "Product discount enter..."}]}>
        <InputNumber />
      </Form.Item>
      <Form.Item label="Expire Date" name="expire" rules={[{ required : true, message : "Expire date enter..."}]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Count" name="count" rules={[{ required : true, message : "Count number enter..."}]}>
        <InputNumber />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Create</Button>
      </Form.Item>
    </Form>
    </>
  )
}

export default CreateCoupon