function TopNavLinkItem({href, text, onClick}) {
    return (
        <>
            <a href={href} onClick={onClick}
               className="hover:text-accent group h-full">
                <span className="text-accent group-hover:mr-3 self-center">#</span>
                {text}</a>
        </>
    )
}

export default TopNavLinkItem;