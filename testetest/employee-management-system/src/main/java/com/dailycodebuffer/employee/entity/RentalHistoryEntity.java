package com.dailycodebuffer.employee.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name = "rentalhistory")
public class RentalHistoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String email_id;
    private String first_name;
    private String last_name;
    private String item_code;
    private Date date;
    private Date estimated_return;
    private Date return_date;
}
