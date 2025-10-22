"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-form" style={{ display: 'flex', gap: '0.5rem' }}>
            <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar..."
                className="search-input"
                style={{
                    padding: '0.5rem',
                    border: '1px solid #e5e5e9',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    minWidth: '200px'
                }}
                aria-label="Campo de busca"
            />
            <button
                type="submit"
                className="search-button"
                style={{
                    padding: '0.5rem 1rem',
                    background: 'var(--color-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                }}
                aria-label="Buscar"
            >
                🔍
            </button>
        </form>
    );
}
