package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Entity.FeedbackEntity;
import com.example.demo.Repository.FeedbackRepository;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @GetMapping(value = "/get")
    public Iterable<FeedbackEntity> getAllFeedback() {
        return feedbackRepository.findAll();
    }
    
    @PostMapping("/submit")
    public ResponseEntity<String> submitFeedback(@RequestBody FeedbackEntity feedback) {
        feedbackRepository.save(feedback);
        return ResponseEntity.ok("Feedback submitted successfully");
    }

    @PostMapping("/post")
    public FeedbackEntity createFeedback(@RequestBody FeedbackEntity feedback) {
        return feedbackRepository.save(feedback);
    }

    @GetMapping("/{id}")
    public Optional<FeedbackEntity> getById(@PathVariable Long id) {
        return feedbackRepository.findById(id);
    }

    @PutMapping("/update/{id}")
    public FeedbackEntity updateFeedbackDetails(@RequestBody FeedbackEntity feedback, @PathVariable Long id) {
        feedback.setId(id);
        return feedbackRepository.save(feedback);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteFeedback(@PathVariable Long id) {
        feedbackRepository.deleteById(id);
    }
}