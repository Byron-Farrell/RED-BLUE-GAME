
const PlainButton = (props) => {

    const {
        className,
        children,
        ...rest
    } = props;

    return (
        <button {...rest} className={`${className} hover:bg-slate-700 active::bg-slate-700 bg-slate-600 rounded md:min-w-72 min-w-32 p-4 border-2 border-slate-600 `}> { children }</button>
    )
}

export default PlainButton;