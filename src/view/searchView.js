export let searchView = (idSection) =>{
	return    `    <div class="col s12 m12 l4">
                        <h4 class="blue-grey-text"> ${idSection} data</h4>
                        <p>${channelDescription()}</p>
                        <form>
                            <div class="input-field">
                                <label for="${idSection}__search">Search</label>
                                <input id="${idSection}__search" type="text" value=" " required>
                                <button id="${idSection}__btn" class="waves-effect waves-light btn" type='button'><i class="material-icons right">chevron_right</i> Go!
                                </button>
                            </div>
                        </form>
                    </div>`;
};

const channelDescription = () => {
	return 'Get channel data, write channel id (e.g. UCACp5rqV3Ki0SNdXWDBLhRA )';
};