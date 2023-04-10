package com.medical.project.Entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name="doctor")
@Data
public class Doctor {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id_doctor")
    private int id_doctor;

    @Column(name="speciality")
    private String speciality;

   /* @ManyToOne
    @JoinColumn(name = "role")
    public User user;*/
}
