import { useEffect, useRef, useState } from "react";

type Prop<T> = {
    className?: string;
    label: string;
    values: {label: string, data: T}[];
    set: (arg: any) => any;
}

const Dropdown = <T,>({className, label, values, set}: Prop<T>) => {
    const [picking, setPicking] = useState(false);
    const [current, setCurrent] = useState(values[0]);

    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        set(current);
    }, [current])

    useEffect(() => {
        function click(e: MouseEvent) {
            if (container.current && !container.current.contains(e.target as Node)){
                setPicking(false);
            }
        }
        document.addEventListener('click', click)
        return () => document.removeEventListener('click', click);

    }, [])

    function clickOption(value: {label: string, data: T}): void{
        setCurrent(value);
        setPicking(false);
    }

    return (
        <div className={"text-[16px] flex flex-col gap-[3px] w-[160px] relative " + className} ref={container}>
            <span className="font-bold">{label}</span>

            <div className="px-[10px] mt-[3px] py-[1px] border border-accent rounded-[5px] flex gap-[10px] items-center pointer" onClick={() => setPicking(prev => !prev)}>
                <i className="fa-solid fa-caret-down text-[14px]"></i>
                {current.label}
            </div>

            {picking ? <div className="flex flex-col gap-[2px] mt-[10px] absolute w-[100%] top-[calc(100%+5px)]">
                {values.map((value, index) => {
                    let cl: string = '';
                    if (value.label === current.label) cl = 'text-cta'
                    return (
                        <div key={index} className={"px-[10px] py-[1px] border border-accent rounded-[5px] flex gap-[10px] items-center bg-bg z-5 pl-[15px] pointer " + cl}  onClick={() => clickOption(value)}>
                            {value.label}
                        </div>
                    )
                })}
            </div> : null}
        </div>
    )
}

export default Dropdown