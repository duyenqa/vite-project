import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('LinkDocument component', () => {
  it('renders link with correct attributes', () => {
    render(<App />)
    screen.debug();

    // lấy tất cả link
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2);

    // kiểm tra từng link
    expect(links[0]).toHaveAttribute('href', 'https://vite.dev/')
    expect(links[1]).toHaveAttribute('href', 'https://react.dev/')

    // kiểm tra target
    expect(links[0]).toHaveAttribute('target', '_blank')
    expect(links[1]).toHaveAttribute('target', '_blank')

    // kiểm tra text hiển thị
    expect(screen.getByText('Explore Vite')).toBeInTheDocument()
    expect(screen.getByText('Learn more')).toBeInTheDocument()

    // kiểm tra hình ảnh
    const img1 = screen.getByAltText('vite logo')
    expect(img1.getAttribute('src')).toContain('vite.svg')
    expect(img1).toBeInTheDocument()
    // đảm bảo img nằm trong link
    expect(links[0]).toContainElement(img1);
    const img2 = screen.getByAltText('detail vite')
    expect(img2.getAttribute('src')).toContain('react.svg')
    // đảm bảo img nằm trong link
    expect(links[1]).toContainElement(img2);
  })
})