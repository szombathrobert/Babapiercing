// import images
import Logo from "../src/img/header/logo.svg";
import GalleryImg1 from "../src/img/gallery/1.png";
import GalleryImg2 from "../src/img/gallery/2.png";
import GalleryImg3 from "../src/img/gallery/3.png";
import GalleryImg4 from "../src/img/gallery/4.png";
import GalleryImg5 from "../src/img/gallery/5.png";
import GalleryImg6 from "../src/img/gallery/6.png";
import GalleryImg7 from "../src/img/gallery/7.png";
import GalleryImg8 from "../src/img/gallery/8.png";
import GalleryImg9 from "../src/img/gallery/9.png";
import QuoteImg from "../src/img/testimonial/quote.svg";
// import icons
import { GrFacebookOption } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: "/", name: "Kezdőlap" },
    { href: "#about", name: "Rólam" },
    { href: "#work", name: "Munkáim" },
    { href: "#pricelist", name: "Árlista" },
    { href: "#contact", name: "Kapcsolat" },
  ],
};

export const socialData = [
  {
    href: "https://www.facebook.com/share/vb5SWT5k2tXPf2ED/",
    icon: <GrFacebookOption />,
  },
  {
    href: "https://instagram.com/zsofi.m91",
    icon: <IoLogoInstagram />,
  },
];

export const heroData = {
  title: "Maróti Zsófia.",
  subtitle: "Azt mondják legyen a hobbid a munkád és sose kell dolgoznod.",
  btnText: "Tudj meg többet",
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: "Történetem:",
  subtitle1:
    "Sziasztok Maróti Zsófiának hívnak. Ez a vállalkozás egy régi nagy álmom volt. Azt mondják legyen a hobbid a munkád és sose kell dolgoznod. Most belevágtam.",
  subtitle2:
    "Endoszkópos asszisztens/nővér vagyok főállásban. Mindig is érdekelt a piercing szúrás világa, már tanuló éveim alatt is. Nővérként nem áll messze Tőlem sem a sterilitás, sem pedig a tű. Szeretettel várok mindenkit aki szeretne egy szép testékszert.",
  subtitle3:
    "Eddigi életem során mindig fontos volt a fejlődés a szakmámban, most ezzel is bővítem a tudásom, és ezen a területen is folyamatosan tanulni, fejlődni fogok. Hívjatok, keressetek bátran. Puszi. Zsófi.",
  btnText: "Tudj meg többet",
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: "Nézd meg pár munkámat:",
  btnText: "Megnézem mindet",
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 370,
      height: 432,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 435,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 325,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 320,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 360,
      height: 412,
    },
    {
      src: GalleryImg9,
      original: GalleryImg9,
      width: 370,
      height: 412,
    },
  ],
};

// data.js

export const priceListData = {
  title: "Árlista",
  services: {
    Babáknak: [
      { name: "Csecsemő és Gyermek Füllyukasztás", price: "13.000 Ft" },
    ],
    Felnőtteknek: {
      Fül: [
        { name: "Migrén Piercing", price: "3000 Ft/fül" },
        { name: "Sima Füllyukasztás (2db)", price: "6000 Ft" },
        { name: "Sima Füllyukasztás (1db)", price: "3500 Ft" },
        { name: "Porcos Fülrész", price: "7000 Ft/db" },
      ],
      Orr: [{ name: "Orr piercing", price: "5000 Ft" }],
    },
  },
  warning_parent: "14 éves kortól szülői beleegyezéssel.",
  warning_home: "Házhoz kiszállás megbeszélés alapján!",
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "Nagyon kedves és aranyos egy hölgy. Segítőkész és a gyerekekkel is szót ért.",
    name: "Jane Doe",
  },
];

export const contactData = {
  title: "Lépj Velem kapcsolatba",
  info: [
    {
      title: "Időpontfoglalás:",
      subtitle:
        "Időpontot telefonon keresztül tudsz foglalni hozzám. Házhoz is megyek, de otthon is szívesen várlak.",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "2433. Sárosd, Jókai utca 13.",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+36309296120",
      },
      email: {
        icon: <FaEnvelope />,
        address: "info@babapiercing.hu",
      },
    },
  ],
  form: {
    name: "Ide írd a nevedet",
    subject: "Ide írd a tárgyat",
    phone: "Ide írd a telefonszámod",
    email: "Ide írd az email címed",
    message: "Ide írd az üzenetedet",
    btnText: "Küldés",
  },
};

export const footerData = {
  about: {
    title: "Babapiercingről",
    subtitle:
      "Nagyon szívesen vállalok pici babáktól kezdve, a gyerekeken át, felnőttekig az embereket piercing szúrásra.",
    address: {
      icon: <FaMapMarkerAlt />,
      name: "2433. Sárosd, Jókai utca 13.",
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: "+36309296120",
    },
    email: {
      icon: <FaEnvelope />,
      address: "info@babapiercing.hu",
    },
  },
  links: {
    title: "Hasznos linkek",
    items: [
      { href: "#about", name: "Rólam" },
      { href: "#work", name: "Munkáim" },
      { href: "#pricelist", name: "Áraim" },
      { href: "#contact", name: "Kapcsolat" },
    ],
  },
  program: {
    title: "Időpontfoglalás",
    items: [{ name: "Telefonon tudsz időpontot kérni." }],
  },
};
