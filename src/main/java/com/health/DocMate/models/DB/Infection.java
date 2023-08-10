package com.health.DocMate.models.DB;

import com.health.DocMate.models.models.Node;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Document(collection = "Infections")
public class Infection {
    @Id
    private String id;
    private ArrayList<Node> nodes;
}
