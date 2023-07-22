import React, { useEffect, useState } from "react";
import axios from "axios";
import { getFakeProducts } from "@/app/fakeApi/getFakeProducts";
import { DataGrid } from "@mui/x-data-grid";

import Link from "next/link";
import { Switch } from "@nextui-org/react";

function ProductsDash() {
  const [dataArray, setDataArray] = useState([]);

  // const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const getDbProducts = async () => {
      try {
        const response = (await axios.get("http://localhost:3000/api/products"))
          .data;
        // const response = getFakeProducts();
        setDataArray(response);
        console.log("response", response);
      } catch (error) {
        console.error(error);
      }
    };

    getDbProducts();
  }, []);

  const rows = dataArray.map((item) => ({
    id: item.id,
    col1: item.name,
    // col2: item.col2,
    col3: item.brand_url,
    col4: item.brand,
    col5: item.category,
    col6: item.price,
    col7: item.image,
    col8: item.subCategory,
    col9: item.quantitySold,
    col10: item.stock,
    col11: item.isActive,
  }));

  const handleSwitchChange = (e, id) => {
    const updatedRows = dataArray.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          isActive: e.target.checked,
        };
      }
      return row;
    });

    setDataArray(updatedRows);
  };

  const columns = [
    {
      field: "edit",
      headerName: "",
      width: 150,
      renderCell: (params) => {
        const { id } = params.row;

        return <Link href={`/dashboard/product_detail/${id}`}>Edit</Link>;
      },
    },
    { field: "id", hide: true },
    { field: "col1", headerName: "NAME", width: 150 },
    {
      field: "col11",
      headerName: "isACTIVE",
      width: 150,
      renderCell: (params) => {
        const { id, col11 } = params.row;

        return (
          <Switch
            value={dataArray.isActive}
            checked={col11}
            onChange={(e) => handleSwitchChange(e, id)}
          />
        );
      },
    },
    { field: "col3", headerName: "BRAND URL", width: 150 },
    { field: "col4", headerName: "BRAND", width: 150 },
    { field: "col5", headerName: "CATEGORY", width: 150 },
    { field: "col6", headerName: "PRICE", width: 150 },
    { field: "col7", headerName: "IMAGE", width: 150 },
    { field: "col8", headerName: "SUB-CATEGORY", width: 150 },
    { field: "col9", headerName: "QUANTITY", width: 150 },
    { field: "col10", headerName: "STOCK", width: 150 },
  ];

  return (
    <div>
      <h2>Products</h2>

      <Link href="/formulario"> + Add Product</Link>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default ProductsDash;
