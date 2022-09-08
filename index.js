//function submitData which is the name and email and return fetch()
function submitData( name, email ) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email,
      } )
    } )
    .then( function ( response ) {
      return response.json()
    } )
    .then(formData => {
        let id = formData["id"]
        let body = document.querySelector("body")
        body.innerHTML = id;
    } )
    .catch( function ( error ) {
        alert("Unauthorised access")
      document.body.innerHTML = error.message
    } );
}