import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socials = [
  {
    icon: <FaGithub />,
    url: "https://github.com/bluepeaktechdev",
    hover: "hover:text-yellow-400",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/bluepeak-tech-4141773a1/",
    hover: "hover:text-yellow-400",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/bluepeaktech.dev/",
    hover: "hover:text-yellow-400",
  },
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/profile.php?id=61575157475977",
    hover: "hover:text-yellow-400",
  },
  {
    icon: <FaWhatsapp />,
    url: "https://wa.me/2348149146262",
    hover: "hover:text-green-400",
  },
  {
    icon: <MdEmail />,
    url: "mailto:bluepeaktech.dev@gmail.com",
    hover: "hover:text-red-400",
  },
];

const MobileSocials = ({ closeMenu }) => {
  return (
    <div className="flex justify-center gap-6 py-4">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
          className={`
            text-gray-400 text-2xl
            transition-all duration-200
            hover:scale-110
            active:scale-90
            ${item.hover}
          `}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default MobileSocials;
