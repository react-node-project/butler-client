
### Basket To-dos
- ✅ refactor layout & responsive
- ✅ set redux slicers
-   basket CRUD (after menu is done)
-   test codes

`additional`
- TS refactoring

### Test codes
initial status(empty)
- [✅] right description message
- [✅] no item component

functionality 
- [] should be able to add items in the basket
- [] should be able to remove items
- [] should be able to add number of items

async funcs(data fetching)


### Refactoring
`before`
```js
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

...
              <h5>
                {cartItem.title}
                <IconButton onClick={() => handleRemoveFromCart(cartItem)}>
```
`after` 
```js
const Basket = React.memo(() => {
  // const { data, error, isLoading } = useGetAllProductListQuery();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart =useCallback((item) => {
    dispatch(removeFromCart(item));
  },[]); // cart
```