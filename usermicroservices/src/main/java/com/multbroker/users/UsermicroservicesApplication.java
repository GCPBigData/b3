package com.multbroker.users;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@EnableEurekaClient
@EnableWebMvc
@SpringBootApplication
@EntityScan("com.multbroker.models")
@ComponentScan("com.multbroker.users")
public class UsermicroservicesApplication {

    public static void main(String[] args) {
        SpringApplication.run(UsermicroservicesApplication.class, args);
    }
    
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
    	return new BCryptPasswordEncoder();
    }
    
    @Bean
    public MessageSource messageSource() {
        ReloadableResourceBundleMessageSource messageSource
          = new ReloadableResourceBundleMessageSource();
         
        messageSource.setBasename("classpath:messages");
        messageSource.setDefaultEncoding("UTF-8");
        return messageSource;
    }

}
