package com.example.demo;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebInterfaceController {
    @RequestMapping("/")
    public String index(){
        return "GhanaianDayNameApp";
    }

    @RequestMapping("/hh")
    public String newMEthod(){
        return "sth";
    }

}
