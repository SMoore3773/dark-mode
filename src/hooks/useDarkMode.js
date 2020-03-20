import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('darkMode', false)
    useEffect(()=>{
        let body = document.querySelector('body')
        if(value){
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [value])
    return [value, setValue]
}

export default useDarkMode;