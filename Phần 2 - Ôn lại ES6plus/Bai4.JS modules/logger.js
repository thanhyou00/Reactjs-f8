
import {type_error} from './const.js';

function logger(log, type = type_error) {
    console[type](log);
}  

export default logger;