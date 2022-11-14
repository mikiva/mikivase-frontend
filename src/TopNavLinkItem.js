function TopNavLinkItem({href, text}) {
    return (
        <>
            <a href={href}
               className="topnav__link-item">
                <span style={{color: "var(--color-accent)"}}>&#47;</span>
                {text}</a>
        </>
    )
}

export default TopNavLinkItem;