import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SidebarDrawerProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SideBarDrawerContext = createContext({} as SidebarDrawerContextData);

const SidebarDrawerProvider = ({ children }: SidebarDrawerProps) => {
  const disclosure = useDisclosure();

  const location = useLocation();

  useEffect(() => {
    disclosure.onClose();
  }, [location.pathname]);

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  );
};

const useSideBarDrawer = () => useContext(SideBarDrawerContext);

export { SidebarDrawerProvider, useSideBarDrawer };
