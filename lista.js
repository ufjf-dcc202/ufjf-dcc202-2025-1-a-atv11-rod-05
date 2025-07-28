const lista = ["Um", "Dois", "Tres"];
export function getLista(){
    return structuredClone(lista);
}
export function limpaLista(){
    lista.splice(0);
}