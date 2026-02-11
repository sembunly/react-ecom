import { Link } from "react-router-dom";

function Card(props) {
  const { data } = props;

  console.log(data);

  return (
    <Link
      to={`/products/${data.id}`}
      className="border border-gray-400 group"
    >
      <figure className="h- lg:h-90 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-all"
          src={data.image}
          alt={data.title}
        />
      </figure>

      <div className="px-2 py-2">
        <h3 className="line-clamp-1">
          {data.title}
        </h3>

        <p className="text-red-600">
          ${data.price}
        </p>
      </div>
    </Link>
  );
}

export default Card;
