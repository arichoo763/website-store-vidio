import getBanner from '@/actions/get-banner';
import getProducts from '@/actions/get-products';
import Banner from '@/components/banner';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import React from 'react'

export const revalidate = 0

export default async function HomePage() {
    const products = await getProducts({ isFeatured: true })
    const banner = await getBanner("d4787ce7-a59a-4863-af6f-a09d99ec56ff")

    return (
        <Container>
            <div className='space-y-10 pb-10'>
                <Banner data={banner} />
            </div>
            <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
                <ProductList title="Produk Unggulan" items={products} />
            </div>
        </Container>
    )
}
