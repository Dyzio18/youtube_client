import {TestHello} from './controlers/test';
import {jsonRequest}  from './controlers/getJsonController';
import {sectionView}  from './view/appView';

sectionView('app');

jsonRequest('channel');

const hello = new TestHello('DYZIO');
hello.sayHello();


/* TODO
-   Create buttons and send value to controller {Button} and then search
    [ Draw it ! ]

 */