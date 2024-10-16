import { UserRepository } from "@/repositories/user/UserRepository";
import { CreateUseDTO } from "./CreateUserDTO";
import { AppError } from "@/lib/AppError";
import nodemailer from "nodemailer";
import { hash } from "bcryptjs";
import jwt from "jsonwebtoken"; // Importando o jsonwebtoken

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, name, secondName, password, role }: CreateUseDTO) {
    const userExist = await this.userRepository.findByEmail(email);

    if (userExist) {
      throw new AppError("Usuário já cadastrado.", 400);
    }

    const passwordHash = await hash(password, 6);

    const newUser = await this.userRepository.create({
      email,
      name,
      secondName,
      password: passwordHash,
      role,
    });

    // Gerar o token de verificação
    const tokenVerify = jwt.sign(
      { email: newUser.email },
      process.env.EMAIL_VERIFY,
      {
        expiresIn: "1h", // O token expirará em 1 hora
      }
    );

    // Atualize o novo usuário com o tokenVerify
    newUser.tokenVerify = tokenVerify; // Certifique-se de que tokenVerify seja uma propriedade válida no seu modelo de usuário

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: true,
    });

    try {
      const mailOptions = {
        to: newUser.email,
        from: process.env.EMAIL_USER,
        subject: "Olá, seja bem-vindo ao Revendaja.",
        html: `
          <html>
          <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
            <table align="center" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
              <tr>
                <td style="color: #333333; padding: 20px; text-align: left;">
                  <img src="https://i.imgur.com/mcon2oX.png" alt="Logo Revendaja" style="max-width: 150px; height: auto;" />
                </td>
              </tr>
              <tr>
                <td style="padding: 20px;">
                  <p style="font-size: 16px; line-height: 1.5; color: #333333; font-weight: 600">
                    Olá ${newUser.name} ${newUser.secondName},
                  </p>
                  <p style="font-size: 16px; line-height: 1.5; color: #333333;">
                    Estamos muito felizes em tê-lo conosco! Sua conta foi criada com sucesso, e você agora pode explorar todas as funcionalidades do nosso aplicativo.
                  </p>
                  <p style="font-size: 16px; line-height: 1.5; color: #333333;">
                    Para ativar sua conta, clique no link abaixo:
                  </p>
                  <p style="font-size: 16px; line-height: 1.5; color: #333333; text-align: center;">
                    <a href="${
                      process.env.APP_URL
                    }/verify-email?token=${tokenVerify}" style="color: #ff700d;">Ativar conta</a>
                  </p>
                  <p style="font-size: 16px; line-height: 1.5; color: #333333;">
                    Se você tiver alguma dúvida ou precisar de assistência, nossa equipe de suporte está pronta para ajudar.
                  </p>
                  <p style="font-size: 16px; line-height: 1.5; color: #333333;">
                    Aproveite sua experiência no Revendaja!
                  </p>
                  <p style="font-size: 16px; line-height: 1.5; color: #333333;">
                    Atenciosamente,<br>Equipe Revendaja.
                  </p>
                </td>
              </tr>
              <tr>
                <td style="background-color: #f5f5f5; padding: 10px; text-align: center;">
                  <p style="font-size: 12px; color: #999999; margin: 0;">
                    &copy; ${new Date().getFullYear()} Revendaja. Todos os direitos reservados.
                  </p>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
      };

      await transporter.sendMail(mailOptions);

      return tokenVerify;
    } catch (err) {
      console.error("Erro ao enviar o e-mail:", err); // Log do erro completo

      // Verifica se o erro tem propriedades específicas
      if (err.response) {
        console.error("Resposta do servidor:", err.response);
      }

      throw new AppError("Erro ao enviar o e-mail de cadastro", 400);
    }
  }
}
