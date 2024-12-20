import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Ordered by something
      </MenuButton>
      <MenuList>
        <MenuItem>one</MenuItem>
        <MenuItem>two</MenuItem>
        <MenuItem>three</MenuItem>
        <MenuItem>four</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
