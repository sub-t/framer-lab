import { ButtonGroup, Button } from '@mui/material';
import {
  HoverHighlightItem,
  HoverHighlightList,
} from '@/animate/HoverHighlight';
import { HoverMove } from '@/animate/HoverMove';

export const MyButtonGroup = () => (
  <HoverHighlightList>
    <ButtonGroup>
      {Array.from({ length: 10 }).map((item, idx) => (
        <HoverMove key={idx}>
          <HoverHighlightItem
            id={idx}
            Highlight={
              <div className="absolute -z-10 inset-0 bg-teal-100"></div>
            }
          >
            <Button>
              item {idx}
            </Button>
          </HoverHighlightItem>
        </HoverMove>
      ))}
    </ButtonGroup>
  </HoverHighlightList>
);
