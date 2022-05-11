/* CTRL + Space est un raccourcis pour avoir la suggestion des props possibles */
import React, { useState, useRef } from 'react';

interface Person {
  firstName: string;
  lastName: string;
}
/* le point d'interrogation veut dire que le prop est optionnel */
interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
  handleChange?: (React.ChangeEventHandler<HTMLInputElement> )
}

interface isTrue {
  isT: boolean
}
/* Typer les composants */
export const TextField: React.FC<Props> = ({ handleChange }) => {
/* Typer les hooks */
const [count, setCount] = useState<number | null | undefined>(5);
const [greet, setGreet] = useState<{text: string}>({text: "Hello"});
const [bool, setBool] = useState<isTrue>({isT: false});

const inputRef = useRef<HTMLInputElement>(null);
const divRef = useRef<HTMLDivElement>(null)



  return (
    <div ref={divRef}>
        <input ref={inputRef} onChange={handleChange} />
        <p>{count}</p>
    </div>
  )
}
