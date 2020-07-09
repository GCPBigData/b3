package com.multbroker.empresa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
//import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

//@EnableEurekaClient
@EnableWebMvc
@SpringBootApplication
@EntityScan("com.multbroker.models")
//@ComponentScan("com.multbroker.empresa")
public class EmpresaMicroServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmpresaMicroServiceApplication.class, args);
	}

}
