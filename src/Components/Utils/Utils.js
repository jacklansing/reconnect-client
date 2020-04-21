import React from 'react';
import './Utils.css';

export function Button({ className, ...props }) {
  return <button className={['Button', className].join(' ')} {...props} />;
}

export function DeleteButton({ className, ...props }) {
  return (
    <button className={['Button delete', className].join(' ')} {...props} />
  );
}

export function Textarea({ className, ...props }) {
  return <textarea className={['Textarea', className].join(' ')} {...props} />;
}

export function Input({ className, ...props }) {
  return <input className={['Input', className].join(' ')} {...props} />;
}

export function Select({ className, ...props }) {
  return <select className={['Select', className].join(' ')} {...props} />;
}

export function Label({ className, ...props }) {
  return <label className={['Label', className].join(' ')} {...props} />;
}
