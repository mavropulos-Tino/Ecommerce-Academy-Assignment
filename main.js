import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/style.css';

import { shopLoader } from '/js/controllers/shopLoader.js';

document.addEventListener('DOMContentLoaded', () => {
    shopLoader();
});