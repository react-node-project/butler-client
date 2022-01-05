import React from "react";
import "../styled.css"
import { StyledBox,StyledStack,StyledPaper } from "./basket.styled";
import { IconButton, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// 컴포넌트명에 Icon이 들어 있는게 better readability
import {addToCart} from '../../redux/features/cartSlicer';
// import {addToCart} from '../redux/features/cartSlicer'
import {useDispatch} from "react-redux";

export default function Product({data}) {
  const dispatch = useDispatch();

  const handleClicktoCart = (product)=>{
    console.log(product);
    dispatch(addToCart(product)); // reducer
  }

  return (
    <StyledBox>
      <h2>New Arrivals</h2>
      <p>Featured Collection in 2022 Spring/Summer</p>
      <div className='product-list'>
          {/* card */}
          {data.map(item=>(
                        <StyledPaper key={item.id}>
                        <img className="product-img"src={item.image} alt={item.title} />
                        <div>
                            <Typography variant="button">{item.category}</Typography>
                            <Typography className="product-description" variant="subtitle2">{item.title}</Typography>
                            <Typography variant="subtitle1">£ {item.price}</Typography>
                        </div>
                        <StyledStack spacing={0.5}>
                          <IconButton onClick={()=> handleClicktoCart(item)}>
                            <AddShoppingCartIcon  size="large"/>
                            </IconButton>
                            <IconButton>
                            <FavoriteBorderIcon color="warning" size="large"/>
                            </IconButton>
                        </StyledStack>
                    </StyledPaper>
          ))}
      </div>
    </StyledBox>
  );
}

//!! pagination v페이지네이션 넣기