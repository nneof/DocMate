package com.health.DocMate.Repositories;

import com.health.DocMate.models.DB.MongoDBInfection;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InfectionRepository extends MongoRepository<MongoDBInfection, String> {
}
