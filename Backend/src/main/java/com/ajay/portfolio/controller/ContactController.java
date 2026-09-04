package com.ajay.portfolio.controller;

import com.ajay.portfolio.entity.Contact;
import com.ajay.portfolio.service.ContactService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public Contact submitContact(@RequestBody Contact contact) {
        return contactService.saveContact(contact);
    }
}