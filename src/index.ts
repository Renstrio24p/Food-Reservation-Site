import Start from './Start.js';
import './index.css';
import 'typeface-poppins'
import 'typeface-dancing-script'
import 'animate.css'
import 'boxicons/css/boxicons.min.css'
import { scriptElement } from './utils/sanitizer/domSanitizer.js';

const DOM = document.getElementById('app') as HTMLDivElement
DOM.appendChild(scriptElement);
Start(DOM);
