import {syntaxHighlight} from '../service/commonServices';

export let jsonCodeView = (idFrame, res ) => {
	document.getElementById(idFrame).innerHTML = ' ';
	document.getElementById(idFrame).innerHTML += syntaxHighlight(res);
};


