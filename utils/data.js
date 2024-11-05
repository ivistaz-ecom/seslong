import { MdMailOutline } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";

export const homeSlider = [
  {
    image: "/Home/slider-image-01.png",
    mobImage: "/Home/mobile-slider-01.jpg",
    alt: "Description 1",
    description: "Seslong Your Reliable Partner for Quality Products",
    text: "Seslong Your Reliable Partner <br> for Quality Products",
  },
  {
    image: "/Home/slider-image-02.jpg",
    mobImage: "/Home/mobile-slider-02.jpg",
    alt: "Description 2",
    description: "Seslong Your Reliable Partner <br> for Quality Products",
    text: "Seslong Your Reliable Partner <br> for Quality Products",
  },
  {
    image: "/Home/slider-image-03.png",
    mobImage: "/Home/mobile-slider-03.jpg",
    alt: "Description 3",
    description: "Seslong Your Reliable Partner <br> for Quality Products",
    text: "Seslong Your Reliable Partner <br> for Quality Products",
  },
  {
    image: "/Home/slider-image-04.png",
    mobImage: "/Home/mobile-slider-04.jpg",
    alt: "Description 4",
    description: "Seslong Your Reliable Partner <br> for Quality Products",
    text: "Seslong Your Reliable Partner <br> for Quality Products",
  },
  {
    image: "/Home/slider-image-05.jpg",
    mobImage: "/Home/mobile-slider-05.jpg",
    alt: "Description 5",
    description: "Seslong Your Reliable Partner <br> for Quality Products",
    text: "Seslong Your Reliable Partner <br> for Quality Products",
  },

  {
    image: "/Home/slider-image-06.jpg",
    mobImage: "/Home/mobile-slider-06.jpg",
    alt: "Description 6",
    description: "Seslong Your Reliable Partner <br> for Quality Products",
    text: "Seslong Your Reliable Partner <br> for Quality Products",
  },
];

export const ProductsItems = [
  {
    items: "Personal Care",
    productImage: "/Home/home-product1.png",
    description:
      "We offer a variety of cosmetics, beauty and personal care products.",
    url: "/product-care",
  },
  {
    items: "Hygiene",
    productImage: "/Home/home-hygine.jpg",
    description:
      "Our hygiene products for babies and adults include diapers and menstrual hygiene products which are designed for maximum comfort and absorbency.",
    url: "/hygiene",
  },
  {
    items: "Laundry",
    productImage: "/Home/home-loundry.png",
    description:
      "Laundry pods and detergents to innovative fabric care products such as color grabbers, white protect, softeners and scent boosters.",
    url: "",
  },
  {
    items: "Home Care",
    productImage: "/Home/home-home-care.jpg",
    description:
      "We provide a wide array of home care products including wet wipes, air care products and high-quality household appliances like vacuum cleaners and air purifiers.",
    url: "",
  },
  {
    items: "Food and Agro",
    productImage: "/Home/home-food-and-agro.png",
    description:
      "Our offerings include exotic and specialty food such as Asian sauces and seasoning, dried fruits and imported exotic fruits, sourced globally to ensure freshness and quality.",
    url: "",
  },
  {
    items: "Tobacco and Acetate",
    productImage: "/Home/Tobacco and Acetate Tow.jpg",
    description:
      "We supply different types of unmanufactured tobacco such as FCV, Burley, DFC and Oriental Tobaccos from different origins globally.",
    url: "",
  },
];

export const companyInfo = [
  {
    name: "Seslong Traders Pvt. Ltd.",
    address:
      "No. 27, 2nd Floor, Krishna Reddy Layout, Domlur, Bengaluru, Karnataka — 560071",
  },
  {
    name: "Seslong Global Limited",
    address:
      "26th Floor, Beautiful Group Tower, 77 Connaught Road, Central, Hong Kong",
  },
];

export const quickLinks = [
  { name: "Home", url: "/" },
  { name: "Who we are", url: "/who-we-are" },
  { name: "What we do", url: "/what-we-do" },
  { name: "Products", url: "/products" },
  { name: "Contact Us", url: "/contact-us" },
  { name: "Get The Brochure", url: "/get-the-brochure" },
];

