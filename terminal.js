var button_el = document.getElementById('add');

button_el.onclick = addLine;

function addLine() {
    var div_el = document.getElementById("container");
    var p_elements = div_el.childNodes;
    
    if (p_elements.length >= 10) {
        first_element = p_elements[0];
        div_el.removeChild(first_element);

        var p = document.createElement("p");
        var p_text = document.createTextNode("bla");
        p.appendChild(p_text);
        div_el.appendChild(p);
    } else {
        var p = document.createElement("p");
        var p_text = document.createTextNode("bla");
        p.appendChild(p_text);
        div_el.appendChild(p);
    }
}