import React from 'react'
import HomeContainers from './Containers/HomeContainers/HomeContainers'
import NotFoundContainer from './Containers/NotFoundContainers/NotFoundContainers'
import ProductListContainers from './Containers/ProductListContainers/ProductlistContainer'
import ActionContainers from './Containers/ActionContainers/ActionContainers'
const routes = [
    {   
        path: '/',
        exact : true,
        main :()=><HomeContainers/>
    },
    {
        path: '/product-list',
        exact : false,
        main :()=><ProductListContainers/>
    },
    {
        path: '/add/product',
        exact : false,
        main :({history})=><ActionContainers history={history}/>
    },
    {
        path: '/product/:id/edit',
        exact : false,
        main :({match,history})=><ActionContainers match={match} history={history}/>
    },
    {
        path: '',
        exact : false,
        main :()=><NotFoundContainer/>
    },
];

export default routes;