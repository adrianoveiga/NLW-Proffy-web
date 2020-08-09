import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

// o parametro final "...rest" representa TODAS as demais propriedades
// recebidas que não foram listadas. Neste caso, está representando
// tudo aquilo que foi herdado do InputHTMLAttributes, que são todas
// as propriedades que um Input em HTML pode receber normalmente.
const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
}

export default Input;
