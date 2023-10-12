import { IconContext } from "react-icons";
import { FaStar, FaCalendarDays } from "react-icons/fa6";

interface CustomIconProps {
  icon: "star" | "calendar";
  color: string;
  size: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({ icon, color, size }) => {
  const iconMapping: { [key in CustomIconProps["icon"]]: React.ComponentType } =
    {
      star: FaStar,
      calendar: FaCalendarDays,
    };

  const IconComponent = iconMapping[icon];

  return (
    <IconContext.Provider value={{ size, color }}>
      <IconComponent />
    </IconContext.Provider>
  );
};

export default CustomIcon;
