"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/data/posts";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Toggle body scroll
        if (!isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = "unset";
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={toggleMenu}
                className="mobile-menu-toggle"
                aria-label="Toggle mobile menu"
                aria-expanded={isOpen}
                style={{
                    display: "none",
                    position: "fixed",
                    top: "1rem",
                    right: "1rem",
                    zIndex: 1001,
                    padding: "0.75rem",
                    background: "var(--color-primary)",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    lineHeight: 1,
                }}
            >
                {isOpen ? "✕" : "☰"}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="mobile-menu-overlay"
                    onClick={closeMenu}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(0, 0, 0, 0.5)",
                        zIndex: 999,
                    }}
                />
            )}

            {/* Mobile Menu */}
            <nav
                className={`mobile-menu ${isOpen ? "open" : ""}`}
                style={{
                    position: "fixed",
                    top: 0,
                    right: isOpen ? 0 : "-100%",
                    width: "80%",
                    maxWidth: "350px",
                    height: "100vh",
                    background: "white",
                    zIndex: 1000,
                    transition: "right 0.3s ease-in-out",
                    overflowY: "auto",
                    padding: "4rem 2rem 2rem",
                    boxShadow: isOpen ? "-2px 0 10px rgba(0, 0, 0, 0.1)" : "none",
                }}
            >
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: "1rem" }}>
                        <Link
                            href="/"
                            onClick={closeMenu}
                            style={{
                                display: "block",
                                padding: "0.75rem 0",
                                color: "#333",
                                textDecoration: "none",
                                fontSize: "1.1rem",
                                fontWeight: "500",
                                borderBottom: "1px solid #e5e5e9",
                            }}
                        >
                            Início
                        </Link>
                    </li>
                    {categories.map((category) => (
                        <li key={category.slug} style={{ marginBottom: "1rem" }}>
                            <Link
                                href={`/category/${category.slug}`}
                                onClick={closeMenu}
                                style={{
                                    display: "block",
                                    padding: "0.75rem 0",
                                    color: "#333",
                                    textDecoration: "none",
                                    fontSize: "1.1rem",
                                    fontWeight: "500",
                                    borderBottom: "1px solid #e5e5e9",
                                }}
                            >
                                {category.name}
                            </Link>
                        </li>
                    ))}
                    <li style={{ marginBottom: "1rem" }}>
                        <Link
                            href="/sobre-nos"
                            onClick={closeMenu}
                            style={{
                                display: "block",
                                padding: "0.75rem 0",
                                color: "#333",
                                textDecoration: "none",
                                fontSize: "1.1rem",
                                fontWeight: "500",
                                borderBottom: "1px solid #e5e5e9",
                            }}
                        >
                            Sobre Nós
                        </Link>
                    </li>
                    <li style={{ marginBottom: "1rem" }}>
                        <Link
                            href="/contato"
                            onClick={closeMenu}
                            style={{
                                display: "block",
                                padding: "0.75rem 0",
                                color: "#333",
                                textDecoration: "none",
                                fontSize: "1.1rem",
                                fontWeight: "500",
                                borderBottom: "1px solid #e5e5e9",
                            }}
                        >
                            Contato
                        </Link>
                    </li>
                    <li style={{ marginTop: "2rem" }}>
                        <Link
                            href="/search"
                            onClick={closeMenu}
                            style={{
                                display: "block",
                                padding: "1rem",
                                background: "var(--color-primary)",
                                color: "white",
                                textDecoration: "none",
                                fontSize: "1.1rem",
                                fontWeight: "500",
                                textAlign: "center",
                                borderRadius: "4px",
                            }}
                        >
                            🔍 Buscar
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile-specific styles */}
            <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block !important;
          }
        }
      `}</style>
        </>
    );
}
