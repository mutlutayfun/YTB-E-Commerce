import { Button, message,Table } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CouponList() {
  const [dataSource, setDataList] = useState([]);
  const navigate = useNavigate();

  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code"
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount"
    },
    {
      title: "Expire Date",
      dataIndex: "expire",
      key: "expire"
    },
    {
      title: "Count",
      dataIndex: "count",
      key: "count"
    },
    {
      title: "Process",
      key: "process",
      render: (record) => (
        <>
          <Button
            color="cyan"
            variant="solid"
            onClick={() => navigate(`/admin/coupons/update/${record._id}`)}
            style={{ marginRight: "5px" }}
          >
            Update
          </Button>
          <Button
            color="danger"
            variant="solid"
            onClick={() => deleteCoupon(record._id)}
          >
            Delete
          </Button>
        </>
      )
    }
  ];

  const getCoupons = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/coupons");
      if (response.ok) {
        const data = await response.json();
        setDataList(data.coupons || []);
        console.log("Fetched coupons:", data);
      } else {
        console.log("Kuponlar getirilirken sorun oluştu...");
      }
    } catch (error) {
      console.log("Sunucu hatası", error);
    }
  };

  const deleteCoupon = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/coupons/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        message.success("Kupon başarıyla silindi...");
        getCoupons();
      } else {
        message.error("Kupon silinirken sorun oluştu...");
      }
    } catch (error) {
      console.log("Sunucu hatası", error);
    }
  };

  useEffect(() => {
    getCoupons();
  }, []);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <>
      <h2>Coupon List</h2>
      <br />
      <hr />
      <br />
      <Table columns={columns} dataSource={dataSource} onChange={onChange}/>
    </>
  );
}

export default CouponList;