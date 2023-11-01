import { render, screen } from '@testing-library/react'
import Root from '@/app/page'

it('should render root page', () => {
    render(<Root />)

    const el = screen.getByText('Docs') // ACT
    expect(el).tobe
})