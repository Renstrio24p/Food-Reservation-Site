import Start from './Start';
import './index.css';
import 'typeface-poppins'
import 'typeface-dancing-script'
import 'animate.css'
import './utils/boxicons/css/boxicons.min.css'
import { scriptElement } from './utils/sanitizer/domSanitizer';

const DOM = document.getElementById('app') as HTMLDivElement
DOM.appendChild(scriptElement);
Start(DOM);
