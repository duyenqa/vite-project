import App from '../App';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest';

describe('LinkSocial component', () => {
    it('renders link with correct attributes', () => {
        render(<App />)
        screen.debug();

        // kiểm tra text hiển thị
        expect(screen.getByText('GitHub')).toBeInTheDocument()
        expect(screen.getByText('Discord')).toBeInTheDocument()
        expect(screen.getByText('X.com')).toBeInTheDocument()
        expect(screen.getByText('Bluesky')).toBeInTheDocument()
    })
})