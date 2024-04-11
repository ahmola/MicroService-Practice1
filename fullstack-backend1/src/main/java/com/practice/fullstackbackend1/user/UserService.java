package com.practice.fullstackbackend1.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    public List<User> findAll(){
        return userRepository.findAll();
    }
    public Optional<User> findById(Long id){
        return userRepository.findById(id);
    }

    public Optional<User> findByUsername(String username){
        return userRepository.findByUsername(username);
    }

    public Boolean save(UserDTO userDTO){
        Boolean isCreated = false;
        User user = new User();

        if(!userRepository.existsById(userDTO.getId())){
            userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
            user = new User(userDTO);
            isCreated = true;
        }else {
            user = userRepository.findById(userDTO.getId()).get();
            user.setUsername(userDTO.getUsername());
            user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
            user.setEmail(userDTO.getEmail());
        }

        userRepository.save(user);

        return isCreated;
    }

    public List<User> findByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public boolean existsByUsername(String username){
        return userRepository.existsByUsername(username);
    }

    public boolean existsById(Long id){
        return userRepository.existsById(id);
    }
    public void deleteById(Long id){
        userRepository.deleteById(id);
    }

}
