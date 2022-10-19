import React, { useState } from "react";
import { Table, Input } from "antd";
import axios from "axios";
import { userColumns } from "./columns";
import { TableSearch } from "./TableSearch";

const { Search } = Input;

const fetchUsers = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users/"
  );
  return { data };
};

export default function Inventory() {
  const [searchVal, setSearchVal] = useState(null);

  const { filteredData, loading } = TableSearch({
    searchVal,
    retrieve: fetchUsers
  });

  return (
    <div style={{ display:"flex",flexDirection:'row' }} >
      <div style={{width:"25%"}}>
      <Search
        onChange={e => setSearchVal(e.target.value)}
        placeholder="Search"
        enterButton
        style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}
      />
      </div>

      

      <div >
      <h3 style={{color:"green"}}>Inventory</h3>
      <Table className="table"
        dataSource={filteredData}
        columns={userColumns}
        loading={loading}
        pagination={false}
        
        
      />
      </div>
      </div>
  );
}
