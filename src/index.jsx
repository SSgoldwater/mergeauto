import {render} from 'react-dom';
import Router from './utils/Router';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for React onTouchTap
injectTapEventPlugin();

// Render router object inside of app html element
render(Router, document.getElementById('app'));
