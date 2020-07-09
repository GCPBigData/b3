package com.multbroker.users.dto;

import java.io.Serializable;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class ContactUsMessageDTO implements Serializable {

    private String senderName;

    @Email
    @NotNull
    private String senderEmail;

    private String subject;

    @NotEmpty
    @NotNull
    private String message;

    public String getSenderName() {
        return senderName;
    }

    public void setSenderName(String senderName) {
        this.senderName = senderName;
    }

    public String getSenderEmail() {
        return senderEmail;
    }

    public void setSenderEmail(String senderEmail) {
        this.senderEmail = senderEmail;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
