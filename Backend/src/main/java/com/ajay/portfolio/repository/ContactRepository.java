package com.ajay.portfolio.repository;

import com.ajay.portfolio.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}