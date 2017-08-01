export let searchView = (idSection) =>{
	return    `    <div class="col s12 m12 l4">
                        <h4 class="blue-grey-text"> ${idSection} data</h4>
                        <p>${channelDescription()}</p>
                        <form>
                            <div class="input-field margTop__m">
                                <label for="${idSection}__search">Search</label>
                                <input id="${idSection}__search" type="text" value=" " required>
							</div>
                            <button id="${idSection}__btn" class="waves-effect waves-light btn margTop__m" type='button'><i class="material-icons right">chevron_right</i> Go!
                            </button>
                        </form>
                    </div>`;
};

const channelDescription = () => {
	return 'Get video data! Paste only video URL <br> https://www.youtube.com/watch?v=PDJPpG8e4n4';
};



/*
 <input type="checkbox" id="${idSection}__checkbox--comments" class="margTop__m"/>
<label for="${idSection}__checkbox--comments">Show comments</label>
<div class="switch margTop__m">
	Order by:
	<label>
	  Popularity
	  <input type="checkbox" id="${idSection}__checkbox--order">
	  <span class="lever"></span>
	  Date
	</label>
</div>
 */