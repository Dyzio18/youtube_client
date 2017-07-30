import { TestHello } from './controlers/test';
import {jsonRequest}  from './controlers/getJsonController';
import {initView}  from './view/initView';

initView('app');

jsonRequest();

const hello = new TestHello('DYZIO');
hello.sayHello();


/* TODO
- Create buttons and send value to controller {Button} and then to

 */