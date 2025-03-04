import { Table } from 'antd';
function ProductList() {
    
  return (
    <>
     <h2>Product List</h2>
     <br /><hr /><br />
    <Table dataSource={dataSource} columns={columns} />
    
    </>
  )
}

export default ProductList