export const contactInfo = [
  {
    contact: "contact@seslong.com",
    logo: <MdMailOutline className="text-[#E5E5E4]" />,
    href: "mailto:contact@seslong.com",
  },
  {
    contact: "IND: +91-99002-88341",
    logo: (
      <div className="flex items-center gap-1">
        <MdOutlinePhoneInTalk className="text-[#E5E5E4]" />
        <IoLogoWhatsapp className="text-[#E5E5E4]" />
      </div>
    ),
    href: "tel:+919900288341",
  },

  {
    contact: (
      <div className="flex space-x-2">
        <span className="pl-2">HK<span className="pl-1"></span> :</span>
        <span className="">+852-5590-9449</span>
      </div>
    ),
    logo: (
      <div className="flex items-center gap-1">
        <MdOutlinePhoneInTalk className="text-[#E5E5E4]" />
        <IoLogoWhatsapp className="text-[#E5E5E4]" />
      </div>
    ),
    href: "tel:+85255909449",
  },
];

export const copyRight = [
  "@ 2024 Seslong Global Limited. <br class='md:hidden block'> All Rights Reserved. Privacy Policy.",
];

export const whoWeAre = [
  {
    icon: "/who-we-are/oem-icon.svg",
    expert: "OEM supply of consumer products to brands and retails pan India.",
  },
  {
    icon: "/who-we-are/fruits.svg",
    expert:
      "Import and distribution of exotic fruits, vegetables and dried fruits.",
  },
  {
    icon: "/who-we-are/indian.svg",
    expert: "Exports of Indian original products to International markets.",
  },
];

export const sections = [
  {
    title: "Manufacturing",
    description:
      "We produce a wide array of products tailored to the needs of diverse markets, ensuring high standards of craftsmanship and functionality.",
    imageSrc: "/what-we-do/Manufacturing.png",
  },
  {
    title: "Exports",
    description:
      "Leveraging our strategic locations in India, Hong Kong and China we export a broad range of quality products to our customers located across different continents.",
    imageSrc: "/what-we-do/Exports.jpg",
  },
  {
    title: "Distribution",
    description:
      "Our distribution network (across India) is optimized to deliver products efficiently and effectively to various customer segments including large hotel chains, individual restaurants and retailers.",
    imageSrc: "/what-we-do/Distribution.jpg",
  },
];

