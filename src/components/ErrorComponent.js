import NavBar from "./NavBar"
import classes from '../styles/ErrorComponent.module.css'

const ErrorComponent = props => {
    const errorStatusCode = props.errorData.errorCode;
    let message;

    if(errorStatusCode === 401){
        message = `Unfortunately, you don't have the authority to access this page`
    }else if(errorStatusCode === 404){
       message= 'The resource you requested for was not found.'
    }else {
        message = `We could not get this resource for you. sorry`
    }
    console.log(errorStatusCode)
 return <section>
    <NavBar/>
    <div className={classes.errorComponentBody}>
        <div className= {classes.errorImage}>
            <img src="https://cdn4.iconfinder.com/data/icons/old-man-elderly-injured-injury-pain/197/old-man-pain-10-512.png" alt="error-icon"/>
        </div>
        <h1>Oops...</h1>
        <h3 className={classes.errorText}>{errorStatusCode} Error </h3>
        <h3 className={classes.errorText}>{message}</h3>
    </div>
 </section>
}

export default ErrorComponent;