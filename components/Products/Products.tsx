import React from "react";
import { ProductCard } from "./ProductCard/ProductCard";
import { ContainerProducts } from "./Products.style";
import { Grid } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import { products } from "src/models/producs.data";

export const Products = () => {
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
