const db = require('../../data/db-config');

// scheme-model
 module.exports = {
   find,
   findById,
   findSteps,
   add,
   update,
   remove
 }

 function find() {
   console.log('here');
   
   return db('schemes')
 }

 async function findById(id) {
   const schemaObject = db('schemes').where({ id }).first()
   if (!schemaObject) {
     return null
   } else {
     return schemaObject
  }
}

//  function findById(id) {
//    return new Promise((resolve, reject) => {
//     const schemaObject = db('schemes').where({ id }).first()
//     if (!schemaObject) {
//       resolve(null)
//     } else {
//       resolve(schemaObject)
//     }
//    })
//  }

 function findSteps(id) {
// select 
//   st.id,
//   sc.scheme_name,
//   st.step_number,
//   st.instructions
// from steps st
// join schemes sc
//  on sc.id = st.scheme_Id
// where sc.id = 2
// order by st.step_number asc;

  return db('steps as st')
    .join('schemes as sc', 'sc.id', 'st.scheme_id' )
    .select('st.id', 
      'sc.scheme_name', 
      'st.step_number', 
      'st.instructions')
    .where('sc.id', id)
    .orderBy('st.step_number', "asc")
 }

function add(scheme) {
  return db('schemes')
    .insert(scheme, 'id')
    .then(ids => ({ id: ids[0], ...scheme }));
}

 function update(changes, id) {

 }
 function remove(id) {

 }