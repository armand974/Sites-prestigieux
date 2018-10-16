import { Template } from 'meteor/templating'

import { Sites } from '../api/sites.js'

import './site.js';
import './body.html'


Template.body.helpers({
  sites () {
    return Sites.find({}, { sort: { createdAt: -1 } })
  }
})

Template.body.events({
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

