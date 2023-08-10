package com.health.DocMate.models.models;

import lombok.*;

import java.util.ArrayList;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class NodeData {
    private String description;
    private ArrayList<Integer> children;
    private Integer level;
}
