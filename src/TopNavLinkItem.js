function TopNavLinkItem({href, text, onClick}) {
    return (
        <>
            <a href={href} onClick={onClick}
               className="hover:text-accent">
                <span className="text-accent">#</span>
                {text}</a>
        </>
    )
}

export default TopNavLinkItem;