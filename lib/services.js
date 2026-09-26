import { FaHome, FaBath } from "react-icons/fa";
import { MdKitchen, MdRoofing, MdOutlineAddHome } from "react-icons/md";
import { TbBuildingCottage, TbWindow } from "react-icons/tb";

// `summary` is the short version used on the home page cards
export const services = [
  {
    slug: "renovations",
    title: "Whole House Renovations",
    icon: FaHome,
    summary: "Transform your existing home into a beautiful new living space.",
    description:
      "We transform existing homes into beautiful new living spaces. We renovate your living space to your style, specifications and budget.",
  },
  {
    slug: "additions",
    title: "Room Additions",
    icon: MdOutlineAddHome,
    summary: "More living space and more value: bedrooms, dens, and conversions.",
    description:
      "Adding a new room to your house not only increases your available living space, but also your investment value. Whether it's a new bedroom, den or a basement or garage conversion our team works closely with you to get the house you want.",
  },
  {
    slug: "dormers",
    title: "Dormers",
    icon: TbBuildingCottage,
    summary: "An affordable way to add square footage, curb appeal, and value.",
    description:
      "Dormers are an affordable way to increase the square footage of your house, while enhancing the appearance and value of the house.",
  },
  {
    slug: "bathrooms",
    title: "Bathroom Remodeling",
    icon: FaBath,
    summary: "Luxury finishes, cabinetry, and fixtures from all major brands.",
    description:
      "Quality workmanship shines through on our bathroom remodeling. We combine luxury finishes, cabinetry and fixtures from all major brands. Whether it's a new idea or working with your existing design, we will take every possible measure to build the comfort and elegance you desire.",
  },
  {
    slug: "kitchens",
    title: "Kitchen Remodeling",
    icon: MdKitchen,
    summary: "Cabinetry, appliances, and functional design for the kitchen you want.",
    description:
      "From new breakfast rooms to appliances to new cabinetry, our kitchen remodeling team will design the kitchen of your dreams. Let us show you how top quality finishes and the latest in functional design techniques can spice up your kitchen/dining experience.",
  },
  {
    slug: "exteriors",
    title: "Exterior Improvements",
    icon: MdRoofing,
    summary: "Siding, roofing, decks, porches, and cultured stone.",
    description:
      "Our team can make sure your home is both beautiful and functional. The options are nearly unlimited: from installing siding, to replacing roofs, to adding cultured stone, we can change an ordinary house into an extraordinary house!",
  },
  {
    slug: "windows",
    title: "Window Replacement",
    icon: TbWindow,
    summary: "Energy-saving windows, matched to your exact sizes.",
    description:
      "Window replacements save energy costs and beautify your home. We'll match your new windows to the exact sizes and let the energy savings pay for themselves over time.",
  },
];
