package com.multbroker.users.service;

import java.nio.charset.StandardCharsets;
import java.util.Locale;

import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import com.multbroker.models.UserEntity;


/**
 * Service for sending emails.
 * <p>
 * We use the @Async annotation to send emails asynchronously.
 */
@Service
public class MailService {

    private final Logger log = LoggerFactory.getLogger(MailService.class);

    private static final String USER = "user";

    private static final String BASE_URL = "baseUrl";

    @Autowired
    private JavaMailSender javaMailSender;

    private final MessageSource messageSource;

    private final SpringTemplateEngine templateEngine;

    @Autowired
    public MailService(MessageSource messageSource, SpringTemplateEngine templateEngine) {

        this.messageSource = messageSource;
        this.templateEngine = templateEngine;
    }

    @Async
    public void sendEmail(String to, String subject, String content, boolean isMultipart, boolean isHtml) {
        log.debug("Send email[multipart '{}' and html '{}'] to '{}' with subject '{}' and content={}",
            isMultipart, isHtml, to, subject, content);

        // Prepare message using a Spring helper
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper message = new MimeMessageHelper(mimeMessage, isMultipart, StandardCharsets.UTF_8.name());
            message.setTo(to);
            message.setFrom("suporte@mult3.com.br");
            message.setSubject(subject);
            message.setText(content, isHtml);
            System.out.println("PREPARANDO ENVIO DO EMAILLLLL >>>>>999999");
            System.out.println(mimeMessage);
            javaMailSender.send(mimeMessage);
            System.out.println("EMAIL ENVIADOOOOOO >>>>>>>>>>>99999999");
            log.debug("Sent email to User '{}'", to);
        } catch (Exception e) {
        	 System.out.println("EMAIL NAO ENVIADOOOOOO");
        	 e.printStackTrace();
            if (log.isDebugEnabled()) {
                log.warn("Email could not be sent to user '{}'", to, e);
            } else {
                log.warn("Email could not be sent to user '{}': {}", to, e.getMessage());
            }
        }
    }



    @Async
    public void sendEmailFromTemplate(UserEntity user, String templateName, String titleKey) {

        Locale locale = Locale.getDefault();
        Context context = new Context(/*locale*/locale);
        context.setVariable(USER, user);
        context.setVariable(BASE_URL, "http://177.47.18.202/zuul/users/users/activate?key=");
        String content = templateEngine.process(templateName, context);
        String subject = "Ativacao de Conta Mult3";//messageSource.getMessage(titleKey, null, locale);
        sendEmail(user.getEmail(), subject, content, false, true);
    }

    @Async
    public void sendActivationEmail(UserEntity user) {
        log.debug("Sending activation email to '{}'", user.getEmail());
        sendEmailFromTemplate(user, "mail/activationEmail", "email.activation.title");
    }

    @Async
    public void sendCreationEmail(UserEntity user) {
        log.debug("Sending creation email to '{}'", user.getEmail());
        sendEmailFromTemplate(user, "mail/creationEmail", "email.activation.title");
    }

    @Async
    public void sendPasswordResetMail(UserEntity user) {
        log.debug("Sending password reset email to '{}'", user.getEmail());
        sendEmailFromTemplate(user, "mail/passwordResetEmail", "email.reset.title");
    }
}
