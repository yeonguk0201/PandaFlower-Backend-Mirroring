function getCartItem(req, res) {
  const cartItems = req.cookies.cart || [];
  res.json(cartItems);
}

function addToCart(req, res) {
  const { productId, quantity } = req.body;
  // 현재 장바구니 쿠키를 가져오기 또는 초기화
  const currentCart = req.cookies.cart || [];
  // 새로운 아이템 추가
  currentCart.push({ productId, quantity });
  // 장바구니 쿠키 설정
  res.cookie('cart', currentCart);
  res.json({ message: '장바구니에 상품을 추가했습니다.' });
}

function deleteCartItem(req, res) {
  const { item } = req.params;
  // 현재 장바구니 쿠키를 가져오기 또는 초기화
  const currentCart = req.cookies.cart || [];
  // 아이템 제거
  const updatedCart = currentCart.filter((el) => el.productId !== item);
  res.cookie('cart', updatedCart);
  res.json({ message: '장바구니 아이템을 제거했습니다.' });
}
