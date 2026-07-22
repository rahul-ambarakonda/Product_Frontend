import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 m-4 bg-white">
      <div className="relative w-full h-48">
        <Image
          src={product.imageUrl}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="w-full"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2 text-gray-800">{product.name}</div>
        <p className="text-gray-700 text-base">
          {product.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-blue-100 text-blue-800 text-lg font-bold px-4 py-2 rounded-full mb-2">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
