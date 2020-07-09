package com.multbroker.models;

import lombok.*;
import javax.persistence.*;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@RequiredArgsConstructor(staticName = "of")
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(exclude="id")
@EqualsAndHashCode
@Data
@Getter
@Setter
@Entity
@Table(name = "marketdata",schema = "multbroker")
public class MarketData implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "symbol", length = 100, nullable = false)
    private String symbol;

    @Column(name = "timeUpdate", length = 100, nullable = false)
    private String timeUpdate;

    @Column(name = "dateTrade", length = 100, nullable = false)
    private String dateTrade;

    @Column(name = "lastTrade", length = 100, nullable = false)
    private String lastTrade;

    @Column(name = "previous", length = 100, nullable = false)
    private String previous;

    @Column(name = "change", length = 100, nullable = false)
    private String change;

    @Column(name = "changeMonth", length = 100, nullable = false)
    private String changeMonth;

    @Column(name = "bid", length = 100, nullable = false)
    private String bid;

    @Column(name = "ask", length = 100, nullable = false)
    private String ask;

    @Column(name = "timeLastTrade", length = 100, nullable = false)
    private String timeLastTrade;

    @Column(name = "dateTradeObj", length = 100, nullable = false)
    private String dateTradeObj;

    @Column(name = "quantity", length = 100, nullable = false)
    private String quantity;

    @Column(name = "quantityLast", length = 100, nullable = false)
    private String quantityLast;

    @Column(name = "quantityTrades", length = 100, nullable = false)
    private String quantityTrades;

    @Column(name = "volumeAmount", length = 100, nullable = false)
    private String volumeAmount;

    @Column(name = "volumeFinancier", length = 100, nullable = false)
    private String volumeFinancier;

    @Column(name = "high", length = 100, nullable = false)
    private String high;

    @Column(name = "low", length = 100, nullable = false)
    private String low;

    @Column(name = "timeBid", length = 100, nullable = false)
    private String timeBid;

    @Column(name = "volumeBid", length = 100, nullable = false)
    private String volumeBid;

    @Column(name = "volumeAsk", length = 100, nullable = false)
    private String volumeAsk;

    @Column(name = "volumeBetterBid", length = 100, nullable = false)
    private String volumeBetterBid;

    @Column(name = "volumeBetterAsk", length = 100, nullable = false)
    private String volumeBetterAsk;

    @Column(name = "lastTradeLastWeek", length = 100, nullable = false)
    private String lastTradeLastWeek;

    @Column(name = "lastTradeLastMonth", length = 100, nullable = false)
    private String lastTradeLastMonth;

    @Column(name = "lastTradeLastYear", length = 100, nullable = false)
    private String lastTradeLastYear;

    @Column(name = "playerBid", length = 100, nullable = false)
    private String playerBid;

    @Column(name = "interest", length = 100, nullable = false)
    private String interest;

    @Column(name = "timeAsk", length = 100, nullable = false)
    private String timeAsk;

    @Column(name = "Situation", length = 100, nullable = false)
    private String Situation;

    @Column(name = "Average", length = 100, nullable = false)
    private String Average;

    @Column(name = "execPrice", length = 100, nullable = false)
    private String execPrice;

    @Column(name = "tickSize", length = 100, nullable = false)
    private String tickSize;

    @Column(name = "timeLastTradeSting", length = 100, nullable = false)
    private String timeLastTradeSting;

    @Column(name = "dateLastTradeString", length = 100, nullable = false)
    private String dateLastTradeString;

    @Column(name = "marketCode", length = 100, nullable = false)
    private String marketCode;

    @Column(name = "contractMultiplier", length = 100, nullable = false)
    private String contractMultiplier;

    @Column(name = "volumeAverageLast20Days", length = 100, nullable = false)
    private String volumeAverageLast20Days;

    @Column(name = "marketCap", length = 100, nullable = false)
    private String marketCap;

    @Column(name = "variation7Days", length = 100, nullable = false)
    private String variation7Days;

    @Column(name = "variation1Month", length = 100, nullable = false)
    private String variation1Month;

    @Column(name = "variation1Year", length = 100, nullable = false)
    private String variation1Year;

    @Column(name = "variationVolumeInHour", length = 100, nullable = false)
    private String variationVolumeInHour;

    @Column(name = "variationVolumeToHour", length = 100, nullable = false)
    private String variationVolumeToHour;

    @Column(name = "variationVolumeInDay", length = 100, nullable = false)
    private String variationVolumeInDay;

    @Column(name = "theoryPrice", length = 100, nullable = false)
    private String theoryPrice;

    @Column(name = "theoryQuantity", length = 100, nullable = false)
    private String theoryQuantity;

    @Column(name = "loteDefault", length = 100, nullable = false)
    private String loteDefault;

    @Column(name = "minIntervalIncrPrice", length = 100, nullable = false)
    private String minIntervalIncrPrice;

    @Column(name = "quotationForm", length = 100, nullable = false)
    private String quotationForm;

    @Column(name = "adjustmentDay", length = 100, nullable = false)
    private String adjustmentDay;

    @Column(name = "adjustmentPreviousDay", length = 100, nullable = false)
    private String adjustmentPreviousDay;

}
