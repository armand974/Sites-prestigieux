import { Template } from 'meteor/templating';

import { Sites } from '../../api/sites.js';

import './site.html';

Template.siteT.events({
  'click .btn-edit-site' (event) {
  
    // Prevent default browser form submit
    event.preventDefault()

    // Get value from form element
    const target = event.target
    const idSite = target.getAttribute('data-id');

    // Get the site according to the id
    const site = Sites.findOne({_id:idSite});

    // Insert the data in the form's fields
    const modalInputLieu = document.querySelector('#edit-lieu');
    const modalInputDescription = document.querySelector('#edit-description');
    const modalInputId = document.querySelector('#edit-id');

    modalInputLieu.value = site.titreLieu;
    modalInputDescription.value = site.descriptifLieu;
    modalInputId.value = site._id;
  }
})


/*
Template.siteT.helpers({
    sites () {
      return Sites.find({}, { sort: { createdAt: -1 } })
    }
  })
  
  Template.siteT.events({
    'submit .new-site' (event) {
      // Prevent default browser form submit
      event.preventDefault()
  
      // Get value from form element
      const target = event.target
      const titreLieu = target.titreLieu.value
      const descriptifLieu = target.descriptifLieu.value
  
      // Insert a task into the collection
      Sites.insert({
        titreLieu,
        descriptifLieu,
        createdAt: new Date() // current time
      })
  
      // Clear form
      target.titreLieu.value = ''
      target.descriptifLieu.value = ''
    }
  })

Template.siteT.events({
  'click .delete'() {
    Sites.remove(this._id);
  },
});
*/
