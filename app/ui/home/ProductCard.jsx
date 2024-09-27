import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ title, description, imageUrl, url }) => {
  return (
    <Link href={url}><div className="group bg-transparent text-secondary border-2 border-secondary rounded-t-lg cursor-pointer overflow-hidden shadow-lg hover:bg-secondary hover:text-primary ease-in-out duration-300 ">
      <div className="relative w-full h-96">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          quality={75} // Ajusta la calidad según sea necesario para optimización
          className="rounded-t-lg group-hover:scale-105 ease-in-out duration-300 "
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-3xl md:text-4xl mb-2 font-arapey">{title}</h3>
        <p className="text-sm text-gray-300 mb-4 font-assistant">{description}</p>
        <button className="inline-flex items-center px-4 py-2 bg-transparent border border-secondary text-secondary rounded-full  group-hover:text-[#101A33] group-hover:border-primary ease-in-out duration-300">
          Telas y detalles
          <span className="ml-2">&rarr;</span>
        </button>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
