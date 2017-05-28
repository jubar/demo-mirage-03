import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  company: belongsTo(),
  technologies: hasMany()
});
