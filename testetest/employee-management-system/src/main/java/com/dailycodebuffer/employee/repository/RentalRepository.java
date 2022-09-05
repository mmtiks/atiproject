package com.dailycodebuffer.employee.repository;

import com.dailycodebuffer.employee.entity.RentalEntity;
import com.dailycodebuffer.employee.entity.RentalHistoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RentalRepository extends JpaRepository<RentalEntity, Long> {

    @Query("SELECT a FROM RentalEntity a WHERE a.item_code = ?1")
    Optional<RentalEntity> findRentalEntityByItem_code(String code);
}
