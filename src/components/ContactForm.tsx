"use client";

import { useState, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Erro ao enviar mensagem');
            }

            setStatus("success");
            setStatusMessage("Mensagem enviada com sucesso! Responderemos em breve.");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            setTimeout(() => {
                setStatus("idle");
                setStatusMessage("");
            }, 5000);
        } catch (error) {
            setStatus("error");
            setStatusMessage(error instanceof Error ? error.message : "Erro ao enviar mensagem. Tente novamente ou envie para nosso email.");
            console.error("Contact form error:", error);
        }
    };

    return (
        <div className="contact-form-wrapper" style={{ margin: '2rem 0' }}>
            <form onSubmit={handleSubmit} style={{ maxWidth: '700px' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label
                        htmlFor="name"
                        style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontWeight: '500',
                            fontSize: '1rem'
                        }}
                    >
                        Nome *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status === "loading"}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid #e5e5e9',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            background: status === "loading" ? '#f5f5f5' : 'white'
                        }}
                        placeholder="Seu nome completo"
                    />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label
                        htmlFor="email"
                        style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontWeight: '500',
                            fontSize: '1rem'
                        }}
                    >
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === "loading"}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid #e5e5e9',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            background: status === "loading" ? '#f5f5f5' : 'white'
                        }}
                        placeholder="seu@email.com"
                    />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label
                        htmlFor="subject"
                        style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontWeight: '500',
                            fontSize: '1rem'
                        }}
                    >
                        Assunto *
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={status === "loading"}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid #e5e5e9',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            background: status === "loading" ? '#f5f5f5' : 'white'
                        }}
                    >
                        <option value="">Selecione um assunto</option>
                        <option value="duvida">Dúvida sobre jardinagem</option>
                        <option value="sugestao">Sugestão de conteúdo</option>
                        <option value="parceria">Parceria</option>
                        <option value="outro">Outro</option>
                    </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label
                        htmlFor="message"
                        style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontWeight: '500',
                            fontSize: '1rem'
                        }}
                    >
                        Mensagem *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={status === "loading"}
                        rows={6}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid #e5e5e9',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            background: status === "loading" ? '#f5f5f5' : 'white',
                            fontFamily: 'inherit',
                            resize: 'vertical'
                        }}
                        placeholder="Digite sua mensagem aqui..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "loading"}
                    style={{
                        padding: '1rem 2rem',
                        background: status === "loading" ? '#ccc' : 'var(--color-primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        fontWeight: '500',
                        cursor: status === "loading" ? 'not-allowed' : 'pointer',
                        transition: 'background 0.3s'
                    }}
                >
                    {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
                </button>

                {statusMessage && (
                    <div
                        style={{
                            marginTop: '1.5rem',
                            padding: '1rem',
                            borderRadius: '4px',
                            background: status === "success" ? '#d4edda' : '#f8d7da',
                            color: status === "success" ? '#155724' : '#721c24',
                            border: `1px solid ${status === "success" ? '#c3e6cb' : '#f5c6cb'}`
                        }}
                    >
                        {statusMessage}
                    </div>
                )}
            </form>
        </div>
    );
}
