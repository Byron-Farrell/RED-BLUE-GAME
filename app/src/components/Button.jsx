
const Buttton = (props) => {

    const {
        className,
        children,
        type = 'contained',
        ...rest
    } = props;



    return (
        <button className={`${className} ${type == "outline" ? "bg-blue-400 hover:bg-blue-500 hover:border-blue-500" : "hover:bg-blue-400 bg-transparent"} min-w-24 border-2 border-blue-400 rounded p-1`}>
            { children }
        </button>
    )
}

export default Buttton;