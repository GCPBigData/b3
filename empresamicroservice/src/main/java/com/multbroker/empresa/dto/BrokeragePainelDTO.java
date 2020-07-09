package com.multbroker.empresa.dto;

import com.multbroker.models.Brokerage;
import lombok.*;
import java.io.Serializable;
import java.math.BigDecimal;

@NoArgsConstructor @AllArgsConstructor
@ToString(exclude="id")
@EqualsAndHashCode
@Data
public class BrokeragePainelDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    @Getter @Setter private String name;
    @Getter @Setter private BigDecimal swingTrade;
    @Getter @Setter private BigDecimal dayTrade;
    @Getter @Setter private String status;

    public BrokeragePainelDTO(Brokerage objBrokerage) {
        id = objBrokerage.getId();
        name = objBrokerage.getName();
        status = objBrokerage.getStatus();
        swingTrade = objBrokerage.getSwingTrade();
        dayTrade = objBrokerage.getDayTrade();
    }
}
