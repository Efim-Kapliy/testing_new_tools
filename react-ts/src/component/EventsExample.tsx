import { ChangeEvent, DragEvent, FC, MouseEvent, useRef, useState } from 'react';

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handlerClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const handlerDrag = (e: DragEvent<HTMLDivElement>) => {
    console.log('Drag');
  };

  const handlerDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log('Drop');
    e.dataTransfer.files.item(1);
  };

  const handlerLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const hendlerDragWithPrevent = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  return (
    <div>
      <input value={value} type='text' onChange={handlerChange} placeholder='Управляемый' />
      <input type='text' placeholder='Неуправляемый' ref={inputRef} />
      <button onClick={handlerClick}>Кнопка</button>
      <div
        onDrag={handlerDrag}
        draggable
        style={{ width: 200, height: 200, background: 'crimson', marginTop: 15 }}
      ></div>
      <div
        onDrag={handlerDrop}
        onDragLeave={handlerLeave}
        onDragOver={hendlerDragWithPrevent}
        style={{ width: 200, height: 200, background: isDrag ? 'lightskyblue' : 'crimson', marginTop: 15 }}
      ></div>
    </div>
  );
};

export default EventsExample;
