import { RiOpenaiLine } from "react-icons/ri";
import ThemeToggle from "./ThemeToggle";

const SidebarHeader = () => {
  return (
    <header className="flex items-center text-secondary py-4 mb-4 gap-4 px-1">
      <RiOpenaiLine className="w-12 h-12" />
      <h2 className="text-xl font-extrabold mr-auto">TOUR GENIUS</h2>
      <ThemeToggle />
    </header>
  );
};

export default SidebarHeader;
