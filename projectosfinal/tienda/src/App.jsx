import React, { useState, useEffect } from 'react';

const LOCAL_CLOTHING_PRODUCTS = [
  {
    id: 1,
    title: "Vestido",
    price: 280000,
    category: "Ropa de Mujer",
    description: "Vestido confeccionado en lino rústico premium. Ideal para los días frescos de media estación con un toque elegante y minimalista.",
    image: "https://i.pinimg.com/736x/56/a5/a0/56a5a0a7e802ab85afd159fc5d00e945.jpg"
  },
  {
    id: 2,
    title: "Saco",
    price: 450000,
    category: "Ropa de Hombre",
    description: "Abrigo tejido con lana merino seleccionada de alta densidad. Un básico atemporal para tu guardarropa de invierno.",
    image: "https://i.pinimg.com/736x/b6/48/49/b648492a7190c25a9a973380cc4b1e63.jpg"
  },
  {
    id: 3,
    title: "Blusa",
    price: 165000,
    category: "Ropa de Mujer",
    description: "Blusa fresca de algodón orgánico con texturas naturales. Respetuosa con el medio ambiente y súper cómoda.",
    image: "https://i.pinimg.com/736x/4f/dd/2b/4fdd2b59fc6365fbd30043a4fa2a6455.jpg"
  },
  {
    id: 4,
    title: "Pantalón",
    price: 240000,
    category: "Ropa de Mujer",
    description: "Pantalón de corte sastrero con caída perfecta en tono grisáceo. Versatilidad para la oficina o salidas casuales.",
    image: "https://i.pinimg.com/736x/8d/6f/9a/8d6f9ab3f169a7103b5c5b0ab5b64cca.jpg"
  },
  {
    id: 5,
    title: "Camisa",
    price: 195000,
    category: "Ropa de Hombre",
    description: "Camisa clásica de lino de calce relajado. Textura transpirable para los climas cálidos y templados del país.",
    image: "https://i.pinimg.com/736x/ca/70/62/ca70623a07fe5741f0e06294be2bbbc7.jpg"
  },
  {
    id: 6,
    title: "Remera",
    price: 90000,
    category: "Ropa de Hombre",
    description: "Remera confeccionada con algodón 100% nacional. Suavidad extrema y durabilidad garantizada para el uso diario.",
    image: "https://i.pinimg.com/1200x/f1/d4/0c/f1d40cd1db9d363c73b758b7f60a49d2.jpg"
  },
  {
    id: 7,
    title: "Cardigan",
    price: 320000,
    category: "Ropa de Mujer",
    description: "Cardigan abierto con trama texturada en tonos pastel. El complemento ideal para un look en capas abrigado.",
    image: "https://i.pinimg.com/736x/95/60/27/956027abc9cf53e694213e2e1b68c777.jpg"
  },
  {
    id: 8,
    title: "Campera",
    price: 380000,
    category: "Ropa de Hombre",
    description: "Campera de gabardina ligera estilo bomber en tono marrón chocolate. Comodidad y diseño urbano moderno.",
    image: "https://i.pinimg.com/736x/49/34/9c/49349c84f25b22062c566848c765dd1d.jpg"
  },
  {
    id: 9,
    title: "Jeans",
    price: 220000,
    category: "Ropa de Hombre",
    description: "Jean comodo de corte moderno confeccionado en denim rígido resistente. Diseñado para perdurar en el tiempo.",
    image: "https://i.pinimg.com/736x/b7/29/6c/b7296c42d9e7b9939f4b60051dc5f4b8.jpg"
  },
  {
    id: 10,
    title: "Suéter",
    price: 210000,
    category: "Ropa de Hombre",
    description: "Suéter liviano tejido en hilo de algodón con detalles calados dorados. Suave al tacto y sumamente delicado.",
    image: "https://i.pinimg.com/736x/ee/35/22/ee3522e49e1c60c38c4bc41d2ddb9a98.jpg"
  },
  {
    id: 11,
    title: "Trench Coat",
    price: 550000,
    category: "Ropa de Mujer",
    description: "Piloto clásico de lluvia de gabardina semimpermeable. Cinturón ajustable y botones a tono para un look sofisticado.",
    image: "https://i.pinimg.com/1200x/25/91/89/259189ab579afc96fd9d4772692a5c0a.jpg"
  },
  {
    id: 12,
    title: "Bermuda",
    price: 150000,
    category: "Ropa de Hombre",
    description: "Bermuda clásica con cordón ajustable. Frescura inigualable con un diseño casual y relajado de verano.",
    image: "https://i.pinimg.com/1200x/32/09/50/320950f2ea2c33fcd3b27f55c701f86f.jpg"
  }
];

const formatGuarani = (value) => {
  return `Gs. ${value.toLocaleString('es-PY')}`;
};

