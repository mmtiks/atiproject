package com.dailycodebuffer.employee.repository;

import com.dailycodebuffer.employee.entity.RentalHistoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RentalHistoryRepository extends JpaRepository<RentalHistoryEntity, Long> {

}
