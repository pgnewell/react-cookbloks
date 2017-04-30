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

const renderIngredients = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>Add Ingredient</button>
    </li>
    {fields.map((ingredient, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Ingredient"
          onClick={() => fields.remove(index)}/>
        <Field
          name={ingredient}
          type="text"
          component={renderField}
          label={`Ingredient #${index + 1}`}/>
      </li>
    )}
    {error && <li className="error">{error}</li>}
  </ul>
)

const renderSteps = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>Add Step</button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((step, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Step"
          onClick={() => fields.remove(index)}/>
        <h4>Step #{index + 1}</h4>
        <Field
          name={`${step}.firstName`}
          type="text"
          component={renderField}
          label="First Name"/>
        <Field
          name={`${step}.lastName`}
          type="text"
          component={renderField}
          label="Last Name"/>
        <FieldArray name={`${step}.ingredients`} component={renderIngredients}/>
      </li>
    )}
  </ul>
)

const RecipeForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="clubName" type="text" component={renderField} label="Club Name"/>
      <FieldArray name="steps" component={renderSteps}/>
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'recipe',     // a unique identifier for this form
  validate
})(RecipeForm)
