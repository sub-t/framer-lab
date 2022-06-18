import { Slot, Slottable } from '@radix-ui/react-slot';

export const Aaaa = () => (
  <Slot onClick={() => console.log('hello')}>
    <Slottable>
      <button className="bg-slate-900">
        <p className="bg-orange-900">aaaaa</p>
      </button>
    </Slottable>
    <p>aaaaa</p>
    <p>aaaaa</p>
    <>
      <p>aaaaa</p>
    </>
  </Slot>
);
