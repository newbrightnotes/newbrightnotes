import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validação básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    const subjectMap: Record<string, string> = {
      duvida: 'Dúvida sobre jardinagem',
      sugestao: 'Sugestão de conteúdo',
      parceria: 'Parceria',
      outro: 'Outro',
    };

    const subjectText = subjectMap[subject] || subject;

    // Enviar email
    const data = await resend.emails.send({
      from: 'New Bright Notes <onboarding@resend.dev>',
      to: ['adbot.solutions@gmail.com'], // Email principal (você)
      replyTo: email, // Responder para o email do usuário
      subject: `Contato: ${subjectText}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subjectText}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Esta é uma mensagem automática enviada através do formulário de contato do New Bright Notes.
        </p>
      `,
    });

    return NextResponse.json(
      { message: 'Email enviado com sucesso!', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar email. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
