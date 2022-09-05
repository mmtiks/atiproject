package com.dailycodebuffer.employee.services;

import com.dailycodebuffer.employee.entity.RentalEntity;
import com.dailycodebuffer.employee.entity.ItemEntity;
import com.dailycodebuffer.employee.entity.RentalHistoryEntity;
import com.dailycodebuffer.employee.model.Rental;
import com.dailycodebuffer.employee.model.Item;
import com.dailycodebuffer.employee.model.RentalHistory;
import com.dailycodebuffer.employee.repository.RentalRepository;
import com.dailycodebuffer.employee.repository.RentalHistoryRepository;
import com.dailycodebuffer.employee.repository.ItemRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RentalServiceImpl implements RentalService {

    private RentalRepository rentalRepository;
    private ItemRepository itemRepository;
    private RentalHistoryRepository rentalHistoryRepository;

    public RentalServiceImpl(RentalRepository rentalRepository, ItemRepository itemRepository, RentalHistoryRepository rentalHistoryRepository) {
        this.rentalRepository = rentalRepository;
        this.itemRepository = itemRepository;
        this.rentalHistoryRepository = rentalHistoryRepository;
    }

    @Override
    public Rental createRental(Rental rental) {
        RentalEntity rentalEntity = new RentalEntity();

        BeanUtils.copyProperties(rental, rentalEntity);
        rentalRepository.save(rentalEntity);
        return rental;
    }

    @Override
    public RentalHistory createRentalHistory(RentalHistory rentalHistory) {
        RentalHistoryEntity rentalHistoryEntity = new RentalHistoryEntity();

        BeanUtils.copyProperties(rentalHistory, rentalHistoryEntity);
        rentalHistoryRepository.save(rentalHistoryEntity);
        return rentalHistory;
    }

    @Override
    public List<Rental> getAllRentals() {
        List<RentalEntity> rentalEntities
                = rentalRepository.findAll();
        return rentalEntities
                .stream()
                .map(rental -> new Rental(
                        rental.getId(),
                        rental.getEmail_id(),
                        rental.getFirst_name(),
                        rental.getLast_name(),
                        rental.getItem_code(),
                        rental.getDate(),
                        rental.getEstimated_return()))
                .collect(Collectors.toList());
    }

    @Override
    public boolean deleteRental(Long id) {
        RentalEntity rental = rentalRepository.findById(id).get();
        rentalRepository.delete(rental);
        return true;
    }

    @Override
    public Rental getRentalById(Long id) {
        RentalEntity rentalEntity
                = rentalRepository.findById(id).get();
        Rental rental = new Rental();
        BeanUtils.copyProperties(rentalEntity, rental);
        return rental;
    }


    @Override
    public Item getItemById(String id) {
        ItemEntity itemEntity
                = itemRepository.findById(id).get();
        Item item = new Item();
        BeanUtils.copyProperties(itemEntity, item);
        return item;
    }


    @Override
    public Rental updateRental(Long id, Rental rental) {
        RentalEntity rentalEntity
                = rentalRepository.findById(id).get();
        rentalEntity.setEmail_id(rental.getEmail_id());
        rentalEntity.setFirst_name(rental.getFirst_name());
        rentalEntity.setLast_name(rental.getLast_name());
        rentalEntity.setItem_code(rental.getItem_code());
        rentalEntity.setDate(rental.getDate());
        rentalEntity.setEstimated_return(rental.getEstimated_return());

        rentalRepository.save(rentalEntity);
        return rental;
    }

    @Override
    public Rental getRentalByItemCode(String code) {
        RentalEntity rentalEntity
                = rentalRepository.findRentalEntityByItem_code(code).get();
        Rental rental = new Rental();
        BeanUtils.copyProperties(rentalEntity, rental);
        return rental;
    }


}
