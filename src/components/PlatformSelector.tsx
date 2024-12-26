import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/usePlatform";

interface Props {
  onSelect: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelect, selectedPlatformId }: Props) => {
  const { data, error } = usePlatform();
  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelect(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
