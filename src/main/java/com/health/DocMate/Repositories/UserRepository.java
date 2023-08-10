package com.health.DocMate.Repositories;

import com.health.DocMate.models.DB.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, Integer> {

}
