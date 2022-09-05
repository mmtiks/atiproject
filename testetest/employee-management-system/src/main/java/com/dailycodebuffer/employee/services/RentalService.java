package com.dailycodebuffer.employee.services;

import com.dailycodebuffer.employee.model.Rental;
import com.dailycodebuffer.employee.model.Item;
import com.dailycodebuffer.employee.model.RentalHistory;

import java.util.List;

public interface RentalService {

    Rental createRental(Rental employee);

    RentalHistory createRentalHistory(RentalHistory rentalHistory);

    List<Rental> getAllRentals();

    boolean deleteRental(Long id);

    Rental getRentalById(Long id);

    Item getItemById(String id);

    Rental updateRental(Long id, Rental employee);

    Rental getRentalByItemCode(String code);
}
