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
            <div className="flex flex-col w-full overflow-hidden gap-y-2">
                <h1 className="text-start text-lg text-bold md:text-xl leading-tight">
                    {title}
                </h1>
                <p className="text-base-regular truncate">{description}</p>
                <p className="text-md text-bold md:text-lg truncate">{price}</p>
            </div>
        </div>
    )
}