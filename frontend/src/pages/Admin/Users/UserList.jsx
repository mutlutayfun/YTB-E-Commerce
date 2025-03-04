import { Table, Button,message } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserList() {

    const [dataSource, setDataSource] = useState([]);
    const navigate = useNavigate();

    const getUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/users");
            if(response.ok){
                const data = await response.json();
                setDataSource(data);
            }
        } catch (error) {
            console.log("Sunucu hatası", error);
        }
    }
    const deleteUser = useCallback(async (userId) => {
      try {
          const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
              method: "DELETE",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({_id: userId})
          });
          if(response.ok){
              message.success("Kategori silindi");
              getUsers();
          } else {
              message.error("Kategori silme işleminde hata oluştu....")
          }
      } catch (error) {
          console.log("Sunucu hatası", error);
      }
  }, []);
    useEffect(() => {
        getUsers()
    },[])
    // const dataSources = [
    //     {
    //       key: '1',
    //       name: 'Mike',
    //       age: 32,
    //       address: '10 Downing Street',
    //     },
    //     {
    //       key: '2',
    //       name: 'John',
    //       age: 42,
    //       address: '10 Downing Street',
    //     },
    //   ];
      
      const columns = [
        {
          title: 'UserName',
          dataIndex: 'username',
          key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
          title: 'Role',
          dataIndex: 'role',
          key: 'role',
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
        },
        {
          title: "Process",
          key: "process",
          render: (record) => (
            <>
              <Button
                color="cyan"
                variant="solid"
                onClick={() => navigate(`/admin/users/update/${record._id}`)}
                style={{marginRight:"5px"}}
              >
                Update
              </Button>
              <Button
                color="danger"
                variant="solid"
                onClick={() => deleteUser(record._id)}
              >
                Delete
              </Button>
            </>
          ),
        }
      ];
  return (
    <>
     <h2>User List</h2>
     <br /><hr /><br />
    <Table dataSource={dataSource} columns={columns} />
    </>
  )
}

export default UserList