import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Store from '../pages/store';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Cart from '../pages/cart';

const Routes = () => {
    return (
        // 그냥 라우터로 설정할 경우 호스트 할 시에 로컬 주소랑 일치하지 않아서 빈 화면이 출력(404 에러)
        // basename={process.env.PUBLIC_URL} 모든 위치의 기본 URL을 설정하여
        // homepage 주소와 통일
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path='/about' component={About} />
                <Route exact path='/' component={Store} />
                <Route path='/cart' component={Cart} />
                <Route path='*' component={NotFound} />
            </Switch>
        </Router>
    );
}

export default Routes;