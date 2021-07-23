import { combineReducers } from 'redux';

import alert from './alert';
import auth from './auth';
import rootposts from './post';
import singlepost from './singlepost';

export default combineReducers({
    alert,
    auth,
    rootposts,
    singlepost
});
