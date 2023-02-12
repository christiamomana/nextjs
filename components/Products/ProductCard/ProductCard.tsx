import React, { FC } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { CardActions, CardContent } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Title } from "./ProductCard.style";
import { ProductCardProps } from "src/models/product.model";
import { useAppContext } from "src/context/AppContext";

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const {
    shoppingCart: { setProducts },
  } = useAppContext();

  const addProdduct = () => {
    setProducts((previous) => {
      const products = [...previous, product];
      sessionStorage.setItem("products", JSON.stringify(products));
      return products;
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200vh"
        image={product?.img?.[0]}
      />
      <CardContent>
        <Title gutterBottom variant="h5">
          {product?.name}
        </Title>
        <Typography variant="body2" color="text.secondary">
          {product?.description}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {String(product?.price)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          endIcon={<ShoppingCartIcon />}
          onClick={addProdduct}>
          Agregar
        </Button>
      </CardActions>
    </Card>
  );
};
