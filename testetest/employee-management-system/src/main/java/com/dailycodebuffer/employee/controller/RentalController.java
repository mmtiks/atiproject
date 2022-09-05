package com.dailycodebuffer.employee.controller;

import com.dailycodebuffer.employee.model.Rental;
import com.dailycodebuffer.employee.model.RentalHistory;
import com.dailycodebuffer.employee.services.RentalService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.dailycodebuffer.employee.model.Item;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class RentalController {

    private final RentalService rentalService;


//    RENTAL TABLE FUNCTIONS
    public RentalController(RentalService rentalService) {
        this.rentalService = rentalService;
    }

    @PostMapping("/rentals")
    public Rental createRental(@RequestBody Rental rental) {
        return rentalService.createRental(rental);
    }


    @GetMapping("/rentals")
    public List<Rental> getAllRentals() {
        return  rentalService.getAllRentals();
    }

    @DeleteMapping("/rentals/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteRental(@PathVariable Long id) {
        boolean deleted = false;
        deleted = rentalService.deleteRental(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/rentals/{id}")
    public ResponseEntity<Rental> getRentalById(@PathVariable Long id) {
        Rental rental = null;
        rental = rentalService.getRentalById(id);
        return ResponseEntity.ok(rental);
    }

    @GetMapping("/rentals/code/{code}")
    public ResponseEntity<Rental> getRentalByItemCode(@PathVariable String code) {
        Rental rental = null;
        rental = rentalService.getRentalByItemCode(code);
        return ResponseEntity.ok(rental);
    }


    @PutMapping("/rentals/{id}")
    public ResponseEntity<Rental> updateRental(@PathVariable Long id,
                                                 @RequestBody Rental rental) {
        rental = rentalService.updateRental(id, rental);
        return ResponseEntity.ok(rental);
    }



//  ITEM TABLE FUNCTIONS
    @GetMapping("/items/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable String id) {
        Item item = null;
        item = rentalService.getItemById(id);
        return ResponseEntity.ok(item);
    }



//  RENTAL HISTORY TABLE FUNCTIONS

    @PostMapping("/history")
    public RentalHistory createRentalHistory(@RequestBody RentalHistory rentalHistory) {
        return rentalService.createRentalHistory(rentalHistory);
    }
}
