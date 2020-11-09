import { useEffect } from 'react'

export default function useTitle({ title = 'Giffy' }){
    document.title = `${title}`
}