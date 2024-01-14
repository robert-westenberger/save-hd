import { createRoot } from 'react-dom/client';
import Popup from './Popup';

console.log('inside popup tsx...');
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Popup />);
