package com.health.DocMate.models.DB;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Document(collection = "Infections")
public class MongoDBInfection {
    @Id
    private String id;
    private String description;
    private Children[] children;
}
