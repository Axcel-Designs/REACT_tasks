export default function Button({label, link,type}){
    return(
        <button onClick={link} type={type} className="bg-[#5932EA] w-full rounded-lg my-2 p-2 text-white font-semibold cursor-pointer">
            {label}
        </button>
    )
}
export function ButtonBgWht({label, link,type,width}){
    return(
        <button onClick={link} type={type} className= {`
                text-[#5932EA]  rounded-lg my-2 p-1 bg-white font-semibold cursor-pointer ${width} m-auto`}
            >
            {label}
        </button>
    )
}