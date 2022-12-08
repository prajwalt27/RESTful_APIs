
import { addNewContact, deleteContact, getContact , getContactWithID, updateContact } from "../controllers/Controller.js";

const routes = (app)=>{
    app.route('/contact')
    
    //get all contacts
    .get((req,res,next)=>{

        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();

    }, getContact)
    
    //post a new contact
    .post(addNewContact);
 
    app.route('/contact/:contactId')
    
    //get a specific contact
    .get(getContactWithID)

    .put(updateContact)

    .delete(deleteContact)

}

export default routes;