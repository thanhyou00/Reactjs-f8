



import logger from './logger.js';
// Cách 1
import {
    type_log,
    type_warn,
    type_error
} from './const.js';
logger('Loading message...',type_warn);

// Cách 2
import * as constants from './const.js';

logger('Loading message...',constants.type_error);