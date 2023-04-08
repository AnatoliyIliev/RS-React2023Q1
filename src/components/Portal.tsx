import ReactDOM from 'react-dom';

import { ChildrenProps } from '../types';

function Portal({ children }: ChildrenProps) {
  return ReactDOM.createPortal(children, document.getElementById('modal-root') as HTMLElement);
}

export default Portal;
