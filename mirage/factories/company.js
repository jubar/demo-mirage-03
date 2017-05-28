import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.company.companyName();
  },
  address() {
    return faker.address.streetAddress("###");
  },
  email() {
    return faker.internet.email();
  }
});
