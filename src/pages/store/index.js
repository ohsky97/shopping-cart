import React from 'react';
import Layout from '../../components/Layout';
import ProductGrid from './ProductsGrid';

const Store = () => {
    return (
        <Layout title="Store" description="This is the Store page.">
            <div>
                <div className="text-center mt-5">
                    <h1>Store</h1>
                    <p>This is the Stor page.</p>
                </div>
                <ProductGrid />
            </div>
        </Layout>
    );
}

export default Store;