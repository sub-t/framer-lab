import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import {
  HoverHighlightItem,
  HoverHighlightList,
} from '@/animate/HoverHighlight';

export const MyList = () => {
  return (
    <Tabs variant="enclosed">
      <HoverHighlightList id="TabList">
        <TabList>
          <HoverHighlightItem
            id={1}
            Highlight={
              <div className="absolute -z-10 inset-0 bg-teal-100"></div>
            }
          >
            <Tab>First</Tab>
          </HoverHighlightItem>
          <HoverHighlightItem
            id={2}
            Highlight={
              <div className="absolute -z-10 inset-0 bg-teal-100"></div>
            }
          >
            <Tab>Second</Tab>
          </HoverHighlightItem>
          <HoverHighlightItem
            id={3}
            Highlight={
              <div className="absolute -z-10 inset-0 bg-teal-100"></div>
            }
          >
            <Tab>Third</Tab>
          </HoverHighlightItem>
        </TabList>
      </HoverHighlightList>
      <TabPanels>
        <TabPanel>a</TabPanel>
        <TabPanel>a</TabPanel>
        <TabPanel>a</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
