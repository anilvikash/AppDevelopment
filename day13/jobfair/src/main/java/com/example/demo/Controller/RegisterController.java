package com.example.demo.Controller;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.Entity.RegisterEntity;
import com.example.demo.Repository.RegisterRepository; // Import the repository

@CrossOrigin("*")
@RestController
@RequestMapping("/RegisterEntity")
public class RegisterController {

    @Autowired
    private RegisterRepository registerRepository; // Inject the repository

    @GetMapping(value = "/get")
    public Iterable<RegisterEntity> getAllRegisterEntity() {
        return registerRepository.findAll(); // Use the repository's findAll method
    }

    @PostMapping("/post")
    public RegisterEntity createData(@RequestBody RegisterEntity ad) {
        return registerRepository.save(ad); // Use the repository's save method
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Optional<RegisterEntity>> getById(@PathVariable Long id) {
        Optional<RegisterEntity> ac = registerRepository.findById(id); // Use the repository's findById method
        return ResponseEntity.ok(ac);
    }

    @PutMapping("/update/{id}")
    public RegisterEntity updateRegisterEntityDetails(@RequestBody RegisterEntity b, @PathVariable Long id) {
        System.out.println("Changes Made Have Been Successfully Updated");

        b.setid(id); // Correct the method name to setId
        return registerRepository.save(b);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteDetails(@PathVariable Long id) {
        registerRepository.deleteById(id); // Use the repository's deleteById method
        return null;
    }
}
