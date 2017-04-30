const validate = values => {
  const errors = {}
  if(!values.menuName) {
    errors.menuName = 'Required'
  }
  if (!values.recipes || !values.recipes.length) {
    errors.recipes = { _error: 'At least one recipe must be entered' }
  } else {
    const recipesArrayErrors = []
    values.recipes.forEach((recipe, recipeIndex) => {
      const recipeErrors = {}
      if (!recipe || !recipe.name) {
        recipeErrors.name = 'Required'
        recipesArrayErrors[recipeIndex] = recipeErrors
      }
    })
    if(recipesArrayErrors.length) {
      errors.recipes = recipesArrayErrors
    }
  }
  return errors
}

export default validate
