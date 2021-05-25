export const SETCURRENTUSER = 'SETCURRENTUSER'
export const CLEARCURRENTUSER = 'CLEARCURRENTUSER'
export const  setCurrentUser = user => dispatch => {
  console.log(user)
  return dispatch({
    type: SETCURRENTUSER,
    payload: user}
  )
    
  } 
 

export const clearCurrentUser = () => dispatch => {
return dispatch({
   type: CLEARCURRENTUSER
  })
  
  
}

