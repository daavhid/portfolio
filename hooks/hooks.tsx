import UseContextHook from "@/context/contextProvider"
import { links } from "@/lib/data"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

type linkprop = typeof links[number]['name']

export const useInviewHook = (link:linkprop,threshold=0.5)=>{
    
    const{ref,inView} = useInView({
        threshold:threshold,
    })
    const { setActiveLink,timeofLastClick} = UseContextHook()
    useEffect(()=>{
        if (inView && Date.now() - timeofLastClick >3000) {
            setActiveLink(`${link}`)
        }
    },[inView,timeofLastClick,setActiveLink])
    return {
        ref
    }
}
