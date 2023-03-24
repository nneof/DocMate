package com.health.DocMate.interfaces;

import com.health.DocMate.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, Integer> {

}