export const products = {
  "Personal Care": [
    {
      name: "Razors",
      description:
        "Our range of disposable and systems razors are suitable for Men and Women. Available in 2, 3, 4, 5 & 6 blades we have a product suitable for all needs. Ergonomic design, comfortable grip and high quality blades offer comfort and precision.",
      imageSrc: "/Products/Razors.png",
      popImageSrc: "/Products/popup/Razors.png",
    },
    {
      name: "Hair Brushes",
      description:
        "Our hair brush range is expansive and can cater to all your hair care needs. Detangling brushes, wet brushes, paddle brushes, blow dry brushes and a range of fun kids hair brushes all available in attractive designs and packaging.",
      imageSrc: "/Products/Hair-Brushes.png",
      popImageSrc: "/Products/popup/Hair-Brushes.png",
    },
    {
      name: "Makeup Brushes",
      description:
        "We have the perfect tools for your everyday make up regime. Top quality and attractive designs. Our bristles are available in both vegan (super soft nano fibre) and animal hair ranges.",
      imageSrc: "/Products/Make-up-Brushes.png",
      popImageSrc: "/Products/popup/Make-up-Brushes.png",
    },
    {
      name: "Cosmetics",
      description:
        "We offer a range of trendy colour cosmetics and empty cosmetic containers. Our products cover your beauty needs for face, eyes and lips. To complement these products, we have a range of make up brushes and pouches which help provide the end customer an entire range of products in beauty and make up.",
      imageSrc: "/Products/Cosmetics.png",
      popImageSrc: "/Products/popup/Cosmetics.png",
    },
    {
      name: "K-Beauty Range",
      description:
        "Korean beauty products have achieved cult status in the global market. Known for their superior quality, we offer our customers are wide range of care and beauty products for Skin, Hair and Body. These products include toners, serums, lotions/creams, cleansing, masks/patches, shampoos and conditioners. We can help curate a new range or offer existing brands for distribution.",
      imageSrc: "/Products/K-Beauty-Range.png",
      popImageSrc: "/Products/popup/KbeautyRange.png",
    },
    {
      name: "Cotton Products",
      description:
        "Simple everyday use products including cotton pads, balls and ear buds (including safety buds for babies). Our cotton pads are suitable for both face cleaning / make up removal. Safe and sterile products with customised pack count and packaging.",
      imageSrc: "/Products/Cotton-Products.png",
      popImageSrc: "/Products/popup/cotton.jpg",
    },
  ],
  Hygiene: [
    {
      name: "Tampons",
      description:
        "We offer tampons with and without applicator in different sizes to suit different needs. Available in Rayon and Organic cotton series providing extra comfort, longer dryness and freshness.",
      imageSrc: "/Products/Tampons.png",
      popImageSrc: "/Products/popup/Tampons.png",
    },
    {
      name: "Diapers",
      description:
        "Superior quality and comfort with options in tape and pant style. Our diapers are made for both Babies and Adults.",
      imageSrc: "/Products/DiapersBaby.png",
      popImageSrc: "/Products/popup/DiapersBaby.png",
    },
    {
      name: "Sanitary Pads",
      description:
        "Our Ultra thin range of sanitary pads are designed for maximum comfort and absorbency. Super soft material and leak guard technology ensures longer dryness without any irritation. Available in a different sizes. We can customise the pouch and pad wrapper to increase your brand visibility and recall.",
      imageSrc: "/Products/Sanitary-pads.png",
      popImageSrc: "/Products/popup/Sanitary-pads.png",
    },
    {
      name: "Bed Pads",
      description:
        "Super soft and absorbent bed pads have multiple uses - baby cribs, adult care, hospitals and even for pets. Available in 2 fast selling sizes.",
      imageSrc: "/Products/Bed-Pads.png",
      popImageSrc: "/Products/popup/Bed-Pads.png",
    },
  ],
  Laundry: [
    {
      name: "Laundry Pods",
      description:
        "Highly concentrated formulation, easy to use and wide range of fragrances. Our pods are available in attractive designs and hypoallergenic fragrances which are suitable for delicate fabric such as inner wear and children’s wear. Pod size, number of chamber, fragrance, colour, packaging and count per pack can be customised to suit your requirements.",
      imageSrc: "/Products/Laundry-Pods.png",
      popImageSrc: "/Products/popup/Laundry-Pods.png",
    },
    {
      name: "Laundry Detergent Sheets",
      description:
        "100% Biodegradable and eco friendly product for your daily laundry. Highly concentrated formula where the sheet disintegrates when it comes into contact with water. Natural plant based formulation for a mild yet effective wash. Available in different sizes and packaging options.",
      imageSrc: "/Products/Laundry-Detergent-Sheets.png",
      popImageSrc: "/Products/popup/Laundry-Detergent-Sheets.png",
    },
    {
      name: "Laundry Detergents",
      description:
        "We offer Laundry Detergent Liquid, Fabric Softener Liquid, Multi-Function Cleaning Powder, and Laundry Powder, with fully customizable packaging and logo to meet your requirements.",
      imageSrc: "/Products/Laundry-Detergents.png",
      popImageSrc: "/Products/popup/Laundry-Detergents.png",
    },
    {
      name: "Garment Care",
      description:
        "Speciality laundry products including colour grabber, white protect, fabric softener sheets and scent booster all of which offer superior care and cleaning for all clothes.",
      imageSrc: "/Products/Garment-Care.png",
      popImageSrc: "/Products/popup/Garment-Care.png",
    },
  ],
  "Home Care": [
    {
      name: "Wet Wipes",
      description:
        "Gentle yet effective range of wet wipes including baby, antibacterial, all purpose and speciality wipes for home cleaning. Pouch and Tub packing available with different pull counts. We can customise sheet material (Bamboo fibre available), thickness, size, function and fragrance to suit your requirement.",
      imageSrc: "/Products/Wet-Wipes.png",
      popImageSrc: "/Products/popup/Wet-Wipes.png",
    },
    {
      name: "Air Care",
      description:
        "Daily use essential products such as Fridge Odor Absorbers, Moisture Absorbers, Gel Air Fresheners and Natural Bamboo-Based Absorbers.",
      imageSrc: "/Products/Air-care.png",
      popImageSrc: "/Products/popup/Air-care.png",
    },
    {
      name: "Mops and Brushes",
      description:
        "We have an extensive range in home cleaning tools including mops, duster, brushes, scrubbers and cloths. Please do contact us with your requirement so we can offer you the right product and price.",
      imageSrc: "/Products/Mops-and-Brushes.png",
      popImageSrc: "/Products/popup/Mops-and-Brushes.png",
    },
    {
      name: "Household Appliances",
      description:
        "High quality home and kitchen appliances including vacuum cleaners, air purifiers, air fryers and more. Grade A quality products with region specific certification allowing for easy import and sale.",
      imageSrc: "/Products/Household-Appliances.png",
      popImageSrc: "/Products/popup/Household-Appliances.png",
    },
  ],
  "Food and Agro": [
    {
      name: "Dried Fruits",
      description:
        "Our dried fruit selection includes Afghan figs, Afghan raisins, California pistachios, almonds, and walnuts, all imported directly from the source, with various packaging options available.",
      imageSrc: "/Products/Dried-Fruits.png",
      popImageSrc: "/Products/popup/Dried-Fruits.png",
    },
    {
      name: "Fruits and Vegetables",
      description:
        "We import and distribute in India an exotic range of fruits and vegetables including Haas avocados, Thai range (lotus stem, asparagus, chillies), Italian lemons, frozen berries, frozen edamame and others for supply to the HORECA and retail markets across India.",
      imageSrc: "/Products/Exotic-Imported-Fruits-and-Vegetable.png",
      popImageSrc: "/Products/popup/Exotic-Imported-Fruits-and-Vegetable.png",
    },
    {
      name: "Pet Foos",
      description:
        "Our pet food range includes wet (canned), dry and treats that are specifically curated for dogs and cats. Available in a range of meat and vegetable flavours with customisation of packaging and size.",
      imageSrc: "/Products/Pet-Food.png",
      popImageSrc: "/Products/popup/Pet-Food.png",
    },
    {
      name: "Asian Sauces and Pastes",
      description:
        "OEM supplies of an exotic range of asian cooking sauces, dipping sauces and pastes. The range includes oyster sauce, soy sauce (light, dark, low sodium, gluten free), chilli sauce, chilli oil, mirin and others.",
      imageSrc: "/Products/Asian-sauces-and-pastes.png",
      popImageSrc: "/Products/popup/Asian-sauces-and-pastes.png",
    },
  ],
  "Tobacco and Acetate": [
    {
      name: "Tobacco",
      description:
        "We supply different types of unmanufactured tobacco such as FCV, Burley, DFC and Oriental Tobaccos from different origins globally. Please contact us to enquiry about current availability and quantity.",
      imageSrc: "/Products/Tobacco.png",
      popImageSrc: "/Products/popup/Tobacco.png",
    },
    {
      name: "Acetate Tow",
      description:
        "Made from natural wood-pulp, after been acetified into cellulose acetate slice, dissolve, filter, spin, roll, and dry into the product. While there are multiple uses for acetate tow, we supply premium quality tow, which is the key raw material used in making cigarette filters. Aviailable with a wide range of single denier from 2.0 to 9.0 and total denier from 15,000 to 40,000.",
      imageSrc: "/Products/Acetate-Tow.png",
      popImageSrc: "/Products/popup/Acetate-Tow.png",
    },
  ],
};

export const formCategoryList = [
  { name: "Personal Care" },
  { name: "Hygiene" },
  { name: "Laundry" },
  { name: "Home Care" },
  { name: "Food and Agro" },
  { name: "Tobacco and Acetate" },
];
