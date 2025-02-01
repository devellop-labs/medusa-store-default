interface ICardCategories{
    imageUrl: string;
    url: string;
    title: string;
    subtitle: string;
}

export const CardCategories: React.FC<ICardCategories> = ({ imageUrl, url, title, subtitle }) => {
    return (
        <div className="flex flex-col w-full md:w-[calc((100%-2rem)/3)] gap-8">
            <a
                className="relative group w-full h-[8rem] md:h-[18rem] bg-cover bg-[center_50%] flex-shrink-0 rounded-xl shadow-md transition-transform duration-150 hover:cursor-pointer hover:scale-105"
                style={{ backgroundImage: `url(${imageUrl})` }}
                href={url}
            >
            </a>
            <div className="flex flex-col items-center w-full text-lg">
                <h1 className="w-full text-center text-lg md:text-xl font-semi-bold leading-tigh ">{title}</h1>
                <p className="text-base-regular">{subtitle}</p>
            </div>
        </div>
    )
}