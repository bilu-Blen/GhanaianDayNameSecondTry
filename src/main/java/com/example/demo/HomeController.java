package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @Autowired
    DayRepository dayRepository;

    @RequestMapping("/days/list")
    public Iterable<Day> getAllDays(){
        return dayRepository.findAll();
    }

    @RequestMapping("/addday")
    public String addDay(@RequestBody Day day){
        System.out.println(day.getName());
        dayRepository.save(day);
        return "A day was added";
    }


}
