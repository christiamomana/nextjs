import React from "react";
import { Product, ProductCard } from "../ProductCard/ProductCard";
import { ContainerProducts } from "./Products.style";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";

export const Products = () => {
  const product: Product = {
    name: "ACEITE ESENCIAL DE ARGÁN",
    price: 150.0,
    description: "lorem ipsum",
    img: [
      "https://firebasestorage.googleapis.com/v0/b/tienda-9f935.appspot.com/o/products%2Faceite-2.png?alt=media&token=eef1d6e8-058d-466e-9b48-636336b2d052",
    ],
  };
  const productOne: Product = {
    name: "SHAROMIX",
    price: 62.0,
    description: "lorem ipsum",
    img: [
      "https://firebasestorage.googleapis.com/v0/b/tienda-9f935.appspot.com/o/products%2Faceite-3.png?alt=media&token=cd369bb9-3f2e-4487-8403-bf82b751bdf9",
    ],
  };
  const productTwo: Product = {
    name: "ÁCIDO FOSFÓRICO",
    price: 12.0,
    description: "lorem ipsum",
    img: [
      "https://firebasestorage.googleapis.com/v0/b/tienda-9f935.appspot.com/o/products%2Facetona.png?alt=media&token=ab9c337b-e2dd-4247-965e-3443a8cfb425",
    ],
  };
  const productThree: Product = {
    name: "CICLAMATO DE SODIO",
    price: 15.0,
    description: "lorem ipsum",
    img: [
      "https://firebasestorage.googleapis.com/v0/b/tienda-9f935.appspot.com/o/products%2Fpolvo-blanco.png?alt=media&token=0e1c9ef5-1c16-42c9-85f8-f15165905ca8",
    ],
  };
  const productFour: Product = {
    name: "BICARBONATO DE SODIO",
    price: 0,
    description: "Producto por encargo",
    img: [
      "https://firebasestorage.googleapis.com/v0/b/tienda-9f935.appspot.com/o/products%2Fsal.png?alt=media&token=0063655f-1433-4bcd-8e38-4cc01a82a400",
    ],
  };
  const productFive: Product = {
    name: "BICARBONATO DE SODIO",
    price: 0,
    description: "Producto por encargo",
    img: [
      "https://firebasestorage.googleapis.com/v0/b/tienda-9f935.appspot.com/o/products%2Fsal.png?alt=media&token=0063655f-1433-4bcd-8e38-4cc01a82a400",
    ],
  };
  const products: Product[] = [
    product,
    productOne,
    productTwo,
    productThree,
    productFour,
    productFive,
  ];
  return (
    <ContainerProducts>
      <SearchBar />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.name}>
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>
    </ContainerProducts>
  );
};
