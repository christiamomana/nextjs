import React, { FC } from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CardActions, CardContent } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Title } from './ProductCard.style';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export interface Product {
  description: string
  name: string
  img: string[]
  price: number
}
interface ProductCardProps {
  product: Product
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {

  const {description, name, img, price} = product
  return (
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="auto"
        image={img[0]}
      />
      <CardContent>
        <Title  gutterBottom variant="h5" >
          {name}
        </Title>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {String(price)}
        </Typography>
      </CardContent>
      <CardActions>
      <Button color="secondary" variant="contained" endIcon={<ShoppingCartIcon />}>
        Comprar
      </Button>
      </CardActions>
    </Card>
  );

}

