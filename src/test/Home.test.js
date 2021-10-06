import Home from '../pages/LandingZone/Home';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test("Renderiza?", async () => {
    const component = render(
        <Home />
    )
    expect(component)
})
