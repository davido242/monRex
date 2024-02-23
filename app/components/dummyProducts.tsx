import { StaticImageData } from "next/image";
import kidsFront1 from "../../public/assets/images/products/kidsFront-1.webp";
import kidsBack1 from "../../public/assets/images/products/kidsBack-1.webp";
import kidsFront2 from "../../public/assets/images/products/kidsFront-2.webp";
import kidsBack2 from "../../public/assets/images/products/kidsBack-2.webp";
import kidsFront3 from "../../public/assets/images/products/kidsFront-3.webp";
import kidsBack3 from "../../public/assets/images/products/kidsBack-3.webp";
import kidsFront4 from "../../public/assets/images/products/kidsFront-4.webp";
import kidsBack4 from "../../public/assets/images/products/kidsBack-4.webp";

type Product = {
  id: number;
  slug?: string;
  image: {
    front: StaticImageData;
    back: StaticImageData;
  };
  name: string;
  price: string;
  description: string;
};

const dummyProduct: Product[] = [
  {
    id: 1,
    image: {
      front: kidsFront1,
      back: kidsBack1,
    },
    name: "Lumos Jacket - Cement Grey",
    price: "£64.99",
    description: "Free publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual."
  },
  {
    id: 2,
    image: {
      front: kidsFront2,
      back: kidsBack2,
    },
    name: "Lumos Jacket - Black",
    price: "£44.99",
    description: "Cruslor lishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a dum."
  },
  {
    id: 3,
    image: {
      front: kidsFront3,
      back: kidsBack3,
    },
    name: "Lumos Jacket - Cement Grey",
    price: "£34.59",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relyin"
  },
  {
    id: 5,
    image: {
      front: kidsFront4,
      back: kidsBack4,
    },
    name: "Men Jacket",
    price: "£78.59",
    description: "Dolor lishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
  },
];

function addSlug(product: Product): Product {
  const generatedSlug = product.name.toLowerCase().replace(/\s+/g, "-").replace(/-+/g, "-");

  return {
    ...product,
    slug: generatedSlug
  }
}

export const Products: Product[] = dummyProduct.map(addSlug);