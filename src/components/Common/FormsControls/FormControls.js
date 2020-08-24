import React from 'react';
import s from './FormControls.module.css';

import {Field, reduxForm} from 'redux-form';

const FormControl = ({input, meta: {touched, error}, child,...props}) => {

    const hasError = error && touched;

	return <div className={s.formControl + ' ' + (hasError ? s.error : "")}>
		       <div>
		           {props.children}
		        </div>   
		        { hasError && <span>{error}</span> }
       	   </div>
}

 export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;

	return <FormControl {...props}>
		           <textarea {...input} {...restProps} />
		     </FormControl>
}


export const Input = (props) => {
   const {input, meta, ...restProps} = props;

	return <FormControl {...props}>
                      <input {...input} {...restProps}/>
   	       </FormControl>
}

export const CreateField = (placeholder, component, name, arr, props = {}, text = "") => (<div> 
                                                                       <Field placeholder={placeholder} 
                                                                       component={component} name={name} 
                                                                       validate={arr} 
                                                                         {...props} /> {text}
                                                                    </div>);