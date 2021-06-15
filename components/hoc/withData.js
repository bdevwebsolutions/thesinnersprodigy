import { useRouter } from 'next/router';
import React from 'react'


export const WithData = WrappedComponent => props => {

    const router = useRouter();
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        let d = window.localStorage.getItem('tsp-data');
        if(JSON.parse(d).length < 0){
            router.push('/')
        } else {
            setShow(true);
        }
    }, [])

    if(!show){
        return null;
    } else {
        return <WrappedComponent {...props}/>
    }
}
  