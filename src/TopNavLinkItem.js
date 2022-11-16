function TopNavLinkItem({href, text, onClick}) {
    return (
        <>
            <a href={href} onClick={onClick}
               className="hover:text-accent">
                <span className="text-accent">&#47;#</span>
                {text}</a>
        </>
    )
}

export default TopNavLinkItem;