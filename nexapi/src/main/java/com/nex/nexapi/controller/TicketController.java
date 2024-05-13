package com.nex.nexapi.controller;

import com.nex.nexapi.model.Ticket;
import com.nex.nexapi.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @PostMapping("/tickets")
    private ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket) {
        Ticket createdTicket = ticketService.createTicket(ticket);

        return ResponseEntity.status(HttpStatus.CREATED).body(createdTicket);
    }

    @GetMapping("/tickets")
    private ResponseEntity<List<Ticket>> getTickets() {
        List<Ticket> allTickets = ticketService.getTickets();

        return ResponseEntity.status(HttpStatus.FOUND).body(allTickets);
    }
}
