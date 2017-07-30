export const initView = ( idElem ) => {
    let mySide = setHeader() + setMainSection();
    document.getElementById( idElem ).innerHTML += mySide;

};

const setHeader = () => {
    return ` <section class="container ">
        <div class="row ">
        <div class="col s6 m6 l6">
        <h2 class="grey-text"><span class="red-text text-lighten-1">Youtube</span> api</h2>
        </div>
        </div>
        </section> `;
};

const setJsonCode = (idElem) => {
    return `<pre id=${idElem}></pre>`;
};

const setMainSection = () => {
 return `<!-- Channel -->
            <section class="container ">
                <div class="row">
                    <div class="col s12 m12 l4">
                        <h4 class="blue-grey-text"> Channel data</h4>
                        <p>Get channel data, write channel id (e.g. UCACp5rqV3Ki0SNdXWDBLhRA )</p>
                        <form>
                            <div class="input-field">
                                <label for="channel_search">Search</label>
                                <input id="channel_search" type="search" required>
                                <button id="channel_btn" class="waves-effect waves-light btn"><i class="material-icons right">chevron_right</i> Go!
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="col s12 m12 l8">
                        ${setJsonCode('json_res')}
                    </div>
                </div>
            </section><!--/ Channel --> `
}