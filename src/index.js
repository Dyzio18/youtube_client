import {TestHello} from './controlers/test';
import {sendRequest}  from './services/requestServices';
import {sectionView}  from './view/appView';

sectionView('app');

sendRequest('channel');

const hello = new TestHello('DYZIO');
hello.sayHello();


/* TODO
-   Create buttons and send value to controller {Button} and then search
    [ Draw it ! ]

 */