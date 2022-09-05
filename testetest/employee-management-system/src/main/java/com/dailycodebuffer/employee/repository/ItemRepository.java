package com.dailycodebuffer.employee.repository;

import com.dailycodebuffer.employee.entity.ItemEntity;
import com.dailycodebuffer.employee.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<ItemEntity, String> {
}
