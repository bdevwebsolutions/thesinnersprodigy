import { useRouter } from 'next/router';
import React from 'react'
import { ItemsContext } from '../../context/itemsContext'


export const WithData = WrappedComponent => props => {

    const {initialData} = React.useContext(ItemsContext);
    const router = useRouter();

    React.useEffect(() => {
        if(initialData === null){
            router.push('/')
        }
    }, [])

    if(initialData === null){
        return null;
    } else {
        return <WrappedComponent {...props}/>
    }
}
  