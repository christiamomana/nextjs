import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppContext } from "src/context/AppContext";
import Image from "next/image";
import { Container } from "@mui/system";
import { formatterCurrency } from "src/utils/utils";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function SummaryComponent() {
  const {
    shoppingCart: { products, setProducts },
  } = useAppContext();

  const removeProduct = (index: number) => {
    const newProducts = products.filter((item, i) => i !== index);
    sessionStorage.setItem("products", JSON.stringify(newProducts));

    setProducts(newProducts);
  };

  return (
    <Container>
      <TableContainer component={Paper} style={{ maxHeight: "80vh" }}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table" stickyHeader>
          <caption>Resumen de la compra</caption>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Producto</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Acción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Image
                    src={row.img?.[0]}
                    alt={row.name}
                    width="100"
                    height={100}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  {formatterCurrency(row.price)}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    onClick={() => removeProduct(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
