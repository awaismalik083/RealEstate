// src/constants/assets.js

import home from "../assets/home.png";
import user from "../assets/user.png";
import logo from "../assets/logo.png";
import bg from "../assets/bg.png";
import search from "../assets/search.png";
import filter from "../assets/filter.png";
import apartment from "../assets/apartment.png";
import villa from "../assets/villa.png";
import office from "../assets/office.png";
import lahore from "../assets/lahore.jpg";
import multan from "../assets/multan.jpg";
import fsd from "../assets/fsd.jpg";
import bwp from "../assets/bwp.png";
import islamabad from "../assets/islamabad.jpg";
import left from "../assets/left.png";
import right from "../assets/right.png";
import icon from "../assets/icon.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import bg1 from "../assets/bg1.png";
import seller1 from "../assets/seller1.png";
import seller2 from "../assets/seller2.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import seller3 from "../assets/seller3.png";
import seller4 from "../assets/seller4.png";
import seller5 from "../assets/seller5.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import blg1 from "../assets/blg1.png";
import blg2 from "../assets/blg2.png";
import blg3 from "../assets/blg3.png";
import folder from '../assets/folder.png'
import footer1 from '../assets/footer1.png'
import logo7 from '../assets/logo7.png'
import insta from '../assets/insta.png'
import fb from '../assets/fb.png'
import twt from '../assets/twt.png'
import link from '../assets/link.png'



// All assets grouped here
export const asset = {
  logo,
  logo7,
  mail,
  folder,
  phone,
  home,
  user,
  bg,
  search,
  filter,
  apartment,
  villa,
  office,
  left,
  right,
  icon,
  bg1,
  seller1,
  seller2,
  footer1,
  fb,
  link,
  insta,
  twt
};

// Logos used for "Trusted by companies" section
export const Logos = [
  { Image: logo1 },
  { Image: logo2 },
  { Image: logo3 },
  { Image: logo4 },
  { Image: logo5 },
  { Image: logo6 },
];

// Blog Card Set
export const blog = [
  { Image: blg1, 
    description: "Best Areas for Couples to Live in Karrachi"
   },
  {
    Image: blg2,
    description: "How to Properly Verfiy Ownership in Pakistan",
  },
 
  {
    Image:blg3,
   description:"Villa Rents in Dubai have Reached on All-Time High"
  },
];

// Card set 1
export const card = [
  {
    _id: "1",
    heading: "Spacious & Luxurious in Dubai",
    Image: img1,
    Image1: icon,
    location: "Downtown, Dubai",
    Beds: 4,
    Baths: 2,
    sqft: 1150,
  },
  {
    _id: "2",
    heading: "Modern Apartment in Downtown",
    Image: img2,
    Image1: icon,
    location: "Downtown, Dubai",
    Beds: 3,
    Baths: 2,
    sqft: 1000,
  },
  {
    _id: "3",
    heading: "Elegant Living Space",
    Image: img3,
    Image1: icon,
    location: "Downtown, Dubai",
    Beds: 4,
    Baths: 3,
    sqft: 1200,
  },
];

// Card set 2
export const card2 = [
  {
    _id: "4",
    heading: "Luxury Villa with Sea View",
    Image: img5,
    Image1: icon,
    location: "Downtown, Dubai",
    Beds: 5,
    Baths: 3,
    sqft: 1500,
  },
  {
    _id: "5",
    heading: "Modern Family Home",
    Image: img6,
    Image1: icon,
    location: "Downtown, Dubai",
    Beds: 4,
    Baths: 2,
    sqft: 1300,
  },
  {
    _id: "6",
    heading: "Comfortable and Stylish Flat",
    Image: img7,
    Image1: icon,
    location: "Downtown, Dubai",
    Beds: 3,
    Baths: 2,
    sqft: 1100,
  },
];

// Popular city listings
export const list_places = [
  {
    _id: "1",
    name: "Lahore",
    Image: lahore,
    listings: "1000 listings",
  },
  {
    _id: "2",
    name: "Multan",
    Image: multan,
    listings: "190 listings",
  },
  {
    _id: "3",
    name: "Faisalabad",
    Image: fsd,
    listings: "1300 listings",
  },
  {
    _id: "4",
    name: "Bahawalpur",
    Image: bwp,
    listings: "100 listings",
  },
  {
    _id: "5",
    name: "Islamabad",
    Image: islamabad,
    listings: "900 listings",
  },
];

// Seller Images
export const Sellers = [
  {
    name: "Wade Warren",
    Image: seller3,
    description: "Sales Person",
  },
  {
    name: "Lexi Alexender",
    Image: seller4,
    description: "Commercial Broker",
  },
  {
    name: "Darlene Robertson",
    Image: seller5,
    description: "Reataler",
  },
];
