import {
  HoverHighlightItem,
  HoverHighlightList,
} from '@/animate/HoverHighlight';
import { HoverMove } from '@/animate/HoverMove';

export const List = () => (
  <HoverHighlightList>
    <div className="flex flex-wrap gap-2">
      {Array.from({ length: 10 }).map((item, idx) => (
        <HoverMove key={idx}>
          <HoverHighlightItem
            id={idx}
            Highlight={
              <div className="absolute -z-10 inset-0 bg-teal-100"></div>
            }
          >
            <div className="w-36 box-border p-4 flex justify-center uppercase text-slate-900 text-center">
              item {idx}
            </div>
          </HoverHighlightItem>
        </HoverMove>
      ))}
    </div>
  </HoverHighlightList>
);
