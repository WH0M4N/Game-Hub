import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSubmit: (data: string) => void;
}

const NavBar = ({ onSubmit }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSubmit={(data) => onSubmit(data)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
