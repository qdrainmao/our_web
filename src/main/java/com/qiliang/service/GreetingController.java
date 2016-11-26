package com.qiliang.service;

import com.qiliang.dto.Greeting;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.concurrent.atomic.AtomicLong;
/**
 * Created by jinyu on 16-11-2.
 */
@RestController
public class GreetingController {
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "myName", defaultValue = "World")String name,
                             HttpServletRequest request,
                             HttpServletResponse response){
        response.setHeader("Access-Control-Allow-Origin", "*");
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }

    @RequestMapping("/helloworld")
    public String helloworld(){
        return "helloworld";
    }
}
