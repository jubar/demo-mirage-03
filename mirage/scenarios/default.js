import { faker } from 'ember-cli-mirage';

export default function(server) {
  server.loadFixtures();

  server.createList('company', 9);

  server.schema.companies.all().models.forEach((company) => {
    server.createList('employee', faker.random.number({ min: 1, max: 30 }), {
      company,
      technologyIds: () => {
        let hasManyTech = faker.random.number({ min: 1, max: 7 });
        let techArray = [];
        for (hasManyTech; hasManyTech <= 7; hasManyTech++) {
          techArray.push(hasManyTech);
        }
        return techArray;
      }
    });
  });
}
