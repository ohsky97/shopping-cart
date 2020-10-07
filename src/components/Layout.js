import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';

import { Helmet } from 'react-helmet-async';

import 'bootswatch/dist/lux/bootstrap.css';


// Helmet은 문서 헤드에 대한 모든 변경사항을 관리할 수 있는 컴포넌트이다.
// 사이트의 제목이나 설명을 지정할 수 있는 meta 태그와 title 태그에 주로 지정한다.
const Layout = ({title, description, children}) => {
    return ( 
        <>
        <Helmet>
            <title>{ title ? title + " - React Boilerplate" : "React.js Boilerplate" }</title>
            <meta name = "description" content={ description || "React.js Boilerplate" } data-react-helmet="true" />
        </Helmet>
        <Header/>
        <main className="container">
            {children}
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;