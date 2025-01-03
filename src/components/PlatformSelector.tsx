import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import Platform from "../entities/Platform";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatform();
  const setPlatform = useGameQueryStore((s) => s.setPlatform);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

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
          <MenuItem key={platform.id} onClick={() => setPlatform(platform.id)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
