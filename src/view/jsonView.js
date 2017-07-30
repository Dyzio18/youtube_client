import {syntaxHighlight} from '../services/commonServices';

export let jsonCodeView = (idFrame, res ) => {
	document.getElementById(idFrame).innerHTML += syntaxHighlight(res);
};


