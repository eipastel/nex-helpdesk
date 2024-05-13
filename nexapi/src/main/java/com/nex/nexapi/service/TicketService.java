package com.nex.nexapi.service;

import com.nex.nexapi.model.Ticket;
import com.nex.nexapi.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    public Ticket createTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    public List<Ticket> getTickets() {
        return ticketRepository.findAll();
    }
}
