
const Button = ({className, href, onClick,type, children}) => {
    const classes = `flex justify-center 
    items-center h-11 rounded-lg border text-white px-4 ${className || ''}`

    const renderButton = () => (
        <button className={classes} type={type} onClick={onClick}>
            {children}
        </button>
    )
    
    const renderLink = () => (
        <a href={href} className={classes}>
            {children}
        </a>
    )
    return href ? renderLink() : renderButton();
}

export default Button