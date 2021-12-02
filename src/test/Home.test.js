import React from 'react'
import "@testing-library/jest-dom/extend-expect";
import { render } from '@testing-library/react'
import ReporteGastos from '../pages/procesosLegales/ReporteGastos'

describe('Home', () => {
    it('renders a heading', () => {
        const component = render(
            <ReporteGastos />
        )
    })
})