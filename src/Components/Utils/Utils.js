import React from 'react';
import './Utils.css';

export function Button({ className, ...props }) {
  return <button className={['Button', className].join(' ')} {...props} />;
}
