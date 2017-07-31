import {searchView} from './searchView';
import {resultView} from './resultView';

/*
 * Render main view which is divided into two parts: SEARCH and RESULT section
 */
export const sectionView = (idElem ) => {
	// let mySide = setHeader() + setMainSection();
	let appView = `
			${setHeader()}
            <section class="container ">
                <div class="row">
                    ${searchView('video')}
                    ${resultView('video')}                
                </div>
            </section><!--/ Channel -->
	`;

	document.getElementById( idElem ).innerHTML += appView;
};
/*
 * Render Header
 */
const setHeader = () => {
	return ` <section class="container ">
        <div class="row ">
        <div class="col s6 m6 l6">
        <h2 class="grey-text"><span class="red-text text-lighten-1">Youtube</span> api</h2>
        </div>
        </div>
        </section> `;
};

