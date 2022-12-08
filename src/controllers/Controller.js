import mongoose from "mongoose";
import { ContactSchema } from "../modules/Model.js";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContact = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContactWithID = (req, res) => {
  Contact.findById(req.params.contactID, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};


export const updateContact = (req, res) => {
  Contact.findByIdAndUpdate(
    { _id: req.params.contactId }, req.body,{ new: true },(err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
};


export const deleteContact =(req,res)=>{
  Contact.remove( {_id:req.params.contactId},(err)=>{
    if (err) {
      res.send(err);
    }
    res.json({message:'Successfully deleted contact'});
  })
}

