import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export function useIsMobile() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  return isMobile;
}

export function useDeviceType() {
  const isMobile = useIsMobile();
  return { isMobile, isDesktop: !isMobile };
}
