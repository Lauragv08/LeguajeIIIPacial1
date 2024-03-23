package com.parcial.pacial1;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class formulario {

	@GetMapping(value = "/principal")
	public String Calculo() {
		
		return "productos";
	}
	
}
