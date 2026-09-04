package com.ajay.portfolio.service;

import com.ajay.portfolio.entity.Contact;
import com.ajay.portfolio.repository.ContactRepository;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }
}