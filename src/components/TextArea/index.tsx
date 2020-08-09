import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

// o parametro final "...rest" representa TODAS as demais propriedades
// recebidas que não foram listadas. Neste caso, está representando
// tudo aquilo que foi herdado do TextAreaHTMLAttributes, que são todas
// as propriedades que um TextArea em HTML pode receber normalmente.
const TextArea: React.FC<TextAreaProps> = ({ name, label, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
}

export default TextArea;
