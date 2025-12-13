import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    // 초기 상태를 localStorage에서 불러오기
    try {
      const savedCart = localStorage.getItem('allbirds_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
      return [];
    }
  });

  // cartItems가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    try {
      localStorage.setItem('allbirds_cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [cartItems]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product) => {
    console.log('Adding to cart:', product);
    setCartItems((prevItems) => {
      console.log('Previous items:', prevItems);
      const existingItem = prevItems.find(
        (item) => item._id === product._id && item.selectedSize === product.selectedSize
      );

      if (existingItem) {
        console.log('Updating existing item');
        return prevItems.map((item) =>
          item._id === product._id && item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      console.log('Adding new item');
      const newItems = [...prevItems, { ...product, quantity: 1 }];
      console.log('New items:', newItems);
      return newItems;
    });
    openCart();
  };

  const removeFromCart = (productId, size) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item._id === productId && item.selectedSize === size))
    );
  };

  const updateQuantity = (productId, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === productId && item.selectedSize === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const discountedPrice = item.originalPrice * (1 - item.discountRate);
      return total + discountedPrice * item.quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
    // localStorage도 함께 초기화
    localStorage.removeItem('allbirds_cart');
  };

  const value = {
    isCartOpen,
    cartItems,
    openCart,
    closeCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};