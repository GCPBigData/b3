package com.multbroker.empresa.controller;

import org.springframework.web.client.RestTemplate;

public class WebFeederController {
//luis.granado@hotmail.com
//grana1234
//http://localhost:8080/
    private static void getMarketData()
    {
        final String uri = "http://localhost:8080/MarketData";
        RestTemplate restTemplate = new RestTemplate();

        // MarketDataDTO result = restTemplate.getForObject(uri, MarketDataDTO.class);

     //   System.out.println(result);
    }
}
