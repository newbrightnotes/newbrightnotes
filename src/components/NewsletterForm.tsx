"use client";

import { useState, FormEvent } from "react";

interface NewsletterFormProps {
    variant?: "sidebar" | "inline";
}

export default function NewsletterForm({ variant = "sidebar" }: NewsletterFormProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        try {
            // Simulate API call - replace with actual newsletter service integration
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Here you would integrate with your newsletter service (Mailchimp, SendGrid, etc.)
            console.log("Newsletter subscription:", email);

            setStatus("success");
            setMessage("Obrigado por se inscrever! Verifique seu email.");
            setEmail("");

            setTimeout(() => {
                setStatus("idle");
                setMessage("");
            }, 5000);
        } catch (error) {
            setStatus("error");
            setMessage("Erro ao se inscrever. Tente novamente.");
            console.error("Newsletter error:", error);
        }
    };

    const isInline = variant === "inline";

    return (
        <div className={`newsletter-form ${variant}`}>
            {isInline && (
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                        Receba nossas novidades
                    </h3>
                    <p style={{ color: '#666' }}>
                        Inscreva-se para receber dicas de jardinagem direto no seu email
                    </p>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexDirection: isInline ? 'row' : 'column',
                    maxWidth: isInline ? '500px' : '100%',
                    margin: isInline ? '0 auto' : '0'
                }}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Seu melhor email"
                        required
                        disabled={status === "loading"}
                        style={{
                            flex: 1,
                            padding: '0.75rem',
                            border: '1px solid #e5e5e9',
                            borderRadius: '4px',
                            fontSize: '0.95rem'
                        }}
                        aria-label="Email para newsletter"
                    />
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        style={{
                            padding: '0.75rem 1.5rem',
                            background: status === "loading" ? '#ccc' : 'var(--color-primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: status === "loading" ? 'not-allowed' : 'pointer',
                            fontSize: '0.95rem',
                            fontWeight: '500',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {status === "loading" ? "Enviando..." : "Inscrever"}
                    </button>
                </div>

                {message && (
                    <p
                        style={{
                            marginTop: '1rem',
                            padding: '0.75rem',
                            borderRadius: '4px',
                            background: status === "success" ? '#d4edda' : '#f8d7da',
                            color: status === "success" ? '#155724' : '#721c24',
                            fontSize: '0.9rem',
                            textAlign: 'center'
                        }}
                    >
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}
