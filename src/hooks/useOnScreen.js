import { useState, useEffect } from 'react';


//Implementacion de Lazy Loading, solo por cuestiones de práctica
//Al no tener muchos componentes solo sirve para cargar de manera Lazy el footer

export function useOnScreen(ref, rootMargin = '0px'){
    
    const [ isVisible, setIsVisible ] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry])=> {
        setIsVisible(entry.isIntersecting)
        },  {
        rootMargin
        });

        if(ref.current){
            observer.observe(ref.current);
        }

        return() => {
            
                observer.unobserve(ref.current);
            
        };
    }, []);

    return isVisible;
}