import { TreeIcon, SunPlantIcon, WareHouseIcon } from "../ui/icons";

const services = [
  {
    name: "Outdoor Living Spaces",
    description:
      "Patios & Decks: Custom outdoor patios and decks.‘Outdoor Kitchens: Gourmet kitchens for outdoor dining. Pools & Water Features: Stunning pools and waterfalls Fire Pits & Heating: Cozy fire pits and heaters. Landscape Lighting: Professional outdoor lighting. Solar Panels: Eco-friendly solar installations",
    srcImage: "/service-1.jpg",
    icon: <TreeIcon className="text-white text-xl" />
  },
  {
    name: "Landscaping Services",
    description:
      "Design & Installation: Expert landscape design and setup. Garden Maintenance: Ongoing garden care. Irrigation Systems: Efficient watering solutions. Tree Care: Professional tree maintenance,",
    srcImage: "/service-2.jpg",
    icon: <SunPlantIcon className="text-white text-xl" />
  },
  {
    name: "Vintage Construction Inc",
    description:
      "New Construction: Custom homes and buildings. Remodels: Expert home and business renovations. ADU: Accessory Dwelling Units for extra space. Investment Properties: Quality construction for investors. Commercial Projects: Tailored business construction.",
    srcImage: "/service-3.jpg",
    icon: <WareHouseIcon className="text-white text-xl" />
  },
];

const testimonials = [
  {
    name: "Laura Chen",
    opinion:
      "Their attention to detail and professionalism exceeded our expectations. Highly recommend!",
    srcAvatar: "/testimonial-1.jpg",
    rating: 5,
  },
  {
    name: "Laura Chen",
    opinion: "Their attention to detail and professionalism exceeded our expectations. Highly recommend!",
    srcAvatar: "/testimonial-2.jpg",
    rating: 5,
  },
];

const blogs = [
  {
    title: "The Ultimate Guide to Home Remodeling",
    subtitle: "Trends and Tips",
    srcImage: "/blog-1.jpg",
  },
  {
    title: "Transform You Outdoor Space",
    subtitle: "5 Essential Tips",
    srcImage: "/blog-2.jpg",
  },
  {
    title: "Sustainable Landscaping",
    subtitle: "Eco-Friendly Practices",
    srcImage: "/blog-3.jpg",
  },
];

export { services, testimonials, blogs }