function TopNavLinkItem({href, text}) {
    return (
        <>
            <a href={href}
               className="hover:text-accent">
                <span className="text-accent">&#47;#</span>
                {text}</a>
        </>
    )
}

export default TopNavLinkItem;