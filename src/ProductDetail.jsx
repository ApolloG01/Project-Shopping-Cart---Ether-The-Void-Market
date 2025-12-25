import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();

  return (
    <div className="px-6 py-20 text-center">
      <h1 className="mb-4 text-5xl font-bold tracking-tighter uppercase">
        Analyzing: {productId}
      </h1>
      <p className="mx-auto max-w-xl text-zinc-500">
        This specific anomaly is currently under observation. It possesses a
        weight of 0g and a volume of 0cm³, yet its presence is undeniable.
      </p>
      <div className="mt-10 inline-block animate-pulse rounded-full border border-zinc-800 p-10">
        {/* Placeholder for an "abstract" image or form */}
      </div>
    </div>
  );
}

export default ProductDetail;
