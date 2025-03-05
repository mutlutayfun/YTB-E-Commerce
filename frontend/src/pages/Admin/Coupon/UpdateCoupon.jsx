import { Button, DatePicker, Form, Input, InputNumber, message } from "antd";
import { useNavigate,useParams} from "react-router-dom";
import { useEffect} from "react";
import dayjs from "dayjs";

function UpdateCoupon() {
  const [form] = Form.useForm();
  const formLayout = "vertical";
  const params = useParams();
  const navigate = useNavigate();
  const couponId = params.id;

  const getCouponById = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/coupons/${couponId}`);
      if (response.ok) {
        const data = await response.json();
        console.log("API'den gelen veri:", data);

        if (data && data.coupon) {
          const coupon = data.coupon;
          form.setFieldsValue({
            code: coupon.code || "",
            discount: Number(coupon.discount) || 0,
            count: Number(coupon.count) || 0,
            expire: coupon.expire ? dayjs(coupon.expire) : null,
            _id: coupon._id,
          });
          console.log("Forma atanan değerler:", form.getFieldsValue());
        } else {
          console.log("Ürün verisi bulunamadı.");
        }
      } else {
        console.log(`coupon with ID ${couponId} not found.`);
      }
    } catch (error) {
      console.log("Sunucu hatası: ", error);
    }
  };

  const handleUpdateCoupon = async (values) => {
    try {
        const response = await fetch(`http://localhost:5000/api/coupons/${couponId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        });
        if (response.ok) {
            message.success("Kupon güncelleme işlemi başarılı...");
            navigate("/admin/coupons");
        } else {
            message.error("Kupon güncelleme işlemi başarısız...", 3);
        }
    } catch (error) {
        console.log("Sunucu hatası: ", error);
    }
};

useEffect(() => {
    getCouponById();
}, []);
  return (
    <>
    <h2>Update Coupon Panel</h2>
    <br /><hr /><br />
    <Form
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onFinish={handleUpdateCoupon}
    >
      <Form.Item label="Coupon Code" name="code" rules={[{required : true, message : "Coupon Code enter..."}]}>
        <Input placeholder="Coupon Code enter..." />
      </Form.Item>
      <Form.Item label="Discount" name="discount" rules={[{ required : true, message : "coupon discount enter..."}]}>
        <InputNumber />
      </Form.Item>
      <Form.Item label="Expire Date" name="expire" rules={[{ required : true, message : "Expire date enter..."}]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Count" name="count" rules={[{ required : true, message : "Count number enter..."}]}>
        <InputNumber />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Update</Button>
      </Form.Item>
    </Form>
    </>
  )
}

export default UpdateCoupon