import { IonicModule } from '@ionic/angular';
import { provideIonicAngular } from '@ionic/angular/standalone';
import {
  provideQueryClient,
  QueryClient,
} from '@tanstack/angular-query-experimental';

import { FailComponent } from '../../src/app/fail.component';
import { SuccessComponent } from '../../src/app/success.component';

describe('Fail', () => {
  it('IonicModule - should display selected tab on click', () => {
    cy.mount(SuccessComponent, {
      imports: [IonicModule.forRoot({ mode: "ios" })],
      providers: [provideQueryClient(new QueryClient())],
    });

    cy.get('.first').should('have.class', 'selected');

    cy.get('.second').click();
    cy.get('.second').should('have.class', 'selected');

    cy.get('.third').click();
    cy.get('.third').should('have.class', 'selected');
  });

  it('standalone - should display selected tab on click', () => {
    cy.mount(FailComponent, {
      providers: [provideQueryClient(new QueryClient()), provideIonicAngular({ mode: "ios" })],
    });

    cy.get('.first').should('have.class', 'selected');

    cy.get('.second').click();
    cy.get('.second').should('have.class', 'selected');

    cy.get('.third').click();
    cy.get('.third').should('have.class', 'selected');
  });
});
