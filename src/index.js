import { TestHello } from './controlers/test';
import {jsonRequest}  from './controlers/getJsonController';
import {syntaxHighlight} from './services/jsonServices';
import {jsonCodeView} from './view/jsonView';

jsonRequest()

/*
let jsonRes = ;
jsonCodeView( 'json_res', jsonRes );
*/
const hello = new TestHello('DYZIO');
hello.sayHello();
