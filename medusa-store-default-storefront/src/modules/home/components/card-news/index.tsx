interface ICardNews{
    imageUrl: string;
    title: string;
    url: string;
}

export const CardNews: React.FC<ICardNews> = ({ imageUrl, title, url }) => {
    return (
        <a
            className="relative group w-full md:w-[calc((100%-2rem)/3)] h-[8rem] md:h-[18rem] bg-cover bg-[center_50%] flex-shrink-0 rounded-xl shadow-md transition-transform duration-150 hover:cursor-pointer hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
            href={url}
        >
            <div className="h-full w-full bg-black/5 rounded-xl flex items-center justify-center text-transparent text-lg font-bold transition-all duration-200 group-hover:backdrop-blur-sm group-hover:text-white">
                {title}
            </div>
        </a>
    )
}