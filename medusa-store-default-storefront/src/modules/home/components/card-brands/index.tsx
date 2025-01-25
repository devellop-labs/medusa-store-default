interface ICardBrands{
    imageUrl: string;
    label: string;
    url: string;
}

export const CardBrands: React.FC<ICardBrands> = ({ imageUrl, label, url  }) => {
    return (
        <a
            style={{ backgroundImage: `url(${imageUrl})` }}
            className="group w-28 h-28 md:w-48 md:h-48 bg-[length:70%] bg-no-repeat bg-center flex-shrink-0 rounded-xl shadow-md transition-transform duration-150 hover:cursor-pointer hover:scale-105"
            aria-label={label}
            href={url}
        >
            <div className="h-full w-full bg-black/5 hover:bg-black/15 rounded-xl flex items-center justify-center text-transparent text-lg font-bold transition-all duration-200 group-hover:backdrop-blur-sm group-hover:text-white">
                {label}
            </div>
        </a>
    )
}