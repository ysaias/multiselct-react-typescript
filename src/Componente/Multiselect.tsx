
import Select, {MultiValue} from "react-select";
import makeAnimated from "react-select/animated"
import '../Multiselect.css'
import { useState } from "react";

const animetedComponents = makeAnimated();

const options = [
    {id: 1, value: 'grapes - uvas', label: 'grapes - uvas'},
    {id: 2, value: 'lime - lima', label: 'lime - lima'},
    {id: 3, value: 'lemon - limón', label: 'lemon - limón'},
    {id: 4, value: 'cherry - cereza', label: 'cherry - cereza'},
    {id: 5, value: 'blueberry - arándano', label: 'blueberry - arándano'},
    {id: 6, value: 'babana - plátano', label: 'babana - plátano'},
    {id: 7, value: 'apple - manzana', label: 'apple - manzana'},
    {id: 8, value: 'watermelon - sandía', label: 'watermelon - sandía'},
    {id: 9, value: 'pear - pera', label: 'pear - pera'},
    {id: 10, value: 'naranja - orange', label: 'naranja - orange'}
]

//Interfaz Option: Define cómo debe lucir cada opción del selector.
interface Option {
    id: number;
    value: string;
    label: string;
}


export default function Multiselect ()  {
    //useState<MultiValue<Option>>: El estado selectedOptions almacenará un array de objetos que siguen la estructura Option, representando las opciones seleccionadas por el usuario.
    const [selectedOptions, setSelectedOptions] = useState<MultiValue<Option>>([]);

    const handleSelect = () => {
        //En consola sse ve lo que fue seleccionado al hacer clic en el botón 
        console.log(selectedOptions);
    }


return (
    <>
        <Select className="Select"
            options={options} //Define las opciones que se mostrarán en el selector. El array options contiene los valores y etiquetas (label) que se pueden seleccionar
            isMulti //Habilita la opción de multiselección, permitiendo al usuario seleccionar más de una opción al mismo tiempo.
            isClearable={true} //Permite al usuario limpiar o borrar todas las selecciones realizadas con un solo clic.
            isSearchable={true} //Habilita la barra de búsqueda dentro del selector, lo que permite al usuario buscar opciones específicas escribiendo.
            isDisabled={false} //Indica que el selector no está deshabilitado. Si fuera true, el usuario no podría interactuar con el selector.
            isLoading={false} //Indica si el selector está en un estado de "cargando". Si fuera true, mostraría un indicador de carga.
            closeMenuOnSelect={false} //Evita que el menú se cierre automáticamente al seleccionar una opción. Con false, el menú permanece abierto para seguir seleccionando.
            components={animetedComponents} //Define los componentes con animaciones (proporcionados por makeAnimated). Añade efectos visuales a la selección, como animaciones al seleccionar o deseleccionar opciones.
            onChange={(items) => setSelectedOptions(items as MultiValue<Option>)} //Función que se ejecuta cuando el usuario cambia la selección. Actualiza el estado selectedOptions con las nuevas opciones seleccionadas, usando el tipo MultiValue<Option> para asegurar que es un array de opciones.
        
        />

        <button onClick={handleSelect}>Print Items</button>

    </>
);

}