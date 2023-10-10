package com.example.demo.Service;

	
	


	import java.util.List;
	import java.util.Optional;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

import com.example.demo.Entity.RegisterEntity;
import com.example.demo.Repository.RegisterRepository;




	@Service

		public class RegisterService {

		@Autowired
		RegisterRepository registerRepository;
		
		public List<RegisterEntity> getAllRegisterEntity() {
			return registerRepository.findAll();
		}
		
		public RegisterEntity getRegisterEntityById(Long RegisterEntityId) {
			Optional<RegisterEntity> RegisterEntityOptional = registerRepository.findById(RegisterEntityId);
			return RegisterEntityOptional.orElse(null);
		}
		
		public RegisterEntity saveRegisterEntity(RegisterEntity RegisterEntity) {
			return registerRepository.save(RegisterEntity);
		}
		
		public void deleteRegisterEntity(Long RegisterEntityId) {
			registerRepository.deleteById(RegisterEntityId);
		}
	}


