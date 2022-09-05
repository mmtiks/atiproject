package com.dailycodebuffer.employee.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RentalHistory {
    private long id;
    private String email_id;
    private String first_name;
    private String last_name;
    private String item_code;
    private Date date;
    private Date estimated_return;
    private Date return_date;
}
