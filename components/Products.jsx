function ProductsCard({product}){
return <div className=" lg:flex-row lg:items-center bg-[#FDECD7] rounded-3xl p-6 flex flex-col gap-8">
    <img className="max-w-60" src={product.image} alt={product.title} />
    <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2 text-start">
            <h2 className="font-extrabold text-3xl">{product.title}</h2>
            <p className=" text-[0.9rem] tracking-tight leading-5 lg:max-w-125">{product.description}</p> 
        </div>
        <div className="flex gap-2">
            <button className="bg-[#FB5B2E] text-white px-3.5 rounded-lg text-[1.3rem] font-light">Die Now</button>
            <button className="bg-[#FEF6EE] text-black px-3.5 rounded-lg text-[1.3rem] font-light">Die Later</button>
        </div>
    </div>
</div>
}

const products = [
    {id:1, 
    title:"bimal elaichi", 
    image:"/bimal.png", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet enim nec orci lacinia pellentesque."},

    {id:1, 
    title:"bimal elaichi", 
    image:"/bimal.png", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet enim nec orci lacinia pellentesque."},

    {id:1, 
    title:"bimal elaichi", 
    image:"/bimal.png", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet enim nec orci lacinia pellentesque."},

    {id:1, 
    title:"bimal elaichi", 
    image:"/bimal.png", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet enim nec orci lacinia pellentesque."},
]

function Products(){
return <section className="lg:mx-16 bg-[#FEF6EE] flex flex-col gap-14 relative z-20 rounded-2xl -mx-5 dmSans py-14 text-center">
    <div className="flex flex-col items-center px-14">
        <span className="font-bold text-[1.7rem] tracking-tight">Cancerous Products</span>
        <span className="font-semibold leading-5 tracking-tight">Discover an extensive selection of highly cancerous products designed specifically for you!</span>
    </div>
    <div className="px-4 lg:px-28 flex flex-col gap-10">
        {products.map((product) => (
            <ProductsCard key={product.id} product={product} />
        ))}
    </div>
    
</section>
}

export default Products;