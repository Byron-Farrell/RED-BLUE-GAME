
const PlainButton = (props) => {

    const {
        className,
        children,
        ...rest
    } = props;

    return (
        <button {...rest} className={`${className} bg-slate-600 rounded md:min-w-72 min-w-32 p-4 border-2 border-slate-600 `}> { children }</button>
    )
}

export default PlainButton;