/* eslint no-undef: "warn" */


// import chai as our assertion library
import chai from 'chai';
// import our library
import {syntaxHighlight} from './commonServices';
// initialize chai should
chai.should();
chai.expect();
const expect = chai.expect;
require('jsdom-global')();


let stringJSON = '{"kind":"youtube#channelListResponse","etag":"\\"m2yskBQFythfE4irbTIeOgYYfBU/bBwv63z8MMfRnx4-pNmEHEu9XSU\\"","pageInfo":{"totalResults":1,"resultsPerPage":1},"items":[{"kind":"youtube#channel","etag":"\\"m2yskBQFythfE4irbTIeOgYYfBU/F5Ou8yi4O4kxHV-K8vKivOB9AeQ\\"","id":"UCACp5rqV3Ki0SNdXWDBLhRA","contentDetails":{"relatedPlaylists":{"uploads":"UUACp5rqV3Ki0SNdXWDBLhRA","watchHistory":"HL","watchLater":"WL"}}}]}';

let parseJSON = JSON.parse(stringJSON);

describe('get correct string format from JSON response', () => {
	it('should be a string', () => {
		let myTestJSON = syntaxHighlight(parseJSON);
		myTestJSON.should.be.a('string');
	});
});