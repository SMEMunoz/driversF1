import React from "react";

export const validateName = (name) => {
    // Una expresión regular para validar el nombre y apellido.
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
};

export const validateNationality = (nationality) => {
    // Una expresión regular para validar la nacionalidad.
    const nationalityRegex = /^[A-Za-z\s]+$/;
    return nationalityRegex.test(nationality);
};

export function validateNotEmpty(input) {
    const regex = /^\s*$/; // Expresión regular para campo vacío
    return !regex.test(input);
  }