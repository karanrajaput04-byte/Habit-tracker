package com.habittracker.controller;

import com.habittracker.model.Habit;
import com.habittracker.repository.HabitRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/habits")
public class HabitController {

    private final HabitRepository habitRepository;

    public HabitController(HabitRepository habitRepository) {
        this.habitRepository = habitRepository;
    }

    @PostMapping
    public ResponseEntity<Habit> createHabit(@RequestBody Habit habit) {
        return ResponseEntity.ok(habitRepository.save(habit));
    }

    @GetMapping
    public ResponseEntity<List<Habit>> getHabits(@RequestParam String userId) {
        return ResponseEntity.ok(habitRepository.findByUserId(userId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Habit> updateHabit(@PathVariable String id, @RequestBody Habit habit) {
        habit.setId(id);
        return ResponseEntity.ok(habitRepository.save(habit));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteHabit(@PathVariable String id) {
        habitRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
