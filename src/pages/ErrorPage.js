import {useRouteError} from 'react-router-dom'
import ErrorComponent from '../components/ErrorComponent'

const ErrorPage = props => {
    const error = useRouteError()

   return <ErrorComponent errorData={error.data}/>
}

export default ErrorPage