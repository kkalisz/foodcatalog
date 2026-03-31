import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import HowItWorksPage from './page';

test('renderuje stronę "Jak to działa" z poprawnym nagłówkiem', async () => {
  render(<HowItWorksPage />);

  const heading = await screen.findByText(/how it works/i);
  expect(heading).toBeDefined();
});
test('strona zawiera sekcje zasady dzialania', async () => {
  render(<HowItWorksPage />);

  const subHeading = await screen.findByText(/zasadysada dzialania/i);
  expect(subHeading).toBeDefined();
});
