const Header = () => {
    return (
        <header className="bg-white dark:bg-zinc-800 p-4 flex justify-between items-center shadow-md">
            <img src="allocazion.png" alt="Logo" className="h-10" crossOrigin="anonymous" />
            <div className="flex items-center space-x-4">
                <button className="text-zinc-600 dark:text-zinc-300">Publiez votre stock</button>
                <button className="text-zinc-600 dark:text-zinc-300">Se connecter</button>
                <div className="relative">
                    {/* <img src="https://placehold.co/30x30" alt="User" className="h-8 w-8 rounded-full" crossOrigin="anonymous" /> */}
                    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" >
                        <path
                            fill="currentColor"
                            d="M.5 5.5l-.29-.407A.5.5 0 000 5.5h.5zm7-5l.29-.407a.5.5 0 00-.58 0L7.5.5zm7 5h.5a.5.5 0 00-.21-.407l-.29.407zm-12 2V7H2v.5h.5zm10 0h.5V7h-.5v.5zM1 15V5.5H0V15h1zM.79 5.907l7-5-.58-.814-7 5 .58.814zm6.42-5l7 5 .58-.814-7-5-.58.814zM14 5.5V15h1V5.5h-1zM3 15V7.5H2V15h1zm-.5-7h10V7h-10v1zm9.5-.5V15h1V7.5h-1zM2.5 11h10v-1h-10v1zM6 13h3v-1H6v1z"
                            className="w-5 h-5"
                        />
                    </svg>
                    {/* <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">1</span> */}
                </div>
            </div>
        </header>
    );
};
export default Header;