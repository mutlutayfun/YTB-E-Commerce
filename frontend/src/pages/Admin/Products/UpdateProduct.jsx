import { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, InputNumber, message, Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
    const [categories, setCategories] = useState([]);
    const [form] = Form.useForm();
    const formLayout = "vertical";
    const colorOptions = ["Red", "Green", "Blue", "Black", "White", "Brown"];
    const sizeOptions = ["xs", "sm", "m", "l", "xl", "xxl"];
    const navigate = useNavigate();
    const params = useParams();
    const productId = params.id;

    const getCategories = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/categories');
            if (response.ok) {
                const data = await response.json();
                setCategories(data);
            } else {
                console.log("Kategori getirilemedi...");
            }
        } catch (error) {
            console.log("Sunucu hatası", error);
        }
    };

    const getProductById = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/products/${productId}`);
          if (response.ok) {
            const data = await response.json();
            console.log("API'den gelen veri:", data);
      
            if (data && data.product) {
              const product = data.product;
              form.setFieldsValue({
                name: product.name || "",
                stockCode: product.stockCode || "",
                price: Number(product.price) || 0,
                description: product.description || "",
                images: Array.isArray(product.images) ? product.images.join("\n") : product.images || "",
                discount: Number(product.dicount) || 0,
                stock: Number(product.stock) || 0,
                colors: Array.isArray(product.colors) ? product.colors : [],
                sizes: Array.isArray(product.sizes) ? product.sizes : [],
                category: product.category || "",
                _id: product._id,
              });
              console.log("Forma atanan değerler:", form.getFieldsValue());
            } else {
              console.log("Ürün verisi bulunamadı.");
            }
          } else {
            console.log(`Product with ID ${productId} not found.`);
          }
        } catch (error) {
          console.log("Sunucu hatası: ", error);
        }
      };

    useEffect(() => {
        getCategories();
        getProductById();
    }, []);

    const handleUpdateProduct = async (values) => {
        const { colors, sizes } = values;
        const imageLinks = values.images.split("\n").map(link => link.trim());
        try {
            const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...values, colors, sizes, images: imageLinks })
            });
            if (response.ok) {
                message.success("Product güncelleme işlemi başarılı...");
                navigate("/admin/products");
            } else {
                message.error("Product güncelleme işlemi başarısız...", 3);
            }
        } catch (error) {
            console.log("Sunucu hatası: ", error);
        }
    };

    return (
        <>
            <h2>Update Product Panel</h2>
            <br />
            <hr />
            <br />
            <Form
                layout={formLayout}
                form={form}
                initialValues={{
                    layout: formLayout,
                }}
                onFinish={handleUpdateProduct}
            >
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: "Product name enter..." }]}
                >
                    <Input placeholder="Product name enter..." />
                </Form.Item>
                <Form.Item
                    label="Stock Code"
                    name="stockCode"
                    rules={[{ required: true, message: "Product Stock Code enter..." }]}
                >
                    <Input placeholder="Product Stock Code enter..." />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: "Product description enter..." }]}
                >
                    <Input.TextArea placeholder="Product description enter..." rows={5} />
                </Form.Item>
                <Form.Item
                    label="Product Images"
                    name="images"
                    rules={[{ required: true, message: "Product images enter..." }]}
                >
                    <Input.TextArea placeholder="Product images enter..." rows={5} />
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: "Product price enter..." }]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Discount"
                    name="discount"
                    rules={[{ required: true, message: "Product discount enter..." }]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Stock"
                    name="stock"
                    rules={[{ required: true, message: "Product stock enter..." }]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Colors"
                    name="colors"
                    rules={[{ required: true, message: "Product colors select..." }]}
                >
                    <Checkbox.Group options={colorOptions} />
                </Form.Item>
                <Form.Item
                    label="Sizes"
                    name="sizes"
                    rules={[{ required: true, message: "Product sizes select..." }]}
                >
                    <Checkbox.Group options={sizeOptions} />
                </Form.Item>
                <Form.Item
                    label="Categories"
                    name="category"
                    rules={[{ required: true, message: "Select a category" }]}
                >
                    <Select placeholder="Select a category...">
                        {categories.map((category) => (
                            <Select.Option key={category._id} value={category._id}>
                                {category.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Update
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default UpdateProduct;
