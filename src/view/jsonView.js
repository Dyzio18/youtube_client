import {syntaxHighlight} from '../services/jsonServices';

export let jsonCodeView = (idFrame, res ) => {
	document.getElementById(idFrame).innerHTML += syntaxHighlight(res);
};


