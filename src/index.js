import {TestHello} from './controller/test';
import {sendRequest}  from './service/requestServices';
import {sectionView}  from './view/appView';
import {searchController} from './controller/searchController'


sectionView('app');

searchController();

const hello = new TestHello('DYZIO');
hello.sayHello();


/* TODO
-   Create buttons and send value to controller {Button} and then search [ Draw it ! ]
-   Config file
-   Get url  (do this better)
 */