function HeroGallery() {
  const galleryImages = [
    {
      id: 1,
      title: "Primavera / Verano",
      url: "https://i.pinimg.com/1200x/29/13/77/2913770d685fb2fb09cfc6d20cce26ff.jpg"
    },
    {
      id: 2,
      title: "Colección SS27",
      url: "https://i.pinimg.com/736x/b7/e9/26/b7e926c59a9b0b14a77071aa07dd6a1a.jpg"
    },
    {
      id: 3,
      title: "Diseño Moderno",
      url: "https://i.pinimg.com/1200x/ab/28/35/ab2835f3cee4bc5c876be3bb09ada761.jpg"
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center py-6">
        <h1 className="text-5xl font-title text-black tracking-wider mb-2">Any's</h1>
        <p className="text-gray-600 italic text-sm md:text-base">Encuentra cualquier prenda para tu armario.</p>
        <div className="w-16 h-0.5 bg-[#C69214] mx-auto mt-4"></div>
      </div>
      <h3 className="text-xl font-title text-[#8F6B10] text-center mb-6 uppercase tracking-wider">Nueva Colección</h3>
      <div className="flex flex-wrap -mx-2">
        {galleryImages.map((img) => (
          <div key={img.id} className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <div className="relative overflow-hidden border border-[#EADFC9] bg-white h-[250px] md:h-[350px]">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-102"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-3 text-center">
                <span className="text-white font-title text-base tracking-wide">{img.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Catalog({ products, onViewDetail, onAddToCart }) {
  return (
    <div className="py-2">
      <HeroGallery />

      <div className="border-t border-[#EADFC9] pt-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-title text-[#8F6B10] tracking-wide">Nuestros Productos</h2>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-alt">Prendas Seleccionadas</p>
        </div>

        <div className="flex flex-wrap -mx-3">
          {products.map(product => (
            <div 
              key={product.id} 
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 mb-8"
            >
              <div className="bg-white border border-[#EADFC9] h-full flex flex-col justify-between p-4 transition-colors hover:border-[#C69214]">
                
                <div className="cursor-pointer" onClick={() => onViewDetail(product)}>
                  {/* Se configuró un alto estricto (h-80) y overflow-hidden para igualar el tamaño */}
                  <div className="w-full h-80 flex items-center justify-center bg-[#FAF6EE]/20 mb-3 border-b border-[#FAF6EE] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover object-top rounded transition-transform duration-300 hover:scale-102" 
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 h-10 mb-1 hover:text-[#8F6B10]">
                    {product.title}
                  </h3>
                  <p className="text-xs text-gray-400 capitalize mb-2">{product.category}</p>
                </div>

                <div className="mt-auto">
                  <p className="text-xl font-bold text-[#8F6B10] mb-3 font-alt">{formatGuarani(product.price)}</p>
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-[#C69214] text-white py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#A3780F] transition duration-300 font-alt"
                  >
                    Agregar al Carrito
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductDetail({ product, onBack, onAddToCart }) {
  if (!product) return null;
  return (
    <div className="py-4">
      <button onClick={onBack} className="mb-6 text-[#8F6B10] hover:underline flex items-center gap-1 font-medium">
        ← Volver al catálogo
      </button>
      <div className="bg-white border border-[#EADFC9] p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="w-full h-80 md:h-[450px] flex items-center justify-center bg-[#FAF6EE]/30 overflow-hidden">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover object-top rounded" />
        </div>
        <div className="flex flex-col justify-between py-2">
          <div>
            <span className="bg-[#FAF6EE] text-[#8F6B10] border border-[#EADFC9] text-xs font-semibold px-3 py-1 capitalize">
              {product.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-title text-black mt-4 mb-4">{product.title}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">{product.description}</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-[#8F6B10] mb-6 font-alt">{formatGuarani(product.price)}</p>
            <button 
              onClick={() => onAddToCart(product)}
              className="w-full md:w-auto bg-[#C69214] text-white px-10 py-3 hover:bg-[#A3780F] transition font-semibold text-sm uppercase tracking-wider font-alt"
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartView({ cart, total, onUpdateQty, onRemove, onBack }) {
  return (
    <div className="py-4">
      <button onClick={onBack} className="mb-6 text-[#8F6B10] hover:underline flex items-center gap-1 font-medium">
        ← Continuar comprando
      </button>
      <h2 className="text-3xl font-title text-[#8F6B10] mb-8">Tu Carrito</h2>
      
      {cart.length === 0 ? (
        <div className="bg-white p-12 border border-[#EADFC9] text-center">
          <p className="text-gray-500 text-lg">Tu carrito está actualmente vacío.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="bg-white p-4 border border-[#EADFC9] flex flex-col sm:flex-row items-center gap-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover object-top bg-gray-50 p-1" />
                <div className="flex-grow text-center sm:text-left">
                  <h4 className="font-semibold text-gray-800 line-clamp-1">{item.title}</h4>
                  <p className="text-[#8F6B10] font-semibold mt-1 font-alt">{formatGuarani(item.price)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => onUpdateQty(item.id, -1)} className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 font-bold">-</button>
                  <span className="w-6 text-center font-semibold">{item.quantity}</span>
                  <button onClick={() => onUpdateQty(item.id, 1)} className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 font-bold">+</button>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700 ml-2">
                  🗑️
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 border border-[#EADFC9] h-fit space-y-4">
            <h3 className="text-xl font-title text-[#8F6B10] border-b pb-3">Resumen de Compra</h3>
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="font-alt">{formatGuarani(total)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Envío</span>
              <span className="text-green-600 font-semibold">Gratis</span>
            </div>
            <div className="border-t border-[#EADFC9] pt-3 flex justify-between font-bold text-lg text-gray-900">
              <span>Total Calculado</span>
              <span className="font-alt">{formatGuarani(total)}</span>
            </div>
            <button className="w-full bg-[#C69214] text-white py-3 hover:bg-[#A3780F] transition font-semibold text-sm uppercase tracking-wider font-alt">
              Proceder al pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [view, setView] = useState('catalog');

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(LOCAL_CLOTHING_PRODUCTS);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + amount;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6EE] text-gray-800 antialiased font-main">
      {/* Importación de fuentes inyectada dinámicamente */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Geomini:wght@200..800&family=Montenegrin+Gothic+One&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        /* Definimos clases auxiliares para simplificar el uso en Tailwind */
        .font-main {
          font-family: 'Poppins', sans-serif;
        }
        .font-title {
          font-family: 'Montenegrin Gothic One', 'Playfair Display', serif;
        }
        .font-alt {
          font-family: 'Oswald', sans-serif;
        }
      `}} />

      <header className="bg-[#FAF6EE] border-b border-[#EADFC9] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-title text-black cursor-pointer tracking-wider" onClick={() => setView('catalog')}>
            🍓Any's
          </h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <span className="cursor-pointer hover:text-[#8F6B10] transition" onClick={() => setView('catalog')}>Nueva Colección</span>
            <span className="cursor-pointer hover:text-[#8F6B10] transition" onClick={() => setView('catalog')}>Ropa</span>
            <span className="text-red-600 cursor-pointer hover:text-red-700 transition font-alt tracking-wider">SALE</span>
          </nav>
          <button 
            onClick={() => setView('cart')}
            className="relative bg-[#C69214] text-white px-5 py-2.5 hover:bg-[#A3780F] transition font-medium flex items-center gap-2 font-alt uppercase tracking-wider"
          >
            <span>🛒</span>
            <span className="hidden sm:inline">Carrito</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-sm">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-8">
        {loading ? (
          <div className="flex flex-col justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#C69214] mb-4"></div>
            <p className="text-lg font-title text-[#8F6B10]">Cargando catálogo...</p>
          </div>
        ) : (
          <div>
            {view === 'catalog' && (
              <Catalog 
                products={products} 
                onViewDetail={(p) => { setSelectedProduct(p); setView('detail'); }} 
                onAddToCart={addToCart} 
              />
            )}
            {view === 'detail' && (
              <ProductDetail 
                product={selectedProduct} 
                onBack={() => setView('catalog')} 
                onAddToCart={addToCart} 
              />
            )}
            {view === 'cart' && (
              <CartView 
                cart={cart} 
                total={cartTotal} 
                onUpdateQty={updateQuantity} 
                onRemove={removeFromCart} 
                onBack={() => setView('catalog')} 
              />
            )}
          </div>
        )}
      </main>
      <footer className="bg-[#8F6B10] text-[#FAF6EE] py-10 mt-auto">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-[#FAF6EE] font-title">Any's</h3>
              <p className="text-sm text-[#EADFC9]/90 leading-relaxed">
                Moda, elegancia y diseños exclusivos pensados para vos. Nos apasiona crear prendas que resalten tu mejor versión en cada ocasión.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-[#FAF6EE] font-title">Contacto</h3>
              <ul className="text-sm text-[#EADFC9]/90 space-y-2">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <span>📍</span> Av. Principal 123, San Lorenzo
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <span>📞</span> +595 981 123 456
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <span>✉️</span> anyscloset@gmail.com
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3 text-[#FAF6EE] font-title">Seguinos</h3>
              <div className="flex justify-center items-center gap-4 mb-3">
                <a href="#" className="hover:text-[#EADFC9] transition-colors" aria-label="Instagram">Instagram</a>
                <span className="text-[#EADFC9]/40">|</span>
                <a href="#" className="hover:text-[#EADFC9] transition-colors" aria-label="WhatsApp">WhatsApp</a>
              </div>
              <p className="text-xs text-[#EADFC9]/70 font-alt tracking-wide">
                Horario: Lun a Sáb: 08:00 a 19:00 hs
              </p>
            </div>
          </div>
          <hr className="border-[#FAF6EE]/20 my-6" />
          <div className="text-center">
            <p className="text-sm font-medium">&copy; Any's. Diseños Exclusivos.</p>
            <p className="text-xs text-[#EADFC9]/70 mt-1">Sitio Desarrollado por: Anabell Ruiz Diaz</p>
          </div>
        </div>
      </footer>
    </div>
  );
}