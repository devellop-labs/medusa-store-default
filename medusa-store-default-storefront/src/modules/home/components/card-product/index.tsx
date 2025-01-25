interface ICardProduct {
    url: string;
    imageUrl: string;
    title: string;
    description: string;
    price: string;
}

export const CardProduct: React.FC<ICardProduct> = ({ url, imageUrl, title, description, price }) => {

    return (
        <div className="flex flex-col w-full max-w-[200px] mx-auto gap-4 hover:cursor-pointer hover:scale-105 transition-transform duration-150">
            <a
                className="relative w-full h-[8rem] md:h-[14rem] flex-shrink-0"
                href={url}
            >
                <img
                    src={imageUrl}
                    alt={`Imagem de ${title}`}
                    className="w-full h-full object-cover rounded-lg"
                />
            </a>
            <div className="flex flex-col w-full text-lg overflow-hidden gap-y-2">
                <h1 className="text-start text-lg md:text-xl font-semibold leading-tight">
                    {title}
                </h1>
                <p className="text-black/50 text-sm truncate">{description}</p>
                <p className="text-black/70 text-md font-medium truncate">{price}</p>
            </div>
        </div>
    )
}