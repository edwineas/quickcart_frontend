import { products } from '../../data/products'
function Feed() {
  return (
    <div >
        <div>
            <h1 className='mainh'>What are you looking for?</h1>
            <div className="carousel">
            {products.map((product) => (
              <div className="min-w-fit text-center flex flex-col gap-2" key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[130px] h-[130px] rounded-full object-cover"
                //   onClick={() => itemClick(product)}
                />
                <div className="font-medium">{product.name}</div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Feed