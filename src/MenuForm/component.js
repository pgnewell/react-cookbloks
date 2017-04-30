import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderRecipes = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>Add Recipe</button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((recipe, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Recipe"
          onClick={() => fields.remove(index)}/>
        <h4>Recipe #{index + 1}</h4>
        <Field
          name={`${recipe}.name`}
          type="text"
          component={renderField}
          label="Recipe Name"/>
      </li>
    )}
  </ul>
)

const MenuForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, menu } = props;
  console.log("here in MenuForm land");
  return (
    <form onSubmit={handleSubmit}>
      <Field name={`${menu}.name`} type="text" component={renderField} label="Menu Name"/>
      <FieldArray name="recipes" component={renderRecipes}/>
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldArrays',     // a unique identifier for this form
  validate
})(MenuForm)
