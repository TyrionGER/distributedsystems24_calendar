package com.example.calendar.controller;

import com.example.calendar.model.Event;
import com.example.calendar.repository.EventRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/events")
@CrossOrigin(origins = "http://calendar-frontend:3000")
public class EventController {

    private final EventRepository eventRepository;

    public EventController(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @GetMapping
    public List<Event> getEvents() {
        return eventRepository.findAll();
    }

    @PostMapping
    public Event addEvent(@RequestBody Event event) {
        return eventRepository.save(event);
    }
}
