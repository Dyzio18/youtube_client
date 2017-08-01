export let jsonView = (idSection) => {
	return `        <div class="col s12 m12 l8">
                        <pre id="${idSection}__result"  class="JSONviewer"></pre>
                    </div>
    
    `;
};

export let showComment = (idSection) => {
	return `<div class="col s12 m12 l12">
		<h2> Comments </h2>
		<pre id="${idSection}__comments"  class="JSONviewer"></pre>
	</div>`;
};
