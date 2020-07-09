package com.multbroker.corretoras.dto;

import com.multbroker.models.Brokerage;
import lombok.*;
import java.io.Serializable;
import java.math.BigDecimal;

@NoArgsConstructor @AllArgsConstructor
@ToString(exclude="id")
@EqualsAndHashCode
@Data
@Getter
@Setter
public class BrokerageDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;
    private String cnpj;
    @Getter @Setter private String address;
    @Getter @Setter private String addressNeighborhood;
    @Getter @Setter private String addressCity;
    @Getter @Setter private String addressState;
    @Getter @Setter private BigDecimal swingTrade;
    @Getter @Setter private BigDecimal dayTrade;
    @Getter @Setter private String loginEmail;
    @Getter @Setter private Boolean loginAccessCode;
    @Getter @Setter private Boolean loginCpf;
    @Getter @Setter private Boolean loginPassword;
    @Getter @Setter private Boolean loginToken;
    @Getter @Setter private BigDecimal iss;
    @Getter @Setter private String phone;
    @Getter @Setter private String website;
    @Getter @Setter private String email;
    @Getter @Setter private String logo;
    @Getter @Setter private String status;
    @Getter @Setter private String tipo;

    public BrokerageDTO(Brokerage objBrokerage) {
        id = objBrokerage.getId();
        name = objBrokerage.getName();
        cnpj = objBrokerage.getCnpj();
        address = objBrokerage.getAddress();
        addressNeighborhood = objBrokerage.getAddressNeighborhood();
        addressCity = objBrokerage.getAddressCity();
        addressState = objBrokerage.getAddressState();
        loginEmail = objBrokerage.getEmail();
        loginAccessCode = objBrokerage.getLoginAccessCode();
        loginCpf = objBrokerage.getLoginCpf();
        loginPassword = objBrokerage.getLoginPassword();
        loginToken = objBrokerage.getLoginToken();
        iss = objBrokerage.getIss();
        phone = objBrokerage.getPhone();
        website = objBrokerage.getWebsite();
        email = objBrokerage.getEmail();
        logo = objBrokerage.getLogo();
        status = objBrokerage.getStatus();
        swingTrade = objBrokerage.getSwingTrade();
        dayTrade = objBrokerage.getDayTrade();
    }
}
